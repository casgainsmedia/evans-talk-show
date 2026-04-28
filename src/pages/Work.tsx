import VideoCard from '@/components/VideoCard'
import { VIDEOS, SITE } from '@/lib/content'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function Work() {
  const lead = VIDEOS[0]
  const rest = VIDEOS.slice(1)

  return (
    <>
      <section className="relative overflow-hidden border-b border-signal/10 bg-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(32,214,255,0.2),transparent_28%),radial-gradient(circle_at_84%_14%,rgba(25,93,255,0.18),transparent_26%),linear-gradient(180deg,rgba(2,11,31,0.3),#03070D_92%)]" />
        <div className="relative container-edge pt-36 md:pt-44 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                Work / Archive
              </p>
            </div>
            <div>
              <h1 className="display font-semibold text-4xl sm:text-6xl lg:text-[90px] leading-[0.94] tracking-[-0.04em] text-paper max-w-6xl">
                Episode archive built like a control-room log.
              </h1>
              <p className="mt-7 max-w-2xl text-paper/70 leading-relaxed">
                Every upload stays close to the surface: newest episode first, summary beside the playback, and the rest arranged for quick scanning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone border-b border-signal/10">
        <div className="container-edge py-14 md:py-20">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,0.68fr)_minmax(320px,0.32fr)] gap-8">
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold mb-5">
                Current Lead
              </p>
              <VideoCard video={lead} large />
            </div>
            <aside className="border border-signal/14 bg-black/25 p-6 md:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-signal/14 pb-5 mb-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                  Ep. {String(VIDEOS.length).padStart(2, '0')}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/48">
                  {lead.date}
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.04] text-paper">
                {lead.title}
              </h2>
              <div className="mt-6 space-y-4 text-paper/74 leading-relaxed">
                {lead.summary?.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${lead.id}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-signal text-ink px-5 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold shadow-[0_0_24px_rgba(32,214,255,0.22)] hover:bg-paper transition-colors"
              >
                Watch on YouTube <ArrowRight size={14} strokeWidth={2} />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="container-edge py-16 md:py-24">
        <div className="mb-8 grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-6">
          <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold">
            Index
          </p>
          <h2 className="display font-semibold text-4xl md:text-6xl leading-[1] tracking-[-0.04em] text-paper max-w-5xl">
            More episodes in the queue.
          </h2>
        </div>

        <ul className="border-y border-signal/15">
          {rest.map((video, index) => (
            <li key={video.id} className="group grid grid-cols-1 lg:grid-cols-[96px_minmax(260px,0.36fr)_minmax(0,1fr)_56px] gap-5 lg:gap-8 border-t first:border-t-0 border-paper/10 py-7 md:py-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/46">
                {String(VIDEOS.length - index - 1).padStart(2, '0')}
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal mb-3">
                  {video.date}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] leading-[1.06] text-paper group-hover:text-signal transition-colors">
                  {video.title}
                </h3>
              </div>
              <p className="text-sm md:text-[15px] leading-relaxed text-paper/68">
                {video.summary?.[0]}
              </p>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch ${video.title} on YouTube`}
                className="self-start lg:self-center justify-self-start lg:justify-self-end inline-flex h-12 w-12 items-center justify-center border border-signal/18 bg-signal/[0.05] text-paper group-hover:bg-signal group-hover:text-ink transition-colors"
              >
                <ArrowUpRight size={18} strokeWidth={2} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[linear-gradient(180deg,#061A3A_0%,#03070D_100%)] border-t border-signal/10">
        <a
          href={SITE.channelUrl}
          target="_blank"
          rel="noreferrer"
          className="container-edge group py-20 md:py-28 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_96px] gap-8 items-end"
        >
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold mb-5">
              YouTube Channel
            </p>
            <h2 className="display font-semibold text-4xl md:text-6xl lg:text-[76px] leading-[0.98] tracking-[-0.04em] text-paper max-w-6xl">
              Subscribe for new episodes and follow the conversation where it moves fastest.
            </h2>
          </div>
          <span className="inline-flex h-20 w-20 items-center justify-center border border-signal/25 bg-signal/[0.08] text-signal group-hover:bg-signal group-hover:text-ink transition-colors">
            <ArrowUpRight size={34} strokeWidth={1.8} />
          </span>
        </a>
      </section>
    </>
  )
}
