import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Buy Social Media Accounts — Fast & Trusted
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            FREEBLE is your reliable digital platform for purchasing social media handles. Get verified, aged, or fresh
            accounts for Instagram, TikTok, and Twitter/X with secure transactions.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="https://wa.me/2347015891556" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Order on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Browse Accounts</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
