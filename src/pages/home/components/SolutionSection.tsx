import { CircleDollarSign, ArrowUpDown, Repeat, PiggyBank, Landmark, WifiOff } from "lucide-react";
import Reveal from "@/components/base/Reveal";

const trackables = [
  { icon: CircleDollarSign, label: "Saldo atual" },
  { icon: ArrowUpDown, label: "Receitas" },
  { icon: Repeat, label: "Despesas fixas e variáveis" },
  { icon: PiggyBank, label: "Poupanças" },
  { icon: Landmark, label: "Dívidas e empréstimos" },
];

export default function SolutionSection() {
  return (
    <section className="relative py-20 md:py-28 bg-background-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[24rem] h-[24rem] rounded-full bg-primary-100/60 blur-3xl" />
      <div className="relative w-full px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
                A solução
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-950">
                Clareza total
              </h2>
              <p className="mt-5 text-base md:text-lg text-foreground-600 leading-relaxed max-w-xl">
                O Ponto Zero mostra a tua situação financeira real num só lugar. Podes acompanhar
                tudo o que importa, sem ligação a bancos e sem sincronizações externas.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-lg bg-secondary-100 px-4 py-3">
                <WifiOff className="w-5 h-5 text-secondary-800" />
                <span className="text-sm font-medium text-secondary-900">
                  Sem ligação a bancos · Sem sincronizações externas
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trackables.map(({ icon: Icon, label }, i) => (
                <Reveal key={label} delay={80 * i}>
                  <div className="flex items-center gap-3 rounded-lg bg-background-100 border border-background-200/70 px-4 py-4 hover-lift">
                    <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-primary-500">
                      <Icon className="w-5 h-5 text-white" />
                    </span>
                    <span className="text-sm font-semibold text-foreground-900">{label}</span>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={400}>
                <div className="flex items-center gap-3 rounded-lg bg-accent-100 border border-accent-200 px-4 py-4">
                  <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-accent-500 text-foreground-950">
                    <PiggyBank className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-semibold text-accent-900">Tudo num só lugar</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}