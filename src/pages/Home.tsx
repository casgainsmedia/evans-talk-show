import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import VideoCard from '@/components/VideoCard'
import { SITE, VIDEOS } from '@/lib/content'

export default function Home() {
  const featured = VIDEOS[0]
  const featuredSummary = featured.summary ?? []
  const secondary = VIDEOS.slice(1, 3)
  const recent = VIDEOS.slice(3, 7)
  const marquee = SITE.beats.concat(SITE.beats)

  return (
    <>
      <Hero />

      <section className="bg-ink text-paper border-y border-paper/10 py-5 overflow-hidden">
        <div className="flex gap-16 marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.24em] text-paper/70">
          {marquee.map((b, i) => (
            <span key={i} className="shrink-0 flex items-center gap-16">
              <span className="w-1 h-1 bg-signal rounded-full shadow-[0_0_12px_rgba(32,214,255,0.7)]" />
              {b}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-bone border-b border-signal/10">
        <div className="container-edge py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold mb-4">
                Lead Story
              </p>
              <h2 className="display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.0] tracking-[-0.04em] text-paper max-w-5xl">
                The latest episode, front and center, with the argument laid out before you press play.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-paper/10">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/55 mb-4">
                Nashville Desk Note
              </p>
              <p className="text-paper/78 text-base leading-relaxed max-w-xl">
                This version of the site is structured more like a current-issue briefing: one main story, supporting items, and a cleaner archive beneath it.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <VideoCard video={featured} large />
              <div className="mt-6 space-y-4 border-t border-paper/10 pt-6">
                {featuredSummary.map((para, index) => (
                  <p
                    key={index}
                    className={index === featuredSummary.length - 1 ? 'text-paper/70 leading-relaxed' : 'text-paper/86 leading-relaxed'}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              {secondary.map((video, index) => (
                <article key={video.id} className="border border-paper/10 bg-paper/[0.03] p-5 md:p-6">
                  <div className="mb-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-2">
                      Supporting Story {index + 1}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-paper leading-[1.05]">
                      {video.title}
                    </h3>
                  </div>
                  <p className="text-paper/76 leading-relaxed">
                    {video.summary?.[0]}
                  </p>
                  <div className="mt-6">
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-paper link-underline"
                    >
                      Watch on YouTube <ArrowRight size={14} strokeWidth={2} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#061A3A_0%,#071321_62%,#03070D_100%)] border-b border-signal/10">
        <div className="container-edge py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold mb-4">
                Signal Board
              </p>
              <h2 className="display font-semibold text-4xl md:text-5xl leading-[1.02] tracking-[-0.035em] text-paper">
                Built to feel more like a live briefing than a standard creator page.
              </h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-signal/15 bg-black/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-3">Base</p>
                <p className="text-paper font-semibold text-2xl tracking-tight mb-2">Nashville</p>
                <p className="text-paper/72 text-sm leading-relaxed">The channel is now hosted from Nashville, Tennessee and keeps the same grounded newsroom feel.</p>
              </div>
              <div className="border border-signal/15 bg-black/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-3">Tone</p>
                <p className="text-paper font-semibold text-2xl tracking-tight mb-2">Direct</p>
                <p className="text-paper/72 text-sm leading-relaxed">Sharp commentary, quick context, and no attempt to disguise the editorial point of view.</p>
              </div>
              <div className="border border-signal/15 bg-black/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-3">Coverage</p>
                <p className="text-paper font-semibold text-2xl tracking-tight mb-2">Fast-Turn</p>
                <p className="text-paper/72 text-sm leading-relaxed">Politics, media accountability, campaign fallout, and the stories dominating the timeline.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-edge py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold mb-4">
              Recent Archive
            </p>
            <h2 className="display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.04em] text-paper max-w-4xl">
              More recent uploads, laid out like a running briefing file.
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-3 bg-signal text-ink px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold shadow-[0_0_24px_rgba(32,214,255,0.25)] hover:bg-paper hover:text-ink transition-colors self-start md:self-end"
          >
            Open full archive <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recent.map((video, index) => (
            <article key={video.id} className="border border-signal/12 bg-black/25 p-5 md:p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-2">
                    File {String(index + 4).padStart(2, '0')}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-paper leading-[1.08]">
                    {video.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal shrink-0">
                  {video.date}
                </span>
              </div>
              <p className="text-paper/74 leading-relaxed">
                {video.summary?.[0]}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold">
              Thesis
            </p>
          </div>
          <div className="md:col-span-9">
            <p className="display font-medium text-3xl md:text-5xl lg:text-[60px] leading-[1.15] tracking-[-0.03em] text-paper max-w-5xl">
              <span className="text-signal">—&nbsp;</span>{SITE.missionBlurb}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
