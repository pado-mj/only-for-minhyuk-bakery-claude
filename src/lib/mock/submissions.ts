import type { CakeRecord } from "@/types/cake";

// In-memory only: simulates the public feed for cakes created during this
// browser session, ahead of the real Supabase-backed API (Phase 3).
const submissions: CakeRecord[] = [];

export function addSubmission(record: CakeRecord) {
  submissions.unshift(record);
}

export function getSubmission(publicId: string) {
  return submissions.find((c) => c.publicId === publicId);
}

export function getAllSubmissions() {
  return submissions;
}
