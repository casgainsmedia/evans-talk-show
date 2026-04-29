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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-paper">
      <div
        className={[
          'border-b transition-[background,border,box-shadow] duration-300',
          scrolled || open
            ? 'border-signal/18 bg-ink/94 shadow-[0_14px_44px_rgba(0,0,0,0.38)] backdrop-blur'
            : 'border-paper/10 bg-ink/44 backdrop-blur-sm',
        ].join(' ')}
      >
        <div className="container-edge grid h-[76px] grid-cols-[minmax(0,1fr)_auto] items-center md:grid-cols-[minmax(260px,0.8fr)_auto_minmax(220px,0.7fr)]">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <img
              src="/brand-profile-blue.png"
              alt={SITE.network}
              className="h-11 w-11 rounded-full object-cover object-center ring-2 ring-signal/75"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).style.display = 'none'
              }}
            />
            <span className="min-w-0">
              <span className="block truncate text-lg font-semibold leading-none tracking-normal text-paper">
                {SITE.name}
              </span>
              <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-signal/90 sm:block">
                {SITE.channelHandle}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  [
                    'px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors',
                    isActive ? 'bg-signal text-ink' : 'text-paper/66 hover:bg-paper/5 hover:text-signal',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-4 md:flex">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/48">
              Nashville Desk
            </span>
            <a
              href={SITE.channelUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-paper px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-signal"
            >
              <Radio size={13} strokeWidth={2.25} />
              Watch
            </a>
          </div>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-12 w-12 items-center justify-center border border-signal/16 md:hidden"
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-signal/12 bg-bone/98 md:hidden">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'block border-b border-paper/10 px-5 py-4 text-xl font-semibold tracking-normal',
                    isActive ? 'bg-signal text-ink' : 'text-paper',
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
              className="block px-5 py-4 text-xl font-semibold tracking-normal text-signal"
            >
              Watch on YouTube
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
