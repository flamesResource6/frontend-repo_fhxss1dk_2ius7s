import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function ProjectCard({ title, description, tags = [], href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group block rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 hover:border-white/20 transition-all shadow-lg shadow-fuchsia-500/10"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-white" />
      </div>
      <p className="mt-2 text-white/70">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 text-white/80 border border-white/10">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  )
}
