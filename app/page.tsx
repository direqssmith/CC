"use client"

import { StarshipBackground } from "@/components/starship-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import MusicPlayer from "@/components/music-player"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Global 3D Background */}
      <StarshipBackground />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Navigation />
        
        <main>
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <HowItWorksSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
      
      {/* Music Player */}
      <MusicPlayer className="fixed bottom-5 left-5 w-64 z-50" />
    </div>
  )
}
