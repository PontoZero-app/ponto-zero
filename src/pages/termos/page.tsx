import InfoPage from "@/components/feature/InfoPage";
import Reveal from "@/components/base/Reveal";
import RichText from "@/components/base/RichText";
import LegalIndex from "@/components/base/LegalIndex";
import LegalSection from "@/components/base/LegalSection";
import { termsSections, termsIntro, termsLastUpdated } from "@/mocks/terms";

export default function TermosPage() {
  return (
    <InfoPage
      eyebrow="Legal"
      title="Termos e Condições"
      intro="Condições de utilização da aplicação Ponto Zero. Ao instalar, aceder ou utilizar a Aplicação, o Utilizador declara que leu, compreendeu e aceita estes Termos e Condições de Utilização."
    >
      <div className="space-y-8">
        <Reveal>
          <div className="rounded-2xl border border-background-200/80 bg-background-100/60 p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-foreground-500">
              Última atualização: {termsLastUpdated}
            </p>
            <p className="mt-4 text-sm md:text-[15px] text-foreground-600 leading-relaxed">
              <RichText text={termsIntro} />
            </p>
          </div>
        </Reveal>

        <Reveal>
          <LegalIndex sections={termsSections} ariaLabel="Índice dos Termos e Condições" />
        </Reveal>

        <Reveal>
          <div className="space-y-10 divide-y divide-background-200/70">
            {termsSections.map((section) => (
              <div key={section.id} className="pt-10 first:pt-0">
                <LegalSection section={section} />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-secondary-200 bg-secondary-50 p-6 md:p-8">
            <p className="text-sm text-foreground-600 leading-relaxed">
              Ao continuar a utilizar a aplicação Ponto Zero, confirmas que leste e aceitaste estes
              Termos e Condições de Utilização. Para questões legais ou de suporte, contacta-nos
              através de{" "}
              <a
                href="mailto:suporte.app.pontozero@gmail.com"
                className="text-primary-700 font-medium underline decoration-primary-300 underline-offset-2 hover:text-primary-600 transition-colors cursor-pointer"
              >
                suporte.app.pontozero@gmail.com
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </InfoPage>
  );
}