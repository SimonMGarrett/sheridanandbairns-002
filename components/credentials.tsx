import { GraduationCap, Clock, Building2, Users } from "lucide-react"

const credentials = [
  {
    icon: GraduationCap,
    label: "Research in Machine Learning",
    detail: "Deep academic foundation in statistical learning, neural architectures, and probabilistic reasoning.",
  },
  {
    icon: Clock,
    label: "Decades of Data Analysis",
    detail: "Hands-on delivery experience, in multiple environments, transforming raw data into strategic advantage.",
  },
  {
    icon: Building2,
    label: "Multiple UK Gov Organisations",
    detail: "Trusted across Whitehall and beyond to deliver sensitive, high-impact analytical work at scale.",
  },
  {
    icon: Users,
    label: "Client-Facing for 12 Years",
    detail: "We communicate complexity clearly. By working closely with teams, we help turn fragmented data into shared, trustworthy insight — insight that is accessible, understandable, and genuinely useful for decisions.",
  },
]

export function Credentials() {
  return (
    <section id="credentials" className="relative py-32 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/images/london-gov.jpg"
          alt="Traditional London government building"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: heading */}
          <div>
            <p className="text-sm font-medium tracking-widest text-teal uppercase mb-4 font-sans">
              Credentials
            </p>
            <h2 className="text-3xl font-normal text-foreground font-serif sm:text-4xl lg:text-5xl text-balance leading-tight">
              Built on rigour.<br />Proven through delivery.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground font-sans lg:text-lg max-w-lg">
              Our expertise is not theoretical. It has been tested across the most demanding analytical environments in the United Kingdom.
            </p>
          </div>

          {/* Right: credential items */}
          <div className="flex flex-col gap-0">
            {credentials.map((cred, i) => (
              <div
                key={cred.label}
                className={`flex gap-5 py-8 ${i !== credentials.length - 1 ? "border-b border-foreground/10" : ""}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-copper/15 border border-copper/20">
                  <cred.icon className="h-5 w-5 text-copper" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground font-sans">{cred.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground font-sans">
                    {cred.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
