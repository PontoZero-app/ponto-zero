export interface NavItem {
  label: string;
  to: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Suporte", to: "/suporte" },
  { label: "Termos", to: "/termos" },
  { label: "Cookies", to: "/cookies" },
  { label: "Privacidade", to: "/privacidade" },
  { label: "Funcionalidades", to: "/funcionalidades" },
];