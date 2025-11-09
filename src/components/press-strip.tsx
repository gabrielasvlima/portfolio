import { Badge } from "./ui/badge"
import { motion } from "framer-motion"

interface PressStripProps {
  items: string[]
}

export function PressStrip({ items }: PressStripProps) {
  const duplicatedItems = [...items, ...items]
  const itemWidth = 200 // Approximate width per item

  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex gap-3"
        animate={{
          x: [0, -itemWidth * items.length],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Badge
            key={`${item}-${index}`}
            variant="outline"
            className="shrink-0 whitespace-nowrap px-4 py-2 text-sm"
          >
            {item}
          </Badge>
        ))}
      </motion.div>
    </div>
  )
}


