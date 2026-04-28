import { Link } from 'react-router-dom'
import { ArrowRight, MonitorPlay, Radio, Signal } from 'lucide-react'
import { SITE, VIDEOS } from '@/lib/content'

export default function Hero() {
  const latest = VIDEOS[0]
  const queue = VIDEOS.slice(1, 4)

  return (
    <section className="relative min-h-[100svh] bg-navy text-paper overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(32,214,255,0.22),transparent_25%),radial-gradient(circle_at_84%_20%,rgba(25,93,255,0.2),transparent_24%),radial-gradient(circle_at_72%_86%,rgba(138,92,255,0.14),transparent_26%),linear-gradient(180deg,rgba(2,11,31,0.2),#03070D_86%)]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #20D6FF 1px, transparent 1px), linear-gradient(to bottom, #20D6FF 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative container-edge min-h-[100svh] pt-[96px] pb-10 md:pb-14 flex flex-col">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] gap-6 lg:gap-8 flex-1">
          <div className="flex flex-col min-h-[720px] xl:min-h-0">
            <div className="relative overflow-hidden border border-signal/18 bg-black/25 shadow-[0_30px_100px_rgba(0,0,0,0.45),0_0_44px_rgba(32,214,255,0.1)]">
              <img
                src="/channel-banner-blue.png"
                alt={SITE.name}
                className="h-[190px] sm:h-[240px] lg:h-[300px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,13,0.92),rgba(3,7,13,0.22)_48%,rgba(3,7,13,0.84)),linear-gradient(180deg,rgba(3,7,13,0)_55%,rgba(3,7,13,0.88))]" />
              <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-2">
                    Live Desk / {SITE.location}
                  </p>
                  <h1 className="display font-semibold text-4xl sm:text-6xl lg:text-[88px] leading-[0.92] tracking-[-0.04em] text-paper">
                    {SITE.show}
                  </h1>
                </div>
                <div className="hidden md:flex items-center gap-2 border border-signal/25 bg-signal/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  <Signal size={14} strokeWidth={2} />
                  On Air
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.48fr)] gap-6 lg:gap-8 flex-1 pt-6 lg:pt-8">
              <div className="flex flex-col justify-end border border-signal/14 bg-bone/86 p-5 sm:p-7 lg:p-8">
                <div className="mb-10 sm:mb-14">
                  <div className="inline-flex items-center gap-2 bg-signal text-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold shadow-[0_0_24px_rgba(32,214,255,0.28)]">
                    <Radio size={13} strokeWidth={2.25} />
                    Latest Episode
                  </div>
                  <h2 className="mt-6 display font-semibold text-4xl sm:text-5xl lg:text-[72px] leading-[0.98] tracking-[-0.04em] text-paper max-w-5xl">
                    Breaking stories with a cleaner read on the pressure underneath.
                  </h2>
                  <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-paper/76">
                    {SITE.tagline}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[96px_minmax(0,1fr)] gap-5 border-t border-signal/15 pt-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
                    Now Playing
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] leading-[1.08] text-paper">
                      {latest.title}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        to="/work"
                        className="group inline-flex items-center gap-3 bg-signal text-ink px-5 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold shadow-[0_0_24px_rgba(32,214,255,0.22)] hover:bg-paper transition-colors"
                      >
                        Open archive
                        <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                      <a
                        href={SITE.channelUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 border border-paper/25 bg-paper/[0.04] text-paper px-5 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold hover:border-signal/60 hover:text-signal transition-colors"
                      >
                        <MonitorPlay size={15} strokeWidth={2} />
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="border border-signal/14 bg-black/25 p-5 sm:p-6 flex flex-col">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-5">
                  Rundown
                </p>
                <div className="space-y-0">
                  {queue.map((video, index) => (
                    <a
                      key={video.id}
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group grid grid-cols-[42px_minmax(0,1fr)] gap-4 border-t first:border-t-0 border-paper/10 py-5"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/42">
                        {String(index + 2).padStart(2, '0')}
                      </span>
                      <span>
                        <span className="block text-lg font-semibold tracking-[-0.02em] leading-[1.1] text-paper group-hover:text-signal transition-colors">
                          {video.title}
                        </span>
                        <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.18em] text-paper/45">
                          {video.date}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
                <div className="mt-auto pt-8">
                  <div className="grid grid-cols-2 gap-3">
                    {SITE.beats.map((beat) => (
                      <span
                        key={beat}
                        className="border border-signal/12 bg-signal/[0.04] px-3 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/72"
                      >
                        {beat}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>

          <aside className="hidden xl:flex flex-col border border-signal/14 bg-black/20">
            <div className="p-5 border-b border-signal/14">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-4">
                Host
              </p>
              <img
                src="/channel-portrait-blue.png"
                alt={`${SITE.firstName} Mercer`}
                className="aspect-[4/5] w-full object-cover object-[center_18%]"
              />
            </div>
            <div className="p-5 space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/42 mb-2">
                  Format
                </p>
                <p className="text-paper font-semibold text-xl tracking-[-0.02em]">
                  Fast-turn commentary with a broadcast desk rhythm.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-paper/10 pt-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/42">Base</p>
                  <p className="mt-2 text-paper font-semibold">{SITE.location}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/42">Mark</p>
                  <p className="mt-2 text-signal font-semibold">{SITE.brandMark}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
