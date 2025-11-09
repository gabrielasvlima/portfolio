import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { copy } from "@/lib/copy"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: `${copy.name} — ${copy.role}`,
  description: copy.hero.subtitle,
  keywords: [
    "design leadership",
    "product design",
    "design systems",
    "UX design",
    "design ops",
  ],
  authors: [{ name: copy.name }],
  openGraph: {
    title: `${copy.name} — ${copy.role}`,
    description: copy.hero.subtitle,
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: copy.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${copy.name} — ${copy.role}`,
    description: copy.hero.subtitle,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

