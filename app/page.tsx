"use client";

import BenefitSection from "@/components/hotify/benefit-section";
import DiscoverSection from "@/components/hotify/discover-section";
import Footer from "@/components/hotify/footer";
import HeroSection from "@/components/hotify/hero-section";
import Navbar from "@/components/hotify/navbar";
import ReviewSection from "@/components/hotify/review-section";
import ServiceSection from "@/components/hotify/service-section";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <main className="px-5 font-sans dark:bg-dark-background dark:text-white tab:px-36">
        {/* navbar */}
        <Navbar />
        {/* hero section */}
        <HeroSection />
        {/* discover section */}
        <DiscoverSection />
        {/* service section */}
        <ServiceSection />
        {/* benefit section */}
        <BenefitSection />
        {/* review section */}
        <ReviewSection />
        {/* theme toggle */}
        <ThemeToggle />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}
