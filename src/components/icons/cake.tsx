import { useId } from "react";
import type { SVGProps } from "react";

const OUTLINE = "#FBF3E3";
const outlineStyle = { paintOrder: "stroke" as const };

function shade(hex: string, amount: number) {
  const n = hex.replace("#", "");
  const num = parseInt(n.length === 3 ? n.split("").map((c) => c + c).join("") : n, 16);
  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0xff) + amount;
  let b = (num & 0xff) + amount;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

const SPRINKLE_COLORS = ["#F2C94C", "#6FA858", "#E2708A", "#4E7FA6"];
const SPRINKLES = [
  { x: 108, y: 236, r: 4 },
  { x: 292, y: 248, r: 4.5 },
  { x: 150, y: 264, r: 3.5 },
  { x: 250, y: 224, r: 4 },
  { x: 200, y: 258, r: 3.5 },
];
const DRIPS = [
  { x: 146, h: 20 },
  { x: 182, h: 30 },
  { x: 218, h: 16 },
  { x: 254, h: 26 },
];

export function CakeBase({ color = "#F3D9B1", ...props }: SVGProps<SVGSVGElement> & { color?: string }) {
  const gradId = useId();
  const light = shade(color, 26);
  const dark = shade(color, -26);
  const frosting = "#FFF8EA";

  return (
    <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id={`${gradId}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={light} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="312" rx="150" ry="14" fill="#00000014" />
      <ellipse cx="200" cy="302" rx="170" ry="20" fill="#FFFBF2" stroke="#E6D8BE" strokeWidth={3} />

      {/* bottom tier */}
      <rect
        x="64"
        y="196"
        width="272"
        height="92"
        rx="20"
        fill={`url(#${gradId}-body)`}
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />
      {SPRINKLES.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill={SPRINKLE_COLORS[i % SPRINKLE_COLORS.length]} opacity={0.85} />
      ))}

      {/* top tier */}
      <rect
        x="128"
        y="150"
        width="144"
        height="70"
        rx="16"
        fill={`url(#${gradId}-body)`}
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />

      {/* frosting drips hanging from the top tier's cap */}
      {DRIPS.map((d, i) => (
        <rect
          key={i}
          x={d.x}
          y={148}
          width={16}
          height={d.h}
          rx={8}
          fill={frosting}
          stroke={OUTLINE}
          strokeWidth={3}
          style={outlineStyle}
        />
      ))}

      {/* frosting cap */}
      <rect
        x="122"
        y="136"
        width="156"
        height="24"
        rx="12"
        fill={frosting}
        stroke={OUTLINE}
        strokeWidth={5}
        style={outlineStyle}
      />
    </svg>
  );
}
