import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, Radio, X } from 'lucide-react'
import { SITE } from '@/lib/content'

const links = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Archive' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [portraitOk, setPortraitOk] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 pt-3 text-paper">
      <div
        className={[
          'mx-auto max-w-[1440px] border transition-[background,border,box-shadow] duration-300',
          scrolled || open
            ? 'border-signal/20 bg-ink/92 shadow-[0_14px_44px_rgba(0,0,0,0.42),0_0_30px_rgba(32,214,255,0.08)] backdrop-blur'
            : 'border-signal/10 bg-black/18 backdrop-blur-sm',
        ].join(' ')}
      >
        <div className="grid h-[64px] grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(260px,0.85fr)_auto_minmax(220px,0.7fr)] items-center">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3 border-r border-signal/10 px-4 md:px-5 h-full"
            onClick={() => setOpen(false)}
          >
            {portraitOk ? (
              <img
                src="/brand-profile-blue.png"
                alt={SITE.network}
                onError={() => setPortraitOk(false)}
                className="h-11 w-11 rounded-full object-cover object-center ring-2 ring-signal/75 shadow-[0_0_18px_rgba(32,214,255,0.24)]"
              />
            ) : (
              <span className="inline-flex h-9 w-9 items-center justify-center bg-signal text-ink font-mono text-[10px] font-bold">
                {SITE.brandMark}
              </span>
            )}
            <span className="min-w-0">
              <span className="block truncate font-semibold tracking-[-0.02em] leading-none text-paper">
                {SITE.name}
              </span>
              <span className="mt-1 hidden sm:block font-mono text-[10px] uppercase tracking-[0.2em] text-signal/90">
                {SITE.channelHandle}
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex h-full items-center">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  [
                    'flex h-full items-center border-r border-signal/10 px-6 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors',
                    isActive ? 'bg-signal text-ink' : 'text-paper/62 hover:bg-signal/[0.08] hover:text-signal',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex h-full items-center justify-end gap-3 px-5">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
              <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_10px_rgba(32,214,255,0.8)]" />
              Nashville Desk
            </span>
            <a
              href={SITE.channelUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-paper text-ink px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-signal transition-colors"
            >
              <Radio size={13} strokeWidth={2.25} />
              Watch
            </a>
          </div>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-full w-16 items-center justify-center border-l border-signal/10"
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-signal/12 bg-bone/96">
            <ul>
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        'block border-b border-paper/10 px-5 py-4 text-xl font-semibold tracking-[-0.02em]',
                        isActive ? 'bg-signal text-ink' : 'text-paper',
                      ].join(' ')
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href={SITE.channelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block px-5 py-4 text-xl font-semibold tracking-[-0.02em] text-signal"
                >
                  Watch on YouTube
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
