import { Mail, User, MapPin, Clock, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/base/Reveal";
import { APP_INFO } from "@/config/app";

interface ContactRow {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const rows: ContactRow[] = [
  { icon: Mail, label: "Email", value: APP_INFO.email, href: `mailto:${APP_INFO.email}` },
  { icon: User, label: "Desenvolvedor", value: "Ricardo Santos - Ponto Zero Apps" },
  { icon: MapPin, label: "País", value: "Portugal" },
  { icon: Clock, label: "Tempo médio de resposta", value: "24–72 horas úteis" },
];

export default function ContactSupport() {
  return (
    <div className="space-y-12">
      <section id="contacto" className="scroll-mt-24">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-600">Contacto</span>
        <h2 className="mt-3 font-heading text-2xl font-bold text-foreground-950">
          Contacto direto
        </h2>

        <Reveal>
          <div className="mt-6 rounded-2xl bg-background-100 border border-background-200/80 p-6 md:p-8 space-y-5">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-primary-100">
                  <Icon className="w-5 h-5 text-primary-700" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground-500">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm md:text-base font-medium text-primary-700 hover:text-primary-800 underline underline-offset-2 break-all cursor-pointer"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm md:text-base font-medium text-foreground-950">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="sugestoes" className="scroll-mt-24">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-600">Feedback</span>
        <h2 className="mt-3 font-heading text-2xl font-bold text-foreground-950">Sugestões</h2>
        <p className="mt-4 text-sm md:text-base text-foreground-600 leading-relaxed">
          Ideias de melhorias são bem-vindas.
        </p>
        <p className="mt-2 text-sm md:text-base text-foreground-600 leading-relaxed">
          Podes enviar feedback diretamente por email.
        </p>

        <a
          href={`mailto:${APP_INFO.email}?subject=Sugest%C3%A3o%20-%20Ponto%20Zero`}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-secondary-900 text-background-50 font-semibold px-6 py-3 hover:bg-secondary-800 transition-colors cursor-pointer whitespace-nowrap"
        >
          <Send className="w-4 h-4" />
          Enviar sugestão
        </a>
      </section>
    </div>
  );
}