import { CakeDetailClient } from "@/components/cake/CakeDetailClient";

export default async function CakeDetailPage({
  params,
}: {
  params: Promise<{ publicId: string }>;
}) {
  const { publicId } = await params;
  return <CakeDetailClient publicId={publicId} />;
}
