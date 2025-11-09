import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { motion } from "framer-motion"

interface CaseCardProps {
  company: string
  title: string
  tags: string[]
  summary: string
  outcomes: string[]
  role: string
  snapshot: {
    context: string
    challenge: string
    approach: string
    impact: string
  }
}

export function CaseCard({
  company,
  title,
  tags,
  summary,
  outcomes,
  role,
  snapshot,
}: CaseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full transition-shadow hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-muted to-muted/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-muted-foreground/30">
                <img src={company} alt="sd" />
            </span>
          </div>
        </div>
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <CardTitle className="font-playfair text-xl">{title}</CardTitle>
              <CardDescription className="mt-1 text-sm font-medium">
                {company}
              </CardDescription>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{summary}</p>
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Outcomes
            </p>
            <ul className="space-y-1.5">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            <span className="font-medium">Role:</span> {role}
          </p>
        </CardContent>
        <CardFooter>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                Read snapshot
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-lg">
              <SheetHeader>
                <SheetTitle className="font-playfair text-2xl">
                  {title}
                </SheetTitle>
                <SheetDescription>{company}</SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Context</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {snapshot.context}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Challenge</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {snapshot.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Approach</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {snapshot.approach}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Impact</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {snapshot.impact}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


