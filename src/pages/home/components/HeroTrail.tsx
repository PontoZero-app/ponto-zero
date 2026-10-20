interface TrailLine {
  id: string;
  curve: number;
  top: number;
  rotate: number;
  width: number;
  colorClass: string;
  delayClass: string;
}

const LINES: TrailLine[] = [
  {
    id: "trail-1",
    curve: 16,
    top: 32,
    rotate: -3,
    width: 380,
    colorClass: "border-primary-500/55",
    delayClass: "hero-trail-delay-1",
  },
  {
    id: "trail-2",
    curve: 12,
    top: 16,
    rotate: 2.5,
    width: 260,
    colorClass: "border-accent-500/55",
    delayClass: "hero-trail-delay-2",
  },
  {
    id: "trail-3",
    curve: 18,
    top: 48,
    rotate: -1.5,
    width: 440,
    colorClass: "border-primary-400/50",
    delayClass: "hero-trail-delay-3",
  },
  {
    id: "trail-4",
    curve: 10,
    top: 28,
    rotate: 4,
    width: 210,
    colorClass: "border-accent-400/50",
    delayClass: "hero-trail-delay-4",
  },
  {
    id: "trail-5",
    curve: 14,
    top: 42,
    rotate: -5,
    width: 320,
    colorClass: "border-primary-300/45",
    delayClass: "hero-trail-delay-5",
  },
];

const arcBaseStyle = {
  borderBottomStyle: "solid" as const,
  borderBottomWidth: 2,
  borderBottomLeftRadius: "50% 100%",
  borderBottomRightRadius: "50% 100%",
};

export default function HeroTrail() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-[calc(100%_+_0.9rem)] top-1/2 block h-28 -translate-y-1/2"
    >
      {LINES.map((line) => (
        <span
          key={line.id}
          className="absolute right-0 block"
          style={{
            top: line.top,
            width: line.width,
            height: line.curve * 2,
            transform: `rotate(${line.rotate}deg)`,
            transformOrigin: "right center",
          }}
        >
          <span className={`hero-trail-line ${line.delayClass} relative block w-full h-full`}>
            {/* metade esquerda: arco descendente */}
            <span
              className={`absolute left-0 block w-1/2 ${line.colorClass}`}
              style={{ ...arcBaseStyle, top: line.curve, height: line.curve }}
            />
            {/* metade direita: arco ascendente, em espelho */}
            <span
              className={`absolute right-0 block w-1/2 ${line.colorClass}`}
              style={{
                ...arcBaseStyle,
                top: 0,
                height: line.curve,
                transform: "scaleY(-1)",
              }}
            />
          </span>
        </span>
      ))}
    </span>
  );
}