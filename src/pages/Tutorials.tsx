import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, CheckCircle, AlertTriangle, DollarSign, Gift, ExternalLink, ChevronDown, ChevronUp, Star, Info } from 'lucide-react';

interface Platform {
  id: string;
  name: string;
  logo: string;
  rewardType: string;
  minPayout: string;
  description: string;
  pros: string[];
  cons: string[];
  link: string;
  isNew?: boolean;
}

export function Tutorials() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const platforms: Platform[] = [
    {
      id: 'attapoll',
      name: 'AttaPoll',
      logo: 'https://logo.clearbit.com/attapoll.com',
      rewardType: 'Dinheiro (PayPal) / Vale Presente',
      minPayout: '$3.00 (Dólares)',
      description: 'Um dos melhores aplicativos para celular. Você pode trocar o que ganha por dinheiro ou vale presente. O saque mínimo é bem baixo (3 dólares).',
      pros: ['Saque mínimo muito baixo', 'Pagamento rápido em dólar'],
      cons: ['Perfil inicial é longo e chato de preencher', 'Não envia notificações, precisa abrir o app sempre'],
      link: 'https://attapoll.app/join/qkpim'
    },
    {
      id: 'yougov',
      name: 'YouGov',
      logo: 'https://logo.clearbit.com/yougov.com',
      rewardType: 'Dinheiro na Conta',
      minPayout: 'R$ 50,00',
      description: 'Plataforma muito confiável focada em pesquisas sobre marcas e política. Você troca pontos por dinheiro direto na conta bancária.',
      pros: ['Pesquisas interessantes e curtas', 'Avisa por notificação e email'],
      cons: ['Pesquisas demoram a chegar', 'Saque mínimo um pouco alto (50 a 80 reais)'],
      link: 'https://play.google.com/store/apps/details?id=com.yougov.mobile.online'
    },
    {
      id: 'meseems',
      name: 'MeSeems',
      logo: 'https://logo.clearbit.com/meseems.com.br',
      rewardType: 'Pix / Vale Presente',
      minPayout: 'Variável',
      description: 'Aplicativo brasileiro muito popular. Você troca pontos por vale presentes e até dinheiro no Pix.',
      pros: ['Pagamento via Pix', 'Avisa quando tem pesquisa', 'Paga certinho'],
      cons: ['Difícil conseguir todos os pontos exigidos', 'Notificações nem sempre funcionam bem'],
      link: 'https://www.meseems.com.br/Campaign/InvitedRules?link=https://meseems.page.link/8Ks47Mq9ShwUPFkB8'
    },
    {
      id: 'nicequest',
      name: 'NiceQuest',
      logo: 'https://logo.clearbit.com/nicequest.com',
      rewardType: 'Produtos / Vale Presente (iFood)',
      minPayout: 'Variável por produto',
      description: 'Diferente dos outros, aqui você troca pontos por objetos de casa (eletrodomésticos) e vale presentes como iFood.',
      pros: ['Produtos físicos entregues em casa', 'Notifica quando tem pesquisa'],
      cons: ['Demora para juntar pontos para produtos caros'],
      link: 'https://play.google.com/store/apps/details?id=com.netquest.pokey'
    },
    {
      id: 'lifepoints',
      name: 'LifePoints',
      logo: 'https://logo.clearbit.com/lifepointspanel.com',
      rewardType: 'PayPal / Americanas',
      minPayout: 'Variável',
      description: 'Site muito generoso com a quantidade de pesquisas. Troque pontos por dinheiro no PayPal ou vale presentes.',
      pros: ['Muitas pesquisas disponíveis', 'Generoso nos pontos'],
      cons: ['Precisa entrar no site frequentemente para checar'],
      link: 'https://www.lifepointspanel.com/pt-br'
    },
    {
      id: 'points2shop',
      name: 'Points2Shop',
      logo: 'https://logo.clearbit.com/points2shop.com',
      rewardType: 'Dinheiro (PayPal)',
      minPayout: 'Variável',
      description: 'Site que paga em dólares por realizar pesquisas. O dinheiro é convertido automaticamente quando cai no PayPal.',
      pros: ['Pagamento em dólar', 'Apenas dinheiro como recompensa (foco)'],
      cons: ['Perfil inicial muito longo e detalhado'],
      link: 'https://www.points2shop.com/?referralToken=KHc9HWSMnbiT'
    },
    {
      id: 'toluna',
      name: 'Toluna Influencers',
      logo: 'https://logo.clearbit.com/toluna.com',
      rewardType: 'Dinheiro / Vale Presente',
      minPayout: 'R$ 40,00 (69.000 pontos)',
      description: 'Uma das maiores comunidades de pesquisa. Você consegue fazer pesquisas quase todos os dias.',
      pros: ['Alta frequência de pesquisas', 'Comunidade ativa'],
      cons: ['Exige muitos pontos para sacar (69 mil para R$40)'],
      link: 'https://www.toluna.com/pt-BR/'
    },
    {
      id: 'featurepoints',
      name: 'FeaturePoints',
      logo: 'https://logo.clearbit.com/featurepoints.com',
      rewardType: 'Dinheiro (PayPal)',
      minPayout: '3.000 pontos',
      description: 'Aplicativo e site onde você troca pontos por dinheiro no PayPal. A maioria das pesquisas dá 100 pontos ou mais.',
      pros: ['Saque rápido (apenas 3 mil pontos)', 'Várias provedoras de pesquisa (inBrain, CPX, etc)'],
      cons: ['Algumas pesquisas podem desqualificar no meio'],
      link: 'https://featu.re/626AX'
    },
    {
      id: 'surveyrewardz',
      name: 'Survey Rewardz',
      logo: 'https://logo.clearbit.com/surveyrewardz.com',
      rewardType: 'Dinheiro (PayPal)',
      minPayout: 'Variável',
      description: 'Paga em dólar direto no PayPal. É muito generoso nos valores, pagando de $0.50 a $2.00 por pesquisa.',
      pros: ['Alto valor por pesquisa (em dólar)'],
      cons: ['Demora para juntar o valor de saque', 'Perfil inicial longo'],
      link: 'https://www.surveyrewardz.com/pt-br/login?referralToken=19'
    },
    {
      id: 'ipsosisay',
      name: 'Ipsos iSay',
      logo: 'https://logo.clearbit.com/ipsosisay.com',
      rewardType: 'Vale Presentes',
      minPayout: 'Variável',
      description: 'Focado exclusivamente em vale presentes. Pesquisas valem de 100 pontos para cima.',
      pros: ['Pesquisas bem pontuadas', 'Empresa muito renomada'],
      cons: ['Não tem opção de saque em dinheiro vivo/PayPal'],
      link: 'https://www.ipsosisay.com/pt-br/referral/a192a610-4c6b-11ec-9f7b-4dc545c3271e'
    },
    {
      id: 'multipolls',
      name: 'MultiPolls',
      logo: 'https://logo.clearbit.com/multipolls.com',
      rewardType: 'PayPal / Carrefour',
      minPayout: 'Variável',
      description: 'Aplicativo generoso que também permite ganhar pontos jogando jogos no celular.',
      pros: ['Pesquisas quase todos os dias', 'Ganhos extras com jogos', 'Notifica pesquisas'],
      cons: ['Algumas pesquisas lotam rápido'],
      link: 'https://play.google.com/store/apps/details?id=ai.bohemian.multipolls&pli=1'
    },
    {
      id: 'mundodeopinioes',
      name: 'Mundo de Opiniões',
      logo: 'https://logo.clearbit.com/mundodeopinioes.com.br',
      rewardType: 'Vale Presentes',
      minPayout: 'Variável',
      description: 'Vasto catálogo de vale presentes (iFood, Casas Bahia, etc).',
      pros: ['Catálogo enorme de prêmios'],
      cons: ['Não paga no PayPal', 'Não envia notificações (precisa entrar no site)'],
      link: 'https://www.mundodeopinioes.com.br'
    },
    {
      id: 'voceopina',
      name: 'VoceOpina',
      logo: 'https://logo.clearbit.com/voceopina.com.br',
      rewardType: 'Dinheiro / Vale Presentes',
      minPayout: '2.000 pontos',
      description: 'Plataforma clássica. Pesquisas dão de 25 pontos para cima.',
      pros: ['Confiável e antiga no mercado'],
      cons: ['Não notifica, precisa entrar sempre no site'],
      link: 'https://www.voceopina.com.br/login'
    },
    {
      id: 'heapup',
      name: 'HeapUp',
      logo: 'https://logo.clearbit.com/heapup.com.br',
      rewardType: 'Livelo / Uber / Celular',
      minPayout: 'Variável',
      description: 'Diferenciado por permitir trocar pontos por milhas aéreas (Livelo), Uber ou recarga de celular (Claro/Tim).',
      pros: ['Integração com Livelo (Milhas)', 'Avisa por email'],
      cons: ['Foco menor em dinheiro vivo'],
      link: 'https://www.heapup.com.br'
    },
    {
      id: 'opinaia',
      name: 'Opinaia',
      logo: 'https://logo.clearbit.com/opinaia.com',
      rewardType: 'Dinheiro / Vale Presentes',
      minPayout: 'Variável',
      description: 'Cada pesquisa vale de 150 a 300 pontos. Interface amigável.',
      pros: ['Boa pontuação por pesquisa'],
      cons: ['Precisa entrar no site para checar pesquisas'],
      link: 'https://opinaia.com/pt/auth/login'
    },
    {
      id: 'microsoftrewards',
      name: 'Microsoft Rewards',
      logo: 'https://logo.clearbit.com/microsoft.com',
      rewardType: 'Vale Presentes (Uber, Netflix)',
      minPayout: 'Variável',
      description: 'Ganhe pontos apenas por pesquisar no Bing (concorrente do Google) e fazer tarefas diárias.',
      pros: ['Ganha pontos por buscas normais na internet', 'Bônus de regularidade (ofensiva)'],
      cons: ['Apenas vale presentes'],
      link: 'https://rewards.bing.com/welcome?rh=6185412E&ref=rafsrchae'
    },
    {
      id: 'timfun',
      name: 'Tim Fun',
      logo: 'https://logo.clearbit.com/tim.com.br',
      rewardType: 'Internet / Uber / McDonald\'s',
      minPayout: 'Variável',
      description: 'Exclusivo para clientes TIM. Assista anúncios e ganhe pontos para trocar por internet ou vale presentes.',
      pros: ['Fácil de usar (só ver anúncios)', 'Ótimo para economizar dados móveis'],
      cons: ['Exclusivo para clientes da operadora TIM'],
      link: 'https://app.timfun.com.br/mgm-invite?code=88097B1268'
    },
    // BÔNUS: Plataformas Extras Confiáveis
    {
      id: 'ysense',
      name: 'ySense',
      logo: 'https://logo.clearbit.com/ysense.com',
      rewardType: 'Dinheiro (PayPal / Payoneer)',
      minPayout: '$10.00 (Dólares)',
      description: 'Uma das maiores e mais antigas plataformas do mundo. Paga em dólar por pesquisas e pequenas tarefas.',
      pros: ['Paga em Dólar', 'Muitas pesquisas diárias', 'Bônus diário'],
      cons: ['Site em inglês (use o tradutor do navegador)'],
      link: 'https://www.ysense.com/',
      isNew: true
    },
    {
      id: 'swagbucks',
      name: 'Swagbucks',
      logo: 'https://logo.clearbit.com/swagbucks.com',
      rewardType: 'Dinheiro (PayPal) / Gift Cards',
      minPayout: '$5.00 (Dólares)',
      description: 'Gigante americana. Ganhe dinheiro respondendo pesquisas, assistindo vídeos e até fazendo compras (cashback).',
      pros: ['Múltiplas formas de ganhar', 'Paga em Dólar'],
      cons: ['Algumas ofertas são apenas para os EUA'],
      link: 'https://www.swagbucks.com/',
      isNew: true
    },
    {
      id: 'prizerebel',
      name: 'PrizeRebel',
      logo: 'https://logo.clearbit.com/prizerebel.com',
      rewardType: 'Dinheiro (PayPal) / Gift Cards',
      minPayout: '$5.00 (Dólares)',
      description: 'Excelente site de pesquisas com sistema de níveis. Quanto mais você usa, mais benefícios e saques rápidos você tem.',
      pros: ['Pagamentos super rápidos (em até 24h)', 'Paga em Dólar'],
      cons: ['Site em inglês'],
      link: 'https://www.prizerebel.com/',
      isNew: true
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-8 pb-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
          <Star className="w-8 h-8 text-indigo-400" />
          Guia Definitivo de Plataformas
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl">
          Aqui estão as instruções detalhadas de todas as plataformas validadas do nosso e-book, além de novas adições exclusivas. Siga as dicas para não ser desqualificado.
        </p>
      </header>

      {/* Dicas Globais */}
      <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 p-6 sm:p-8 rounded-3xl mb-12 shadow-lg shadow-indigo-500/10">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-yellow-400" />
          Regras de Ouro (Leia antes de começar)
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-2xl">
            <div className="bg-green-500/20 p-2 rounded-xl shrink-0">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Perfil Consistente</h3>
              <p className="text-sm text-slate-400">As plataformas cruzam dados. Se você disser que tem carro em uma pesquisa e na outra disser que não, será banido.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-2xl">
            <div className="bg-indigo-500/20 p-2 rounded-xl shrink-0">
              <Info className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">O Segredo do Perfil</h3>
              <p className="text-sm text-slate-400">A parte mais chata é criar o perfil inicial (muitas perguntas). Mas faça com calma, é só uma vez e define quantas pesquisas você receberá.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Plataformas */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white mb-6">Plataformas Disponíveis ({platforms.length})</h2>
        
        {platforms.map((platform) => (
          <motion.div 
            key={platform.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-slate-800 border transition-all duration-300 rounded-2xl overflow-hidden ${
              expandedId === platform.id ? 'border-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.15)]' : 'border-slate-700 hover:border-slate-600'
            }`}
          >
            {/* Header / Clickable Area */}
            <div 
              onClick={() => toggleExpand(platform.id)}
              className="p-5 sm:p-6 flex items-center justify-between cursor-pointer select-none"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center p-2 shrink-0 overflow-hidden">
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
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                    {platform.isNew && (
                      <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                        Bônus
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Gift className="w-4 h-4 text-indigo-400" />
                      {platform.rewardType}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      Min: {platform.minPayout}
                    </span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 ml-4 text-slate-500">
                {expandedId === platform.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === platform.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-slate-700/50 bg-slate-900/30"
                >
                  <div className="p-5 sm:p-6 grid lg:grid-cols-3 gap-8">
                    
                    {/* Instruções */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Como funciona</h4>
                        <p className="text-slate-300 leading-relaxed text-lg">
                          {platform.description}
                        </p>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                          <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" /> Pontos Positivos
                          </h4>
                          <ul className="space-y-2">
                            {platform.pros.map((pro, idx) => (
                              <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">•</span> {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                          <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" /> Pontos de Atenção
                          </h4>
                          <ul className="space-y-2">
                            {platform.cons.map((con, idx) => (
                              <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                                <span className="text-red-500 mt-0.5">•</span> {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Ação */}
                    <div className="flex flex-col justify-center items-center bg-slate-800 rounded-2xl p-6 border border-slate-700">
                      <img 
                        src={`https://api.dicebear.com/7.x/shapes/svg?seed=${platform.name}&backgroundColor=transparent`} 
                        alt="Ilustração" 
                        className="w-32 h-32 mb-6 opacity-80"
                      />
                      <a 
                        href={platform.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2"
                      >
                        Acessar Plataforma <ExternalLink className="w-5 h-5" />
                      </a>
                      <p className="text-xs text-slate-500 mt-4 text-center">
                        Abre em uma nova aba
                      </p>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
