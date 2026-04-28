import { Link } from 'react-router-dom'
import { ArrowRight, Clock3, MonitorPlay } from 'lucide-react'
import Hero from '@/components/Hero'
import VideoCard from '@/components/VideoCard'
import { SITE, VIDEOS } from '@/lib/content'

export default function Home() {
  const featured = VIDEOS[0]
  const nextUp = VIDEOS.slice(1, 4)
  const archive = VIDEOS.slice(4)
  const marquee = SITE.beats.concat(SITE.beats)

  return (
    <>
      <Hero />

      <section className="bg-ink text-paper border-y border-signal/12 py-5 overflow-hidden">
        <div className="flex gap-16 marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.24em] text-paper/68">
          {marquee.map((beat, i) => (
            <span key={i} className="shrink-0 flex items-center gap-16">
              <span className="h-1 w-8 bg-signal shadow-[0_0_18px_rgba(32,214,255,0.55)]" />
              {beat}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-bone border-b border-signal/10">
        <div className="container-edge py-16 md:py-24">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] gap-8">
            <div>
              <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                <div>
                  <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold mb-3">
                    Featured Transmission
                  </p>
                  <h2 className="display font-semibold text-4xl md:text-6xl leading-[1] tracking-[-0.04em] text-paper max-w-4xl">
                    Watch the newest argument, then scan the story stack.
                  </h2>
                </div>
                <p className="max-w-sm text-sm md:text-base leading-relaxed text-paper/62">
                  A faster structure for viewers who want the headline, the angle, and the archive without hunting around.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.68fr)_minmax(280px,0.32fr)] gap-6">
                <div>
                  <VideoCard video={featured} large />
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-[140px_minmax(0,1fr)] gap-5 border-t border-signal/15 pt-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                      Desk Read
                    </p>
                    <div className="space-y-4 text-paper/78 leading-relaxed">
                      {featured.summary?.map((para) => (
                        <p key={para}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <aside className="border border-signal/14 bg-black/24">
                  <div className="p-5 border-b border-signal/14">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                      Queue
                    </p>
                  </div>
                  {nextUp.map((video, index) => (
                    <article key={video.id} className="p-5 border-b last:border-b-0 border-paper/10">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/42">
                          Slot {String(index + 2).padStart(2, '0')}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                          {video.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold tracking-[-0.02em] leading-[1.08] text-paper">
                        {video.title}
                      </h3>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/68 hover:text-signal transition-colors"
                      >
                        Watch <ArrowRight size={12} strokeWidth={2} />
                      </a>
                    </article>
                  ))}
                </aside>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="border border-signal/14 bg-black/25 p-6">
                <div className="flex items-center gap-3 text-signal mb-5">
                  <MonitorPlay size={18} strokeWidth={2} />
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em]">Channel Shape</p>
                </div>
                <p className="display text-3xl font-semibold tracking-[-0.03em] leading-[1.05] text-paper">
                  Independent commentary arranged like a live editorial board.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="border border-signal/14 bg-signal/[0.04] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/42">Base</p>
                  <p className="mt-3 text-xl font-semibold text-paper">{SITE.location}</p>
                </div>
                <div className="border border-signal/14 bg-signal/[0.04] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/42">Mode</p>
                  <p className="mt-3 text-xl font-semibold text-paper">Direct</p>
                </div>
              </div>

              <div className="border border-signal/14 bg-black/25 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-5">
                  Editorial Beats
                </p>
                <div className="space-y-3">
                  {SITE.beats.map((beat) => (
                    <div key={beat} className="flex items-center gap-3 border-t first:border-t-0 border-paper/10 pt-3 first:pt-0">
                      <span className="h-1.5 w-1.5 bg-signal shadow-[0_0_10px_rgba(32,214,255,0.72)]" />
                      <span className="text-paper/84 font-semibold tracking-[-0.01em]">{beat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#061A3A_0%,#03070D_100%)] border-b border-signal/10">
        <div className="container-edge py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-10">
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold mb-4">
                Archive Sweep
              </p>
              <h2 className="display font-semibold text-4xl md:text-5xl leading-[1.02] tracking-[-0.035em] text-paper">
                Recent files, organized for fast scanning.
              </h2>
              <Link
                to="/work"
                className="mt-8 inline-flex items-center gap-3 bg-signal text-ink px-5 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold shadow-[0_0_24px_rgba(32,214,255,0.22)] hover:bg-paper transition-colors"
              >
                Full archive <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {archive.map((video, index) => (
                <article key={video.id} className="border border-signal/12 bg-black/24 p-5">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/48">
                      <Clock3 size={12} strokeWidth={2} />
                      File {String(index + 5).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">{video.date}</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] leading-[1.08] text-paper">
                    {video.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-paper/66">
                    {video.summary?.[0]}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-8 border-t border-signal/15 pt-10">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold">
              Thesis
            </p>
            <p className="display font-medium text-3xl md:text-5xl leading-[1.12] tracking-[-0.03em] text-paper max-w-6xl">
              {SITE.missionBlurb}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
