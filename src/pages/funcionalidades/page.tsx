import InfoPage from "@/components/feature/InfoPage";
import InstallButton from "@/components/feature/InstallButton";
import Reveal from "@/components/base/Reveal";
import FeaturesNav from "@/pages/funcionalidades/components/FeaturesNav";
import FeatureSection from "@/pages/funcionalidades/components/FeatureSection";
import ObjectiveBlock from "@/pages/funcionalidades/components/ObjectiveBlock";
import { featureSections, objectiveSection, featuresTitle, featuresIntro } from "@/mocks/features";

export default function FuncionalidadesPage() {
  return (
    <InfoPage
      eyebrow="Funcionalidades"
      title={featuresTitle}
      intro={featuresIntro}
    >
      <FeaturesNav sections={featureSections} />

      <div className="mt-12 md:mt-16 space-y-12 md:space-y-14">
        {featureSections.map((section, i) => (
          <Reveal key={section.id} delay={i < 6 ? 40 * i : 0}>
            <FeatureSection section={section} />
          </Reveal>
        ))}
      </div>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <ObjectiveBlock section={objectiveSection} />
        </Reveal>
      </div>

      <div className="mt-12">
        <InstallButton size="lg" />
      </div>
    </InfoPage>
  );
}