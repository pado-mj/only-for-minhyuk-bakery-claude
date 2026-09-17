"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CakeCanvas } from "@/components/cake/CakeCanvas";
import { createSupabaseClient } from "@/lib/supabase/client";
import { useI18n } from "@/lib/i18n/context";
import { useLastCreatedStore } from "@/store/lastCreatedStore";
import type { CakeRecord } from "@/types/cake";

function CompleteContent() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const publicId = searchParams.get("id") ?? "";
  const lastCreated = useLastCreatedStore((s) => s.record);
  const [fetched, setFetched] = useState<CakeRecord | null | undefined>(undefined);
  const [copied, setCopied] = useState(false);
  const [savingNote, setSavingNote] = useState(false);

  const record = lastCreated?.publicId === publicId ? lastCreated : fetched;

  useEffect(() => {
    // Direct load / refresh of this URL loses the in-memory "just created"
    // record — fall back to reading it straight from Supabase by public id.
    if (lastCreated?.publicId === publicId || !publicId) return;
    let cancelled = false;
    createSupabaseClient()
      .from("cakes")
      .select(
        "id, public_id, public_number, nickname, country, letter, cake_data, view_count, created_at, status"
      )
      .eq("public_id", publicId)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        if (!data) {
          setFetched(null);
          return;
        }
        setFetched({
          id: data.id,
          publicId: data.public_id,
          publicNumber: data.public_number,
          nickname: data.nickname,
          country: data.country ?? undefined,
          letter: data.letter,
          cakeData: data.cake_data,
          viewCount: data.view_count,
          createdAt: data.created_at,
          status: data.status,
        });
      });
    return () => {
      cancelled = true;
    };
  }, [publicId, lastCreated]);

  if (!record) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
        <p className="text-sm text-ink-soft">{t.common.loading}</p>
        <Link href="/" className="mt-4 text-xs font-bold text-berry">
          {t.cakeDetail.backToTable}
        </Link>
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/cake/${record.publicId}` : "";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable; silently ignore
    }
  };

  return (
    <div className="flex min-h-dvh flex-col items-center px-6 pb-10 pt-14 text-center">
      <h1 className="text-lg font-extrabold text-ink">{t.complete.title}</h1>

      <div className="mx-auto mt-6 w-56">
        <CakeCanvas cakeData={record.cakeData} candlesLit={false} />
      </div>

      <p className="mt-4 text-sm font-semibold text-ink">
        {t.home.madeBy} {record.nickname}
      </p>
      <p className="mt-1 text-xs text-ink-soft">
        {t.complete.cakeNumber} #{record.publicNumber}
      </p>

      <div className="mt-6 flex w-full max-w-xs gap-2">
        <button
          onClick={() => {
            setSavingNote(true);
            setTimeout(() => setSavingNote(false), 2000);
          }}
          className="flex-1 rounded-full bg-paper-dark py-3 text-xs font-bold text-ink-soft"
        >
          {t.complete.saveImage}
        </button>
        <button
          onClick={handleCopyLink}
          className="flex-1 rounded-full bg-berry py-3 text-xs font-bold text-cream"
        >
          {t.complete.copyLink}
        </button>
      </div>
      <div className="mt-2 h-4 text-[11px] font-semibold text-berry">
        {copied ? t.complete.linkCopied : savingNote ? t.complete.saveComingSoon : ""}
      </div>

      <div className="mt-8 flex w-full max-w-xs flex-col gap-2.5">
        <Link
          href={`/cake/${record.publicId}`}
          className="rounded-full border border-ink/15 py-3 text-xs font-bold text-ink"
        >
          {t.complete.viewMine}
        </Link>
        <Link href="/" className="rounded-full border border-ink/15 py-3 text-xs font-bold text-ink">
          {t.complete.backToTable}
        </Link>
        <Link
          href="/create/decorate"
          className="rounded-full bg-ink py-3 text-xs font-bold text-cream"
        >
          {t.complete.makeAnother}
        </Link>
      </div>
    </div>
  );
}

export default function CompletePage() {
  return (
    <Suspense fallback={null}>
      <CompleteContent />
    </Suspense>
  );
}
