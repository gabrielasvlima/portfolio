import { Header } from './components/header'
import { Footer } from './components/footer'
import { Section } from './components/section'
import { CaseCard } from './components/case-card'
import { Metric } from './components/metric'
import { ContactCTA } from './components/contact-cta'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import { copy } from './lib/copy'
import { ArrowRight } from 'lucide-react'
import { ThemeProvider } from './components/theme-provider'

const cardImages = [
  "/6.png",
  "/7.png",
  "/one.png",
  "/5.png",
  "/feedback2.png",
  "/feedback3.png",
  "/feedback4.png",
  "/feedback5.png",
]

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        {/* Hero Section */}
        <Section id="hero" className="pt-24 md:pt-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="font-playfair text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {copy.hero.title}
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                {copy.hero.subtitle}
              </p>
              <p className="text-sm text-muted-foreground">
                {copy.hero.byline}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={copy.hero.ctaPrimary.href}>
                    {copy.hero.ctaPrimary.label}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a href={copy.hero.ctaSecondary.href}>
                    {copy.hero.ctaSecondary.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/5 md:h-80 md:w-80">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <span className="text-6xl font-bold text-primary/20">
                    <img src="/self_pic.jpeg" alt="Gabriela Lima" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Selected Work Section */}
        <Section id="work" className="bg-muted/30">
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Selected Work
            </h2>
            <p className="mt-4 text-muted-foreground">
              Strategic design leadership with measurable impact
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.work.map((work, index) => (
              <CaseCard key={index} {...work} />
            ))}
          </div>
        </Section>

        {/* Leadership & Impact Section */}
        <Section id="leadership">
          <div className="mb-12">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Leadership & Impact
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {copy.leadership.intro}
            </p>
          </div>
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.leadership.metrics.map((metric, index) => (
              <Metric key={index} {...metric} />
            ))}
          </div>
          <ul className="space-y-4">
            {copy.leadership.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">{bullet}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Hands-on Craft Section */}
        <Section id="craft" className="bg-muted/30">
          <div className="mb-12">
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              Hands-on Craft
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {copy.craft.note}
            </p>
          </div>
          <div className="mb-8 flex flex-wrap gap-3">
            {copy.craft.tools.map((tool, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tool}
              </Badge>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cardImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-muted to-muted/50"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground/30">
                    <img src={image} alt="sd" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* About Section */}
        <Section id="about">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-playfair text-3xl font-bold md:text-4xl">
                About
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {copy.about.bio}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {copy.about.speaking}
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-playfair text-2xl font-semibold">
                Press & Recognition
              </h3>
              <div className="space-y-2">
                {copy.about.press.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card p-4 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="bg-muted/30">
          <ContactCTA />
        </Section>
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App

