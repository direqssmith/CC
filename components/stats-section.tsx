"use client"

const stats = [
  {
    value: "98.7%",
    label: "Motion Recognition Accuracy",
    description: "Real-time body tracking"
  },
  {
    value: "150+",
    label: "Gesture Patterns Learned",
    description: "Expanding library"
  },
  {
    value: "50ms",
    label: "Response Latency",
    description: "Near-instant feedback"
  },
  {
    value: "24/7",
    label: "Continuous Learning",
    description: "Self-improving models"
  }
]

export function StatsSection() {
  return (
    <section className="relative z-10 py-20 border-t border-border/50 bg-background/40 backdrop-blur-sm">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <p className="text-3xl font-bold text-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
