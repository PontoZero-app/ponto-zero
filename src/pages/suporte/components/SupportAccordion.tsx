import { useState } from "react";
import { ChevronDown, LifeBuoy, Archive, Crown, HelpCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/base/Reveal";
import RichText from "@/components/base/RichText";
import type { SupportContentBlock, SupportSection } from "@/mocks/support";

const SECTION_ICONS: Record<string, LucideIcon> = {
  support: LifeBuoy,
  backups: Archive,
  premium: Crown,
  quick: HelpCircle,
};

function Block({ block }: { block: SupportContentBlock }) {
  if (block.type === "bullets") {
    return (
      <ul className="list-disc pl-5 space-y-1.5 text-sm text-foreground-600 leading-relaxed">
        {block.items?.map((item, index) => (
          <li key={index}>
            <RichText text={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "numbers") {
    return (
      <ol className="list-decimal pl-5 space-y-1.5 text-sm text-foreground-600 leading-relaxed">
        {block.items?.map((item, index) => (
          <li key={index}>
            <RichText text={item} />
          </li>
        ))}
      </ol>
    );
  }

  return (
    <p className="text-sm text-foreground-600 leading-relaxed">
      <RichText text={block.text ?? ""} />
    </p>
  );
}

interface SupportAccordionProps {
  section: SupportSection;
}

export default function SupportAccordion({ section }: SupportAccordionProps) {
  const [open, setOpen] = useState<string | null>(null);
  const Icon = SECTION_ICONS[section.icon] ?? LifeBuoy;

  return (
    <section id={section.id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-100">
          <Icon className="w-5 h-5 text-primary-700" />
        </span>
        <h2 className="font-heading text-xl font-bold text-foreground-950">{section.title}</h2>
      </div>

      <div className="space-y-3">
        {section.items.map((item, index) => {
          const isOpen = open === item.id;
          return (
            <Reveal key={item.id} delay={50 * index}>
              <div className="rounded-xl bg-background-100 border border-background-200/80 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-background-200/50 transition-colors"
                >
                  <span className="font-semibold text-foreground-950 text-base">
                    {item.question}
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
                    <div className="px-5 pb-5 space-y-3">
                      {item.blocks.map((block, blockIndex) => (
                        <Block key={blockIndex} block={block} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}