import { countryFlagEmoji, countryLabel } from "@/lib/countries";

function CornerFlower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <g fill="none" stroke="#C24B5C" strokeWidth={2} strokeLinecap="round" opacity={0.55}>
        <circle cx="14" cy="14" r="5" />
        <circle cx="24" cy="10" r="3.4" />
        <circle cx="10" cy="24" r="3" />
        <path d="M14 19v10M19 14h10" />
      </g>
    </svg>
  );
}

export function LetterCard({
  nickname,
  country,
  letter,
  locale,
}: {
  nickname: string;
  country?: string;
  letter: string;
  locale: string;
}) {
  return (
    <div className="paper-texture relative overflow-hidden rounded-2xl border-2 border-berry/25 bg-paper p-5 shadow-sm">
      <CornerFlower className="pointer-events-none absolute -left-1 -top-1 h-10 w-10 rotate-[-8deg]" />
      <CornerFlower className="pointer-events-none absolute -bottom-1 -right-1 h-10 w-10 rotate-[172deg]" />
      <div className="relative flex items-center gap-1.5 text-sm font-bold text-ink">
        <span>{nickname}</span>
        {country && (
          <span className="text-xs font-normal text-ink-soft">
            {countryFlagEmoji(country)} {countryLabel(country, locale)}
          </span>
        )}
      </div>
      <p className="relative mt-3 whitespace-pre-wrap text-sm leading-relaxed text-ink">{letter}</p>
    </div>
  );
}
