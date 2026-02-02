import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"


export const metadata: Metadata = {
  title: "FREEBLE - Buy Social Media Accounts | Verified & Fast",
  description: "Buy verified social media accounts for Instagram, TikTok, and Twitter/X. Fast, trusted, and secure transactions with FREEBLE.",
  keywords: ["social media accounts", "Instagram", "TikTok", "Twitter", "verified accounts", "buy accounts"],
  openGraph: {
    title: "FREEBLE - Buy Social Media Accounts | Verified & Fast",
    description: "Buy verified social media accounts for Instagram, TikTok, and Twitter/X. Fast, trusted, and secure transactions.",
    type: "website",
    url: "https://freeble.com",
  }
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "FREEBLE",
            "description": "Buy verified social media accounts for Instagram, TikTok, and Twitter/X",
            "url": "https://freeble.com",
            "logo": "https://freeble.com/logo.png",
            "sameAs": [
              "https://wa.me/2347015891556"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "telephone": "+234-701-589-1556"
            },
            "areaServed": "Worldwide",
            "serviceType": "Social Media Account Sales"
          })
        }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <WhyChooseUsSection />
          <StatsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
