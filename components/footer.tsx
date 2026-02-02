import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Mail } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="FREEBLE" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-semibold text-foreground">FREEBLE</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navigation.main.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/2347015891556"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="mailto:hello@freeble.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FREEBLE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
