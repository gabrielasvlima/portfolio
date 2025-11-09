import { motion } from "framer-motion"

interface MetricProps {
  label: string
  value: string
}

export function Metric({ label, value }: MetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border bg-card p-6 text-center transition-shadow hover:shadow-md"
    >
      <div className="font-playfair text-3xl font-bold text-primary md:text-4xl">
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-muted-foreground">
        {label}
      </div>
    </motion.div>
  )
}






