"use client";

import BenefitSection from "@/components/overview/benefit-section";
import DiscoverSection from "@/components/overview/discover-section";
import Footer from "@/components/overview/footer";
import HeroSection from "@/components/overview/hero-section";
import Navbar from "@/components/overview/navbar";
import ReviewSection from "@/components/overview/review-section";
import ServiceSection from "@/components/overview/service-section";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <main className="px-36 font-sans dark:bg-dark-background dark:text-white">
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
        {/* footer */}
        {/* theme toggle */}
        <ThemeToggle />
      </main>
      <Footer />
    </div>
  );
}
