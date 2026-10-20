import type { LegalSectionData } from "@/components/base/LegalSection";

interface LegalIndexProps {
  sections: LegalSectionData[];
  ariaLabel: string;
}

export default function LegalIndex({ sections, ariaLabel }: LegalIndexProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="rounded-2xl border border-background-200/80 bg-background-100/60 p-6 md:p-8"
    >
      <h2 className="font-heading text-base font-bold text-foreground-950">Índice</h2>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group flex items-start gap-2 text-sm text-foreground-600 hover:text-primary-700 transition-colors cursor-pointer"
            >
              <span className="text-secondary-400 font-semibold tabular-nums group-hover:text-primary-500">
                {section.number}.
              </span>
              <span>{section.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}