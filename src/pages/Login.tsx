import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { CheckCircle, DollarSign, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

export function Login() {
  const { signInWithGoogle, signInWithEmail, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || '/dashboard';

  React.useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmail(email, password);
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Email ou senha incorretos.');
      } else {
        setError('Ocorreu um erro ao fazer login. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950 font-sans selection:bg-indigo-500/30 overflow-hidden">
      {/* Left Panel - Hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 border-r border-slate-800 items-center justify-center p-12">
        {/* Background gradients & animated blobs */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-slate-900 to-green-500/10" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-500/20 rounded-full blur-[100px]" 
        />
        
        <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center">
          <Link to="/" className="text-3xl font-bold text-indigo-500 tracking-tight mb-8 self-start flex items-center gap-2">
            <Sparkles className="w-6 h-6" /> Pesquisador PRO
          </Link>
          
          {/* Mascot Animation */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mb-10"
          >
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
            <img 
              src="https://api.dicebear.com/7.x/bottts/svg?seed=PesquisadorPRO&backgroundColor=transparent" 
              alt="Mascote Pesquisador PRO" 
              className="w-64 h-64 relative z-10 drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]"
            />
            
            {/* Floating Elements around Mascot */}
            <motion.div 
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-8 bg-slate-800 p-3 rounded-2xl border border-slate-700 shadow-xl z-20"
            >
              <DollarSign className="w-8 h-8 text-green-400" />
            </motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-8 bg-slate-800 p-3 rounded-2xl border border-slate-700 shadow-xl z-20"
            >
              <CheckCircle className="w-8 h-8 text-indigo-400" />
            </motion.div>
          </motion.div>

          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Sua máquina de ganhos está pronta.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Acesse suas plataformas, descubra novas estratégias e continue faturando em dólar e reais todos os dias.
          </p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-6 sm:p-12 relative overflow-y-auto">
        {/* Mobile background glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden lg:hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        {/* Back Button */}
        <div className="relative z-20 mb-8 lg:mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800 hover:border-indigo-500/30 w-fit">
            <ArrowLeft className="w-4 h-4" /> Voltar para o início
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-md w-full relative z-10"
          >
            <div className="text-center lg:text-left mb-10">
              <Link to="/" className="lg:hidden text-2xl font-bold text-indigo-500 tracking-tight mb-8 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" /> Pesquisador PRO
              </Link>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Entrar na conta</h1>
              <p className="text-slate-400 text-lg">Insira seus dados para acessar o painel.</p>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-2xl text-sm flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 mb-8">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-slate-300">Senha</label>
                  <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">Esqueceu?</a>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] disabled:opacity-50 flex items-center justify-center gap-2 group mt-2"
              >
                {loading ? 'Entrando...' : (
                  <>
                    Entrar no painel
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-950 text-slate-500">Ou continuar com</span>
              </div>
            </div>

            <button
              onClick={signInWithGoogle}
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-medium py-3.5 px-4 rounded-2xl transition-all hover:border-slate-700"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>

            <div className="mt-10 text-center text-slate-400">
              Não tem uma conta?{' '}
              <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                Criar conta agora
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
