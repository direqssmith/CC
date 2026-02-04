"use client"

const steps = [
  {
    number: "01",
    title: "Capture",
    description: "Our sensors detect and record human body movements with high-fidelity tracking across 32 key joint points."
  },
  {
    number: "02",
    title: "Analyze",
    description: "Neural networks process movement data, identifying patterns, emotions, and communicative intent in real-time."
  },
  {
    number: "03",
    title: "Learn",
    description: "AI models continuously train on movement data, building an expanding vocabulary of body language expressions."
  },
  {
    number: "04",
    title: "Synthesize",
    description: "Virtual avatars replicate learned movements naturally, enabling seamless AI-human body language communication."
  }
]

export function HowItWorksSection() {
  return (
    <section className="relative z-10 py-24 border-t border-border/50">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono tracking-widest uppercase text-cyan-400 mb-4">
            The Process
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            How AI Learns Body Language
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-start">
                <span className="text-5xl font-bold text-cyan-400/20 mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-border/50 -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
