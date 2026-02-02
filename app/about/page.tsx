import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Target, Eye, Shield, MessageCircle } from "lucide-react"

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    image: "/professional-headshot-man-in-blue-suit.jpg",
    bio: "10+ years in digital marketing and social media strategy.",
  },
  {
    name: "Maria Garcia",
    role: "Head of Operations",
    image: "/professional-headshot-woman-in-business-attire.jpg",
    bio: "Expert in scaling social media management processes.",
  },
  {
    name: "James Wilson",
    role: "Creative Director",
    image: "/professional-headshot-man-creative-director.jpg",
    bio: "Award-winning content creator with a passion for storytelling.",
  },
  {
    name: "Sophie Chen",
    role: "Lead Strategist",
    image: "/professional-headshot-woman-strategist.jpg",
    bio: "Data-driven approach to growing brands online.",
  },
]

const values = [
  {
    name: "Our Mission",
    description:
      "To provide a reliable and trusted platform for purchasing social media accounts, making it easy for individuals and businesses to establish their online presence.",
    icon: Target,
  },
  {
    name: "Our Vision",
    description:
      "To become the go-to marketplace for social media accounts, known for fast delivery, secure transactions, and excellent customer service.",
    icon: Eye,
  },
  {
    name: "Our Promise",
    description:
      "Every account we sell is verified and delivered securely. We stand behind our products with dedicated after-sales support.",
    icon: Shield,
  },
]

const milestones = [
  { year: "2018", title: "Founded", description: "FREEBLE started with a vision to make social media accessible." },
  { year: "2020", title: "100 Clients", description: "Reached our first major milestone of 100 active clients." },
  { year: "2022", title: "Team Expansion", description: "Grew our team to 25 dedicated social media experts." },
  { year: "2024", title: "500+ Clients", description: "Now serving over 500 businesses worldwide." },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">About FREEBLE</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                FREEBLE is a digital platform offering reliable social media services and online solutions. We
                specialize in providing fast and trusted social media account services across Instagram, TikTok, and
                Twitter/X.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-center">
                What We Do
              </h2>
              <div className="mt-12 space-y-6 text-muted-foreground">
                <p>
                  We sell social media handles and accounts to help individuals, content creators, and businesses
                  establish or grow their online presence quickly. Whether you need a fresh account, an aged account
                  with history, or a verified account with the blue checkmark — we've got you covered.
                </p>
                <p>
                  Our platform offers accounts across major social networks including Instagram, TikTok, and Twitter/X.
                  Each account is carefully sourced and verified before being listed for sale.
                </p>
                <p>
                  We understand that getting started on social media can be challenging, especially with platform
                  restrictions on new accounts. That's why we provide aged and established accounts that give you a head
                  start.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Promise */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="rounded-2xl border border-border bg-card p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-card-foreground">{value.name}</h3>
                  <p className="mt-4 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why Trust FREEBLE?</h2>
              <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground">Fast Delivery</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Most orders are delivered within hours of confirmed payment.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground">Secure Transactions</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Safe payment methods and encrypted account transfers.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground">After-Sales Support</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We're available on WhatsApp to help with any issues.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground">Verified Accounts</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Every account is checked before delivery to ensure quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse our available accounts or message us for custom requests.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="https://wa.me/2347015891556" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
