import DynamicIcon from "@/components/base/DynamicIcon";
import type { FeatureSectionData } from "@/mocks/features";

interface FeaturesNavProps {
  sections: FeatureSectionData[];
}

export default function FeaturesNav({ sections }: FeaturesNavProps) {
  return (
    <nav
      aria-label="Índice de funcionalidades"
      className="rounded-2xl border border-background-200/80 bg-background-100/60 p-6 md:p-8"
    >
      <h2 className="font-heading text-base font-bold text-foreground-950">
        Explora por secção
      </h2>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group flex items-start gap-3 rounded-lg px-2.5 py-2 transition-colors hover:bg-background-200/60 cursor-pointer"
            >
              <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-md bg-primary-100 text-primary-700 group-hover:bg-primary-200 transition-colors">
                <DynamicIcon name={section.icon} className="w-4 h-4" />
              </span>
              <span className="text-sm text-foreground-700 group-hover:text-foreground-950 transition-colors pt-0.5">
                {section.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}