import type { ComponentType, SVGProps } from "react";
import {
  Blueberry,
  Cherry,
  Chihuahua,
  Cucumber,
  GermanShepherd,
  Maltese,
  MintChoco,
  RibbonBow,
  RibbonClassic,
  RoseSingle,
  RoseStem,
  Strawberry,
  WhaleCute,
  WhaleHumpback,
} from "@/components/icons/decorations";
import type { DecorationCategory } from "@/types/cake";

export interface DecorationAsset {
  id: string;
  category: DecorationCategory;
  labelKo: string;
  labelEn: string;
  labelJa: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const DECORATION_ASSETS: DecorationAsset[] = [
  { id: "fruit-strawberry", category: "fruit", labelKo: "딸기", labelEn: "Strawberry", labelJa: "いちご", Icon: Strawberry },
  { id: "fruit-cherry", category: "fruit", labelKo: "체리", labelEn: "Cherry", labelJa: "さくらんぼ", Icon: Cherry },
  { id: "fruit-blueberry", category: "fruit", labelKo: "블루베리", labelEn: "Blueberry", labelJa: "ブルーベリー", Icon: Blueberry },
  { id: "ribbon-classic", category: "ribbon", labelKo: "리본", labelEn: "Ribbon", labelJa: "リボン", Icon: RibbonClassic },
  { id: "ribbon-bow", category: "ribbon", labelKo: "보우 리본", labelEn: "Bow Ribbon", labelJa: "ボウリボン", Icon: RibbonBow },
  { id: "dog-maltese", category: "dog", labelKo: "강아지", labelEn: "Dog", labelJa: "わんこ", Icon: Maltese },
  { id: "dog-chihuahua", category: "dog", labelKo: "쿨한 강아지", labelEn: "Cool Dog", labelJa: "クールなわんこ", Icon: Chihuahua },
  { id: "dog-german-shepherd", category: "dog", labelKo: "파티 강아지", labelEn: "Party Dog", labelJa: "パーティわんこ", Icon: GermanShepherd },
  { id: "whale-humpback", category: "whale", labelKo: "혹등고래", labelEn: "Humpback Whale", labelJa: "ザトウクジラ", Icon: WhaleHumpback },
  { id: "whale-cute", category: "whale", labelKo: "아기 고래", labelEn: "Baby Whale", labelJa: "こくじら", Icon: WhaleCute },
  { id: "rose-single", category: "rose", labelKo: "장미", labelEn: "Rose", labelJa: "バラ", Icon: RoseSingle },
  { id: "rose-stem", category: "rose", labelKo: "장미 줄기", labelEn: "Rose Stem", labelJa: "バラの茎", Icon: RoseStem },
  { id: "hate-cucumber", category: "hate", labelKo: "오이", labelEn: "Cucumber", labelJa: "きゅうり", Icon: Cucumber },
  { id: "hate-mint-choco", category: "hate", labelKo: "민트초코", labelEn: "Mint Chocolate", labelJa: "ミントチョコ", Icon: MintChoco },
];


export function getDecorationAsset(id: string) {
  return DECORATION_ASSETS.find((a) => a.id === id);
}

export const CAKE_COLOR_PRESETS = [
  { id: "cream", label: "Cream", hex: "#F3D9B1" },
  { id: "ivory", label: "Ivory", hex: "#F7EFDD" },
  { id: "yellow", label: "Yellow", hex: "#F2C94C" },
  { id: "blue", label: "Blue", hex: "#A9C7E0" },
  { id: "chocolate", label: "Chocolate", hex: "#6B4423" },
];

export const BACKGROUND_COLOR_PRESETS = [
  { id: "peach", hex: "#F6DCC6" },
  { id: "blush", hex: "#F3CBD3" },
  { id: "mint", hex: "#CFE3D4" },
  { id: "sky", hex: "#CFE0EE" },
  { id: "lilac", hex: "#DCD3EA" },
  { id: "butter", hex: "#F2E4B8" },
];

export const PRESET_TOPPERS = [
  "HAPPY BIRTHDAY",
  "MINHYUK",
  "1103",
  "ONLY FOR MINHYUK",
  "LOVE YOU",
  "♡",
];
