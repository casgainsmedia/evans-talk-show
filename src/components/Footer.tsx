import { Link } from 'react-router-dom'
import { ArrowUpRight, Radio } from 'lucide-react'
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
    <footer className="bg-ink text-paper border-t border-signal/12">
      <div className="container-edge py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] border border-signal/14 bg-bone/52">
          <Link
            to="/contact"
            className="group p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-signal/14"
          >
            <div className="inline-flex items-center gap-2 bg-signal text-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold mb-7">
              <Radio size={13} strokeWidth={2.25} />
              Booking Desk
            </div>
            <h2 className="display max-w-5xl text-4xl md:text-6xl lg:text-[78px] font-semibold leading-[0.98] tracking-[-0.04em] text-paper">
              Stories, interviews, tips, and conversations can start here.
            </h2>
            <div className="mt-8 inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70 group-hover:text-signal transition-colors">
              <span>{SITE.email}</span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </div>
          </Link>

          <aside className="p-6 md:p-8">
            <div className="flex items-center gap-4 border-b border-signal/14 pb-6 mb-6">
              <img
                src="/brand-profile-blue.png"
                alt={SITE.network}
                className="h-16 w-16 rounded-full object-cover object-center ring-2 ring-signal/80 shadow-[0_0_18px_rgba(32,214,255,0.2)]"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal/90 mb-1">
                  {SITE.brandMark}
                </p>
                <p className="font-semibold text-2xl tracking-[-0.02em] text-paper">
                  {SITE.name}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/42 mb-4">Index</p>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/about" className="text-paper/80 hover:text-signal">About</Link></li>
                  <li><Link to="/work" className="text-paper/80 hover:text-signal">Archive</Link></li>
                  <li><Link to="/contact" className="text-paper/80 hover:text-signal">Contact</Link></li>
                </ul>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/42 mb-4">Follow</p>
                <ul className="space-y-3 text-sm">
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

            <div className="mt-8 border-t border-signal/14 pt-5 text-[11px] uppercase tracking-[0.18em] text-paper/40 font-mono">
              <p>{SITE.location}</p>
              <p className="mt-2">{SITE.channelHandle}</p>
            </div>
          </aside>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2 text-[11px] uppercase tracking-[0.18em] text-paper/36 font-mono">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>Signal locked / blue desk system</span>
        </div>
      </div>
    </footer>
  )
}
