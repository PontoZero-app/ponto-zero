import Reveal from "@/components/base/Reveal";
import DynamicIcon from "@/components/base/DynamicIcon";
import { controlCards } from "@/mocks/appScreens";

export default function ControlSection() {
  return (
    <section id="controlar" className="relative py-20 md:py-28 bg-background-100">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
              Organização financeira
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground-950 text-balance">
              O que podes controlar
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {controlCards.map((card, i) => (
            <Reveal key={card.title} delay={70 * i}>
              <article className="h-full rounded-xl bg-background-50 border border-background-200/80 p-6 hover-lift hover:border-primary-300">
                <span className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 mb-5">
                  <DynamicIcon name={card.icon} className="w-6 h-6 text-primary-700" />
                </span>
                <h3 className="text-lg font-semibold text-foreground-950">{card.title}</h3>
                <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
                  {card.description}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={350}>
            <article className="h-full rounded-xl bg-secondary-900 text-background-50 p-6 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary-500/20 blur-2xl" />
              <div className="relative">
                <span className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-500 text-foreground-950 mb-5">
                  <DynamicIcon name="chart" className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-semibold">Visão clara, sempre</h3>
                <p className="mt-2 text-sm text-background-200/80 leading-relaxed">
                  Tudo organizado num só lugar para decidires com confiança.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}