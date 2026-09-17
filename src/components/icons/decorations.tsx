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

// A single cute round mascot pup (fluffy scalloped body + ears), reused
// across three poses/accessories instead of three different dog breeds —
// matches the reference mood board's "same mascot, different accessory"
// pattern more closely than distinct breed illustrations did.
const DOG_BODY =
  "M 50 35.1 Q 50 35.1 55 37.7 Q 59.9 40.3 65.8 40.8 Q 71.6 41.4 73.3 45.9 Q 75 50.4 79 53.8 Q 83.1 57.3 80.8 61.6 Q 78.5 66 78.8 70.7 Q 79.1 75.4 73.8 77.6 Q 68.6 79.7 65 83.5 Q 61.5 87.3 55.8 86.2 Q 50 85.1 44.3 86.2 Q 38.5 87.3 35 83.5 Q 31.4 79.7 26.1 77.6 Q 20.9 75.4 21.2 70.7 Q 21.5 66 19.2 61.6 Q 16.9 57.3 20.9 53.8 Q 25 50.4 26.7 45.9 Q 28.4 41.4 34.3 40.8 Q 40.1 40.3 45 37.7 Z";
const DOG_EAR_L =
  "M 30 22.4 Q 30 22.4 32.5 24.4 Q 35 26.3 37.5 28.4 Q 39.9 30.4 39 33.6 Q 38.1 36.9 37.1 40.1 Q 36.1 43.4 33 43.5 Q 30 43.5 26.9 43.5 Q 23.9 43.4 22.9 40.1 Q 21.9 36.9 21 33.6 Q 20.1 30.4 22.6 28.4 Q 25 26.3 27.5 24.4 Z";
const DOG_EAR_R =
  "M 70 22.4 Q 70 22.4 72.5 24.4 Q 75 26.3 77.5 28.4 Q 79.9 30.4 79 33.6 Q 78.1 36.9 77.1 40.1 Q 76.1 43.4 73 43.5 Q 70 43.5 67 43.5 Q 63.9 43.4 62.9 40.1 Q 61.9 36.9 61 33.6 Q 60.1 30.4 62.5 28.4 Q 65 26.3 67.5 24.4 Z";

function DogMascotBase({
  earFill = "#F1D9DE",
  children,
}: {
  earFill?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <path d={DOG_EAR_L} fill={earFill} stroke={INK} strokeWidth={2.4} />
      <path d={DOG_EAR_R} fill={earFill} stroke={INK} strokeWidth={2.4} />
      <path d={DOG_BODY} fill="#FEFBF4" stroke={INK} strokeWidth={2.6} />
      <ellipse cx="35" cy="66" rx="4.5" ry="3" fill="#F5B6C2" opacity={0.7} />
      <ellipse cx="65" cy="66" rx="4.5" ry="3" fill="#F5B6C2" opacity={0.7} />
      {children}
      <ellipse cx="50" cy="70" rx="3.6" ry="2.8" fill={INK} />
      <path d="M45 75c2.5 2.4 7.5 2.4 10 0" stroke={INK} strokeWidth={2} fill="none" strokeLinecap="round" />
    </>
  );
}

export function Maltese(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <DogMascotBase>
        <circle cx="41" cy="60" r="3" fill={INK} />
        <circle cx="59" cy="60" r="3" fill={INK} />
      </DogMascotBase>
    </Sticker>
  );
}

export function Chihuahua(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <DogMascotBase earFill="#CFE0EE">
        <rect x="34" y="57" width="12" height="8" rx="4" fill="#2F4157" />
        <rect x="54" y="57" width="12" height="8" rx="4" fill="#2F4157" />
        <path d="M46 61h8" stroke="#2F4157" strokeWidth={2} />
        <path d="M32 59l-4-3" stroke="#2F4157" strokeWidth={2} strokeLinecap="round" />
        <path d="M68 59l4-3" stroke="#2F4157" strokeWidth={2} strokeLinecap="round" />
      </DogMascotBase>
    </Sticker>
  );
}

export function GermanShepherd(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path d="M50 16 40 26h20Z" fill="#CFE0EE" stroke={INK} strokeWidth={2.4} />
      <circle cx="50" cy="14" r="3.4" fill="#F2C94C" stroke={INK} strokeWidth={1.6} />
      <DogMascotBase earFill="#DCEFE3">
        <circle cx="41" cy="60" r="3" fill={INK} />
        <circle cx="59" cy="60" r="3" fill={INK} />
      </DogMascotBase>
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

// A ring of overlapping petals reads as a rose bloom; three concentric
// circles just read as a target/lollipop, which was the complaint.
const PETAL = "M0-3c9-11 9-24 0-27c-9 3-9 16 0 27Z";
const PETAL_ANGLES = [0, 72, 144, 216, 288];

function RoseBloom({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const scale = r / 27;
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {PETAL_ANGLES.map((angle, i) => (
        <path
          key={i}
          d={PETAL}
          transform={`rotate(${angle}) scale(${scale})`}
          fill={i % 2 === 0 ? "#C1435F" : "#B23A55"}
          stroke={INK}
          strokeWidth={2.5 / scale}
        />
      ))}
      <circle r={r * 0.32} fill="#E17E92" stroke={INK} strokeWidth={2} />
      <path
        d={`M${-r * 0.12} ${-r * 0.1}c-3-3-1-7 3-7`}
        stroke={INK}
        strokeWidth={1.4}
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

export function RoseSingle(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path d="M50 68v22" stroke="#5C8A4B" strokeWidth={4} strokeLinecap="round" />
      <path d="M50 80c6-2 10-8 10-8s-8 0-10 8Zm0-2c-6-2-10-8-10-8s8 0 10 8Z" fill="#6FA858" stroke={INK} strokeWidth={1.5} />
      <RoseBloom cx={50} cy={44} r={22} />
    </Sticker>
  );
}

export function RoseStem(props: SVGProps<SVGSVGElement>) {
  return (
    <Sticker {...props}>
      <path d="M50 40v52" stroke="#5C8A4B" strokeWidth={4} strokeLinecap="round" />
      <path
        d="M50 62c8-3 13-10 13-10s-9-1-13 10Zm0 12c-8-3-13-10-13-10s9-1 13 10Z"
        fill="#6FA858"
        stroke={INK}
        strokeWidth={1.5}
      />
      <RoseBloom cx={50} cy={24} r={18} />
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
