import { CAKE_COLOR_PRESETS, BACKGROUND_COLOR_PRESETS, DECORATION_ASSETS, PRESET_TOPPERS } from "@/lib/assets";
import type { CakeRecord, CanvasObject } from "@/types/cake";
import { CANVAS_SIZE } from "@/types/cake";

// Deterministic PRNG so server- and client-rendered mock data always match
// (avoids hydration mismatches from Math.random during SSR).
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const NICKNAMES = [
  "달빛조각", "민트라떼", "Sunday", "そら", "cloud9", "복숭아", "hyuk_love",
  "별사탕", "ゆき", "bakerlove", "코코아", "MoonRabbit", "하니", "petit4",
  "봄날", "kirin", "은하수", "포옹", "Wish103", "다정", "はな", "vanilla",
  "새벽별", "dear.mh", "포근함", "цветок", "小さな星", "따뜻한손", "GoldenHour", "달콤함",
];

const COUNTRIES = ["KR", "US", "JP", "TH", "PH", "VN", "BR", "FR", "GB", "ID", "MX", "DE", "TW", "CA", undefined];

const LETTERS_KO = [
  "민혁아 생일 축하해! 항상 건강하고 행복하길 바라. 너의 웃음이 우리에게 얼마나 큰 힘이 되는지 몰라.",
  "always so proud of you. happy birthday, take care and rest well too.",
  "오늘 하루는 너를 위한 케이크로 가득 채웠어. 사랑해 민혁아 ♡ 늘 응원할게.",
  "誕生日おめでとう!いつもたくさんの元気をありがとう。これからも応援してるよ。",
  "생일 축하해! 매일매일 네가 행복했으면 좋겠어. 우리 오래오래 함께하자.",
];

function pick<T>(rand: () => number, arr: T[]): T {
  return arr[Math.floor(rand() * arr.length)];
}

function buildObjects(rand: () => number): CanvasObject[] {
  const objects: CanvasObject[] = [];
  const decoCount = 2 + Math.floor(rand() * 3);
  for (let i = 0; i < decoCount; i++) {
    const asset = pick(rand, DECORATION_ASSETS);
    objects.push({
      id: `deco-${i}`,
      type: "decoration",
      assetId: asset.id,
      category: asset.category,
      x: CANVAS_SIZE * (0.28 + rand() * 0.44),
      y: CANVAS_SIZE * (0.34 + rand() * 0.28),
      scale: 0.7 + rand() * 0.5,
      rotation: rand() * 30 - 15,
      zIndex: i,
      layer: 3,
    });
  }
  if (rand() > 0.4) {
    objects.push({
      id: "topper",
      type: "topper",
      assetId: "preset",
      x: CANVAS_SIZE * 0.5,
      y: CANVAS_SIZE * 0.28,
      scale: 1,
      rotation: 0,
      zIndex: 10,
      layer: 4,
      text: pick(rand, PRESET_TOPPERS),
      textStyle: rand() > 0.5 ? "light" : "dark",
    });
  }
  const candleCount = 1 + Math.floor(rand() * 6);
  for (let i = 0; i < candleCount; i++) {
    objects.push({
      id: `candle-${i}`,
      type: "candle",
      assetId: "classic",
      x: CANVAS_SIZE * (0.32 + (i / Math.max(1, candleCount - 1)) * 0.36),
      y: CANVAS_SIZE * 0.4,
      scale: 0.9,
      rotation: 0,
      zIndex: 20 + i,
      layer: 5,
    });
  }
  return objects;
}

function generateMockCakes(count: number): CakeRecord[] {
  const rand = mulberry32(42);
  const now = Date.now();
  const cakes: CakeRecord[] = [];
  for (let i = 0; i < count; i++) {
    const publicNumber = count - i;
    const nickname = pick(rand, NICKNAMES);
    cakes.push({
      id: `mock-${i}`,
      publicId: `mock${1000 + i}`,
      publicNumber,
      nickname,
      country: pick(rand, COUNTRIES),
      letter: pick(rand, LETTERS_KO),
      cakeData: {
        background: { mode: "preset", color: pick(rand, BACKGROUND_COLOR_PRESETS).hex },
        cakeColor: pick(rand, CAKE_COLOR_PRESETS).hex,
        objects: buildObjects(rand),
      },
      viewCount: Math.floor(rand() * 500),
      createdAt: new Date(now - i * 1000 * 60 * 47).toISOString(),
      status: "published",
    });
  }
  return cakes;
}

export const MOCK_CAKES: CakeRecord[] = generateMockCakes(120);

export function getMockCakeByPublicId(publicId: string) {
  return MOCK_CAKES.find((c) => c.publicId === publicId);
}

export function getMockStats() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayCount = MOCK_CAKES.filter((c) => new Date(c.createdAt) >= today).length;
  const countries = new Set(MOCK_CAKES.map((c) => c.country).filter(Boolean));
  return {
    total: MOCK_CAKES.length,
    today: todayCount,
    countries: countries.size,
  };
}
