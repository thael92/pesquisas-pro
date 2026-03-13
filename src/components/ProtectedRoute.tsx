import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function ProtectedRoute({ children, requireSubscription = false }: { children: React.ReactNode, requireSubscription?: boolean }) {
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireSubscription && profile?.subscriptionStatus !== 'active' && profile?.role !== 'admin') {
    return <Navigate to="/subscribe" replace />;
  }

  return <>{children}</>;
}
