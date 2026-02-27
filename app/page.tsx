import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Credentials } from "@/components/credentials"
import { Approach } from "@/components/approach"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Credentials />
      <Approach />
      <Contact />
      <Footer />
    </main>
  )
}
