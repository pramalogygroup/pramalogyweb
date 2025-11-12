import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Products from "@/components/sections/products"
import About from "@/components/sections/about"
import Stats from "@/components/sections/stats"
import CTA from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Pramalogy - IT Services & SaaS Solutions",
  description:
    "Leading IT service and SaaS product company providing custom development solutions and innovative subscription-based products for modern businesses.",
  keywords: "IT services, SaaS products, custom development, BhadaSeva, ReckOnBook, software solutions",
  openGraph: {
    title: "Pramalogy - IT Services & SaaS Solutions",
    description:
      "Leading IT service and SaaS product company providing custom development solutions and innovative subscription-based products.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Products />
      <About />
      <CTA />
    </main>
  )
}
