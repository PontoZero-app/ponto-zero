export interface CookiesBlock {
  type: "p" | "bullets" | "numbers" | "link" | "callout";
  text?: string;
  items?: string[];
  linkLabel?: string;
  linkTo?: string;
  title?: string;
  blocks?: CookiesBlock[];
}

export interface CookiesSection {
  id: string;
  number: number;
  title: string;
  blocks: CookiesBlock[];
}

export const cookiesLastUpdated = "2026-03-09";

export const cookiesIntro =
  "O website do **Ponto Zero** pode utilizar cookies para garantir o correto funcionamento da página e proporcionar uma experiência de navegação adequada.";

export const cookiesSections: CookiesSection[] = [
  {
    id: "o-que-sao-cookies",
    number: 1,
    title: "O que são cookies",
    blocks: [
      {
        type: "p",
        text: "Cookies são pequenos ficheiros de texto armazenados no dispositivo do utilizador quando visita um website.",
      },
      {
        type: "p",
        text: "Estes ficheiros permitem que o site funcione corretamente e ajudam a garantir uma navegação estável e segura.",
      },
    ],
  },
  {
    id: "cookies-utilizados",
    number: 2,
    title: "Cookies utilizados no website",
    blocks: [
      {
        type: "callout",
        title: "Cookies essenciais",
        blocks: [
          {
            type: "p",
            text: "O website do Ponto Zero utiliza apenas cookies necessários para o funcionamento técnico da página.",
          },
          { type: "p", text: "Estes cookies podem estar relacionados com:" },
          {
            type: "bullets",
            items: [
              "navegação entre páginas",
              "funcionamento básico do website",
              "preferências técnicas do navegador",
            ],
          },
          {
            type: "p",
            text: "Sem estes cookies algumas partes do site podem não funcionar corretamente.",
          },
        ],
      },
    ],
  },
  {
    id: "cookies-aplicacao",
    number: 3,
    title: "Cookies da aplicação",
    blocks: [
      {
        type: "callout",
        blocks: [
          {
            type: "p",
            text: "A aplicação **Ponto Zero** não utiliza cookies nem tecnologias de rastreamento.",
          },
          {
            type: "link",
            text: "Todos os dados da aplicação são armazenados exclusivamente no dispositivo do utilizador, conforme descrito na ",
            linkLabel: "Política de Privacidade",
            linkTo: "/privacidade",
          },
        ],
      },
    ],
  },
  {
    id: "gerir-cookies",
    number: 4,
    title: "Como gerir cookies",
    blocks: [
      {
        type: "p",
        text: "O utilizador pode configurar ou desativar cookies nas definições do seu navegador.",
      },
      {
        type: "p",
        text: "Note que a desativação de cookies essenciais pode afetar o funcionamento correto de alguns websites.",
      },
    ],
  },
  {
    id: "alteracoes-politica",
    number: 5,
    title: "Alterações a esta política",
    blocks: [
      {
        type: "p",
        text: "Esta política pode ser atualizada para refletir alterações legais ou técnicas relacionadas com o funcionamento do website.",
      },
      {
        type: "p",
        text: "A data da última atualização será sempre indicada no topo deste documento.",
      },
    ],
  },
];