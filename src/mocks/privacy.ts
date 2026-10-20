export interface PrivacyBlock {
  type: "p" | "bullets" | "numbers" | "link" | "callout";
  text?: string;
  items?: string[];
  linkLabel?: string;
  linkTo?: string;
  title?: string;
  blocks?: PrivacyBlock[];
}

export interface PrivacySection {
  id: string;
  number: number;
  title: string;
  blocks: PrivacyBlock[];
}

export const privacyLastUpdated = "2026-03-09";

export const privacyIntro =
  "**Resumo:** A aplicação Ponto Zero funciona em modo **offline-first**. Os dados são guardados no teu dispositivo. A app **não** cria contas, **não** recolhe dados pessoais e **não** envia dados financeiros para servidores.";

export const privacySections: PrivacySection[] = [
  {
    id: "responsavel-tratamento",
    number: 1,
    title: "Responsável pelo tratamento",
    blocks: [
      { type: "p", text: "Responsável pelo tratamento de dados da aplicação **Ponto Zero**:" },
      { type: "p", text: "**Ricardo Santos** — Portugal" },
      {
        type: "link",
        text: "Email: ",
        linkLabel: "suporte.app.pontozero@gmail.com",
        linkTo: "mailto:suporte.app.pontozero@gmail.com",
      },
    ],
  },
  {
    id: "principios",
    number: 2,
    title: "Princípios fundamentais da aplicação",
    blocks: [
      { type: "p", text: "A aplicação **Ponto Zero** foi desenvolvida segundo os princípios de:" },
      {
        type: "bullets",
        items: ["**Privacidade por design**", "**Minimização de dados**", "**Armazenamento local**"],
      },
      { type: "p", text: "A aplicação:" },
      {
        type: "bullets",
        items: [
          "Não cria contas de utilizador",
          "Não requer login",
          "Não solicita nome, email ou contactos",
          "Não recolhe localização",
          "Não identifica diretamente o utilizador",
          "Não possui servidores próprios para armazenamento de dados financeiros",
          "Não envia dados financeiros para a internet",
          "Não integra publicidade",
          "Não integra sistemas de analytics",
          "Não integra rastreadores",
          "Não partilha dados com terceiros",
        ],
      },
      {
        type: "p",
        text: "A aplicação funciona em modelo **offline-first**, sendo possível utilizar as suas funcionalidades principais sem ligação à internet.",
      },
    ],
  },
  {
    id: "dados-armazenados",
    number: 3,
    title: "Dados armazenados",
    blocks: [
      {
        type: "p",
        text: "Todos os dados introduzidos pelo utilizador são armazenados **exclusivamente no dispositivo**.",
      },
      { type: "p", text: "Exemplos de dados guardados localmente:" },
      {
        type: "bullets",
        items: [
          "Registos de receitas",
          "Registos de despesas",
          "Contas financeiras",
          "Categorias",
          "Movimentos de poupança",
          "Empréstimos e respetiva evolução",
          "Preferências da aplicação",
          "Definições de segurança (PIN e opções de biometria)",
        ],
      },
      { type: "p", text: "O desenvolvedor **não tem acesso a estes dados**." },
    ],
  },
  {
    id: "seguranca-autenticacao",
    number: 4,
    title: "Segurança e autenticação",
    blocks: [
      {
        type: "callout",
        title: "PIN",
        blocks: [
          { type: "p", text: "A aplicação pode permitir a proteção através de **PIN**." },
          {
            type: "p",
            text: "O PIN é armazenado localmente utilizando mecanismos de armazenamento seguro disponibilizados pelo sistema operativo do dispositivo.",
          },
        ],
      },
      {
        type: "callout",
        title: "Biometria",
        blocks: [
          {
            type: "p",
            text: "A autenticação biométrica (por exemplo impressão digital ou reconhecimento facial):",
          },
          {
            type: "bullets",
            items: [
              "É processada exclusivamente pelo sistema operativo do dispositivo",
              "Não é recolhida pela aplicação",
              "Não é armazenada pela aplicação",
            ],
          },
          {
            type: "p",
            text: "A aplicação apenas recebe uma confirmação de sucesso ou falha da autenticação.",
          },
        ],
      },
    ],
  },
  {
    id: "ligacoes-internet",
    number: 5,
    title: "Ligações à internet",
    blocks: [
      {
        type: "p",
        text: "A aplicação **não necessita de ligação à internet** para funcionar nas suas funcionalidades principais.",
      },
      {
        type: "p",
        text: "Nenhum dado financeiro introduzido pelo utilizador é transmitido online pelo desenvolvedor.",
      },
      { type: "p", text: "A aplicação pode abrir ligações externas, por exemplo para:" },
      { type: "bullets", items: ["website oficial", "páginas de suporte"] },
      {
        type: "p",
        text: "Ao aceder a serviços externos, passam a aplicar-se as respetivas políticas de privacidade desses serviços.",
      },
    ],
  },
  {
    id: "backups",
    number: 6,
    title: "Backups e exportação de dados",
    blocks: [
      {
        type: "p",
        text: "A aplicação permite ao utilizador efetuar **backups dos seus dados**.",
      },
      {
        type: "callout",
        title: "Backups manuais",
        blocks: [
          {
            type: "bullets",
            items: [
              "O ficheiro é criado localmente",
              "A exportação ocorre apenas quando solicitada pelo utilizador",
              "O utilizador decide onde guardar ou partilhar o ficheiro",
              "Após a exportação, o controlo do ficheiro passa a ser exclusivamente do utilizador",
            ],
          },
        ],
      },
      {
        type: "callout",
        title: "Backups automáticos (Premium)",
        blocks: [
          {
            type: "bullets",
            items: [
              "Na versão Premium, o utilizador pode ativar **backups automáticos locais**",
              "Os backups automáticos são gerados no próprio dispositivo",
              "Nenhum ficheiro é enviado para servidores do desenvolvedor",
              "O utilizador é responsável pela gestão e armazenamento dos ficheiros gerados",
            ],
          },
        ],
      },
      {
        type: "p",
        text: "O desenvolvedor **não recebe nem armazena cópias de backups**, sejam manuais ou automáticos.",
      },
    ],
  },
  {
    id: "permissoes",
    number: 7,
    title: "Permissões do dispositivo",
    blocks: [
      {
        type: "p",
        text: "A aplicação pode solicitar permissões apenas quando necessárias para determinadas funcionalidades, como:",
      },
      {
        type: "bullets",
        items: [
          "Acesso ao armazenamento (para exportação ou importação de backups)",
          "Utilização de biometria (quando ativada pelo utilizador)",
        ],
      },
      {
        type: "p",
        text: "Nenhuma permissão é utilizada para recolha de dados pessoais, rastreamento ou criação de perfis de utilizador.",
      },
      {
        type: "p",
        text: "O sistema operativo do dispositivo pode disponibilizar informações técnicas mínimas necessárias ao funcionamento dessas permissões.",
      },
    ],
  },
  {
    id: "retencao",
    number: 8,
    title: "Retenção dos dados",
    blocks: [
      {
        type: "p",
        text: "Os dados permanecem armazenados no dispositivo até que o utilizador:",
      },
      {
        type: "bullets",
        items: [
          "Apague manualmente os registos",
          "Limpe os dados da aplicação",
          "Desinstale a aplicação",
        ],
      },
      { type: "p", text: "O desenvolvedor não mantém qualquer cópia externa desses dados." },
    ],
  },
  {
    id: "direitos-rgpd",
    number: 9,
    title: "Direitos do utilizador (RGPD)",
    blocks: [
      {
        type: "p",
        text: "Como os dados permanecem apenas no dispositivo do utilizador, os direitos previstos no RGPD podem ser exercidos diretamente na aplicação:",
      },
      {
        type: "bullets",
        items: [
          "**Direito de acesso** — o utilizador pode consultar os dados armazenados na aplicação",
          "**Direito de retificação** — o utilizador pode editar ou corrigir os seus registos",
          "**Direito ao apagamento** — o utilizador pode eliminar dados ou desinstalar a aplicação",
          "**Direito à portabilidade** — o utilizador pode exportar os seus dados através da funcionalidade de backup",
        ],
      },
    ],
  },
  {
    id: "criancas",
    number: 10,
    title: "Crianças",
    blocks: [
      { type: "p", text: "A aplicação não recolhe dados pessoais." },
      {
        type: "p",
        text: "Não é dirigida especificamente a menores de 16 anos, podendo ser utilizada sob supervisão responsável.",
      },
    ],
  },
  {
    id: "premium",
    number: 11,
    title: "Funcionalidades Premium",
    blocks: [
      { type: "p", text: "Algumas funcionalidades podem estar disponíveis mediante pagamento." },
      {
        type: "bullets",
        items: [
          "As compras são processadas exclusivamente pela Google Play ou Apple App Store",
          "O desenvolvedor não tem acesso a dados de pagamento",
          "O desenvolvedor não recebe dados pessoais associados à transação",
          "O desenvolvedor não gere reembolsos",
          "Os reembolsos seguem exclusivamente as políticas da respetiva loja",
        ],
      },
      {
        type: "p",
        text: "A aquisição de funcionalidades Premium **não implica recolha adicional de dados pessoais**.",
      },
    ],
  },
  {
    id: "limitacao",
    number: 12,
    title: "Limitação importante",
    blocks: [
      { type: "p", text: "O **Ponto Zero** é uma ferramenta de organização financeira pessoal." },
      { type: "p", text: "A aplicação **não fornece**:" },
      {
        type: "bullets",
        items: [
          "aconselhamento financeiro",
          "aconselhamento fiscal",
          "aconselhamento contabilístico",
          "recomendações de investimento",
        ],
      },
      {
        type: "p",
        text: "Todas as decisões financeiras tomadas com base na aplicação são da responsabilidade do utilizador.",
      },
    ],
  },
  {
    id: "alteracoes",
    number: 13,
    title: "Alterações a esta política",
    blocks: [
      { type: "p", text: "Esta Política de Privacidade pode ser atualizada para refletir:" },
      {
        type: "bullets",
        items: ["alterações legais", "melhorias técnicas", "novas funcionalidades da aplicação"],
      },
      {
        type: "p",
        text: "A data da última atualização será sempre indicada no topo do documento.",
      },
    ],
  },
  {
    id: "contacto",
    number: 14,
    title: "Contacto",
    blocks: [
      { type: "p", text: "Para questões relacionadas com privacidade:" },
      {
        type: "link",
        text: "",
        linkLabel: "suporte.app.pontozero@gmail.com",
        linkTo: "mailto:suporte.app.pontozero@gmail.com",
      },
      { type: "p", text: "Portugal" },
    ],
  },
  {
    id: "aceitacao",
    number: 15,
    title: "Aceitação",
    blocks: [
      {
        type: "p",
        text: "Ao utilizar a aplicação, o utilizador confirma que leu e aceita esta Política de Privacidade.",
      },
    ],
  },
];