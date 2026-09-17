"use client";

import { useState } from "react";
import { DECORATION_ASSETS, DECORATION_CATEGORIES } from "@/lib/assets";
import { useI18n } from "@/lib/i18n/context";
import { useEditorStore } from "@/store/editorStore";
import type { DecorationCategory } from "@/types/cake";

export function DecorationPicker() {
  const { t, locale } = useI18n();
  const [category, setCategory] = useState<DecorationCategory>("fruit");
  const addObject = useEditorStore((s) => s.addObject);

  const assetLabel = (a: (typeof DECORATION_ASSETS)[number]) =>
    locale === "ko" ? a.labelKo : locale === "ja" ? a.labelJa : a.labelEn;

  return (
    <div>
      <div className="no-scrollbar mb-3 flex gap-2 overflow-x-auto">
        {DECORATION_CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
              category === c.id ? "bg-ink text-cream" : "bg-paper text-ink-soft"
            }`}
          >
            {t.editor[c.id]}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {DECORATION_ASSETS.filter((a) => a.category === category).map((asset) => (
          <button
            key={asset.id}
            onClick={() =>
              addObject({
                type: "decoration",
                assetId: asset.id,
                category: asset.category,
                x: 540,
                y: 500,
                scale: 1,
                rotation: 0,
                layer: 3,
              })
            }
            className="paper-card flex flex-col items-center gap-1 p-2 transition-transform active:scale-95"
            aria-label={assetLabel(asset)}
          >
            <asset.Icon className="h-10 w-10" />
          </button>
        ))}
      </div>
    </div>
  );
}
