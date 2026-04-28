import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/content'

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { label: 'YouTube', href: SITE.social.youtube },
    { label: 'X / Twitter', href: SITE.social.x },
    { label: 'Instagram', href: SITE.social.instagram },
    { label: 'LinkedIn', href: SITE.social.linkedin },
  ].filter((s) => !s.href.trim().startsWith('[PLACEHOLDER'))

  return (
    <footer className="mt-24 md:mt-40 bg-navy text-paper">
      {/* Big CTA strip */}
      <div className="container-edge py-20 md:py-28 border-b border-signal/15">
        <p className="eyebrow text-paper/50 mb-6">Get in touch</p>
        <Link
          to="/contact"
          className="group block max-w-6xl"
        >
          <h2 className="display font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-[88px] leading-[1.0] tracking-[-0.04em] text-paper">
            Send a <span className="italic font-light underline decoration-paper/30 underline-offset-[0.12em] group-hover:text-signal group-hover:decoration-signal transition-colors">note</span> — interviews, stories, and conversations welcome.
          </h2>
          <div className="mt-8 inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70 group-hover:text-signal transition-colors">
            <span>{SITE.email}</span>
            <ArrowUpRight size={16} strokeWidth={2} />
          </div>
        </Link>
      </div>

      {/* Link grid */}
      <div className="container-edge py-14 md:py-20 grid grid-cols-2 md:grid-cols-12 gap-10">
        <div className="col-span-2 md:col-span-5">
          <div className="mb-5 flex items-center gap-4">
            <img
              src="/brand-profile-blue.png"
              alt={SITE.network}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover object-center ring-2 ring-signal/80 shadow-[0_0_18px_rgba(32,214,255,0.2)]"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal/90 mb-1">
                Nashville Desk
              </p>
              <p className="font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-paper">
                {SITE.name}
              </p>
            </div>
          </div>
          <p className="mt-2 text-paper/60 text-sm leading-relaxed max-w-sm">
            {SITE.role} · {SITE.location} · {SITE.network}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-paper/40 mb-4">Index</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-paper/80 hover:text-signal">About</Link></li>
            <li><Link to="/work" className="text-paper/80 hover:text-signal">Work</Link></li>
            <li><Link to="/contact" className="text-paper/80 hover:text-signal">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-paper/40 mb-4">Follow</p>
          <ul className="space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-paper/80 hover:text-signal group"
                >
                  {s.label}
                  <ArrowUpRight size={12} strokeWidth={2} className="opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-signal/15">
        <div className="container-edge py-6 flex flex-col sm:flex-row justify-between gap-2 text-[11px] uppercase tracking-[0.18em] text-paper/40 font-mono">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>{SITE.channelHandle}</span>
        </div>
      </div>
    </footer>
  )
}
