import type { SVGProps } from "react";

// Flat vintage-sticker style illustrations. Each icon is drawn on a 0-100
// viewBox with `paint-order: stroke` so a soft paper-colored outline sits
// behind the fill, giving a die-cut sticker feel without extra markup.
const OUTLINE = "#FBF3E3";

function Sticker({
  children,
  ...props
}: SVGProps<SVGSVGElement> & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      {children}
    </svg>
  );
}

const outlineStyle = { paintOrder: "stroke" as const };

export function Strawberry(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path
        d="M50 30c14 0 26 12 22 30-3 14-14 26-22 26s-19-12-22-26c-4-18 8-30 22-30Z"
        fill="#D94F4F"
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />
      {[...Array(7)].map((_, i) => {
        const angle = (i / 7) * Math.PI * 1.6 - 1.6;
        const cx = 50 + Math.cos(angle) * 14;
        const cy = 52 + Math.sin(angle) * 16;
        return <circle key={i} cx={cx} cy={cy} r={1.6} fill="#FBE1C8" />;
      })}
      <path
        d="M50 30 42 16m8 14 0-16m2 16 8-14"
        stroke="#5C8A4B"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M38 20c4-6 20-6 24 0-8 4-16 4-24 0Z"
        fill="#6FA858"
        stroke={OUTLINE}
        strokeWidth={4}
        style={outlineStyle}
      />
    </Sticker>
  );
}

export function Cherry(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path
        d="M46 40c-10 6-8 24 4 26s20-12 12-22"
        stroke="#5C8A4B"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx="38"
        cy="70"
        r="14"
        fill="#B4283F"
        stroke={OUTLINE}
        strokeWidth={5}
        style={outlineStyle}
      />
      <circle
        cx="64"
        cy="66"
        r="14"
        fill="#C93150"
        stroke={OUTLINE}
        strokeWidth={5}
        style={outlineStyle}
      />
      <circle cx="34" cy="65" r="2.4" fill="#F2B9C4" />
      <circle cx="60" cy="61" r="2.4" fill="#F2B9C4" />
    </Sticker>
  );
}

export function Blueberry(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <circle
        cx="34"
        cy="55"
        r="15"
        fill="#4C5B8F"
        stroke={OUTLINE}
        strokeWidth={5}
        style={outlineStyle}
      />
      <circle
        cx="62"
        cy="48"
        r="13"
        fill="#5B6BA3"
        stroke={OUTLINE}
        strokeWidth={5}
        style={outlineStyle}
      />
      <circle
        cx="55"
        cy="72"
        r="12"
        fill="#41508A"
        stroke={OUTLINE}
        strokeWidth={5}
        style={outlineStyle}
      />
      {[
        [34, 55],
        [62, 48],
        [55, 72],
      ].map(([cx, cy], i) => (
        <path
          key={i}
          d={`M${cx - 3} ${cy - 3} l6 6 M${cx + 3} ${cy - 3} l-6 6`}
          stroke="#D9CBEE"
          strokeWidth={1.4}
          strokeLinecap="round"
        />
      ))}
    </Sticker>
  );
}

export function RibbonClassic(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path
        d="M50 52 14 26c-6 20 6 32 20 30Zm0 0 36-26c6 20-6 32-20 30Z"
        fill="#C24B5C"
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />
      <circle
        cx="50"
        cy="52"
        r="12"
        fill="#E2708A"
        stroke={OUTLINE}
        strokeWidth={5}
        style={outlineStyle}
      />
      <path
        d="M44 62 30 84m22-22 14 22"
        stroke="#C24B5C"
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
    </Sticker>
  );
}

export function RibbonBow(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path
        d="M48 50c-10-18-34-20-38-4-3 12 10 18 38 4Z"
        fill="#3F5B7A"
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />
      <path
        d="M52 50c10-18 34-20 38-4 3 12-10 18-38 4Z"
        fill="#4C6D93"
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />
      <circle
        cx="50"
        cy="50"
        r="10"
        fill="#6C89AD"
        stroke={OUTLINE}
        strokeWidth={5}
        style={outlineStyle}
      />
    </Sticker>
  );
}

export function Maltese(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <ellipse
        cx="50"
        cy="60"
        rx="28"
        ry="24"
        fill="#FBF6EC"
        stroke="#B9AC8E"
        strokeWidth={5}
        style={outlineStyle}
      />
      <ellipse cx="30" cy="42" rx="10" ry="14" fill="#F3ECDC" transform="rotate(-20 30 42)" />
      <ellipse cx="70" cy="42" rx="10" ry="14" fill="#F3ECDC" transform="rotate(20 70 42)" />
      <circle cx="41" cy="58" r="3" fill="#3A2E22" />
      <circle cx="59" cy="58" r="3" fill="#3A2E22" />
      <ellipse cx="50" cy="68" rx="4" ry="3" fill="#3A2E22" />
      <path d="M44 74c3 3 9 3 12 0" stroke="#3A2E22" strokeWidth={2} fill="none" strokeLinecap="round" />
    </Sticker>
  );
}

export function Chihuahua(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <ellipse
        cx="50"
        cy="62"
        rx="24"
        ry="20"
        fill="#E3A96B"
        stroke={OUTLINE}
        strokeWidth={5}
        style={outlineStyle}
      />
      <path d="M28 46 20 20l16 14Z" fill="#E3A96B" stroke={OUTLINE} strokeWidth={4} style={outlineStyle} />
      <path d="M72 46 80 20 64 34Z" fill="#E3A96B" stroke={OUTLINE} strokeWidth={4} style={outlineStyle} />
      <circle cx="41" cy="58" r="3" fill="#3A2E22" />
      <circle cx="59" cy="58" r="3" fill="#3A2E22" />
      <ellipse cx="50" cy="67" rx="3.4" ry="2.6" fill="#5C3A22" />
      <path d="M45 73c2.5 2.4 7.5 2.4 10 0" stroke="#5C3A22" strokeWidth={2} fill="none" strokeLinecap="round" />
    </Sticker>
  );
}

export function GermanShepherd(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <ellipse
        cx="50"
        cy="62"
        rx="26"
        ry="21"
        fill="#C88A4C"
        stroke={OUTLINE}
        strokeWidth={5}
        style={outlineStyle}
      />
      <path d="M50 44c-10 0-16 10-12 20 6-4 18-4 24 0 4-10-2-20-12-20Z" fill="#6B4423" />
      <path d="M27 44 18 22l14 16Z" fill="#6B4423" stroke={OUTLINE} strokeWidth={4} style={outlineStyle} />
      <path d="M73 44 82 22 68 38Z" fill="#6B4423" stroke={OUTLINE} strokeWidth={4} style={outlineStyle} />
      <circle cx="42" cy="60" r="3" fill="#241a10" />
      <circle cx="58" cy="60" r="3" fill="#241a10" />
      <ellipse cx="50" cy="70" rx="3.6" ry="2.8" fill="#241a10" />
    </Sticker>
  );
}

export function WhaleHumpback(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path
        d="M12 58c10-18 34-26 54-18 10 4 18 12 20 18-6 10-20 16-36 16-18 0-32-6-38-16Z"
        fill="#4E7FA6"
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />
      <path
        d="M78 46c8-4 14-2 16 4-6 2-12 2-16-4Z"
        fill="#4E7FA6"
        stroke={OUTLINE}
        strokeWidth={4}
        style={outlineStyle}
      />
      <path d="M20 60c8 4 40 4 50-2" stroke="#DDEEF5" strokeWidth={3} fill="none" strokeLinecap="round" />
      <circle cx="30" cy="50" r="2.4" fill="#20303C" />
      <path d="M52 30c2-6 4-8 4-8s0 6 2 8" stroke="#BFE1EF" strokeWidth={3} fill="none" strokeLinecap="round" />
    </Sticker>
  );
}

export function WhaleCute(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <ellipse
        cx="46"
        cy="56"
        rx="30"
        ry="22"
        fill="#6FA0C4"
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />
      <path d="M74 48c8-6 16-4 18 2-6 4-14 4-18-2Z" fill="#6FA0C4" stroke={OUTLINE} strokeWidth={4} style={outlineStyle} />
      <circle cx="34" cy="52" r="3" fill="#20303C" />
      <path d="M28 66c4 3 10 3 14 0" stroke="#20303C" strokeWidth={2} fill="none" strokeLinecap="round" />
      <ellipse cx="30" cy="60" rx="4" ry="2.4" fill="#F3B7C4" opacity={0.7} />
    </Sticker>
  );
}

export function RoseSingle(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <circle
        cx="50"
        cy="46"
        r="22"
        fill="#B23A55"
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />
      <circle cx="50" cy="46" r="14" fill="#CB5470" />
      <circle cx="50" cy="46" r="7" fill="#E17E92" />
      <path d="M50 68v22" stroke="#5C8A4B" strokeWidth={4} strokeLinecap="round" />
      <path d="M50 80c6-2 10-8 10-8s-8 0-10 8Zm0-2c-6-2-10-8-10-8s8 0 10 8Z" fill="#6FA858" />
    </Sticker>
  );
}

export function RoseStem(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path d="M50 40v52" stroke="#5C8A4B" strokeWidth={4} strokeLinecap="round" />
      <path d="M50 62c8-3 13-10 13-10s-9-1-13 10Zm0 12c-8-3-13-10-13-10s9-1 13 10Z" fill="#6FA858" />
      <circle
        cx="50"
        cy="26"
        r="18"
        fill="#B23A55"
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />
      <circle cx="50" cy="26" r="11" fill="#CB5470" />
      <circle cx="50" cy="26" r="5" fill="#E17E92" />
    </Sticker>
  );
}

export function Cucumber(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path
        d="M22 60c0-16 18-30 34-30 14 0 22 8 22 8s-6 4-6 12c0 16-18 30-34 30-14 0-22-8-22-8s6-4 6-12Z"
        fill="#7FA24C"
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
        transform="rotate(-25 50 50)"
      />
      <g transform="rotate(-25 50 50)">
        {[[36, 44], [44, 50], [52, 56], [60, 62]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={1.6} fill="#E9F1D8" />
        ))}
      </g>
    </Sticker>
  );
}

export function MintChoco(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <circle
        cx="50"
        cy="52"
        r="26"
        fill="#7FC9B0"
        stroke={OUTLINE}
        strokeWidth={6}
        style={outlineStyle}
      />
      {[
        [40, 42],
        [58, 46],
        [46, 58],
        [62, 62],
        [36, 62],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={3.2} fill="#3A2E22" />
      ))}
      <ellipse cx="38" cy="38" rx="5" ry="3" fill="#C9EEE1" opacity={0.7} />
    </Sticker>
  );
}
