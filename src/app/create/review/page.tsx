"use client";

import { useRouter } from "next/navigation";
import { CakeCanvas } from "@/components/cake/CakeCanvas";
import { countryFlagEmoji, countryLabel } from "@/lib/countries";
import { generatePublicId } from "@/lib/id";
import { addSubmission } from "@/lib/mock/submissions";
import { MOCK_CAKES } from "@/lib/mock/cakes";
import { useI18n } from "@/lib/i18n/context";
import { useEditorStore } from "@/store/editorStore";
import { useSubmissionStore } from "@/store/submissionStore";

export default function ReviewPage() {
  const { t, locale } = useI18n();
  const router = useRouter();
  const present = useEditorStore((s) => s.present);
  const markSubmitted = useEditorStore((s) => s.markSubmitted);
  const { nickname, country, letter } = useSubmissionStore();

  const handleComplete = () => {
    const publicNumber = MOCK_CAKES[0]?.publicNumber ? MOCK_CAKES[0].publicNumber + 1 : 1;
    const record = {
      id: generatePublicId(),
      publicId: generatePublicId(),
      publicNumber,
      nickname: nickname.trim(),
      country,
      letter: letter.trim(),
      cakeData: present,
      viewCount: 0,
      createdAt: new Date().toISOString(),
      status: "published" as const,
    };
    addSubmission(record);
    markSubmitted();
    router.push(`/create/complete?id=${record.publicId}`);
  };

  return (
    <div className="px-4">
      <h1 className="mb-4 text-center text-sm font-bold text-ink">{t.review.title}</h1>

      <div className="mx-auto w-48">
        <CakeCanvas cakeData={present} candlesLit={false} />
      </div>

      <div className="paper-card mt-4 p-4">
        <div className="flex items-center gap-1.5 text-sm font-bold text-ink">
          <span>{nickname}</span>
          {country && (
            <span className="text-xs font-normal text-ink-soft">
              {countryFlagEmoji(country)} {countryLabel(country, locale)}
            </span>
          )}
        </div>
        <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink">{letter}</p>
      </div>

      <p className="mt-4 rounded-xl bg-berry/10 px-3 py-3 text-center text-xs font-semibold leading-relaxed text-berry">
        {t.review.warning}
      </p>

      <div className="mt-5 flex gap-2">
        <button
          onClick={() => router.push("/create/decorate")}
          className="flex-1 rounded-full bg-paper-dark py-3.5 text-sm font-bold text-ink-soft"
        >
          {t.common.edit}
        </button>
        <button
          onClick={handleComplete}
          className="flex-1 rounded-full bg-berry py-3.5 text-sm font-bold text-cream shadow-lg transition-transform active:scale-[0.98]"
        >
          {t.review.complete}
        </button>
      </div>
    </div>
  );
}
