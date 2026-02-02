import { Instagram, Music2, Twitter, BadgeCheck } from "lucide-react"

const platforms = [
  {
    name: "Instagram Accounts",
    description: "Verified, aged, and accounts with real followers ready for your brand or business.",
    icon: Instagram,
  },
  {
    name: "TikTok Accounts",
    description: "Fresh and established TikTok accounts to jumpstart your content creation journey.",
    icon: Music2,
  },
  {
    name: "Twitter/X Accounts",
    description: "Aged handles and verified accounts for your personal or business needs.",
    icon: Twitter,
  },
  {
    name: "Verified Accounts",
    description: "Blue checkmark accounts across platforms for instant credibility.",
    icon: BadgeCheck,
  },
]

export function ServicesSection() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Premium social media accounts across all major platforms.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="relative rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <platform.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-card-foreground">{platform.name}</h3>
              <p className="mt-2 text-muted-foreground">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
