"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4 text-sm font-mono tracking-widest uppercase text-cyan-400">
          Motion Intelligence Platform
        </p>
        
        <h1 className="text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl text-foreground">
          Teaching AI the Language of{" "}
          <span className="text-cyan-400">Human Movement</span>
        </h1>
        
        <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          Train virtual avatars to understand and replicate human body language. 
          Enable seamless, natural communication between AI and humans through 
          movement-based interaction.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium"
          >
            Start Training
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-secondary px-8 py-6 text-base font-medium bg-transparent"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
