import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SITE } from '@/lib/content'

const links = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
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
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-[background,border,color] duration-300',
        scrolled
          ? 'bg-ink/95 backdrop-blur text-paper border-b border-signal/15 shadow-[0_12px_30px_rgba(0,0,0,0.35),0_0_28px_rgba(32,214,255,0.08)]'
          : 'bg-transparent text-paper border-b border-transparent',
      ].join(' ')}
    >
      <div className="container-edge flex h-[68px] md:h-[80px] items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 md:gap-4 group"
          onClick={() => setOpen(false)}
        >
          {portraitOk ? (
            <img
              src="/brand-profile-blue.png"
              alt={SITE.network}
              onError={() => setPortraitOk(false)}
              className="w-11 h-11 md:w-14 md:h-14 rounded-full object-cover object-center ring-2 ring-signal/80 shadow-[0_0_18px_rgba(32,214,255,0.22)]"
            />
          ) : (
            <span className="inline-flex items-center justify-center w-7 h-7 bg-signal text-ink font-mono text-[10px] font-bold">
              {SITE.brandMark}
            </span>
          )}
          <span className="hidden sm:block">
            <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-signal/90 mb-0.5">
              Nashville Desk
            </span>
            <span className="block font-sans text-[16px] md:text-[18px] font-semibold tracking-tight leading-none">
              {SITE.name}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                [
                  'text-[12px] uppercase tracking-[0.18em] font-medium transition-opacity',
                  isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={SITE.channelUrl}
            target="_blank"
            rel="noreferrer"
            className={[
              'text-[12px] uppercase tracking-[0.18em] font-semibold px-4 py-2 transition-colors',
              scrolled
                ? 'bg-signal text-ink hover:bg-paper hover:text-ink'
                : 'bg-paper text-ink hover:bg-signal hover:text-ink',
            ].join(' ')}
          >
            Watch →
          </a>
        </nav>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2"
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-bone text-paper border-t border-signal/15">
          <ul className="container-edge py-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block py-4 text-xl font-semibold tracking-tight border-b border-paper/10',
                      isActive ? 'text-signal' : 'text-paper',
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
                className="block py-4 text-xl font-semibold tracking-tight text-signal"
              >
                Watch on YouTube →
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
