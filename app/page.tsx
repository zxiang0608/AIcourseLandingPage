import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Pain } from "@/components/sections/pain";
import { Authority } from "@/components/sections/authority";
import { Mechanism } from "@/components/sections/mechanism";
// ExecutionModule moved to embedded components
import { SocialProof } from "@/components/sections/social-proof";
import { Filter } from "@/components/sections/filter";
import { Offer } from "@/components/sections/offer";
import { FAQ } from "@/components/sections/faq";
import { MobileStickyFooter } from "@/components/layout/mobile-sticky-footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#C69D3C]/30">
      <Hero />
      <TrustStrip />
      <Pain />
      <Authority />
      <Mechanism />
      {/* ExecutionModule moved to embedded components */}
      <SocialProof />
      <Filter />
      <Offer />
      <FAQ />
      <MobileStickyFooter />
      {/* Additional sections will be added here */}
    </main>
  );
}
