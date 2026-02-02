import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to Get Your Account?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Message us on WhatsApp to browse available accounts and place your order.
          </p>
          <div className="mt-10">
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
  )
}
