export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60">
        <p>© {new Date().getFullYear()} Animefolio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#hero" className="hover:text-white transition-colors">Top</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
