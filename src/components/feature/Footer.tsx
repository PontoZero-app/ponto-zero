import { Link } from "react-router-dom";
import { Mail, ShieldCheck } from "lucide-react";
import { APP_INFO } from "@/config/app";
import { NAV_ITEMS } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-secondary-950 text-background-50 mt-0">
      <div className="w-full px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5 flex flex-col items-center text-center">
            <div className="inline-flex items-center bg-background-50 rounded-2xl px-4 py-3 mb-5">
              <img
                src={APP_INFO.logo}
                alt="Logótipo Ponto Zero"
                title="Ponto Zero — controlo financeiro pessoal"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-background-200/80 leading-relaxed max-w-sm">
              O controlo financeiro começa aqui. Organiza o teu dinheiro com clareza — sem anúncios,
              sem contas externas e sem recolha de dados pessoais.
            </p>
            <a
              href={`mailto:${APP_INFO.email}`}
              className="inline-flex items-center gap-2 mt-5 text-sm text-background-100 hover:text-accent-400 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              {APP_INFO.email}
            </a>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-heading font-semibold text-background-50 mb-4">
              <Link to="/" className="hover:text-accent-400 transition-colors">
                Navegação
              </Link>
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-background-200/80 hover:text-accent-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading font-semibold text-background-50 mb-4">
              <span>Privacidade</span>
            </h4>
            <div className="flex items-start gap-3 text-sm text-background-200/80 leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
              <p>
                Os teus dados ficam apenas no teu dispositivo. Sem contas, sem servidores, sem
                rastreamento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background-50/10">
        <div className="w-full px-4 md:px-8 py-5 flex justify-center">
          <p className="text-xs text-background-200/70 text-center">
            © 2026 Ponto Zero — {APP_INFO.location}
          </p>
        </div>
      </div>
    </footer>
  );
}