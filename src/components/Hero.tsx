import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Radio, ScrollText } from 'lucide-react'
import { SITE } from '@/lib/content'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-navy text-paper overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(32,214,255,0.24),transparent_28%),radial-gradient(circle_at_82%_26%,rgba(25,93,255,0.18),transparent_24%),radial-gradient(circle_at_85%_78%,rgba(138,92,255,0.16),transparent_22%),linear-gradient(180deg,rgba(2,11,31,0.15),rgba(3,7,13,0.78))]" />
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      <div className="relative container-edge flex flex-col min-h-[100svh] pt-[96px] pb-14">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-signal text-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold shadow-[0_0_24px_rgba(32,214,255,0.28)]">
              <span className="w-1.5 h-1.5 bg-ink rounded-full animate-pulse" />
              On Air · {new Date().getFullYear()}
            </div>

            <p className="mt-8 mb-5 font-sans text-sm md:text-[15px] uppercase tracking-[0.18em] text-signal font-semibold">
              Nashville-Based Political Commentary
            </p>

            <h1 className="display font-semibold text-[42px] sm:text-[56px] md:text-[68px] lg:text-[78px] xl:text-[88px] leading-[0.95] tracking-[-0.04em] text-paper max-w-4xl">
              Breaking stories.<br />
              <span className="text-signal">Clean analysis.</span><br />
              No filler.
            </h1>

            <p className="mt-7 md:mt-8 text-base md:text-lg text-paper/85 leading-relaxed max-w-xl">
              {SITE.tagline}
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="border border-paper/12 bg-paper/[0.04] px-4 py-4">
                <div className="flex items-center gap-2 text-signal mb-3">
                  <MapPin size={15} strokeWidth={2} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Base</span>
                </div>
                <p className="text-sm text-paper/88 leading-relaxed">{SITE.location}</p>
              </div>
              <div className="border border-paper/12 bg-paper/[0.04] px-4 py-4">
                <div className="flex items-center gap-2 text-signal mb-3">
                  <Radio size={15} strokeWidth={2} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Format</span>
                </div>
                <p className="text-sm text-paper/88 leading-relaxed">Fast-turn commentary with a news-desk feel.</p>
              </div>
              <div className="border border-paper/12 bg-paper/[0.04] px-4 py-4">
                <div className="flex items-center gap-2 text-signal mb-3">
                  <ScrollText size={15} strokeWidth={2} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Focus</span>
                </div>
                <p className="text-sm text-paper/88 leading-relaxed">Politics, media narratives, and breaking headlines.</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 bg-signal text-ink px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold shadow-[0_0_24px_rgba(32,214,255,0.25)] hover:bg-paper hover:text-ink transition-colors"
              >
                Watch the work
                <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-paper/30 bg-paper/5 text-paper px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <span aria-hidden className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-signal z-10 shadow-[0_0_24px_rgba(32,214,255,0.3)]" />
              <span aria-hidden className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold z-10" />

              <div className="border border-signal/20 bg-black/45 backdrop-blur-sm shadow-[0_30px_90px_rgba(0,0,0,0.58),0_0_40px_rgba(32,214,255,0.1)] overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(32,214,255,0.15),transparent_30%),linear-gradient(180deg,rgba(2,11,31,0.04),rgba(2,11,31,0.44))]" />
                  <img
                    src="/channel-portrait-blue.png"
                    alt={`${SITE.name} — ${SITE.role}`}
                    className="w-full h-full object-cover object-[center_18%]"
                  />
                </div>
                <div className="border-t border-signal/20 bg-bone px-5 py-5 md:px-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-2">
                    Commentary Desk · Nashville
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-paper leading-none">
                        {SITE.name}
                      </p>
                      <p className="mt-2 text-paper/65 text-sm leading-relaxed">
                        Hosted by Evan Mercer from Nashville, Tennessee.
                      </p>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/45 shrink-0">
                      {SITE.brandMark}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
