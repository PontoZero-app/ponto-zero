export interface FeatureBlock {
  type: "p" | "bullets";
  text?: string;
  items?: string[];
}

export interface FeatureSectionData {
  id: string;
  title: string;
  icon: string;
  tone?: "primary" | "accent";
  blocks: FeatureBlock[];
}

export const featuresTitle = "O que podes fazer com o Ponto Zero";

export const featuresIntro =
  "O **Ponto Zero** foi desenvolvido para ajudar a organizar a vida financeira de forma clara, simples e realista. A aplicação foi pensada para uso pessoal e permite acompanhar o dia a dia financeiro, o património e a evolução das dívidas, sempre com foco no controlo manual e consciente da informação.";

export const featureSections: FeatureSectionData[] = [
  {
    id: "registar-receitas",
    title: "Registo de receitas",
    icon: "income",
    blocks: [
      {
        type: "p",
        text: "A aplicação permite registar receitas manualmente, associando cada entrada de dinheiro à conta e categoria respetivas.",
      },
      { type: "p", text: "Cada registo pode incluir:" },
      {
        type: "bullets",
        items: ["valor", "categoria", "conta de destino", "data", "descrição opcional"],
      },
      {
        type: "p",
        text: "Isto ajuda a acompanhar a origem do dinheiro e a manter um histórico financeiro mais organizado.",
      },
    ],
  },
  {
    id: "registar-despesas",
    title: "Registo de despesas",
    icon: "expense",
    blocks: [
      {
        type: "p",
        text: "O Ponto Zero permite registar despesas de forma simples, com separação entre **despesas fixas e despesas variáveis**.",
      },
      { type: "p", text: "Cada despesa pode incluir:" },
      {
        type: "bullets",
        items: ["valor", "categoria", "conta", "data", "descrição opcional"],
      },
      {
        type: "p",
        text: "Esta separação ajuda a perceber melhor o peso das despesas regulares e dos gastos variáveis do dia a dia.",
      },
    ],
  },
  {
    id: "categorias",
    title: "Categorias personalizáveis",
    icon: "tags",
    blocks: [
      {
        type: "p",
        text: "A aplicação inclui um sistema de categorias dinâmicas, permitindo adaptar a organização financeira à realidade de cada utilizador.",
      },
      { type: "p", text: "É possível:" },
      {
        type: "bullets",
        items: [
          "criar categorias",
          "editar categorias",
          "arquivar categorias",
          "eliminar categorias que nunca tenham sido usadas",
        ],
      },
      { type: "p", text: "As categorias estão organizadas por tipo:" },
      { type: "bullets", items: ["receitas", "despesas fixas", "despesas variáveis"] },
      {
        type: "p",
        text: "Isto permite uma estrutura mais flexível do que listas fixas e fechadas.",
      },
    ],
  },
  {
    id: "contas",
    title: "Gestão de contas",
    icon: "wallet",
    blocks: [
      {
        type: "p",
        text: "A app suporta vários tipos de contas para representar melhor a organização financeira do utilizador.",
      },
      { type: "p", text: "Exemplos:" },
      {
        type: "bullets",
        items: ["contas bancárias", "carteira", "cartão de crédito", "contas de poupança"],
      },
      {
        type: "p",
        text: "Os saldos são calculados com base nos movimentos registados, permitindo uma leitura mais realista da situação financeira.",
      },
      {
        type: "p",
        text: "A aplicação também suporta saldo negativo, útil para representar corretamente contas como cartões de crédito.",
      },
    ],
  },
  {
    id: "transferencias",
    title: "Transferências entre contas",
    icon: "transfer",
    blocks: [
      { type: "p", text: "A aplicação permite efetuar transferências internas entre contas." },
      {
        type: "p",
        text: "Estas transferências representam deslocações de dinheiro dentro da própria estrutura financeira do utilizador, sem criar artificialmente novas receitas ou despesas.",
      },
      {
        type: "p",
        text: "Isto ajuda a manter os saldos organizados e evita duplicação de movimentos.",
      },
    ],
  },
  {
    id: "resumos",
    title: "Resumos financeiros",
    icon: "chart",
    blocks: [
      {
        type: "p",
        text: "O Ponto Zero apresenta resumos financeiros para ajudar a perceber rapidamente a situação financeira.",
      },
      { type: "p", text: "Os resumos podem incluir:" },
      {
        type: "bullets",
        items: [
          "total de receitas",
          "total de despesas",
          "saldo do período",
          "visão consolidada por conta",
        ],
      },
      { type: "p", text: "Períodos disponíveis:" },
      {
        type: "bullets",
        items: [
          "mês",
          "semana (Premium)",
          "ano (Premium)",
          "período personalizado (Premium)",
        ],
      },
      {
        type: "p",
        text: "Estes resumos foram pensados para dar uma leitura rápida e prática da evolução financeira ao longo do tempo.",
      },
    ],
  },
  {
    id: "patrimonio",
    title: "Património",
    icon: "piggy",
    blocks: [
      {
        type: "p",
        text: "A aplicação inclui uma área própria de **Património**, pensada para acompanhar a evolução financeira para além do simples fluxo de caixa.",
      },
      { type: "p", text: "Nesta área é possível acompanhar:" },
      {
        type: "bullets",
        items: [
          "movimentos de poupança",
          "transferências entre poupanças",
          "ajustes de valor",
          "evolução global do património",
        ],
      },
      {
        type: "p",
        text: "Isto permite distinguir melhor o dinheiro do dia a dia da parte patrimonial e acompanhar crescimento financeiro real.",
      },
    ],
  },
  {
    id: "movimentos-poupanca",
    title: "Movimentos de poupança",
    icon: "coins",
    blocks: [
      {
        type: "p",
        text: "Dentro do património, a aplicação suporta diferentes tipos de movimentos para refletir melhor a realidade financeira.",
      },
      { type: "bullets", items: ["crédito", "débito", "transferência", "ajuste de valor"] },
      {
        type: "p",
        text: "Esta estrutura permite acompanhar entradas em poupança, saídas, redistribuição entre contas patrimoniais e alterações de valorização ou desvalorização.",
      },
    ],
  },
  {
    id: "emprestimos",
    title: "Gestão de empréstimos e dívidas",
    icon: "debts",
    blocks: [
      {
        type: "p",
        text: "O Ponto Zero permite registar empréstimos e acompanhar a sua evolução ao longo do tempo.",
      },
      { type: "p", text: "É possível consultar informação como:" },
      {
        type: "bullets",
        items: [
          "valor em dívida",
          "prestações restantes",
          "progresso do pagamento",
          "evolução histórica do empréstimo",
        ],
      },
      {
        type: "p",
        text: "Basta registares as atualizações da dívida dos teus empréstimos para manteres os valores sempre atualizados. Desta forma, consegues manter uma visão clara e atualizada da evolução dos teus empréstimos.",
      },
    ],
  },
  {
    id: "seguranca",
    title: "Segurança da aplicação",
    icon: "shield",
    blocks: [
      {
        type: "p",
        text: "A aplicação inclui mecanismos de proteção local para ajudar a proteger o acesso aos dados no dispositivo.",
      },
      { type: "p", text: "As opções podem incluir:" },
      {
        type: "bullets",
        items: ["PIN", "autenticação biométrica (Premium)", "bloqueio local da aplicação"],
      },
      {
        type: "p",
        text: "Os mecanismos de autenticação são locais ao dispositivo e ajudam a reforçar a segurança da informação.",
      },
    ],
  },
  {
    id: "backups",
    title: "Backups e restauro",
    icon: "backup",
    blocks: [
      {
        type: "p",
        text: "O Ponto Zero permite proteger os dados através de funcionalidades de backup.",
      },
      { type: "p", text: "Funções disponíveis:" },
      {
        type: "bullets",
        items: [
          "exportação manual de backup",
          "restauro manual de backup",
          "backup automático local (Premium)",
        ],
      },
      {
        type: "p",
        text: "Todos os backups são gerados localmente no dispositivo. Os dados não são enviados para servidores do desenvolvedor.",
      },
    ],
  },
  {
    id: "exportacao",
    title: "Exportação de dados",
    icon: "export",
    blocks: [
      {
        type: "p",
        text: "A aplicação inclui funcionalidades de exportação para facilitar o acesso e a preservação da informação.",
      },
      { type: "p", text: "Dependendo da versão da app, isto pode incluir:" },
      { type: "bullets", items: ["exportação de backup", "exportação Excel (Premium)"] },
      {
        type: "p",
        text: "Isto permite manter cópias de segurança e utilizar os dados fora da aplicação quando necessário.",
      },
    ],
  },
  {
    id: "personalizacao",
    title: "Personalização",
    icon: "palette",
    blocks: [
      {
        type: "p",
        text: "O Ponto Zero inclui opções de personalização visual para tornar a experiência de utilização mais confortável e ajustada ao gosto do utilizador.",
      },
      { type: "p", text: "As opções podem incluir:" },
      {
        type: "bullets",
        items: [
          "tema claro",
          "tema escuro (Premium)",
          "modo do sistema (Premium)",
          "personalização de alguns ícones principais (Premium)",
        ],
      },
      {
        type: "p",
        text: "A personalização visual não altera os dados financeiros, mas melhora a experiência de utilização da app.",
      },
    ],
  },
  {
    id: "offline",
    title: "Funcionamento offline",
    icon: "offline",
    blocks: [
      {
        type: "p",
        text: "A aplicação foi concebida para funcionar em modelo **offline-first**.",
      },
      {
        type: "bullets",
        items: [
          "as funcionalidades principais não dependem de internet",
          "os dados permanecem no dispositivo",
          "a aplicação não precisa de ligação bancária para funcionar",
        ],
      },
      {
        type: "p",
        text: "Esta abordagem ajuda a reforçar a privacidade e dá maior controlo ao utilizador sobre a sua própria informação financeira.",
      },
    ],
  },
  {
    id: "estrutura-modular",
    title: "Estrutura modular",
    icon: "modular",
    blocks: [
      { type: "p", text: "Uma das vantagens do Ponto Zero é permitir utilização parcial da app." },
      { type: "p", text: "O utilizador pode usar apenas as áreas de que realmente precisa, por exemplo:" },
      {
        type: "bullets",
        items: [
          "só receitas e despesas",
          "só controlo de contas",
          "só património",
          "só resumos e organização geral",
        ],
      },
      {
        type: "p",
        text: "A aplicação foi pensada para continuar útil mesmo quando não se usa tudo ao mesmo tempo.",
      },
    ],
  },
  {
    id: "base-premium",
    title: "Versão base e Premium",
    icon: "premium",
    tone: "accent",
    blocks: [
      {
        type: "p",
        text: "O Ponto Zero inclui uma versão base e funcionalidades adicionais em plano Premium.",
      },
      { type: "p", text: "**Na versão base:**" },
      {
        type: "bullets",
        items: [
          "registo de receitas e despesas",
          "gestão de contas",
          "categorias personalizáveis",
          "resumos mensais",
          "backup manual",
          "restauro de backup",
          "proteção por PIN",
        ],
      },
      { type: "p", text: "**No Premium:**" },
      {
        type: "bullets",
        items: [
          "resumos por semana",
          "resumos por ano",
          "período personalizado",
          "backup automático local",
          "exportação Excel",
          "biometria",
          "tema escuro / modo do sistema",
          "personalização de ícones",
        ],
      },
      {
        type: "p",
        text: "As funcionalidades disponíveis podem evoluir com novas versões da aplicação.",
      },
    ],
  },
  {
    id: "nao-faz",
    title: "O que a aplicação não faz",
    icon: "no",
    tone: "accent",
    blocks: [
      {
        type: "p",
        text: "Para evitar dúvidas, é importante esclarecer que o Ponto Zero:",
      },
      {
        type: "bullets",
        items: [
          "não se liga a bancos",
          "não sincroniza automaticamente contas bancárias",
          "não toma decisões pelo utilizador",
          "não fornece aconselhamento financeiro",
          "não fornece aconselhamento fiscal",
          "não fornece aconselhamento contabilístico",
          "não faz recomendações de investimento",
        ],
      },
      {
        type: "p",
        text: "A app foi criada para organização financeira pessoal, não para substituição de aconselhamento profissional.",
      },
    ],
  },
];

export const objectiveSection: FeatureSectionData = {
  id: "objetivo",
  title: "O objetivo do Ponto Zero",
  icon: "target",
  tone: "accent",
  blocks: [
    {
      type: "p",
      text: "O objetivo do Ponto Zero é dar ao utilizador uma visão mais clara, consistente e consciente da sua realidade financeira.",
    },
    { type: "p", text: "A aplicação foi construída para ajudar a:" },
    {
      type: "bullets",
      items: [
        "organizar movimentos",
        "compreender hábitos financeiros",
        "acompanhar poupanças",
        "acompanhar dívidas",
        "tomar decisões com base em informação melhor estruturada",
      ],
    },
    {
      type: "p",
      text: "Sem automatismos confusos e sem promessas irreais, o foco é dar controlo ao utilizador sobre os seus próprios dados e sobre a sua própria organização financeira.",
    },
  ],
};