import { TrendingDown, EyeOff, CalendarClock, Wallet } from "lucide-react";
import Reveal from "@/components/base/Reveal";

const problems = [
  { icon: Wallet, text: "Pequenas despesas acumulam" },
  { icon: EyeOff, text: "Subscrições passam despercebidas" },
  { icon: TrendingDown, text: "Empréstimos parecem menores do que são" },
  { icon: CalendarClock, text: "O dinheiro desaparece antes do fim do mês" },
];

export default function ProblemSection() {
  return (
    <section className="relative py-20 md:py-28 bg-background-100">
      <div className="w-full px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
                O problema
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground-950 text-balance">
                Porque a maioria das pessoas perde o controlo financeiro
              </h2>
              <p className="mt-4 text-lg text-primary-700 font-semibold">
                Não é falta de rendimento. É falta de visibilidade.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="rounded-2xl bg-background-50 border border-background-200/80 p-6 md:p-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {problems.map(({ icon: Icon, text }) => (
                    <li
                      key={text}
                      className="flex items-start gap-3 rounded-lg bg-background-100/70 p-4"
                    >
                      <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-accent-100">
                        <Icon className="w-4 h-4 text-accent-700" />
                      </span>
                      <span className="text-sm text-foreground-800 leading-snug pt-0.5">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-6 rounded-2xl bg-secondary-900 text-background-50 p-6 md:p-8 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-primary-500/20 blur-2xl" />
                <p className="relative text-lg md:text-xl font-semibold leading-relaxed text-balance">
                  O problema não é gastar. É não saber <span className="text-accent-400">quanto realmente podes gastar</span>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}