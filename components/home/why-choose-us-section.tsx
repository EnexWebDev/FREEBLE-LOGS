import { Zap, Shield, DollarSign, Headphones } from "lucide-react"

const features = [
  {
    name: "Fast Delivery",
    description: "Get your accounts delivered within hours of confirmed payment.",
    icon: Zap,
  },
  {
    name: "Secure Transactions",
    description: "Safe payment methods and secure account transfers you can trust.",
    icon: Shield,
  },
  {
    name: "Affordable Pricing",
    description: "Competitive rates for all account types without compromising quality.",
    icon: DollarSign,
  },
  {
    name: "24/7 Support",
    description: "Reach us anytime on WhatsApp for inquiries and after-sales support.",
    icon: Headphones,
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why Choose FREEBLE</h2>
          <p className="mt-4 text-lg text-muted-foreground">Your trusted platform for social media accounts.</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-base font-semibold text-foreground">{feature.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
