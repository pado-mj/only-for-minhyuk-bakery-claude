"use client";

import { useState } from "react";
import { DECORATION_ASSETS, DECORATION_TAB_GROUPS } from "@/lib/assets";
import { useI18n } from "@/lib/i18n/context";
import { useEditorStore } from "@/store/editorStore";

export function DecorationPicker() {
  const { locale } = useI18n();
  const [tabId, setTabId] = useState(DECORATION_TAB_GROUPS[0].id);
  const addObject = useEditorStore((s) => s.addObject);

  const tabLabel = (g: (typeof DECORATION_TAB_GROUPS)[number]) =>
    locale === "ko" ? g.labelKo : locale === "ja" ? g.labelJa : g.labelEn;
  const assetLabel = (a: (typeof DECORATION_ASSETS)[number]) =>
    locale === "ko" ? a.labelKo : locale === "ja" ? a.labelJa : a.labelEn;

  const activeGroup = DECORATION_TAB_GROUPS.find((g) => g.id === tabId) ?? DECORATION_TAB_GROUPS[0];

  return (
    <div>
      <div className="no-scrollbar mb-3 flex gap-2 overflow-x-auto">
        {DECORATION_TAB_GROUPS.map((g) => (
          <button
            key={g.id}
            onClick={() => setTabId(g.id)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
              tabId === g.id ? "bg-ink text-cream" : "bg-paper text-ink-soft"
            }`}
          >
            {tabLabel(g)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {DECORATION_ASSETS.filter((a) => activeGroup.categories.includes(a.category)).map((asset) => (
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
