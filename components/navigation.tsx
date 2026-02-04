"use client"

import { Button } from "@/components/ui/button"
import { Activity } from "lucide-react"

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        <div className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-cyan-400" />
          <span className="text-lg font-semibold text-foreground">MotionAI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Research
          </a>
          <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Documentation
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Log in
          </Button>
          <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  )
}
