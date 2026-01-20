"use client";

import HeroSection from "@/components/home/HeroSection";
import ThreeSystemsSection from "@/components/home/ThreeSystemsSection";
import HowTheyWorkSection from "@/components/home/HowTheyWorkSection";
import KeyBenefitsSection from "@/components/home/KeyBenefitsSection";
import FeatureHighlightsSection from "@/components/home/FeatureHighlightsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ThreeSystemsSection />
      <HowTheyWorkSection />
      <KeyBenefitsSection />
      <FeatureHighlightsSection />
      <CTASection />
    </div>
  );
}
