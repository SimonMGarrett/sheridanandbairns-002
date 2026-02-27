import { Search, ShieldCheck, Brain, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Discovering Insight in Data",
    description:
      "We reveal hidden patterns and actionable intelligence from complex, high-dimensional datasets. Our rigorous analytical methods ensure every recommendation is grounded in evidence.",
  },
  {
    icon: ShieldCheck,
    title: "Detecting Threats",
    description:
      "From cyber anomalies to operational risks, we build detection systems that identify threats before they materialise. Precision and recall are engineered, not hoped for.",
  },
  {
    icon: Brain,
    title: "Controlled AI Decision-Making",
    description:
      "We design AI systems with governance at their core. Every model is interpretable, auditable, and built to operate within the boundaries your organisation defines.",
  },
  {
    icon: BarChart3,
    title: "Intuitive Visual Tools",
    description:
      "Complex findings deserve clear communication. We create bespoke visual analytics tools that let decision-makers explore, interrogate, and act on data with confidence.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-teal uppercase mb-4 font-sans">
            What We Do
          </p>
          <h2 className="text-3xl font-normal text-foreground font-serif sm:text-4xl lg:text-5xl text-balance leading-tight">
            Our collected capabilities span every part of the data landscape.
            {/* Our collected capabilities span every stage of the data lifecycle. */}
          </h2>
        </div>

        {/* Service cards */}
        <div className="mt-20 grid gap-px bg-border sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-8 lg:p-12 group hover:bg-secondary transition-colors"
            >
              <service.icon
                className="h-6 w-6 text-copper mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-medium text-foreground font-sans mb-4">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
