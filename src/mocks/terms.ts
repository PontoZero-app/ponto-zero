export interface TermsBlock {
  type: "p" | "bullets" | "numbers" | "link";
  text?: string;
  items?: string[];
  linkLabel?: string;
  linkTo?: string;
}

export interface TermsSection {
  id: string;
  number: number;
  title: string;
  blocks: TermsBlock[];
}

export const termsLastUpdated = "2026-03-09";

export const termsIntro =
  "Estes Termos e Condições regulam a utilização da aplicação **Ponto Zero**, disponibilizada por **Ricardo Santos**, Portugal (doravante designado por \"**Desenvolvedor**\"). Ao instalar, aceder ou utilizar a Aplicação, o Utilizador declara que leu, compreendeu e aceita estes Termos e Condições de Utilização.";

export const termsSections: TermsSection[] = [
  {
    id: "finalidade",
    number: 1,
    title: "Finalidade da aplicação",
    blocks: [
      {
        type: "p",
        text: "A aplicação Ponto Zero é uma ferramenta de **organização financeira pessoal**, que pode incluir funcionalidades como:",
      },
      {
        type: "bullets",
        items: [
          "Registo de receitas e despesas",
          "Gestão de contas, património, poupanças e dívidas/empréstimos",
          "Resumos e indicadores de organização financeira",
          "Exportação/backup de dados",
        ],
      },
      {
        type: "p",
        text: "A Aplicação **não** está ligada a instituições bancárias, nem acede a contas bancárias do Utilizador.",
      },
    ],
  },
  {
    id: "ausencia-aconselhamento",
    number: 2,
    title: "Ausência de aconselhamento",
    blocks: [
      {
        type: "p",
        text: "A Aplicação **não** fornece aconselhamento financeiro, fiscal, contabilístico ou recomendações de investimento. Qualquer informação, resumo ou indicador apresentado é de natureza **meramente informativa e organizacional**.",
      },
      {
        type: "p",
        text: "Todas as decisões tomadas com base nos dados inseridos ou apresentados são da **inteira responsabilidade do Utilizador**.",
      },
    ],
  },
  {
    id: "licenca",
    number: 3,
    title: "Licença de utilização",
    blocks: [
      {
        type: "p",
        text: "O Desenvolvedor concede ao Utilizador uma **licença limitada, não exclusiva, revogável e intransmissível** para utilizar a Aplicação no seu dispositivo pessoal.",
      },
      { type: "p", text: "Esta licença não permite:" },
      {
        type: "bullets",
        items: [
          "Copiar, reproduzir ou redistribuir a Aplicação",
          "Modificar, adaptar ou tentar aceder ao código-fonte",
          "Utilizar a Aplicação para fins ilegais, abusivos ou contrários à lei",
        ],
      },
    ],
  },
  {
    id: "responsabilidade-utilizador",
    number: 4,
    title: "Conta, dispositivo e responsabilidade do Utilizador",
    blocks: [
      { type: "p", text: "O Utilizador é responsável por:" },
      {
        type: "bullets",
        items: [
          "**Inserir dados corretos** e verificar a exatidão dos registos",
          "Manter o dispositivo protegido (PIN do sistema, biometria do sistema, bloqueio de ecrã, etc.)",
          "Gerir as opções de segurança internas (ex.: **PIN** e, quando disponível, **biometria**)",
          "Efetuar **backups** caso pretenda conservar/restaurar dados",
        ],
      },
    ],
  },
  {
    id: "armazenamento",
    number: 5,
    title: "Armazenamento local, backups e perda de dados",
    blocks: [
      {
        type: "p",
        text: "Os dados são armazenados **localmente no dispositivo** do Utilizador. A Aplicação não mantém, por defeito, servidores próprios com dados financeiros do Utilizador.",
      },
      {
        type: "p",
        text: "A aplicação Ponto Zero pode disponibilizar funcionalidades de backup/exportação. Os backups podem ser **manuais** e, em determinadas versões/planos (ex.: Premium), podem existir opções de **backup automático** que o Utilizador pode ativar/desativar.",
      },
      {
        type: "p",
        text: "O Desenvolvedor não é responsável por perda de dados resultante de, entre outros:",
      },
      {
        type: "bullets",
        items: [
          "Desinstalação da Aplicação",
          "Falhas do dispositivo ou do sistema operativo",
          "Roubo, perda ou dano físico do equipamento",
          "Limpeza de armazenamento pelo sistema",
          "Ausência de backup",
        ],
      },
      { type: "p", text: "Não é possível garantir a recuperação de dados apagados." },
    ],
  },
  {
    id: "seguranca",
    number: 6,
    title: "Segurança (PIN e biometria)",
    blocks: [
      {
        type: "p",
        text: "A Aplicação pode incluir mecanismos de proteção local (ex.: PIN e biometria). Estes mecanismos destinam-se a **proteção básica local** e não constituem um sistema inviolável.",
      },
      {
        type: "p",
        text: "A segurança física do dispositivo e o controlo de acesso ao mesmo são da responsabilidade do Utilizador.",
      },
    ],
  },
  {
    id: "premium",
    number: 7,
    title: "Funcionalidades Premium e compras",
    blocks: [
      {
        type: "p",
        text: "Algumas funcionalidades podem estar disponíveis mediante pagamento (ex.: Premium/Pro). As compras, quando aplicável, são processadas pela loja oficial do dispositivo (Google Play / Apple App Store).",
      },
      {
        type: "bullets",
        items: [
          "O Desenvolvedor não tem acesso a dados de pagamento",
          "Reembolsos seguem as políticas da respetiva loja",
          "As funcionalidades incluídas em planos pagos podem ser ajustadas ou alteradas em futuras versões",
        ],
      },
    ],
  },
  {
    id: "disponibilidade",
    number: 8,
    title: "Disponibilidade, alterações e descontinuação",
    blocks: [
      {
        type: "p",
        text: "O Ponto Zero pode ser atualizado, modificado, melhorado ou descontinuado a qualquer momento. Funcionalidades e preços podem alterar-se entre versões.",
      },
    ],
  },
  {
    id: "limitacao",
    number: 9,
    title: "Limitação de responsabilidade",
    blocks: [
      {
        type: "p",
        text: "Na máxima extensão permitida pela lei aplicável, o Desenvolvedor não será responsável por perdas financeiras, danos indiretos, decisões tomadas com base na informação da Aplicação, erros introduzidos pelo Utilizador, falhas do dispositivo/sistema operativo ou incompatibilidades técnicas futuras.",
      },
    ],
  },
  {
    id: "propriedade",
    number: 10,
    title: "Propriedade intelectual",
    blocks: [
      {
        type: "p",
        text: "Todos os direitos relativos à Aplicação Ponto Zero (incluindo design, estrutura, código, identidade visual e nome) pertencem ao Desenvolvedor. É proibida a reprodução, modificação ou redistribuição sem autorização expressa.",
      },
    ],
  },
  {
    id: "privacidade",
    number: 11,
    title: "Privacidade",
    blocks: [
      {
        type: "link",
        text: "A utilização da Aplicação está também sujeita à ",
        linkLabel: "Política de Privacidade",
        linkTo: "/privacidade",
      },
    ],
  },
  {
    id: "alteracoes",
    number: 12,
    title: "Alterações aos Termos",
    blocks: [
      {
        type: "p",
        text: "O Desenvolvedor pode atualizar estes Termos e Condições sempre que necessário. A versão mais recente estará sempre disponível através da Aplicação ou do website oficial.",
      },
    ],
  },
  {
    id: "lei",
    number: 13,
    title: "Lei aplicável",
    blocks: [
      {
        type: "p",
        text: "Estes Termos regem-se pela legislação portuguesa. Em caso de litígio, aplica-se o foro legalmente competente em Portugal.",
      },
    ],
  },
  {
    id: "contacto",
    number: 14,
    title: "Contacto",
    blocks: [
      {
        type: "p",
        text: "Suporte e questões legais: **suporte.app.pontozero@gmail.com**",
      },
      {
        type: "p",
        text: "Ao utilizar a Aplicação, o Utilizador concorda com estes Termos e Condições de Utilização.",
      },
    ],
  },
];