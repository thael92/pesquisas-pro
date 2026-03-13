import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { motion } from 'framer-motion';
import { User, Mail, CreditCard, Calendar, AlertTriangle } from 'lucide-react';

export function Profile() {
  const { user, profile } = useAuth();
  const [name, setName] = useState(profile?.name || '');
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, { name });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile", error);
    } finally {
      setSaving(false);
    }
  };

  const handleCancelSubscription = () => {
    // In a real app, this would call a backend endpoint to cancel the Stripe subscription
    alert("Para cancelar sua assinatura, entre em contato com o suporte ou acesse o portal do Stripe.");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Meu Perfil</h1>
        <p className="text-slate-400">
          Gerencie suas informações e assinatura.
        </p>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden"
      >
        <div className="p-8 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <User className="w-6 h-6 text-indigo-400" />
            Dados Pessoais
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Nome Completo</label>
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              ) : (
                <div className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white">
                  {profile?.name}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <div className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-400 flex items-center justify-between cursor-not-allowed">
                <span>{profile?.email}</span>
                <Mail className="w-5 h-5 text-slate-500" />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              {isEditing ? (
                <>
                  <button
                    onClick={() => { setIsEditing(false); setName(profile?.name || ''); }}
                    className="px-6 py-2.5 rounded-xl text-slate-300 hover:bg-slate-700 transition-colors font-medium"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-indigo-500/25 disabled:opacity-50"
                  >
                    {saving ? 'Salvando...' : 'Salvar Alterações'}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-colors"
                >
                  Editar Perfil
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-green-400" />
            Assinatura
          </h2>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg font-bold text-white">Plano Pesquisador PRO</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  profile?.subscriptionStatus === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {profile?.subscriptionStatus === 'active' ? 'Ativo' : 'Inativo'}
                </span>
              </div>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Membro desde {new Date(profile?.createdAt || '').toLocaleDateString('pt-BR')}
              </p>
            </div>

            {profile?.subscriptionStatus === 'active' ? (
              <button
                onClick={handleCancelSubscription}
                className="px-6 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl font-medium transition-colors flex items-center gap-2"
              >
                <AlertTriangle className="w-4 h-4" />
                Cancelar Assinatura
              </button>
            ) : (
              <button
                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-green-500/25"
              >
                Assinar Agora
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
