"use client"

import { Activity } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 py-12 border-t border-border/50 bg-background/60 backdrop-blur-sm">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold text-foreground">MotionAI</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            2026 MotionAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
