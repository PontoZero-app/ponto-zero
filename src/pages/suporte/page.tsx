import InfoPage from "@/components/feature/InfoPage";
import SupportAccordion from "@/pages/suporte/components/SupportAccordion";
import ContactSupport from "@/pages/suporte/components/ContactSupport";
import { supportSections } from "@/mocks/support";

export default function SuportePage() {
  return (
    <InfoPage
      eyebrow="Suporte"
      title="Ajuda e suporte"
      intro="Se precisares de ajuda com a aplicação Ponto Zero, consulta as soluções abaixo. Muitas situações comuns podem ser resolvidas rapidamente."
    >
      <div className="space-y-12">
        {supportSections.map((section) => (
          <SupportAccordion key={section.id} section={section} />
        ))}
        <ContactSupport />
      </div>
    </InfoPage>
  );
}