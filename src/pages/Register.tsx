import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

export function Register() {
  const { signInWithGoogle, registerWithEmail, user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setLoading(true);
    try {
      await registerWithEmail(name, email, password);
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Este email já está em uso.');
      } else {
        setError('Ocorreu um erro ao criar a conta. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-950 font-sans selection:bg-indigo-500/30 overflow-y-auto">
      {/* Left/Top Panel - Branding & Mascot */}
      <div className="w-full lg:w-1/2 relative bg-slate-900 border-b lg:border-r border-slate-800 flex items-center justify-center p-8 lg:p-12 overflow-hidden">
        {/* Background gradients & animated blobs */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-slate-900 to-green-500/10" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full"
        />
        
        <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center">
          <Link to="/" className="hidden lg:flex text-3xl font-bold text-indigo-500 tracking-tight mb-8 self-start items-center gap-2">
            <img src="/img/icone.png" alt="Ícone" className="w-8 h-8 object-contain" /> Pesquisador Pro
          </Link>
          
          {/* Mascot Animation */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
            <img 
              src="/img/icone.png" 
              alt="Logo Pesquisador PRO" 
              className="w-40 h-40 lg:w-64 lg:h-auto relative z-10 drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]"
            />
          </motion.div>

          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            Comece sua jornada PRO hoje.
          </h2>
          <p className="text-base lg:text-lg text-slate-400 mb-0 lg:mb-10">
            Junte-se ao time que fatura todos os dias com o método mais eficiente de pesquisas online.
          </p>
        </div>
      </div>

      {/* Right/Bottom Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 relative bg-slate-950">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-md w-full"
        >
          <div className="text-center lg:text-left mb-10">
            <Link to="/" className="lg:hidden mb-12 flex items-center justify-center gap-2 text-2xl font-extrabold text-white tracking-tighter">
              <img src="/img/icone.png" alt="Ícone" className="w-8 h-8 object-contain" /> Pesquisador Pro
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Criar nova conta</h1>
            <p className="text-slate-400 text-lg">Insira seus dados para começar gratuitamente.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded-2xl text-sm flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Nome Completo</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-900 transition-all"
                placeholder="Como quer ser chamado?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">E-mail de Acesso</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-900 transition-all"
                placeholder="exemplo@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2 ml-1">Senha Segura</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-900 transition-all"
                placeholder="No mínimo 6 caracteres"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50 active:scale-[0.98] mt-2"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Criando conta...</span>
                </div>
              ) : 'Criar minha conta PRO'}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-semibold">
              <span className="px-4 bg-slate-950 text-slate-500">Ou use sua rede social</span>
            </div>
          </div>

          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-950 font-bold py-4 px-6 rounded-2xl transition-all active:scale-[0.98]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Entrar com Google
          </button>

          <div className="mt-10 text-center text-slate-400">
            Já tem uma conta?{' '}
            <Link to="/login-v5821" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Fazer login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
