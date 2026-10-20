import Reveal from "@/components/base/Reveal";
import DynamicIcon from "@/components/base/DynamicIcon";
import { mainFeatures } from "@/mocks/appScreens";

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="relative py-20 md:py-28 bg-background-50">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
              Funcionalidades principais
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground-950 text-balance">
              Tudo o que precisas, nada que te distraia
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mainFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={60 * i} className="h-full">
              <article className="h-full rounded-xl bg-background-100 border border-background-200/70 p-5 hover-lift hover:border-accent-300">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-100 mb-4">
                  <DynamicIcon name={feature.icon} className="w-5 h-5 text-accent-700" />
                </span>
                <h3 className="text-base font-semibold text-foreground-950">{feature.title}</h3>
                <p className="mt-1.5 text-sm text-foreground-600 leading-relaxed">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={420} className="h-full">
            <article className="h-full rounded-xl bg-primary-600 text-white p-5 flex flex-col justify-center">
              <p className="font-heading font-semibold text-lg leading-snug">
                E ainda muito mais por descobrir
              </p>
              <p className="mt-1.5 text-sm text-primary-50/90">
                Instala a app e explora todas as funcionalidades.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}