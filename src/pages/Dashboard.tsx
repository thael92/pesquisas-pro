import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { TrendingUp, List, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { platformsData } from '../data/platforms';

export function Dashboard() {
  const { profile, toggleFavoritePlatform } = useAuth();
  
  const favoriteIds = profile?.favoritePlatforms || [];
  const favoritePlatforms = platformsData.filter(p => favoriteIds.includes(p.id));

  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Bem-vindo(a), {profile?.name?.split(' ')[0]}! 👋
        </h1>
        <p className="text-slate-400">
          Aqui está o resumo da sua jornada no Pesquisador PRO.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
        >
          <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-4">
            <List className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">15+</h3>
          <p className="text-slate-400">Plataformas Recomendadas</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
        >
          <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-xl flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">Estratégias</h3>
          <p className="text-slate-400">Dicas para maximizar ganhos</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
        >
          <div className="w-12 h-12 bg-yellow-500/20 text-yellow-400 rounded-xl flex items-center justify-center mb-4">
            <Star className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">PRO</h3>
          <p className="text-slate-400">Acesso ilimitado</p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Comece por aqui</h2>
          <p className="text-slate-400 mb-6">
            Acesse nossos tutoriais para entender como criar suas contas corretamente e evitar desqualificações.
          </p>
          <Link to="/dashboard/tutorials" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium">
            Ver tutoriais <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Explorar Plataformas</h2>
          <p className="text-slate-400 mb-6">
            Confira as plataformas que estão pagando melhor nesta semana e adicione aos seus favoritos.
          </p>
          <Link to="/dashboard/platforms" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium">
            Acessar plataformas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Seção de Plataformas Favoritas */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" /> 
            Minhas Plataformas Favoritas
          </h2>
          <Link to="/dashboard/platforms" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium">
            Ver todas
          </Link>
        </div>

        {favoritePlatforms.length === 0 ? (
          <div className="bg-slate-800/50 border border-slate-700 border-dashed rounded-2xl p-8 text-center">
            <Star className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Nenhuma plataforma favorita</h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Você ainda não adicionou nenhuma plataforma aos seus favoritos. Explore a lista de plataformas e marque as que você mais usa para acesso rápido.
            </p>
            <Link to="/dashboard/platforms" className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors">
              Explorar Plataformas
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoritePlatforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex flex-col relative group"
              >
                <button 
                  onClick={() => toggleFavoritePlatform(platform.id)}
                  className="absolute top-4 right-4 z-10 p-2 bg-slate-900/50 hover:bg-slate-900 rounded-full backdrop-blur-sm transition-colors"
                  title="Remover dos favoritos"
                >
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </button>

                <div className="p-6 flex-1">
                  <div className="flex items-center gap-4 mb-4 pr-10">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                      <img 
                        src={platform.logo} 
                        alt={`Logo ${platform.name}`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${platform.name}&background=random&color=fff`;
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">{platform.name}</h3>
                      <p className="text-xs text-green-400 font-medium mt-1">Min: {platform.minPayout}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm line-clamp-2">
                    {platform.description}
                  </p>
                </div>

                <div className="p-4 border-t border-slate-700 bg-slate-800/50">
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors"
                  >
                    Acessar <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
