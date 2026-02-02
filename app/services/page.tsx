import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Instagram,
  Music2,
  Twitter,
  BadgeCheck,
  Users,
  Clock,
  Sparkles,
  ShieldCheck,
  MessageCircle,
} from "lucide-react"

const accountTypes = [
  {
    name: "Verified Accounts",
    description: "Accounts with the official blue checkmark for instant credibility and trust.",
    icon: BadgeCheck,
    platforms: ["Instagram", "Twitter/X", "TikTok"],
  },
  {
    name: "Aged Accounts",
    description: "Established accounts with history, perfect for avoiding new account restrictions.",
    icon: Clock,
    platforms: ["Instagram", "Twitter/X", "TikTok"],
  },
  {
    name: "Accounts with Followers",
    description: "Pre-built audience accounts to jumpstart your social presence immediately.",
    icon: Users,
    platforms: ["Instagram", "Twitter/X", "TikTok"],
  },
  {
    name: "Fresh Accounts",
    description: "Newly created accounts ready for you to build from scratch your way.",
    icon: Sparkles,
    platforms: ["Instagram", "Twitter/X", "TikTok"],
  },
]

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    accounts: [
      { type: "Fresh Account", price: "Contact for price" },
      { type: "Aged Account (1+ year)", price: "Contact for price" },
      { type: "Account with 10K+ Followers", price: "Contact for price" },
      { type: "Verified Account", price: "Contact for price" },
    ],
  },
  {
    name: "TikTok",
    icon: Music2,
    accounts: [
      { type: "Fresh Account", price: "Contact for price" },
      { type: "Aged Account (6+ months)", price: "Contact for price" },
      { type: "Account with 10K+ Followers", price: "Contact for price" },
      { type: "Monetizable Account", price: "Contact for price" },
    ],
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    accounts: [
      { type: "Fresh Account", price: "Contact for price" },
      { type: "Aged Account (2+ years)", price: "Contact for price" },
      { type: "Account with Followers", price: "Contact for price" },
      { type: "Verified Account", price: "Contact for price" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Our Accounts</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Browse our selection of social media accounts. Contact us on WhatsApp to check availability and pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Account Types */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Account Types</h2>
              <p className="mt-4 text-lg text-muted-foreground">Choose the type that fits your needs.</p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
              {accountTypes.map((type) => (
                <div key={type.name} className="rounded-2xl border border-border bg-card p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-card-foreground">{type.name}</h3>
                  <p className="mt-3 text-muted-foreground">{type.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {type.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Catalog */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Browse by Platform</h2>
              <p className="mt-4 text-lg text-muted-foreground">Select your platform to see available accounts.</p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
              {platforms.map((platform) => (
                <div key={platform.name} className="rounded-2xl border border-border bg-card p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                      <platform.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">{platform.name}</h3>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {platform.accounts.map((account) => (
                      <li
                        key={account.type}
                        className="flex items-center justify-between border-b border-border pb-3 last:border-0"
                      >
                        <span className="text-sm text-muted-foreground">{account.type}</span>
                        <span className="text-sm font-medium text-foreground">{account.price}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full" asChild>
                    <a href="https://wa.me/2347015891556" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Order Now
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <ShieldCheck className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-foreground">Secure & Trusted</h2>
              <p className="mt-4 text-muted-foreground">
                All accounts are delivered securely with full login credentials. We provide after-sales support to
                ensure smooth account transfers.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-semibold text-primary-foreground sm:text-3xl">
              Can't find what you're looking for?
            </h2>
            <p className="mt-4 text-primary-foreground/80">Message us for custom requests and bulk orders.</p>
            <Button size="lg" variant="secondary" className="mt-8" asChild>
              <a href="https://wa.me/2347015891556" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Us on WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
