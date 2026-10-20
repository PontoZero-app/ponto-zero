import { Check, Sparkles } from "lucide-react";
import Reveal from "@/components/base/Reveal";
import InstallButton from "@/components/feature/InstallButton";

const freeFeatures = [
  "Registo de receitas e despesas",
  "Contas e carteiras",
  "Categorias personalizadas",
  "Resumos mensais",
  "Backup manual",
  "Proteção por PIN",
];

const premiumFeatures = [
  "Resumos semanais e anuais",
  "Período personalizado",
  "Backup automático",
  "Exportação para Excel",
  "Proteção por biometria",
  "Personalização extra",
];

export default function PricingSection() {
  return (
    <section id="planos" className="relative py-20 md:py-28 bg-background-100">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
              Planos
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground-950 text-balance">
              Começa grátis. Faz upgrade quando quiseres.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl">
          <Reveal>
            <article className="h-full rounded-2xl bg-background-50 border border-background-200/80 p-7 md:p-8 flex flex-col">
              <h3 className="font-heading text-xl font-bold text-foreground-950">Versão Gratuita</h3>
              <p className="mt-2 text-sm text-foreground-600">
                O essencial para começares a controlar o teu dinheiro.
              </p>
              <p className="mt-6 font-heading text-3xl font-extrabold text-foreground-950">0 €</p>
              <ul className="mt-6 space-y-3 flex-1">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground-700">
                    <span className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center rounded-full bg-background-200">
                      <Check className="w-3 h-3 text-foreground-700" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <InstallButton variant="ghost" className="w-full" />
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="relative h-full rounded-2xl bg-secondary-900 text-background-50 p-7 md:p-8 flex flex-col overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary-500/25 blur-2xl" />
              <div className="relative flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold">Versão Premium</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500 text-foreground-950 text-xs font-bold px-3 py-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Recomendado
                </span>
              </div>
              <p className="relative mt-2 text-sm text-background-200/85">
                Mais controlo, mais automação e mais insights.
              </p>
              <p className="relative mt-6 font-heading text-3xl font-extrabold">
                Premium
                <span className="ml-2 text-sm font-medium text-background-200/70">
                  ativação opcional
                </span>
              </p>
              <ul className="relative mt-6 space-y-3 flex-1">
                {premiumFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-background-100">
                    <span className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center rounded-full bg-primary-500">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="relative mt-7">
                <InstallButton variant="light" className="w-full" />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}