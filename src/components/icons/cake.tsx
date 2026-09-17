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

export function CakeBase({ color = "#F3D9B1", ...props }: SVGProps<SVGSVGElement> & { color?: string }) {
  const dark = shade(color, -30);
  const light = shade(color, 18);
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="200" cy="284" rx="150" ry="20" fill="#00000014" />
      <rect x="60" y="180" width="280" height="90" rx="14" fill={dark} stroke={OUTLINE} strokeWidth={6} style={outlineStyle} />
      <path
        d="M60 190c0-16 20-24 30-16 10-10 30-10 40 0 10-10 30-10 40 0 10-10 30-10 40 0 10-10 30-10 40 0 10-8 30 0 30 16v-6c0 20-20 30-30 22-10 10-30 10-40 0-10 10-30 10-40 0-10 10-30 10-40 0-10 10-30 10-40 0-10 8-30-2-30-22Z"
        fill={color}
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />
      <path
        d="M70 172c30-16 60 10 90-4 30-14 60 12 90-2 20-10 40-2 50 8"
        fill="none"
        stroke={light}
        strokeWidth={6}
        strokeLinecap="round"
        opacity={0.8}
      />
    </svg>
  );
}
