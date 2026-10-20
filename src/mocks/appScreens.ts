export const appInsideAreas = [
  {
    id: "home",
    name: "Home",
    tagline: "Tudo à distância de um olhar",
    description:
      "A Home reúne os atalhos (caixa de mensagens, suporte, redes sociais, site e badge premium), o resumo do período com receitas e despesas, os saldos das contas correntes, as poupanças e os empréstimos ativos. Cada área tem um botão + de atalho para as ações possíveis de efetuar, como fazer uma transferência entre contas.",
    screens: [
      {
        title: "Home",
        image: "/imagens_home/home_resumo.webp",
        imageAlt:
          "Ecrã Home do Ponto Zero com os atalhos, o resumo do período, os saldos das contas correntes e as poupanças",
      },
      {
        title: "Home",
        image: "/imagens_home/home_poupancas_emprestimos.webp",
        imageAlt:
          "Ecrã Home do Ponto Zero com a lista de poupanças e o total poupado, e os empréstimos ativos com o total em dívida",
      },
      {
        title: "Transferência",
        image: "/imagens_home/home_transferencias.webp",
        imageAlt:
          "Ecrã de transferência do Ponto Zero com a conta de origem, a conta de destino, o valor e o botão Transferir",
      },
    ],
  },
  {
    id: "receitas",
    name: "Receitas",
    tagline: "Cada entrada registada no seu lugar",
    description:
      "Vê o resumo do período das receitas, consulta a lista de registos e usa o botão + para efetuar novos registos de receitas em segundos.",
    screens: [
      {
        title: "Receitas",
        image: "/imagens_receitas/receitas_resumo.webp",
        imageAlt:
          "Ecrã de Receitas do Ponto Zero com o resumo do período e a lista de registos de receitas",
      },
      {
        title: "Nova receita",
        image: "/imagens_receitas/receitas_registo.webp",
        imageAlt:
          "Ecrã de registo de nova receita do Ponto Zero com tipo, conta, descrição, valor e data",
      },
    ],
  },
  {
    id: "despesas",
    name: "Despesas",
    tagline: "Fixa ou variável, nada escapa",
    description:
      "O resumo do período separa despesas fixas e variáveis. Consulta a lista de registos de despesas fixas, a lista de despesas variáveis e usa o botão + para efetuar os respetivos registos.",
    screens: [
      {
        title: "Despesas",
        image: "/imagens_despesas/despesas_resumo.webp",
        imageAlt:
          "Ecrã de Despesas do Ponto Zero com o resumo do período de janeiro de 2026, com despesas fixas, despesas variáveis e o total de despesas",
      },
      {
        title: "Despesas fixas",
        image: "/imagens_despesas/despesas_fixas.webp",
        imageAlt:
          "Ecrã de Despesas do Ponto Zero com a lista de registos de despesas fixas como empréstimos, subscrições e faturas da casa",
      },
      {
        title: "Despesas variáveis",
        image: "/imagens_despesas/despesas_variaveis.webp",
        imageAlt:
          "Ecrã de Despesas do Ponto Zero com a lista de registos de despesas variáveis como supermercado, restaurantes e combustível",
      },
      {
        title: "Nova despesa",
        image: "/imagens_despesas/despesas_registo.webp",
        imageAlt:
          "Ecrã de registo de nova despesa do Ponto Zero com o tipo fixa ou variável, categoria, conta, descrição, valor e data",
      },
    ],
  },
  {
    id: "patrimonio",
    name: "Património",
    tagline: "A tua evolução, ao longo do tempo",
    description:
      "Acompanha o resumo do período das poupanças e a lista de registos, o resumo do período dos empréstimos e a lista de atualização dos valores. Os botões + permitem efetuar os registos e as atualizações.",
    screens: [
      {
        title: "Património",
        image: "/imagens_patrimonio/patrimonio_poupanca_resumo.webp",
        imageAlt:
          "Ecrã Património do Ponto Zero com o resumo do período de poupanças e a lista de registos de poupança",
      },
      {
        title: "Novo movimento",
        image: "/imagens_patrimonio/patrimonio_poupanca_registo.webp",
        imageAlt:
          "Ecrã de novo movimento de poupanças do Ponto Zero com crédito, débito, transferência e ajuste, origem, destino, valor, data e descrição",
      },
      {
        title: "Empréstimos",
        image: "/imagens_patrimonio/patrimonio_emprestimos_resumo.webp",
        imageAlt:
          "Ecrã Património do Ponto Zero com o resumo do período de empréstimos, o total em dívida e os empréstimos de habitação, veículo e telemóvel",
      },
      {
        title: "Atualizar dívida",
        image: "/imagens_patrimonio/patrimonio_emprestimos_atualizar.webp",
        imageAlt:
          "Ecrã de atualização de dívida do Ponto Zero com o empréstimo, o valor em dívida, as prestações em falta, a data e a descrição",
      },
    ],
  },
  {
    id: "definicoes",
    name: "Definições",
    tagline: "A app à tua maneira",
    description:
      "Plano & Premium, Tema, Exportar Excel, Personalizar ícones, Segurança, Contas, Categorias, Dados & Backup, Moedas e Tuturial — tudo configurável sem complicações.",
    screens: [
      {
        title: "Definições",
        image: "/imagens_definicoes/definicoes_1.webp",
        imageAlt:
          "Ecrã de Definições do Ponto Zero com as opções Plano & Premium, Tema, Exportar Excel, Personalizar ícones e Segurança",
      },
      {
        title: "Definições",
        image: "/imagens_definicoes/definicoes_2.webp",
        imageAlt:
          "Ecrã de Definições do Ponto Zero com as opções Contas, Categorias, Dados & Backup, Moedas e Tutorial, com a barra de navegação inferior",
      },
    ],
  },
];

export const controlCards = [
  {
    icon: "repeat",
    title: "Fluxo diário",
    description: "Regista receitas e despesas rapidamente e acompanha o impacto no teu saldo.",
  },
  {
    icon: "wallet",
    title: "Contas",
    description: "Organiza o dinheiro por contas diferentes (banco, carteira, cartão, poupança).",
  },
  {
    icon: "piggy",
    title: "Património",
    description: "Acompanha poupanças e a evolução financeira ao longo do tempo.",
  },
  {
    icon: "debts",
    title: "Dívidas",
    description: "Controla empréstimos e acompanha o progresso do pagamento.",
  },
  {
    icon: "chart",
    title: "Resumos",
    description: "Consulta resumos claros por mês, semana, ano ou período personalizado.",
  },
];

export const mainFeatures = [
  { icon: "zap", title: "Registo rápido", description: "Adiciona movimentos em poucos segundos, sem burocracia." },
  { icon: "chart", title: "Resumos financeiros", description: "Vê o teu panorama por mês, semana, ano ou período à escolha." },
  { icon: "piggy", title: "Gestão de património", description: "Segue as tuas poupanças e a evolução do teu dinheiro." },
  { icon: "debts", title: "Gestão de empréstimos", description: "Controla dívidas e o progresso de cada pagamento." },
  { icon: "backup", title: "Backups", description: "Guarda cópias de segurança manuais ou automáticas." },
  { icon: "shield", title: "Segurança", description: "Proteção com PIN e biometria para os teus dados." },
  { icon: "palette", title: "Personalização", description: "Tema, ícones e moedas ao teu gosto." },
];

export const faqs = [
  {
    question: "A app liga ao banco?",
    answer:
      "Não. O Ponto Zero nunca se liga a bancos nem faz sincronizações externas. Introduzes os teus movimentos manualmente e manténs o controlo total.",
  },
  {
    question: "Posso perder dados?",
    answer:
      "Só se desinstalares a app sem antes fazer um backup. Com o backup ativo, os teus dados ficam seguros e podes restaurá-los quando quiseres.",
  },
  {
    question: "Funciona offline?",
    answer:
      "Sim. O Ponto Zero foi desenhado para funcionar totalmente offline. Não precisa de internet para registar movimentos nem para consultar resumos.",
  },
  {
    question: "É gratuita?",
    answer:
      "Sim. A versão gratuita inclui o essencial para começares. Se quiseres, podes ativar o Premium para resumos avançados, backup automático e mais personalização.",
  },
];

export const steps = [
  {
    title: "Regista os teus movimentos",
    description: "Introduz receitas e despesas de forma simples, sem automatismos confusos.",
  },
  {
    title: "Consulta resumos e evolução",
    description: "Vê saldos, poupanças e dívidas num só lugar, com o teu panorama sempre claro.",
  },
  {
    title: "Toma decisões",
    description: "Com visibilidade real, decides com consciência e sem surpresas no fim do mês.",
  },
];