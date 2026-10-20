import { Link } from "react-router-dom";
import RichText from "@/components/base/RichText";

export interface LegalBlock {
  type: "p" | "bullets" | "numbers" | "link" | "callout";
  text?: string;
  items?: string[];
  linkLabel?: string;
  linkTo?: string;
  title?: string;
  blocks?: LegalBlock[];
}

export interface LegalSectionData {
  id: string;
  number: number;
  title: string;
  blocks: LegalBlock[];
}

interface LegalSectionProps {
  section: LegalSectionData;
}

function BlockRenderer({ block }: { block: LegalBlock }) {
  if (block.type === "link") {
    return (
      <p className="text-sm md:text-[15px] text-foreground-600 leading-relaxed">
        {block.text}
        <Link
          to={block.linkTo ?? "/"}
          className="text-primary-700 font-medium underline decoration-primary-300 underline-offset-2 hover:text-primary-600 transition-colors cursor-pointer"
        >
          {block.linkLabel}
        </Link>
        .
      </p>
    );
  }

  if (block.type === "callout") {
    return (
      <div className="rounded-xl border border-background-200/80 bg-background-100/70 p-5 md:p-6 space-y-3">
        {block.title ? (
          <h3 className="font-heading text-sm md:text-base font-bold text-foreground-950">
            {block.title}
          </h3>
        ) : null}
        {block.blocks?.map((nested, i) => (
          <BlockRenderer key={i} block={nested} />
        ))}
      </div>
    );
  }

  if (block.type === "bullets" || block.type === "numbers") {
    return (
      <ul
        className={`space-y-2 text-sm md:text-[15px] text-foreground-600 leading-relaxed ${
          block.type === "numbers" ? "list-decimal" : "list-disc"
        } pl-5 marker:text-secondary-400`}
      >
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

export default function LegalSection({ section }: LegalSectionProps) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <div className="flex items-start gap-4">
        <span className="shrink-0 mt-0.5 flex items-center justify-center w-9 h-9 rounded-full bg-accent-100 text-accent-700 text-sm font-bold">
          {section.number}
        </span>
        <h2 className="font-heading text-lg md:text-xl font-bold text-foreground-950 pt-1.5">
          {section.title}
        </h2>
      </div>

      <div className="mt-4 pl-0 sm:pl-[52px] space-y-4">
        {section.blocks.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
      </div>
    </section>
  );
}