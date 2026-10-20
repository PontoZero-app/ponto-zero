import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import SuportePage from "../pages/suporte/page";
import TermosPage from "../pages/termos/page";
import CookiesPage from "../pages/cookies/page";
import PrivacidadePage from "../pages/privacidade/page";
import FuncionalidadesPage from "../pages/funcionalidades/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/suporte",
    element: <SuportePage />,
  },
  {
    path: "/termos",
    element: <TermosPage />,
  },
  {
    path: "/cookies",
    element: <CookiesPage />,
  },
  {
    path: "/privacidade",
    element: <PrivacidadePage />,
  },
  {
    path: "/funcionalidades",
    element: <FuncionalidadesPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;