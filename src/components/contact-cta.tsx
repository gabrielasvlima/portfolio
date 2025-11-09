import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Mail, Linkedin, FileText } from "lucide-react"
import { copy } from "@/lib/copy"

export function ContactCTA() {
  return (
    <Card className="rounded-2xl border-2 bg-gradient-to-br from-card to-muted/50">
      <CardHeader className="text-center">
        <CardTitle className="font-playfair text-3xl md:text-4xl">
          {copy.contact.ctaTitle}
        </CardTitle>
        <CardDescription className="mt-2 text-base">
          {copy.contact.ctaSubtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <a href={`mailto:${copy.contact.email}`}>
            <Mail className="mr-2 h-4 w-4" />
            Email
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
          <a
            href={copy.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </Button>
        {copy.contact.resumeUrl && (
          <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
            <a
              href={copy.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 h-4 w-4" />
              Résumé
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}




