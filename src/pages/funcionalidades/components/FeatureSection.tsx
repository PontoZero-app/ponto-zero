import DynamicIcon from "@/components/base/DynamicIcon";
import RichText from "@/components/base/RichText";
import type { FeatureSectionData, FeatureBlock } from "@/mocks/features";

interface FeatureSectionProps {
  section: FeatureSectionData;
}

function BlockRenderer({ block }: { block: FeatureBlock }) {
  if (block.type === "bullets") {
    return (
      <ul className="space-y-2 text-sm md:text-[15px] text-foreground-600 leading-relaxed list-disc pl-5 marker:text-secondary-400">
        {block.items?.map((item, i) => (
          <li key={i}>
            <RichText text={item} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-sm md:text-[15px] text-foreground-600 leading-relaxed">
      <RichText text={block.text ?? ""} />
    </p>
  );
}

export default function FeatureSection({ section }: FeatureSectionProps) {
  const isAccent = section.tone === "accent";
  const bubble = isAccent
    ? "bg-accent-100 text-accent-700"
    : "bg-primary-100 text-primary-700";

  return (
    <section id={section.id} className="scroll-mt-28">
      <div className="flex items-center gap-3">
        <span className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-lg ${bubble}`}>
          <DynamicIcon name={section.icon} className="w-5 h-5" />
        </span>
        <h2 className="font-heading text-lg md:text-xl font-bold text-foreground-950">
          {section.title}
        </h2>
      </div>

      <div className="mt-4 rounded-2xl border border-background-200/80 bg-background-100/60 p-6 md:p-7 space-y-3.5">
        {section.blocks.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
      </div>
    </section>
  );
}