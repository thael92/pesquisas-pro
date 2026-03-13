export interface Platform {
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
  difficulty?: 'easy' | 'medium' | 'hard';
}

export const platformsData: Platform[] = [
  {
    id: 'attapoll',
    name: 'AttaPoll',
    logo: 'https://logo.clearbit.com/attapoll.com',
    rewardType: 'Dinheiro (PayPal) / Vale Presente',
    minPayout: '$3.00 (Dólares)',
    description: 'Um dos melhores aplicativos para celular. Você pode trocar o que ganha por dinheiro ou vale presente. O saque mínimo é bem baixo (3 dólares).',
    pros: ['Saque mínimo muito baixo', 'Pagamento rápido em dólar'],
    cons: ['Perfil inicial é longo e chato de preencher', 'Não envia notificações, precisa abrir o app sempre'],
    link: 'https://attapoll.app/join/qkpim',
    difficulty: 'medium'
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
    link: 'https://play.google.com/store/apps/details?id=com.yougov.mobile.online',
    difficulty: 'easy'
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
    link: 'https://www.meseems.com.br/Campaign/InvitedRules?link=https://meseems.page.link/8Ks47Mq9ShwUPFkB8',
    difficulty: 'hard'
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
    link: 'https://play.google.com/store/apps/details?id=com.netquest.pokey',
    difficulty: 'medium'
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
    link: 'https://www.lifepointspanel.com/pt-br',
    difficulty: 'easy'
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
    link: 'https://www.points2shop.com/?referralToken=KHc9HWSMnbiT',
    difficulty: 'hard'
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
    link: 'https://www.toluna.com/pt-BR/',
    difficulty: 'medium'
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
    link: 'https://featu.re/626AX',
    difficulty: 'easy'
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
    link: 'https://www.surveyrewardz.com/pt-br/login?referralToken=19',
    difficulty: 'medium'
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
    link: 'https://www.ipsosisay.com/pt-br/referral/a192a610-4c6b-11ec-9f7b-4dc545c3271e',
    difficulty: 'easy'
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
    link: 'https://play.google.com/store/apps/details?id=ai.bohemian.multipolls&pli=1',
    difficulty: 'easy'
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
    link: 'https://www.mundodeopinioes.com.br',
    difficulty: 'medium'
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
    link: 'https://www.voceopina.com.br/login',
    difficulty: 'medium'
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
    link: 'https://www.heapup.com.br',
    difficulty: 'easy'
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
    link: 'https://opinaia.com/pt/auth/login',
    difficulty: 'medium'
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
    link: 'https://rewards.bing.com/welcome?rh=6185412E&ref=rafsrchae',
    difficulty: 'easy'
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
    link: 'https://app.timfun.com.br/mgm-invite?code=88097B1268',
    difficulty: 'easy'
  },
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
    isNew: true,
    difficulty: 'medium'
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
    isNew: true,
    difficulty: 'medium'
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
    isNew: true,
    difficulty: 'medium'
  }
];
