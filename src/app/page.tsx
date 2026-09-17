import { HomeClient } from "@/components/home/HomeClient";
import { getMockStats, MOCK_CAKES } from "@/lib/mock/cakes";

export default function HomePage() {
  const stats = getMockStats();
  return <HomeClient cakes={MOCK_CAKES} stats={stats} />;
}
