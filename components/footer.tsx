import { Logo } from "./shared/logo"
import { Tagline } from "./shared/tagline"

export function Footer() {
  const yr = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-1 font-sheridan">
              <Logo />
            </div>
            <p className="mt-2 text-xs text-muted-foreground font-sans">
              <Tagline />
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            <a href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-sans">
              Services
            </a>
            <a href="#credentials" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-sans">
              Credentials
            </a>
            <a href="#approach" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-sans">
              Approach
            </a>
            <a href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-sans">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground font-sans">
            {`© ${yr} Sheridan + Bairns. All rights reserved.`}
          </p>
          <p className="text-xs text-muted-foreground font-sans">
            London, United Kingdom
          </p>
        </div>
      </div>
    </footer>
  )
}
