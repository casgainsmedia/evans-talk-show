import VideoCard from '@/components/VideoCard'
import { Link, useSearchParams } from 'react-router-dom'
import { VIDEOS, SITE } from '@/lib/content'
import { ArrowRight, ArrowUpRight, ListVideo } from 'lucide-react'

export default function Work() {
  const [searchParams] = useSearchParams()
  const selectedVideoId = searchParams.get('video')
  const lead = VIDEOS.find((video) => video.id === selectedVideoId) ?? VIDEOS[0]
  const rest = VIDEOS.filter((video) => video.id !== lead.id)

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-paper">
        <img
          src="/channel-banner-blue.png"
          alt={SITE.name}
          className="absolute inset-0 h-full w-full object-cover opacity-32"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,13,0.58),#03070D_88%)]" />
        <div className="absolute inset-0 news-grid opacity-60" />
        <div className="relative container-edge pb-16 pt-36 md:pt-44">
          <div className="max-w-6xl">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
              Work / Episode Catalog
            </p>
            <h1 className="display text-5xl font-semibold leading-tight tracking-normal text-paper sm:text-7xl lg:text-[92px]">
              A cleaner catalog for fast political reads.
            </h1>
            <p className="mt-7 max-w-2xl leading-relaxed text-paper/72">
              Newest video first, then the rest arranged as a readable index with dates, summaries, and direct YouTube exits.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-signal/10 bg-bone text-paper">
        <div className="container-edge py-14 md:py-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                Current Lead
              </p>
              <h2 className="display text-4xl font-semibold leading-tight tracking-normal text-paper md:text-6xl">
                Start with the newest upload.
              </h2>
            </div>
            <a
              href="#lead-video"
              className="inline-flex items-center gap-3 bg-signal px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-paper"
            >
              Featured episode <ArrowRight size={14} strokeWidth={2} />
            </a>
          </div>

          <div id="lead-video" className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,0.68fr)_minmax(320px,0.32fr)]">
            <VideoCard video={lead} large autoPlay={Boolean(selectedVideoId)} />
            <aside className="border border-signal/14 bg-black/25 p-6 md:p-7">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-signal/14 pb-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                  Latest
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/48">
                  {lead.date}
                </p>
              </div>
              <h3 className="text-3xl font-semibold leading-tight tracking-normal text-paper md:text-4xl">
                {lead.title}
              </h3>
              <div className="mt-6 space-y-4 text-paper/74 leading-relaxed">
                {lead.summary?.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-edge py-16 md:py-24">
          <div className="mb-9 grid grid-cols-1 gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
            <div className="flex items-center gap-3 text-signal">
              <ListVideo size={18} strokeWidth={2} />
              <p className="font-mono text-[10px] uppercase tracking-[0.22em]">Index</p>
            </div>
            <h2 className="display max-w-5xl text-4xl font-semibold leading-tight tracking-normal text-paper md:text-6xl">
              The rest of the feed, built to scan.
            </h2>
          </div>

          <ul className="border-y border-signal/15">
            {rest.map((video, index) => (
              <li
                key={video.id}
                className="group grid grid-cols-1 gap-5 border-t border-paper/10 py-7 first:border-t-0 md:py-8 lg:grid-cols-[96px_minmax(260px,0.36fr)_minmax(0,1fr)_56px] lg:gap-8"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/46">
                  {String(index + 2).padStart(2, '0')}
                </div>
                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                    {video.date}
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight tracking-normal text-paper transition-colors group-hover:text-signal md:text-3xl">
                    {video.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-paper/68 md:text-[15px]">
                  {video.summary?.[0]}
                </p>
                <Link
                  to={`/work?video=${video.id}#lead-video`}
                  aria-label={`Play ${video.title} on site`}
                  className="inline-flex h-12 w-12 items-center justify-center border border-signal/18 bg-signal/[0.05] text-paper transition-colors group-hover:bg-signal group-hover:text-ink lg:place-self-center lg:justify-self-end"
                >
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-signal text-ink">
        <a
          href={SITE.channelUrl}
          target="_blank"
          rel="noreferrer"
          className="container-edge group flex flex-col gap-5 py-10 md:flex-row md:items-center md:justify-between"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em]">
            YouTube Channel
          </p>
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-normal md:text-5xl">
            Subscribe for the newest upload and the full conversation.
          </h2>
          <ArrowUpRight size={30} strokeWidth={2} />
        </a>
      </section>
    </>
  )
}
