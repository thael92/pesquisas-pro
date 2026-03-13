import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { DashboardLayout } from './components/DashboardLayout';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './lib/firebase';

import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Platforms } from './pages/Platforms';
import { Tutorials } from './pages/Tutorials';
import { Strategies } from './pages/Strategies';
import { Profile } from './pages/Profile';

function SubscribeMock() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, { subscriptionStatus: 'active' });
      navigate('/dashboard');
    } catch (error) {
      console.error("Error updating subscription", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-6">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-3xl text-center border border-slate-700">
        <h1 className="text-3xl font-bold mb-4">Assine o Plano PRO</h1>
        <p className="text-slate-400 mb-8">Para acessar este conteúdo, você precisa de uma assinatura ativa.</p>
        <div className="bg-slate-900 p-6 rounded-2xl mb-8 border border-indigo-500/30">
          <div className="text-4xl font-black text-indigo-400 mb-2">R$ 97<span className="text-lg text-slate-500 font-normal">/ano</span></div>
          <ul className="text-left text-slate-300 space-y-3 mt-6">
            <li>✓ Acesso a todas as plataformas</li>
            <li>✓ Tutoriais em vídeo</li>
            <li>✓ Estratégias premium</li>
            <li>✓ Suporte prioritário</li>
          </ul>
        </div>
        <button 
          onClick={handleSubscribe}
          disabled={loading}
          className="w-full py-4 bg-green-500 hover:bg-green-600 text-slate-900 font-bold rounded-xl transition-colors text-lg disabled:opacity-50"
        >
          {loading ? 'Processando...' : 'Pagar com Stripe (Simulação)'}
        </button>
        <p className="mt-4 text-sm text-slate-500">
          * Em um ambiente real, este botão redirecionaria para o Stripe Checkout. Ao clicar, sua conta será ativada para fins de teste.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login-v5821" element={<Login />} />
          <Route path="/register-v5821" element={<Register />} />
          
          {/* Mock Subscribe Route */}
          <Route path="/subscribe" element={
            <ProtectedRoute>
              <SubscribeMock />
            </ProtectedRoute>
          } />

          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="platforms" element={<ProtectedRoute requireSubscription><Platforms /></ProtectedRoute>} />
            <Route path="tutorials" element={<ProtectedRoute requireSubscription><Tutorials /></ProtectedRoute>} />
            <Route path="strategies" element={<ProtectedRoute requireSubscription><Strategies /></ProtectedRoute>} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
