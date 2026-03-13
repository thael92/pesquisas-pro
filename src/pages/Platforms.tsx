import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, DollarSign, AlertCircle, Star, Search } from 'lucide-react';
import { platformsData } from '../data/platforms';
import { useAuth } from '../context/AuthContext';

export function Platforms() {
  const { profile, toggleFavoritePlatform } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'favorites'>('all');

  const favoriteIds = profile?.favoritePlatforms || [];

  const filteredPlatforms = platformsData.filter(platform => {
    const matchesSearch = platform.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          platform.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || (filter === 'favorites' && favoriteIds.includes(platform.id));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8 pb-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Plataformas</h1>
        <p className="text-slate-400">
          Lista curada das melhores plataformas para você começar a lucrar.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input 
            type="text" 
            placeholder="Buscar plataforma..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-xl font-medium transition-colors ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            Todas
          </button>
          <button 
            onClick={() => setFilter('favorites')}
            className={`px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 ${filter === 'favorites' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-transparent'}`}
          >
            <Star className={`w-4 h-4 ${filter === 'favorites' ? 'fill-yellow-400' : ''}`} /> Favoritas
          </button>
        </div>
      </div>

      {filteredPlatforms.length === 0 ? (
        <div className="text-center py-12 bg-slate-800/50 rounded-2xl border border-slate-700">
          <p className="text-slate-400 text-lg">Nenhuma plataforma encontrada.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlatforms.map((platform, index) => {
            const isFavorite = favoriteIds.includes(platform.id);
            
            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex flex-col relative group"
              >
                <button 
                  onClick={() => toggleFavoritePlatform(platform.id)}
                  className="absolute top-4 right-4 z-10 p-2 bg-slate-900/50 hover:bg-slate-900 rounded-full backdrop-blur-sm transition-colors"
                  title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                >
                  <Star className={`w-5 h-5 transition-colors ${isFavorite ? 'text-yellow-400 fill-yellow-400' : 'text-slate-400 group-hover:text-yellow-400/50'}`} />
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
                      {platform.difficulty && (
                        <span className={`inline-block mt-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                          platform.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                          platform.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {platform.difficulty === 'easy' ? 'Fácil' : platform.difficulty === 'medium' ? 'Médio' : 'Difícil'}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    {platform.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <DollarSign className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="text-slate-300 truncate" title={platform.rewardType}>Recompensa: <strong className="text-white">{platform.rewardType}</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="text-slate-300">Saque mínimo: <strong className="text-white">{platform.minPayout}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-700 bg-slate-800/50">
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors shadow-[0_0_15px_rgba(79,70,229,0.2)] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                  >
                    Acessar Plataforma <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
