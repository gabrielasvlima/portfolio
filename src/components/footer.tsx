import { copy } from "@/lib/copy"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="font-playfair text-lg font-semibold">
              {copy.name}
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {copy.name}. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href={copy.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${copy.contact.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}




