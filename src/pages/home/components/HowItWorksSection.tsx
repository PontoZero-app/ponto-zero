import { PencilLine, BarChart3, Target, Users } from "lucide-react";
import Reveal from "@/components/base/Reveal";
import { steps } from "@/mocks/appScreens";

const icons = [PencilLine, BarChart3, Target];

export default function HowItWorksSection() {
  return (
    <section className="relative py-20 md:py-28 bg-background-50">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
              Como funciona
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground-950 text-balance">
              Simples em três passos
            </h2>
            <p className="mt-4 text-base text-foreground-600">
              Sem automatismos confusos. Sem sincronizações externas. Só clareza.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={step.title} delay={100 * i}>
                <article className="relative h-full rounded-xl bg-background-100 border border-background-200/80 p-6 hover-lift hover:border-primary-300">
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-primary-500 text-white">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="font-heading text-4xl font-extrabold text-background-300">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground-950">{step.title}</h3>
                  <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 rounded-2xl bg-primary-50 border border-primary-200/70 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5">
            <span className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-primary-500 text-white">
              <Users className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-foreground-950">Para quem é</h3>
              <p className="mt-1.5 text-sm md:text-base text-foreground-700 leading-relaxed">
                Pessoas reais. Quem quer controlar receitas, acabar com dívidas e poupar.{" "}
                <strong className="text-foreground-950 font-semibold">Não é uma app para traders.</strong>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}