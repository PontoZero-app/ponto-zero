import Reveal from "@/components/base/Reveal";
import PhoneMock, { type PhoneMockProps } from "@/components/base/PhoneMock";
import { appInsideAreas } from "@/mocks/appScreens";

export default function AppInsideSection() {
  return (
    <section id="app-por-dentro" className="relative py-20 md:py-28 bg-background-100 overflow-hidden">
      <div className="absolute top-24 left-0 w-[22rem] h-[22rem] rounded-full bg-primary-100/60 blur-3xl" />
      <div className="relative w-full px-4 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
              A app por dentro
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground-950 text-balance">
              Vê como o Ponto Zero funciona na prática
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {appInsideAreas.map((area) => (
            <a
              key={area.id}
              href={`#area-${area.id}`}
              className="inline-flex items-center rounded-full bg-background-50 border border-background-200/80 px-4 py-2 text-sm font-medium text-foreground-700 hover:border-primary-400 hover:text-primary-700 transition-colors cursor-pointer"
            >
              {area.name}
            </a>
          ))}
        </div>

        <div className="mt-14 space-y-16 md:space-y-24">
          {appInsideAreas.map((area, index) => {
            const screens = area.screens as unknown as PhoneMockProps[];
            const reversed = index % 2 === 1;
            return (
              <div
                key={area.id}
                id={`area-${area.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center scroll-mt-24"
              >
                <div className={`lg:col-span-4 ${reversed ? "lg:order-2" : ""}`}>
                  <Reveal>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-600 text-white font-heading font-bold text-sm">
                        {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground-950">{area.name}</h3>
                    </div>
                    <p className="text-sm font-semibold text-primary-700 mb-3">{area.tagline}</p>
                    <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
                      {area.description}
                    </p>
                  </Reveal>
                </div>

                <div className={`lg:col-span-8 ${reversed ? "lg:order-1" : ""}`}>
                  <Reveal delay={120}>
                    <div
                      className={`flex flex-wrap items-start gap-5 justify-center ${
                        screens.length > 3 ? "mx-auto max-w-[520px]" : "lg:justify-center"
                      }`}
                    >
                      {screens.map((screen, si) => (
                        <PhoneMock
                          key={`${area.id}-${si}`}
                          title={screen.title}
                          badge={screen.badge}
                          tabs={screen.tabs}
                          blocks={screen.blocks}
                          fab={screen.fab}
                          image={screen.image}
                          imageAlt={screen.imageAlt}
                        />
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}