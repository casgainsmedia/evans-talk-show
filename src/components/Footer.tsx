import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Radio } from 'lucide-react'
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
    <footer className="border-t border-signal/12 bg-ink text-paper">
      <div className="container-edge py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 bg-signal px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
              <Radio size={13} strokeWidth={2.25} />
              Keep The Signal Open
            </div>
            <h2 className="display max-w-5xl text-4xl font-semibold leading-tight tracking-normal text-paper md:text-6xl lg:text-[72px]">
              Send tips, booking requests, and conversations to the desk.
            </h2>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 border border-signal/22 bg-signal/8 px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal hover:text-ink"
            >
              Contact Evan
              <ArrowUpRight size={15} strokeWidth={2} />
            </Link>
          </div>

          <aside className="border-l-0 border-signal/16 lg:border-l lg:pl-10">
            <div className="flex items-center gap-4 border-b border-signal/14 pb-6">
              <img
                src="/brand-profile-blue.png"
                alt={SITE.network}
                className="h-16 w-16 rounded-full object-cover object-center ring-2 ring-signal/80"
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-signal/90">
                  {SITE.brandMark}
                </p>
                <p className="text-2xl font-semibold tracking-normal text-paper">{SITE.name}</p>
              </div>
            </div>

            <a
              href={`mailto:${SITE.email}`}
              className="group mt-6 flex items-center gap-3 text-paper/86 transition-colors hover:text-signal"
            >
              <Mail size={17} strokeWidth={2} />
              <span className="break-all font-semibold">{SITE.email}</span>
            </a>

            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/42">
                  Index
                </p>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/about" className="text-paper/80 hover:text-signal">About</Link></li>
                  <li><Link to="/work" className="text-paper/80 hover:text-signal">Archive</Link></li>
                  <li><Link to="/contact" className="text-paper/80 hover:text-signal">Contact</Link></li>
                </ul>
              </div>

              <div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/42">
                  Follow
                </p>
                <ul className="space-y-3 text-sm">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-paper/80 hover:text-signal"
                      >
                        {s.label}
                        <ArrowUpRight size={12} strokeWidth={2} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-signal/12 pt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/36 sm:flex-row">
          <span>(c) {year} {SITE.name}. All rights reserved.</span>
          <span>{SITE.location} / {SITE.channelHandle}</span>
        </div>
      </div>
    </footer>
  )
}
