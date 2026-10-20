import InfoPage from "@/components/feature/InfoPage";
import Reveal from "@/components/base/Reveal";
import RichText from "@/components/base/RichText";
import LegalIndex from "@/components/base/LegalIndex";
import LegalSection from "@/components/base/LegalSection";
import { privacySections, privacyIntro, privacyLastUpdated } from "@/mocks/privacy";

export default function PrivacidadePage() {
  return (
    <InfoPage
      eyebrow="Legal"
      title="Política de Privacidade"
      intro="A tua privacidade é a base do Ponto Zero. Toda a informação financeira permanece apenas no teu dispositivo — tu és o único dono dos teus dados."
    >
      <div className="space-y-8">
        <Reveal>
          <div className="rounded-2xl border border-background-200/80 bg-background-100/60 p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-foreground-500">
              Última atualização: {privacyLastUpdated}
            </p>
            <p className="mt-4 text-sm md:text-[15px] text-foreground-600 leading-relaxed">
              <RichText text={privacyIntro} />
            </p>
          </div>
        </Reveal>

        <Reveal>
          <LegalIndex sections={privacySections} ariaLabel="Índice da Política de Privacidade" />
        </Reveal>

        <Reveal>
          <div className="space-y-10 divide-y divide-background-200/70">
            {privacySections.map((section) => (
              <div key={section.id} className="pt-10 first:pt-0">
                <LegalSection section={section} />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-secondary-200 bg-secondary-50 p-6 md:p-8 text-center">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground-950">
              Contacto
            </h2>
            <p className="mt-3 text-sm text-foreground-600 leading-relaxed">
              Para questões relacionadas com a tua privacidade:
            </p>
            <a
              href="mailto:suporte.app.pontozero@gmail.com"
              className="mt-3 inline-block text-sm font-medium text-primary-700 underline decoration-primary-300 underline-offset-2 hover:text-primary-600 transition-colors cursor-pointer"
            >
              suporte.app.pontozero@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </InfoPage>
  );
}