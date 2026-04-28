import { SITE } from '@/lib/content'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function isPlaceholder(s: string) {
  return s.trim().startsWith('[PLACEHOLDER')
}

export default function About() {
  const realCredentials = SITE.credentials.filter((c) => !isPlaceholder(c))

  return (
    <>
      <section className="relative overflow-hidden bg-navy border-b border-signal/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(32,214,255,0.2),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(25,93,255,0.16),transparent_24%),linear-gradient(180deg,rgba(2,11,31,0.24),#03070D_92%)]" />
        <div className="relative container-edge pt-36 md:pt-44 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-6">
              About / Host File
            </p>
            <h1 className="display font-semibold text-4xl sm:text-6xl lg:text-[88px] leading-[0.96] tracking-[-0.04em] text-paper max-w-6xl">
              Independent commentary from a Nashville desk.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/74">
              {SITE.aboutShort}
            </p>
          </div>

          <aside className="border border-signal/16 bg-black/25 p-5">
            <img
              src="/brand-profile-blue.png"
              alt={SITE.name}
              className="w-full aspect-square object-cover"
            />
            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-signal/14 pt-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/42">Show</p>
                <p className="mt-2 text-paper font-semibold">{SITE.show}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/42">Base</p>
                <p className="mt-2 text-paper font-semibold">{SITE.location}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-edge py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-10 lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start space-y-8">
          <div className="border border-signal/14 bg-black/24 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-5">
              Coverage Map
            </p>
            <div className="space-y-3">
              {SITE.beats.map((beat) => (
                <div key={beat} className="flex items-center gap-3 border-t first:border-t-0 border-paper/10 pt-3 first:pt-0">
                  <span className="h-1.5 w-1.5 bg-signal shadow-[0_0_10px_rgba(32,214,255,0.72)]" />
                  <span className="text-paper/86 font-semibold">{beat}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/work"
            className="group inline-flex items-center gap-3 bg-signal text-ink px-5 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold shadow-[0_0_24px_rgba(32,214,255,0.22)] hover:bg-paper transition-colors"
          >
            See episodes
            <ArrowRight size={14} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </aside>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-[140px_minmax(0,1fr)] gap-6 border-b border-signal/14 pb-12">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold">
              Brief
            </p>
            <div className="space-y-6 text-lg md:text-[21px] leading-[1.55] text-paper/82">
              {SITE.aboutLong.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>

          {realCredentials.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-[140px_minmax(0,1fr)] gap-6">
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold">
                Signals
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {realCredentials.map((credential) => (
                  <div key={credential} className="border border-signal/12 bg-bone/72 p-5">
                    <p className="text-paper/76 text-sm leading-relaxed">{credential}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
