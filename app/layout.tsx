import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "FREEBLE - Buy Social Media Accounts | Verified & Fast",
  description:
    "Buy verified social media accounts for Instagram, TikTok, and Twitter/X. Fast, trusted, and secure transactions with FREEBLE.",
  keywords: ["social media accounts", "Instagram", "TikTok", "Twitter", "verified accounts"],
  generator: 'v0.app',
  metadataBase: new URL('https://freeble.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://freeble.com',
    siteName: 'FREEBLE',
    title: 'FREEBLE - Buy Social Media Accounts | Verified & Fast',
    description: 'Buy verified social media accounts for Instagram, TikTok, and Twitter/X. Fast, trusted, and secure transactions.',
    images: [
      {
        url: 'https://freeble.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FREEBLE Social Media Accounts',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FREEBLE - Buy Social Media Accounts | Verified & Fast',
    description: 'Buy verified social media accounts for Instagram, TikTok, and Twitter/X. Fast, trusted, and secure transactions.',
    images: ['https://freeble.com/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  )
}
