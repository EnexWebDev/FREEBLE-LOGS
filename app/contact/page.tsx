"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    name: "WhatsApp",
    value: "+234 701 589 1556",
    href: "https://wa.me/2347015891556",
    icon: MessageCircle,
    primary: true,
  },
  {
    name: "Email",
    value: "hello@freeble.com",
    href: "mailto:hello@freeble.com",
    icon: Mail,
    primary: false,
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Contact Us</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Ready to purchase an account or have questions? Reach out to us on WhatsApp for the fastest response.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Contact Info - Now Primary */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Get in Touch</h2>
                <p className="mt-2 text-muted-foreground">The fastest way to reach us is via WhatsApp.</p>

                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.name === "WhatsApp" ? "_blank" : undefined}
                      rel={item.name === "WhatsApp" ? "noopener noreferrer" : undefined}
                      className={`flex items-start gap-4 rounded-xl border p-4 transition-colors ${
                        item.primary
                          ? "border-primary bg-primary/5 hover:bg-primary/10"
                          : "border-border bg-card hover:bg-muted"
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                          item.primary ? "bg-primary" : "bg-primary/10"
                        }`}
                      >
                        <item.icon className={`h-6 w-6 ${item.primary ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                        {item.primary && (
                          <span className="mt-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                            Fastest Response
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8 rounded-2xl border border-primary bg-primary/5 p-6">
                  <h3 className="text-lg font-semibold text-foreground">Order via WhatsApp</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Message us directly to browse available accounts, check prices, and place your order. We respond
                    within minutes!
                  </p>
                  <Button className="mt-4" asChild>
                    <a href="https://wa.me/2347015891556" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Start Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl border border-border bg-card p-8">
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-card-foreground">Thank You!</h3>
                    <p className="mt-2 text-muted-foreground">
                      We've received your message. For faster response, message us on WhatsApp!
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                      <Button asChild>
                        <a href="https://wa.me/2347015891556" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Chat on WhatsApp
                        </a>
                      </Button>
                      <Button variant="outline" onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-semibold text-card-foreground">Send us a message</h2>
                    <p className="mt-2 text-muted-foreground">
                      Or fill out the form and we'll get back to you via email.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" required placeholder="Your name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="accountType">Account Type Interested In</Label>
                        <select
                          id="accountType"
                          name="accountType"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select account type</option>
                          <option value="instagram">Instagram Account</option>
                          <option value="tiktok">TikTok Account</option>
                          <option value="twitter">Twitter/X Account</option>
                          <option value="verified">Verified Account</option>
                          <option value="aged">Aged Account</option>
                          <option value="followers">Account with Followers</option>
                          <option value="other">Other / Custom Request</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          placeholder="Tell us what you're looking for..."
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
