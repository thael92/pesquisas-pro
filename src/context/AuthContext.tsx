import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { auth, db, googleProvider } from '../lib/firebase';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

interface UserProfile {
  name: string;
  email: string;
  createdAt: string;
  subscriptionStatus: 'active' | 'inactive' | 'canceled';
  role: 'user' | 'admin';
  favoritePlatforms?: string[];
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  toggleFavoritePlatform: (platformId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubProfile: (() => void) | undefined;

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        try {
          // Check if user profile exists, if not create it
          const userRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userRef);
          
          if (!userSnap.exists()) {
            const newProfile: UserProfile = {
              name: currentUser.displayName || 'User',
              email: currentUser.email || '',
              createdAt: new Date().toISOString(),
              subscriptionStatus: 'inactive',
              role: 'user',
              favoritePlatforms: []
            };
            await setDoc(userRef, newProfile);
            setProfile(newProfile);
          } else {
            setProfile(userSnap.data() as UserProfile);
          }

          // Listen for profile changes
          unsubProfile = onSnapshot(userRef, (doc) => {
            if (doc.exists()) {
              setProfile(doc.data() as UserProfile);
            }
          }, (error) => {
            handleFirestoreError(error, OperationType.GET, `users/${currentUser.uid}`);
          });

          setLoading(false);
        } catch (error) {
          handleFirestoreError(error, OperationType.GET, `users/${currentUser.uid}`);
          setLoading(false);
        }
      } else {
        if (unsubProfile) {
          unsubProfile();
          unsubProfile = undefined;
        }
        setProfile(null);
        setLoading(false);
      }
    });

    return () => {
      if (unsubProfile) unsubProfile();
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
        console.log('User closed the sign-in popup');
        return;
      }
      console.error("Error signing in with Google", error);
      throw error;
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in with email", error);
      throw error;
    }
  };

  const registerWithEmail = async (name: string, email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      
      // Force a profile update in state since onAuthStateChanged might have fired before updateProfile finished
      setUser({ ...userCredential.user, displayName: name } as User);
    } catch (error) {
      console.error("Error registering with email", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const toggleFavoritePlatform = async (platformId: string) => {
    if (!user || !profile) return;
    
    try {
      const currentFavorites = profile.favoritePlatforms || [];
      const newFavorites = currentFavorites.includes(platformId)
        ? currentFavorites.filter(id => id !== platformId)
        : [...currentFavorites, platformId];
        
      const userRef = doc(db, 'users', user.uid);
      
      // Optimistic update
      setProfile({ ...profile, favoritePlatforms: newFavorites });
      
      // Wait for firestore update
      await setDoc(userRef, { favoritePlatforms: newFavorites }, { merge: true });
    } catch (error) {
      console.error("Error toggling favorite platform", error);
      // Revert optimistic update on error
      setProfile(profile);
      handleFirestoreError(error, OperationType.UPDATE, `users/${user.uid}`);
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signInWithGoogle, signInWithEmail, registerWithEmail, logout, toggleFavoritePlatform }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
