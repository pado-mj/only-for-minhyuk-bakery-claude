import { getDecorationAsset } from "@/lib/assets";
import { ClassicCandle, DogCandle, HeartCandle, NumberCandle } from "@/components/icons/candles";
import type { CanvasObject } from "@/types/cake";

export function CanvasObjectSprite({
  object,
  lit = true,
}: {
  object: CanvasObject;
  lit?: boolean;
}) {
  if (object.type === "decoration") {
    const asset = getDecorationAsset(object.assetId);
    if (!asset) return null;
    const { Icon } = asset;
    return <Icon className="h-full w-full sticker-shadow" />;
  }

  if (object.type === "image" && object.imageDataUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={object.imageDataUrl}
        alt=""
        className="h-full w-full object-contain sticker-shadow"
        draggable={false}
      />
    );
  }

  if (object.type === "topper") {
    const isDark = object.textStyle === "dark";
    return (
      <div
        className={`w-full rounded-2xl border-2 text-center font-bold leading-tight sticker-shadow ${
          isDark ? "bg-navy text-cream border-navy" : "bg-cream text-ink border-ink"
        }`}
        style={{ fontSize: "13cqw", padding: "0.55em 0.85em" }}
      >
        {object.text}
      </div>
    );
  }

  if (object.type === "candle") {
    if (object.assetId === "heart") return <HeartCandle lit={lit} className="h-full w-full" />;
    if (object.assetId === "dog") return <DogCandle lit={lit} className="h-full w-full" />;
    if (object.assetId.startsWith("number-")) {
      const digit = Number(object.assetId.split("-")[1] ?? 0);
      return <NumberCandle digit={digit} lit={lit} className="h-full w-full" />;
    }
    return <ClassicCandle lit={lit} className="h-full w-full" />;
  }

  return null;
}
