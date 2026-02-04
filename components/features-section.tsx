"use client"

import { Brain, Cpu, Eye, Users, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Motion Capture",
    description: "Advanced computer vision tracks every nuance of human movement in real-time with sub-millimeter precision."
  },
  {
    icon: Brain,
    title: "Neural Learning",
    description: "Deep learning models interpret body language semantics, understanding intent behind every gesture."
  },
  {
    icon: Cpu,
    title: "Real-time Processing",
    description: "Edge computing enables instant analysis and response, creating fluid human-AI interactions."
  },
  {
    icon: Users,
    title: "Avatar Synthesis",
    description: "Virtual avatars learn and replicate human expressions, enabling natural digital communication."
  },
  {
    icon: Zap,
    title: "Adaptive Training",
    description: "Models continuously improve through interaction, developing personalized understanding for each user."
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "On-device processing ensures your movement data stays private while enabling powerful AI capabilities."
  }
]

export function FeaturesSection() {
  return (
    <section className="relative z-10 py-24 bg-background/60 backdrop-blur-sm">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono tracking-widest uppercase text-cyan-400 mb-4">
            Core Capabilities
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Bridging Human Expression and AI Understanding
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
            Our platform combines cutting-edge motion capture, neural networks, and 
            avatar technology to create a new paradigm of human-computer interaction.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-secondary">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
