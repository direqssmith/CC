"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative z-10 py-24 border-t border-border/50 bg-background/40 backdrop-blur-sm">
      <div className="max-w-4xl px-6 mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
          Ready to Bridge the Communication Gap?
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          Join researchers and developers pioneering the future of human-AI interaction 
          through body language understanding.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium"
          >
            Get Early Access
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-secondary px-8 py-6 text-base font-medium bg-transparent"
          >
            View Documentation
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required. Start with our free tier.
        </p>
      </div>
    </section>
  )
}
