import { Link } from 'react-router-dom'
import { ArrowRight, Play, Radio } from 'lucide-react'
import { SITE, VIDEOS } from '@/lib/content'

export default function Hero() {
  const latest = VIDEOS[0]
  const queue = VIDEOS.slice(1, 4)

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-ink text-paper">
      <img
        src="/channel-banner-evans.png"
        alt={SITE.name}
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#03070D_0%,rgba(3,7,13,0.74)_34%,rgba(3,7,13,0.16)_64%,rgba(3,7,13,0.58)_100%)]" />
      <div className="absolute inset-0 news-grid opacity-45" />

      <div className="relative container-edge flex min-h-[92svh] flex-col justify-end pb-8 pt-32 md:pb-12 md:pt-40">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          <div className="max-w-5xl">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-signal px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
                <Radio size={13} strokeWidth={2.2} />
                Live Channel
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
                {SITE.location} / {SITE.channelHandle}
              </span>
            </div>

            <h1 className="display text-5xl font-semibold leading-[0.96] tracking-normal text-paper sm:text-7xl lg:text-[96px]">
              {SITE.heroStatement}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-paper/76 md:text-lg">
              {SITE.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 bg-signal px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink shadow-[0_0_24px_rgba(32,214,255,0.22)] transition-colors hover:bg-paper"
              >
                Latest episodes
                <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#featured-video"
                className="inline-flex items-center gap-3 border border-paper/25 bg-paper/[0.04] px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:border-signal/60 hover:text-signal"
              >
                <Play size={15} strokeWidth={2} fill="currentColor" />
                Play on site
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="overflow-hidden border border-signal/18 bg-black/24 shadow-[0_26px_70px_rgba(0,0,0,0.4)] backdrop-blur">
              <img
                src="/channel-portrait-blue.png"
                alt={`${SITE.firstName} Mercer`}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="border-t border-signal/16 bg-ink/88 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  Host / Evan Mercer
                </p>
                <p className="mt-2 text-lg font-semibold tracking-normal text-paper">
                  Front and center with the show, not lost in the backdrop.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 border-y border-signal/18 bg-black/28 backdrop-blur md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <article className="p-5 md:p-6">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
              Newest File
            </p>
            <h2 className="text-2xl font-semibold leading-tight tracking-normal text-paper md:text-3xl">
              {latest.title}
            </h2>
          </article>

          {queue.map((video, index) => (
            <Link
              key={video.id}
              to={`/work?video=${video.id}#lead-video`}
              className="group border-t border-signal/18 p-5 transition-colors hover:bg-signal/10 md:border-l md:border-t-0 md:p-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/46">
                Queue {String(index + 2).padStart(2, '0')} / {video.date}
              </span>
              <span className="mt-3 block text-lg font-semibold leading-tight tracking-normal text-paper transition-colors group-hover:text-signal">
                {video.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
