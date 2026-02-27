const steps = [
  {
    number: "01",
    title: "Explore & Define",
    description:
      "We begin by understanding your organisation, your data, and the decisions you need to make. No assumptions.",
  },
  {
    number: "02",
    title: "Gather & Model",
    description:
      "We apply rigorous analytical and machine learning methods to your data, iterating until we find what matters.",
  },
  {
    number: "03",
    title: "Communicate & Deliver",
    description:
      "Findings are presented with clarity and precision. We build and support tools that provide simple access to powerful information.",
  },
]

export function Approach() {
  return (
    <section id="approach" className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <p className="text-sm font-medium tracking-widest text-teal uppercase mb-4 font-sans">
            How We Work
          </p>
          <h2 className="text-3xl font-normal text-foreground font-serif sm:text-4xl lg:text-5xl text-balance leading-tight">
            {/* A methodical approach to complexity. */}
            A methodical journey to simplicity.
          </h2>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="bg-background p-8 lg:p-12">
              <span className="text-5xl font-light text-copper/40 font-serif">{step.number}</span>
              <h3 className="mt-6 text-lg font-medium text-foreground font-sans">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
