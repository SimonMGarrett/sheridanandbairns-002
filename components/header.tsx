"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./shared/logo"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#credentials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Credentials
          </a>
          <a href="#approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Approach
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-copper-foreground bg-copper px-5 py-2 rounded-sm hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-4">
          <a
            href="#services"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </a>
          <a
            href="#credentials"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Credentials
          </a>
          <a
            href="#approach"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Approach
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-copper-foreground bg-copper px-5 py-2 rounded-sm hover:opacity-90 transition-opacity inline-block text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  )
}
