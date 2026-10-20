import DynamicIcon from "@/components/base/DynamicIcon";
import RichText from "@/components/base/RichText";
import type { FeatureSectionData } from "@/mocks/features";

interface ObjectiveBlockProps {
  section: FeatureSectionData;
}

export default function ObjectiveBlock({ section }: ObjectiveBlockProps) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-600">
          Objetivo
        </span>
        <h2 className="mt-3 text-2xl md:text-3xl font-bold text-foreground-950 text-balance">
          {section.title}
        </h2>
      </div>

      <div className="mt-6 rounded-2xl border border-accent-200/70 bg-accent-50/60 p-6 md:p-7 space-y-3.5">
        <div className="flex items-center gap-3">
          <span className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700">
            <DynamicIcon name={section.icon} className="w-5 h-5" />
          </span>
          <p className="text-sm md:text-[15px] font-semibold text-foreground-950">
            Uma visão clara, consistente e consciente
          </p>
        </div>

        {section.blocks.map((block, index) =>
          block.type === "bullets" ? (
            <ul
              key={index}
              className="space-y-2 text-sm md:text-[15px] text-foreground-600 leading-relaxed list-disc pl-5 marker:text-accent-400"
            >
              {block.items?.map((item, i) => (
                <li key={i}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          ) : (
            <p key={index} className="text-sm md:text-[15px] text-foreground-600 leading-relaxed">
              <RichText text={block.text ?? ""} />
            </p>
          ),
        )}
      </div>
    </section>
  );
}