import React from 'react';
import { motion } from 'framer-motion';
import { Target, Clock, Zap, Users } from 'lucide-react';

export function Strategies() {
  const strategies = [
    {
      id: 1,
      title: 'Rotina Diária de Pesquisas',
      icon: Clock,
      color: 'text-blue-400',
      bg: 'bg-blue-500/20',
      description: 'Estabeleça horários fixos. As melhores pesquisas costumam aparecer no início da manhã e final da tarde. Dedique 30 minutos por dia para checar todas as plataformas.'
    },
    {
      id: 2,
      title: 'Múltiplos Apps Simultâneos',
      icon: Zap,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/20',
      description: 'Não dependa de uma única plataforma. Tenha pelo menos 5 apps instalados e ative as notificações. Quando um não tiver pesquisas, o outro terá.'
    },
    {
      id: 3,
      title: 'Aumentando Convites',
      icon: Target,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/20',
      description: 'Mantenha seu perfil 100% preenchido e atualizado. Se mudar de emprego, tiver filhos ou comprar um carro, atualize seu perfil imediatamente para receber pesquisas direcionadas.'
    },
    {
      id: 4,
      title: 'Organização de Tempo',
      icon: Users,
      color: 'text-green-400',
      bg: 'bg-green-500/20',
      description: 'Foque nas pesquisas que pagam melhor pelo seu tempo. Uma pesquisa de 5 minutos pagando $1 é melhor que uma de 30 minutos pagando $3.'
    }
  ];

  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Estratégias Premium</h1>
        <p className="text-slate-400">
          Conteúdo exclusivo para assinantes PRO. Maximize seus ganhos com nossas táticas testadas.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {strategies.map((strategy, index) => (
          <motion.div
            key={strategy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-indigo-500/50 transition-colors"
          >
            <div className={`w-14 h-14 ${strategy.bg} ${strategy.color} rounded-2xl flex items-center justify-center mb-6`}>
              <strategy.icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{strategy.title}</h3>
            <p className="text-slate-400 leading-relaxed">
              {strategy.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-indigo-900/40 to-slate-800/40 border border-indigo-500/30 p-8 rounded-3xl">
        <h2 className="text-2xl font-bold text-white mb-4">O Segredo do Perfil Consumidor</h2>
        <p className="text-slate-300 mb-6">
          As empresas querem a opinião de quem <strong>consome</strong>. Se o seu perfil indicar que você não toma decisões de compra na sua casa, você receberá menos pesquisas.
        </p>
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
          <h4 className="font-semibold text-indigo-400 mb-2">Sempre marque que você é:</h4>
          <ul className="list-disc list-inside text-slate-400 space-y-2">
            <li>O principal responsável pelas compras da casa</li>
            <li>Trabalha em período integral</li>
            <li>Tem intenção de comprar eletrônicos/carros nos próximos 12 meses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
