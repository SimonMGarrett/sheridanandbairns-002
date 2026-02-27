import { ArrowDown } from "lucide-react"
import { Tagline } from "./shared/tagline"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-data.jpg"
          alt="Abstract data visualization"
          className="h-full w-full object-cover mt-16"
        />
        <div className="absolute inset-0 bg-copper/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-medium tracking-widest text-teal uppercase mb-6 font-sans">
            Sheridan + Bairns
          </p>
          <h1 className="text-4xl font-normal leading-tight text-foreground font-serif sm:text-5xl lg:text-7xl text-balance">
            <Tagline />
          </h1>
          <ul className="mt-4 pl-6 max-w-2xl text-base leading-relaxed text-muted-foreground font-sans lg:text-lg">
            <li className="list-disc">Transforming stores of office files into connected, accessible information.</li> 
            <li className="list-disc">Wielding that information to support decisions across UK GOV.</li>
            {/* <li className="list-disc">Deep Expertise: Machine Learning, Data Analytics, AI Governance.</li> 
            <li className="list-disc">From Complexity to Clarity for Organisations Across UK GOV.</li> */}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-copper text-copper-foreground px-7 py-3 text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Our Services
            </a>
            <a
              href="#credentials"
              className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3 text-sm font-medium rounded-sm hover:bg-secondary transition-colors"
            >
              Our Credentials
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase font-sans">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
