import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/config/navigation";
import { APP_INFO } from "@/config/app";
import InstallButton from "@/components/feature/InstallButton";

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !transparent || scrolled;
  const isHome = location.pathname === "/";

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname === to;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-background-50/95 backdrop-blur-md border-b border-background-200/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="w-full px-4 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <div className="flex items-center min-w-0">
          <Link
            to="/"
            className="flex items-center shrink-0 cursor-pointer"
            aria-label="Ponto Zero — Início"
          >
            <img
              src={APP_INFO.logo}
              alt="Logótipo Ponto Zero"
              title="Ponto Zero — controlo financeiro pessoal"
              className="h-8 md:h-10 w-auto"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                isActive(item.to)
                  ? "text-primary-700 bg-primary-50"
                  : "text-foreground-700 hover:text-primary-700 hover:bg-background-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {!isHome ? (
            <Link
              to="/"
              aria-label="Voltar ao início"
              title="Voltar à página inicial"
              className="inline-flex items-center gap-1.5 rounded-md border border-background-200/90 bg-background-100/70 px-2.5 py-2 text-sm font-medium text-foreground-700 whitespace-nowrap transition-colors duration-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar ao início</span>
              <span className="sm:hidden">Início</span>
            </Link>
          ) : null}

          <div className="hidden lg:flex items-center">
            <InstallButton size="sm" />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md text-foreground-900 hover:bg-background-100 cursor-pointer transition-colors"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-400 ease-out ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="bg-background-50 border-t border-background-200/80 px-4 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${
                isActive(item.to)
                  ? "text-primary-700 bg-primary-50"
                  : "text-foreground-800 hover:bg-background-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <InstallButton label="Instalar App" className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}