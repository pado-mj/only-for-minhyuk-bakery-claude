import type { SVGProps } from "react";

// Vintage hand-inked illustrations. Each icon is drawn on a 0-100 viewBox
// with a single consistent dark-ink outline color, echoing old botanical /
// bakery-label linework rather than a flat modern-sticker look.
const INK = "#3A2E22";

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


export function Strawberry(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path
        d="M50 30c14 0 26 12 22 30-3 14-14 26-22 26s-19-12-22-26c-4-18 8-30 22-30Z"
        fill="#C1503F"
        stroke={INK}
        strokeWidth={6}
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
        stroke={INK}
        strokeWidth={4}
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
        stroke={INK}
        strokeWidth={5}
      />
      <circle
        cx="64"
        cy="66"
        r="14"
        fill="#C93150"
        stroke={INK}
        strokeWidth={5}
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
        stroke={INK}
        strokeWidth={5}
      />
      <circle
        cx="62"
        cy="48"
        r="13"
        fill="#5B6BA3"
        stroke={INK}
        strokeWidth={5}
      />
      <circle
        cx="55"
        cy="72"
        r="12"
        fill="#41508A"
        stroke={INK}
        strokeWidth={5}
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
        stroke={INK}
        strokeWidth={6}
      />
      <circle
        cx="50"
        cy="52"
        r="12"
        fill="#E2708A"
        stroke={INK}
        strokeWidth={5}
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
        stroke={INK}
        strokeWidth={6}
      />
      <path
        d="M52 50c10-18 34-20 38-4 3 12-10 18-38 4Z"
        fill="#4C6D93"
        stroke={INK}
        strokeWidth={6}
      />
      <circle
        cx="50"
        cy="50"
        r="10"
        fill="#6C89AD"
        stroke={INK}
        strokeWidth={5}
      />
    </Sticker>
  );
}

// Scalloped "fluffy" silhouettes for the Maltese — a plain circle reads as
// a bald face, so the head/ears are wobbly cloud-shaped blobs instead to
// suggest a fluffy 똥강아지 fur mop.
const MALTESE_EAR_L =
  "M 28 29.5 Q 28 29.5 31.4 33 Q 34.9 36.5 39.3 38.7 Q 43.7 40.9 41.5 45.3 Q 39.2 49.6 38.5 54.5 Q 37.7 59.3 32.9 58.5 Q 28 57.8 23.1 58.5 Q 18.3 59.3 17.6 54.5 Q 16.8 49.6 14.6 45.3 Q 12.3 40.9 16.7 38.7 Q 21.1 36.5 24.6 33 Z";
const MALTESE_EAR_R =
  "M 72 29.5 Q 72 29.5 75.5 33 Q 78.9 36.5 83.3 38.7 Q 87.7 40.9 85.5 45.3 Q 83.2 49.6 82.5 54.5 Q 81.7 59.3 76.8 58.5 Q 72 57.8 67.2 58.5 Q 62.3 59.3 61.5 54.5 Q 60.8 49.6 58.5 45.3 Q 56.3 40.9 60.7 38.7 Q 65.1 36.5 68.5 33 Z";
const MALTESE_HEAD =
  "M 50 28 Q 50 28 54.9 32.4 Q 59.7 36.7 66.2 37 Q 72.6 37.4 72.9 43.8 Q 73.3 50.3 77.7 55.1 Q 82 60 77.7 64.8 Q 73.3 69.7 72.9 76.2 Q 72.6 82.6 66.2 82.9 Q 59.7 83.3 54.9 87.7 Q 50 92 45.1 87.7 Q 40.3 83.3 33.8 82.9 Q 27.4 82.6 27 76.2 Q 26.7 69.7 22.4 64.8 Q 18 60 22.4 55.1 Q 26.7 50.3 27 43.8 Q 27.4 37.4 33.8 37 Q 40.3 36.7 45.1 32.4 Z";
const MALTESE_FUR_FLICKS = [
  "M30 40q-4-3-3-7",
  "M70 40q4-3 3-7",
  "M25 62q-4 1-5-3",
  "M75 62q4 1 5-3",
  "M35 82q-2 4-6 4",
  "M65 82q2 4 6 4",
];

export function Maltese(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path d={MALTESE_EAR_L} fill="#EFE7D4" stroke={INK} strokeWidth={3} />
      <path d={MALTESE_EAR_R} fill="#EFE7D4" stroke={INK} strokeWidth={3} />
      <path d={MALTESE_HEAD} fill="#FBF8F0" stroke={INK} strokeWidth={3.2} />
      {MALTESE_FUR_FLICKS.map((d, i) => (
        <path key={i} d={d} stroke="#D9CDB2" strokeWidth={1.6} fill="none" strokeLinecap="round" />
      ))}
      <circle cx="41" cy="58" r="3" fill={INK} />
      <circle cx="59" cy="58" r="3" fill={INK} />
      <ellipse cx="50" cy="68" rx="4" ry="3" fill={INK} />
      <path d="M44 74c3 3 9 3 12 0" stroke={INK} strokeWidth={2} fill="none" strokeLinecap="round" />
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
        stroke={INK}
        strokeWidth={5}
      />
      <path d="M28 46 20 20l16 14Z" fill="#E3A96B" stroke={INK} strokeWidth={4} />
      <path d="M72 46 80 20 64 34Z" fill="#E3A96B" stroke={INK} strokeWidth={4} />
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
        stroke={INK}
        strokeWidth={5}
      />
      <path d="M50 44c-10 0-16 10-12 20 6-4 18-4 24 0 4-10-2-20-12-20Z" fill="#6B4423" />
      <path d="M27 44 18 22l14 16Z" fill="#6B4423" stroke={INK} strokeWidth={4} />
      <path d="M73 44 82 22 68 38Z" fill="#6B4423" stroke={INK} strokeWidth={4} />
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
        stroke={INK}
        strokeWidth={6}
      />
      <path
        d="M78 46c8-4 14-2 16 4-6 2-12 2-16-4Z"
        fill="#4E7FA6"
        stroke={INK}
        strokeWidth={4}
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
        stroke={INK}
        strokeWidth={6}
      />
      <path d="M74 48c8-6 16-4 18 2-6 4-14 4-18-2Z" fill="#6FA0C4" stroke={INK} strokeWidth={4} />
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
        stroke={INK}
        strokeWidth={6}
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
        stroke={INK}
        strokeWidth={6}
      />
      <circle cx="50" cy="26" r="11" fill="#CB5470" />
      <circle cx="50" cy="26" r="5" fill="#E17E92" />
    </Sticker>
  );
}

export function Cucumber(props: SVGProps<SVGSVGElement>) {
  // A long, clearly-tapered capsule reads as "cucumber" much more reliably
  // than a short rotated blob — ridges + warts + a stem sell the rest.
  return (
    <Sticker {...props}>
      <g transform="rotate(-14 50 50)">
        <rect x="37" y="10" width="26" height="80" rx="13" fill="#6B9A4C" stroke={INK} strokeWidth={3.5} />
        <path
          d="M42 22c-2 18-2 38 0 56M50 18c-1.5 21-1.5 43 0 64M58 22c2 18 2 38 0 56"
          stroke="#517A38"
          strokeWidth={1.6}
          fill="none"
          strokeLinecap="round"
          opacity={0.65}
        />
        {[[43, 26], [57, 34], [44, 44], [56, 54], [43, 64], [57, 72]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={1.5} fill="#D8E7C4" />
        ))}
        <path d="M45 10c0-5 3-8 5-8s5 3 5 8" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
        <path d="M50 4c4-4 10-3 11 1-4 3-9 2-11-1Z" fill="#7FA24C" stroke={INK} strokeWidth={2} />
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
        fill="#8FBFA0"
        stroke={INK}
        strokeWidth={6}
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
