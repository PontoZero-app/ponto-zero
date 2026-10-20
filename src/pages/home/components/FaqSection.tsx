import { useState } from "react";
import { ChevronDown, Compass, ShieldCheck, Eye } from "lucide-react";
import Reveal from "@/components/base/Reveal";
import { faqs } from "@/mocks/appScreens";

const principles = [
  { icon: ShieldCheck, title: "Privacidade", text: "Os dados nunca saem do teu dispositivo." },
  { icon: Compass, title: "Offline-first", text: "Funciona sempre, com ou sem internet." },
  { icon: Eye, title: "Decisões conscientes", text: "Visibilidade real para escolhas melhores." },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="sobre" className="relative py-20 md:py-28 bg-background-50 scroll-mt-20">
      <div className="w-full px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
                Perguntas frequentes
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground-950 text-balance">
                Tens dúvidas? Nós respondemos.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={faq.question} delay={60 * i}>
                    <div className="rounded-xl bg-background-100 border border-background-200/80 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-background-200/50 transition-colors"
                      >
                        <span className="font-semibold text-foreground-950 text-base">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 shrink-0 text-primary-600 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-4 text-sm text-foreground-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="rounded-2xl bg-secondary-900 text-background-50 p-7 md:p-8 relative overflow-hidden h-full">
                <div className="absolute -right-12 -bottom-12 w-44 h-44 rounded-full bg-primary-500/20 blur-2xl" />
                <div className="relative">
                  <h3 className="font-heading text-2xl font-bold">Porque nasceu o Ponto Zero</h3>
                  <p className="mt-4 text-sm text-background-200/85 leading-relaxed">
                    Nasceu de uma necessidade simples: dar clareza financeira a quem gere o dinheiro
                    no dia a dia. Sem complicações, sem dependências externas e com total respeito
                    pela tua privacidade.
                  </p>

                  <div className="mt-7 space-y-4">
                    {principles.map(({ icon: Icon, title, text }) => (
                      <div key={title} className="flex items-start gap-3">
                        <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-primary-500/20">
                          <Icon className="w-4 h-4 text-accent-400" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-background-50">{title}</p>
                          <p className="text-xs text-background-200/75 mt-0.5">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}