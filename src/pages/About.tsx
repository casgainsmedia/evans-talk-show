import { SITE } from '@/lib/content'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Mic2 } from 'lucide-react'

function isPlaceholder(s: string) {
  return s.trim().startsWith('[PLACEHOLDER')
}

export default function About() {
  const realCredentials = SITE.credentials.filter((c) => !isPlaceholder(c))

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-paper">
        <img
          src="/channel-portrait-blue.png"
          alt={`${SITE.firstName} Mercer`}
          className="absolute inset-y-0 right-0 h-full w-full object-cover object-top opacity-56 lg:w-[54%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020B1F_0%,#020B1F_46%,rgba(2,11,31,0.34)_76%,rgba(2,11,31,0.72)_100%)]" />
        <div className="absolute inset-0 news-grid opacity-38" />
        <div className="relative container-edge min-h-[74svh] pb-16 pt-36 md:pt-44">
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
            <div className="max-w-5xl">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                About / Host File
              </p>
              <h1 className="display text-5xl font-semibold leading-tight tracking-normal text-paper sm:text-7xl lg:text-[92px]">
                Independent commentary from a Nashville desk.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/76">
                {SITE.aboutShort}
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="border border-signal/16 bg-black/28 p-4 backdrop-blur">
                <img
                  src="/channel-portrait-blue.png"
                  alt={`${SITE.firstName} Mercer`}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="border-t border-signal/14 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                    Evan Mercer
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">
                    Visible in-frame as the face of the show, not just a texture behind the copy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone text-paper">
        <div className="container-edge grid grid-cols-1 gap-12 py-16 md:py-24 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-5">
            <div className="border border-signal/14 bg-black/24 p-6">
              <div className="mb-5 flex items-center gap-3 text-signal">
                <Mic2 size={18} strokeWidth={2} />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em]">Show Profile</p>
              </div>
              <p className="text-3xl font-semibold leading-tight tracking-normal text-paper">
                {SITE.show}
              </p>
              <div className="mt-6 flex items-center gap-2 text-paper/64">
                <MapPin size={16} strokeWidth={2} />
                <span>{SITE.location}</span>
              </div>
            </div>

            <div className="border border-signal/14 bg-signal/[0.04] p-6">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                Coverage
              </p>
              <div className="space-y-3">
                {SITE.beats.map((beat) => (
                  <div key={beat} className="flex items-center gap-3 border-t border-paper/10 pt-3 first:border-t-0 first:pt-0">
                    <span className="h-1.5 w-1.5 bg-signal shadow-[0_0_10px_rgba(32,214,255,0.72)]" />
                    <span className="font-semibold tracking-normal text-paper/86">{beat}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="surface-line mb-10 h-px w-full" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[160px_minmax(0,1fr)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                The Brief
              </p>
              <div className="space-y-7 text-lg leading-[1.6] text-paper/82 md:text-xl">
                {SITE.aboutLong.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>

            {realCredentials.length > 0 && (
              <div className="mt-14">
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                  Signals
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {realCredentials.map((credential) => (
                    <div key={credential} className="border border-signal/12 bg-black/22 p-5">
                      <p className="text-sm leading-relaxed text-paper/74">{credential}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Link
              to="/work"
              className="mt-12 inline-flex items-center gap-3 bg-signal px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-paper"
            >
              Explore episodes
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
