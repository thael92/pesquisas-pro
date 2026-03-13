import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, DollarSign, List, Shield, Star, Play, Sparkles, ArrowRight, Gift, TrendingUp } from 'lucide-react';

export function LandingPage() {
  const platforms = [
    { name: 'AttaPoll', reward: 'Dinheiro (PayPal) / Vale Presente', min: '$3.00' },
    { name: 'YouGov', reward: 'Dinheiro na Conta', min: 'R$ 50,00' },
    { name: 'MeSeems', reward: 'Pix / Vale Presente', min: 'Variável' },
    { name: 'NiceQuest', reward: 'Produtos / Vale Presente', min: 'Variável' },
    { name: 'LifePoints', reward: 'PayPal / Americanas', min: 'Variável' },
    { name: 'Points2Shop', reward: 'Dinheiro (PayPal)', min: 'Variável' },
    { name: 'Toluna Influencers', reward: 'Dinheiro / Vale Presente', min: 'R$ 40,00' },
    { name: 'FeaturePoints', reward: 'Dinheiro (PayPal)', min: '3.000 pontos' },
    { name: 'Survey Rewardz', reward: 'Dinheiro (PayPal)', min: 'Variável' },
    { name: 'Ipsos iSay', reward: 'Vale Presentes', min: 'Variável' },
    { name: 'MultiPolls', reward: 'PayPal / Carrefour', min: 'Variável' },
    { name: 'Mundo de Opiniões', reward: 'Vale Presentes', min: 'Variável' },
    { name: 'VoceOpina', reward: 'Dinheiro / Vale Presentes', min: '2.000 pontos' },
    { name: 'HeapUp', reward: 'Livelo / Uber / Celular', min: 'Variável' },
    { name: 'Opinaia', reward: 'Dinheiro / Vale Presentes', min: 'Variável' },
    { name: 'Microsoft Rewards', reward: 'Vale Presentes', min: 'Variável' },
    { name: 'Tim Fun', reward: 'Internet / Uber / McDonald\'s', min: 'Variável' },
    { name: 'ySense', reward: 'Dinheiro (PayPal)', min: '$10.00' },
    { name: 'Swagbucks', reward: 'Dinheiro / Gift Cards', min: '$5.00' },
    { name: 'PrizeRebel', reward: 'Dinheiro / Gift Cards', min: '$5.00' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 overflow-hidden">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20">
        <div className="text-2xl font-bold text-indigo-500 tracking-tight flex items-center gap-2">
          <Sparkles className="w-6 h-6" /> Pesquisador PRO
        </div>
        <nav className="space-x-4 flex items-center">
          <Link to="/login" className="text-slate-300 hover:text-white transition-colors font-medium">Entrar</Link>
          <Link to="/register" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)]">
            Assinar Acesso
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 fill-indigo-400" /> Método comprovado em 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                Ganhe dinheiro com <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-green-400">pesquisas online</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
                Descubra plataformas reais que pagam em dólar ou reais para responder pesquisas. Acesso completo a tutoriais, links diretos e estratégias para maximizar seus ganhos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/register" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] flex items-center justify-center gap-2 group">
                  Começar agora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#como-funciona" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold text-lg transition-all border border-slate-700 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" /> Saiba mais
                </a>
              </div>
            </motion.div>

            {/* Right Content - Mascot & Floating Elements */}
            <div className="hidden lg:block relative h-[500px]">
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  {/* Glowing backdrop for mascot */}
                  <div className="absolute inset-0 bg-indigo-500/30 blur-3xl rounded-full scale-150" />
                  <img 
                    src="https://api.dicebear.com/7.x/bottts/svg?seed=PesquisadorPRO&backgroundColor=transparent" 
                    alt="Mascote Pesquisador PRO" 
                    className="w-80 h-80 relative z-10 drop-shadow-[0_0_40px_rgba(99,102,241,0.5)]"
                  />
                </div>
              </motion.div>

              {/* Floating Card 1 */}
              <motion.div 
                animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 left-0 bg-slate-800/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-700 shadow-2xl z-20 flex items-center gap-4"
              >
                <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Novo Saque</p>
                  <p className="font-bold text-white text-lg">+$50.00</p>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div 
                animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-20 right-0 bg-slate-800/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-700 shadow-2xl z-20 flex items-center gap-4"
              >
                <div className="bg-indigo-500/20 p-3 rounded-full text-indigo-400">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Recompensa</p>
                  <p className="font-bold text-white text-lg">Gift Card</p>
                </div>
              </motion.div>

              {/* Small floating icons */}
              <motion.div 
                animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-10 right-20 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
              >
                <Star className="w-8 h-8 fill-yellow-400" />
              </motion.div>
              <motion.div 
                animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-10 left-20 text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]"
              >
                <TrendingUp className="w-10 h-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24 bg-slate-900 border-y border-slate-800 relative">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Como funciona</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Um método simples, direto e validado para começar a lucrar no seu tempo livre.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Crie sua conta', desc: 'Faça seu cadastro rápido na nossa plataforma.' },
              { step: '2', title: 'Assine o acesso', desc: 'Garanta seu acesso anual ao conteúdo premium.' },
              { step: '3', title: 'Acesse as plataformas', desc: 'Receba a lista curada com links diretos.' },
              { step: '4', title: 'Comece a responder', desc: 'Aplique as estratégias e ganhe dinheiro.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 relative overflow-hidden group hover:border-indigo-500/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-7xl font-black text-slate-800 absolute -right-4 -top-4 group-hover:text-indigo-900/30 transition-colors">{item.step}</div>
                <h3 className="text-xl font-bold mb-3 relative z-10 text-white">{item.title}</h3>
                <p className="text-slate-400 relative z-10 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ganhos */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30 shadow-[0_0_30px_rgba(74,222,128,0.3)]"
          >
            <DollarSign className="w-12 h-12 text-green-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Quanto posso ganhar?</h2>
          <p className="text-2xl text-slate-300 mb-12 leading-relaxed">
            Sendo realista: você pode ganhar entre <strong className="text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded-lg">$5 a $100 por mês</strong> dependendo da sua dedicação.
          </p>
          <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-3xl border border-slate-700 inline-block text-left shadow-2xl">
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-lg"><CheckCircle className="w-6 h-6 text-indigo-400" /> Pagamentos em Dólar via PayPal</li>
              <li className="flex items-center gap-4 text-lg"><CheckCircle className="w-6 h-6 text-indigo-400" /> Gift Cards (Uber, iFood, Netflix)</li>
              <li className="flex items-center gap-4 text-lg"><CheckCircle className="w-6 h-6 text-indigo-400" /> Transferências diretas via Pix</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Plataformas */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Plataformas Incluídas</h2>
            <p className="text-xl text-slate-400">Acesso a dezenas de plataformas testadas e aprovadas.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 transition-all group"
              >
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">{p.name}</h3>
                <div className="space-y-3 text-slate-400">
                  <p className="flex justify-between border-b border-slate-700/50 pb-2">
                    <strong className="text-slate-300">Recompensa:</strong> 
                    <span className="text-right">{p.reward}</span>
                  </p>
                  <p className="flex justify-between">
                    <strong className="text-slate-300">Saque mínimo:</strong> 
                    <span className="text-right text-green-400 font-medium">{p.min}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-slate-400 italic flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" /> Acesso imediato a todas essas plataformas e seus guias passo a passo na área de membros.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/20" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Pronto para começar?</h2>
          <p className="text-2xl text-slate-400 mb-12">Junte-se a centenas de pessoas que já estão faturando uma renda extra no tempo livre.</p>
          <Link to="/register" className="px-12 py-6 bg-green-500 hover:bg-green-400 text-slate-950 rounded-full font-bold text-2xl transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] inline-flex items-center gap-3 group">
            Assinar Plano PRO <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 text-center text-slate-500 bg-slate-950">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-indigo-500/50" />
          <span className="font-bold text-slate-400">Pesquisador PRO</span>
        </div>
        <p>© {new Date().getFullYear()} Pesquisador PRO. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
