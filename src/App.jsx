import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

function App() {
  const projects = [
    {
      title: 'Spirit Blade',
      description: 'A neon-drenched action site with parallax scroll and blade-slice transitions.',
      tags: ['React', 'Framer Motion', 'Three.js'],
      href: 'https://example.com',
    },
    {
      title: 'Cyber Idol',
      description: 'Kawaii UI kit with bubbly micro-animations and reactive gradients.',
      tags: ['Design', 'UI', 'Animations'],
      href: 'https://example.com',
    },
    {
      title: 'Mecha Forge',
      description: 'Configurator with dynamic camera moves and part snapping.',
      tags: ['3D', 'Spline', 'UX'],
      href: 'https://example.com',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <Section id="about" title="About" subtitle="Anime energy, polished craft.">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-white/80">
              I design and build immersive, anime-inspired experiences. Expect bold neon, fluid motion, and moments that feel straight out of an opening theme.
            </p>
            <p className="text-white/70">
              From interactive 3D scenes to snappy UI micro-interactions, I blend storytelling with modern web tech to craft interfaces that move.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/20 to-cyan-400/30 animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1608889175639-3d6562d7fd9e?q=80&w=1600&auto=format&fit=crop"
                alt="Anime neon city"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Featured works with motion-forward design.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="Tools and powers I wield.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'React + Vite',
            'Framer Motion',
            'Spline 3D',
            'Tailwind CSS',
            'Radix UI',
            'Three.js',
            'GSAP',
            'WebGL basics',
          ].map((s) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center hover:bg-white/10"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Let’s create something epic.">
        <div className="max-w-xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500/40 text-white placeholder-white/40" placeholder="Name" />
              <input className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500/40 text-white placeholder-white/40" placeholder="Email" />
            </div>
            <textarea rows="4" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500/40 text-white placeholder-white/40" placeholder="Your message" />
            <button className="justify-self-start px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-all">Send Message</button>
          </motion.form>
        </div>
      </Section>

      <Footer />
    </div>
  )
}

export default App
