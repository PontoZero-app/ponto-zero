export interface PhoneRow {
  label: string;
  value: string;
  tone?: string;
}

export interface PhoneBlock {
  heading?: string;
  tabs?: string[];
  rows?: PhoneRow[];
  total?: PhoneRow;
  pills?: string[];
  note?: string;
}

export interface PhoneMockProps {
  title: string;
  badge?: string;
  tabs?: string[];
  blocks?: PhoneBlock[];
  fab?: boolean;
  className?: string;
  image?: string;
  imageAlt?: string;
}

const toneClass: Record<string, string> = {
  default: "text-foreground-800",
  positive: "text-primary-600",
  negative: "text-red-600",
};

export default function PhoneMock({
  title,
  badge,
  tabs,
  blocks = [],
  fab = false,
  className = "",
  image,
  imageAlt,
}: PhoneMockProps) {
  return (
    <div
      className={`relative w-[230px] sm:w-[244px] shrink-0 rounded-[1.1rem] bg-foreground-950 p-[9px] shadow-[0_18px_50px_-24px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div
        className={`relative bg-background-50 overflow-hidden flex flex-col rounded-[0.8rem] ${
          image ? "" : "h-[440px]"
        }`}
      >
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            title={imageAlt || title}
            className="block w-full h-auto"
          />
        ) : (
          <>
            <div className="bg-gradient-to-br from-primary-600 to-secondary-700 px-4 pt-6 pb-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-white font-heading font-semibold text-[15px]">{title}</span>
                {badge ? (
                  <span className="text-[9px] font-bold tracking-wide bg-accent-500 text-foreground-950 px-2 py-0.5 rounded-full">
                    {badge}
                  </span>
                ) : null}
              </div>
              {tabs && tabs.length > 0 ? (
                <div className="mt-3 flex gap-1.5 flex-wrap">
                  {tabs.map((tab, i) => (
                    <span
                      key={tab}
                      className={`text-[10px] px-2.5 py-1 rounded-full ${
                        i === 0
                          ? "bg-white/95 text-primary-700 font-semibold"
                          : "bg-white/15 text-white/85"
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="p-3 space-y-2.5 overflow-hidden flex-1 bg-background-100">
              {blocks.map((block, bi) => (
                <div
                  key={`${title}-block-${bi}`}
                  className="bg-background-50 rounded-xl px-3 py-2.5 border border-background-200/70"
                >
                  {block.heading ? (
                    <p className="text-[11px] font-semibold text-foreground-900 mb-2">
                      {block.heading}
                    </p>
                  ) : null}

                  {block.pills && block.pills.length > 0 ? (
                    <div className="flex gap-1.5 flex-wrap mb-2">
                      {block.pills.map((pill, pi) => (
                        <span
                          key={pill}
                          className={`text-[9px] px-2 py-0.5 rounded-full ${
                            pi === 0
                              ? "bg-primary-100 text-primary-800 font-semibold"
                              : "bg-secondary-100 text-secondary-900"
                          }`}
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {block.rows ? (
                    <div className="space-y-1.5">
                      {block.rows.map((row) => (
                        <div key={`${row.label}-${row.value}`} className="flex items-center justify-between gap-3">
                          <span className="text-[10.5px] text-foreground-600 truncate">{row.label}</span>
                          <span className={`text-[10.5px] font-semibold ${toneClass[row.tone || "default"]}`}>
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {block.total ? (
                    <div className="mt-2 pt-2 border-t border-dashed border-background-300 flex items-center justify-between gap-3">
                      <span className="text-[10.5px] font-semibold text-foreground-900">{block.total.label}</span>
                      <span className={`text-[10.5px] font-bold ${toneClass[block.total.tone || "default"]}`}>
                        {block.total.value}
                      </span>
                    </div>
                  ) : null}

                  {block.note ? (
                    <p className="text-[9.5px] text-foreground-500 mt-1.5 leading-snug">{block.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {fab ? (
        <div className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-600/40">
          <span className="text-2xl leading-none font-light -mt-0.5">+</span>
        </div>
      ) : null}
    </div>
  );
}