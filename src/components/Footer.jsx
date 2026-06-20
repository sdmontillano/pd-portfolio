export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-muted">
          &lt;GL /&gt;
        </span>
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Godwin D. Luna-an. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  )
}
