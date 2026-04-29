import { Link } from 'react-router-dom'
import { ArrowRight, Clock3, MonitorPlay, Radio } from 'lucide-react'
import Hero from '@/components/Hero'
import VideoCard from '@/components/VideoCard'
import { SITE, VIDEOS } from '@/lib/content'

export default function Home() {
  const featured = VIDEOS[0]
  const shelf = VIDEOS.slice(1, 5)
  const briefings = VIDEOS.slice(5, 11)
  const marquee = SITE.beats.concat(SITE.beats)

  return (
    <>
      <Hero />

      <section className="overflow-hidden border-y border-signal/12 bg-ink py-5 text-paper">
        <div className="marquee flex gap-16 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.24em] text-paper/68">
          {marquee.map((beat, i) => (
            <span key={i} className="flex shrink-0 items-center gap-16">
              <span className="h-1 w-8 bg-signal shadow-[0_0_18px_rgba(32,214,255,0.55)]" />
              {beat}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-bone text-paper">
        <div className="container-edge py-16 md:py-24">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,0.58fr)_minmax(360px,0.42fr)]">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                Latest Episode
              </p>
              <h2 className="display max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-paper md:text-6xl">
                The newest argument sits up front.
              </h2>
              <p className="mt-5 max-w-2xl text-paper/66">
                Viewers get a direct play surface, a clean read on the story, and a route into the full archive without the old page feeling crowded.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-2">
              {[
                ['Base', SITE.location],
                ['Mode', 'Commentary'],
                ['Focus', 'Politics'],
                ['Channel', SITE.channelHandle],
              ].map(([label, value]) => (
                <div key={label} className="border border-signal/14 bg-black/24 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/42">
                    {label}
                  </p>
                  <p className="mt-3 text-xl font-semibold tracking-normal text-paper">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="featured-video" className="mt-12 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,0.68fr)_minmax(320px,0.32fr)]">
            <VideoCard video={featured} large />
            <aside className="border border-signal/14 bg-black/24 p-6">
              <div className="mb-6 flex items-center gap-3 text-signal">
                <MonitorPlay size={18} strokeWidth={2} />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em]">Desk Read</p>
              </div>
              <h3 className="text-3xl font-semibold leading-tight tracking-normal text-paper">
                {featured.title}
              </h3>
              <div className="mt-6 space-y-4 text-paper/74 leading-relaxed">
                {featured.summary?.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <Link
                to={`/work?video=${featured.id}#lead-video`}
                className="mt-8 inline-flex items-center gap-3 bg-signal px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-paper"
              >
                Play in site <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-signal/10 bg-ink text-paper">
        <div className="container-edge grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div className="border-b border-signal/12 py-16 lg:border-b-0 lg:border-r lg:pr-10">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
              Story Shelf
            </p>
            <h2 className="display text-4xl font-semibold leading-tight tracking-normal text-paper md:text-5xl">
              Four fast routes into the current feed.
            </h2>
            <Link
              to="/work"
              className="mt-8 inline-flex items-center gap-3 border border-signal/22 bg-signal/8 px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-signal hover:text-ink"
            >
              Full archive <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {shelf.map((video, index) => (
              <article key={video.id} className="border-b border-signal/12 p-6 md:border-l lg:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/42">
                    File {String(index + 2).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                    {video.date}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight tracking-normal text-paper">
                  {video.title}
                </h3>
                <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-paper/64">
                  {video.summary?.[0]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy text-paper">
        <img
          src="/channel-portrait-blue.png"
          alt={`${SITE.firstName} Mercer`}
          className="absolute right-0 top-0 hidden h-full w-[42%] object-cover object-top opacity-32 lg:block"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020B1F_0%,#020B1F_58%,rgba(2,11,31,0.54)_100%)]" />
        <div className="relative container-edge py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
              Editorial Thesis
            </p>
            <p className="display text-3xl font-semibold leading-tight tracking-normal text-paper md:text-5xl">
              {SITE.missionBlurb}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {briefings.map((video, index) => (
              <Link
                key={video.id}
                to={`/work?video=${video.id}#lead-video`}
                className="group border border-signal/12 bg-black/26 p-5 transition-colors hover:border-signal/40 hover:bg-signal/8"
              >
                <span className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/46">
                  <Clock3 size={12} strokeWidth={2} />
                  Brief {String(index + 6).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold leading-tight tracking-normal text-paper group-hover:text-signal">
                  {video.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-signal text-ink">
        <a
          href={SITE.channelUrl}
          target="_blank"
          rel="noreferrer"
          className="container-edge group flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <Radio size={22} strokeWidth={2.2} />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em]">Subscribe on YouTube</p>
          </div>
          <p className="max-w-3xl text-2xl font-semibold leading-tight tracking-normal md:text-4xl">
            Follow the channel where new stories move first.
          </p>
          <ArrowRight size={28} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
        </a>
      </section>
    </>
  )
}
