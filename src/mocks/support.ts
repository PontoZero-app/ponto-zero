export interface SupportContentBlock {
  type: "p" | "bullets" | "numbers";
  text?: string;
  items?: string[];
}

export interface SupportItem {
  id: string;
  question: string;
  blocks: SupportContentBlock[];
}

export interface SupportSection {
  id: string;
  title: string;
  icon: string;
  items: SupportItem[];
}

export const supportSections: SupportSection[] = [
  {
    id: "problemas-comuns",
    title: "Problemas comuns",
    icon: "support",
    items: [
      {
        id: "perdi-dados",
        question: "Perdi os meus dados",
        blocks: [
          { type: "p", text: "Os dados são guardados **apenas no dispositivo**." },
          { type: "p", text: "Se os dados desapareceram, as causas mais comuns são:" },
          {
            type: "bullets",
            items: [
              "desinstalação da aplicação",
              "limpeza de dados nas definições do sistema",
              "substituição ou formatação do dispositivo",
            ],
          },
          {
            type: "p",
            text: "Se tiveres um **backup**, podes restaurar os dados. Sem backup, infelizmente não é possível recuperar a informação.",
          },
        ],
      },
      {
        id: "troquei-telemovel",
        question: "Troquei de telemóvel",
        blocks: [
          {
            type: "p",
            text: "Para transferir os dados para um novo dispositivo é necessário ter um **backup**.",
          },
          { type: "p", text: "Passos recomendados:" },
          {
            type: "numbers",
            items: [
              "Criar backup no dispositivo antigo",
              "Copiar o ficheiro para o novo dispositivo",
              "Restaurar o backup na aplicação",
            ],
          },
          { type: "p", text: "Sem backup, os dados não podem ser recuperados." },
        ],
      },
      {
        id: "esqueci-pin",
        question: "Esqueci o PIN",
        blocks: [
          {
            type: "p",
            text: "Por motivos de segurança, o PIN **não pode ser recuperado**.",
          },
          {
            type: "p",
            text: "Se não consegues desbloquear a aplicação, será necessário:",
          },
          {
            type: "bullets",
            items: [
              "limpar os dados da aplicação nas definições do sistema",
              "ou reinstalar a aplicação",
            ],
          },
          {
            type: "p",
            text: "Atenção: isto irá apagar os dados guardados localmente.",
          },
        ],
      },
      {
        id: "app-nao-abre",
        question: "A aplicação não abre ou fecha sozinha",
        blocks: [
          { type: "p", text: "Tenta os seguintes passos:" },
          {
            type: "numbers",
            items: [
              "Reiniciar o dispositivo",
              "Atualizar a aplicação",
              "Verificar espaço de armazenamento disponível",
              "Atualizar o sistema operativo",
            ],
          },
          { type: "p", text: "Se o problema continuar, contacta o suporte." },
        ],
      },
      {
        id: "biometria",
        question: "A biometria não funciona",
        blocks: [
          { type: "p", text: "Verifica se:" },
          {
            type: "bullets",
            items: [
              "o dispositivo suporta biometria",
              "tens impressão digital ou reconhecimento facial configurado",
              "o PIN está ativo na aplicação",
            ],
          },
        ],
      },
      {
        id: "app-lenta",
        question: "A aplicação está lenta",
        blocks: [
          {
            type: "p",
            text: "Isto pode acontecer quando o dispositivo tem pouca memória disponível ou muitas aplicações abertas em simultâneo.",
          },
          { type: "p", text: "Tenta:" },
          {
            type: "bullets",
            items: [
              "fechar outras aplicações",
              "reiniciar o dispositivo",
              "confirmar se a aplicação está atualizada",
            ],
          },
        ],
      },
      {
        id: "restaurar-backup",
        question: "Não consigo restaurar um backup",
        blocks: [
          { type: "p", text: "Verifica se:" },
          {
            type: "bullets",
            items: [
              "o ficheiro pertence à aplicação Ponto Zero",
              "o ficheiro não foi alterado manualmente",
              "o ficheiro está completo e não foi corrompido",
            ],
          },
          {
            type: "p",
            text: "Se o ficheiro estiver incompleto ou danificado, o restauro pode não ser possível.",
          },
        ],
      },
      {
        id: "ficheiro-backup",
        question: "Não encontro o ficheiro de backup",
        blocks: [
          {
            type: "p",
            text: "Os ficheiros de backup são guardados no dispositivo no momento da exportação.",
          },
          { type: "p", text: "Dependendo do dispositivo, podem aparecer em:" },
          {
            type: "bullets",
            items: [
              "pasta de transferências",
              "armazenamento interno",
              "localização escolhida pelo utilizador durante a exportação",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "backups",
    title: "Backups",
    icon: "backups",
    items: [
      {
        id: "proteger-dados",
        question: "Como proteger melhor os meus dados?",
        blocks: [
          {
            type: "p",
            text: "Criar backups regularmente é a melhor forma de proteger os teus dados.",
          },
          {
            type: "p",
            text: "Se mudares de telemóvel, perderes o dispositivo ou apagares a aplicação, o backup pode ser a única forma de recuperar a informação.",
          },
        ],
      },
      {
        id: "backup-manual",
        question: "Backup manual",
        blocks: [
          {
            type: "p",
            text: "Podes exportar um ficheiro de backup nas definições da aplicação.",
          },
          { type: "p", text: "Esse ficheiro pode ser guardado em:" },
          {
            type: "bullets",
            items: ["armazenamento do dispositivo", "computador", "serviços de cloud"],
          },
        ],
      },
      {
        id: "backup-automatico",
        question: "Backup automático (Premium)",
        blocks: [
          {
            type: "p",
            text: "Na versão Premium podes ativar **backup automático local**.",
          },
          {
            type: "p",
            text: "Os backups são criados no próprio dispositivo. Nenhum dado é enviado para servidores do desenvolvedor.",
          },
        ],
      },
    ],
  },
  {
    id: "compras-premium",
    title: "Compras Premium",
    icon: "premium",
    items: [
      {
        id: "premium-nao-aparece",
        question: "Comprei Premium e as funcionalidades não aparecem",
        blocks: [
          { type: "p", text: "Tenta os seguintes passos:" },
          {
            type: "numbers",
            items: [
              "Verificar se estás ligado à mesma conta da loja",
              "Reiniciar a aplicação",
              "Confirmar se a aplicação está atualizada",
            ],
          },
          { type: "p", text: "Se o problema continuar, contacta o suporte." },
        ],
      },
      {
        id: "reembolsos",
        question: "Como funcionam reembolsos?",
        blocks: [
          {
            type: "p",
            text: "As compras são processadas pela **Google Play** ou **Apple App Store**.",
          },
          { type: "p", text: "Os reembolsos seguem as políticas da respetiva loja." },
        ],
      },
    ],
  },
  {
    id: "perguntas-rapidas",
    title: "Perguntas rápidas",
    icon: "quick",
    items: [
      {
        id: "usa-internet",
        question: "A aplicação usa internet?",
        blocks: [
          { type: "p", text: "Não. A aplicação funciona principalmente **offline**." },
        ],
      },
      {
        id: "dados-servidores",
        question: "Os meus dados são enviados para servidores?",
        blocks: [
          {
            type: "p",
            text: "Não. Todos os dados são armazenados **apenas no dispositivo**.",
          },
        ],
      },
      {
        id: "conta-bancaria",
        question: "A aplicação liga à minha conta bancária?",
        blocks: [
          {
            type: "p",
            text: "Não. O Ponto Zero não se liga a bancos nem acede a contas bancárias.",
          },
        ],
      },
      {
        id: "varios-dispositivos",
        question: "Posso usar a aplicação em vários dispositivos?",
        blocks: [
          {
            type: "p",
            text: "A aplicação não sincroniza dados entre dispositivos.",
          },
          {
            type: "p",
            text: "Para transferir dados entre dispositivos é necessário utilizar **backup e restauro**.",
          },
        ],
      },
    ],
  },
];