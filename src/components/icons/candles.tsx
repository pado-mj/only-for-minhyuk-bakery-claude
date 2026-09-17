import type { SVGProps } from "react";

const OUTLINE = "#FBF3E3";
const outlineStyle = { paintOrder: "stroke" as const };

function Flame({ lit, cx = 50, cy = 14 }: { lit: boolean; cx?: number; cy?: number }) {
  if (!lit) return null;
  return (
    <g className="candle-flame" style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <path
        d={`M${cx} ${cy - 12}c5 6 6 10 3 15-1 2-4 3-3-1-3 3-6 1-6-3 0-5 3-8 6-11Z`}
        fill="#F5A623"
      />
      <path
        d={`M${cx} ${cy - 6}c2 3 2 5 0 7-2-1-3-3-2-5 0-1 1-2 2-2Z`}
        fill="#FFE9A8"
      />
    </g>
  );
}

export function ClassicCandle({
  lit = true,
  color = "#E2708A",
  ...props
}: SVGProps<SVGSVGElement> & { lit?: boolean; color?: string }) {
  return (
    <svg viewBox="0 0 40 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="14" y="24" width="12" height="66" rx="3" fill={color} stroke={OUTLINE} strokeWidth={3} style={outlineStyle} />
      <rect x="14" y="34" width="12" height="6" fill="#FBF3E3" opacity={0.5} />
      <rect x="14" y="54" width="12" height="6" fill="#FBF3E3" opacity={0.5} />
      <rect x="14" y="74" width="12" height="6" fill="#FBF3E3" opacity={0.5} />
      <path d="M20 24v-8" stroke="#3A2E22" strokeWidth={2} strokeLinecap="round" />
      <Flame lit={lit} cx={20} cy={12} />
    </svg>
  );
}

export function HeartCandle({ lit = true, ...props }: SVGProps<SVGSVGElement> & { lit?: boolean }) {
  return (
    <svg viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M25 92c-14-30-4-46 0-46s14 16 0 46Z"
        fill="#C9425A"
        stroke={OUTLINE}
        strokeWidth={3}
        style={outlineStyle}
      />
      <path
        d="M25 34c-9-10-24-4-19 8 3 8 12 14 19 18 7-4 16-10 19-18 5-12-10-18-19-8Z"
        fill="#C9425A"
        stroke={OUTLINE}
        strokeWidth={3}
        style={outlineStyle}
      />
      <path d="M25 34v-10" stroke="#3A2E22" strokeWidth={2} strokeLinecap="round" />
      <Flame lit={lit} cx={25} cy={20} />
    </svg>
  );
}

export function DogCandle({ lit = true, ...props }: SVGProps<SVGSVGElement> & { lit?: boolean }) {
  return (
    <svg viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="17" y="46" width="16" height="44" rx="4" fill="#E3A96B" stroke={OUTLINE} strokeWidth={3} style={outlineStyle} />
      <circle cx="25" cy="34" r="16" fill="#E3A96B" stroke={OUTLINE} strokeWidth={3} style={outlineStyle} />
      <path d="M13 24 6 10l14 10Z" fill="#E3A96B" stroke={OUTLINE} strokeWidth={2} style={outlineStyle} />
      <path d="M37 24 44 10 30 20Z" fill="#E3A96B" stroke={OUTLINE} strokeWidth={2} style={outlineStyle} />
      <circle cx="20" cy="33" r="1.8" fill="#3A2E22" />
      <circle cx="30" cy="33" r="1.8" fill="#3A2E22" />
      <ellipse cx="25" cy="39" rx="2.4" ry="1.8" fill="#3A2E22" />
      <path d="M25 18v-8" stroke="#3A2E22" strokeWidth={2} strokeLinecap="round" />
      <Flame lit={lit} cx={25} cy={6} />
    </svg>
  );
}

const NUMBER_COLORS = ["#E2708A", "#F5A623", "#6FA858", "#4E7FA6", "#B23A55", "#C88A4C", "#7FC9B0", "#4C5B8F", "#C24B5C", "#3F5B7A"];

export function NumberCandle({
  digit,
  lit = true,
  ...props
}: SVGProps<SVGSVGElement> & { digit: number; lit?: boolean }) {
  const color = NUMBER_COLORS[digit % NUMBER_COLORS.length];
  return (
    <svg viewBox="0 0 40 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="24" width="20" height="66" rx="4" fill={color} stroke={OUTLINE} strokeWidth={3} style={outlineStyle} />
      <text
        x="20"
        y="63"
        textAnchor="middle"
        fontSize="30"
        fontWeight={700}
        fill="#FBF3E3"
        fontFamily="var(--font-pretendard), sans-serif"
      >
        {digit}
      </text>
      <path d="M20 24v-8" stroke="#3A2E22" strokeWidth={2} strokeLinecap="round" />
      <Flame lit={lit} cx={20} cy={12} />
    </svg>
  );
}
