import VideoCard from '@/components/VideoCard'
import { VIDEOS, SITE } from '@/lib/content'
import { ArrowUpRight } from 'lucide-react'

export default function Work() {
  return (
    <>
      {/* Title */}
      <section className="container-edge pt-36 md:pt-44 pb-12 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="eyebrow">Work · Archive</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-[1.0] tracking-[-0.04em] text-paper max-w-5xl">
              Every episode of {SITE.show}, catalogued and ready to watch — sharp commentary built around politics, media narratives, and breaking headlines.
            </h1>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60 max-w-xl">
              Click any thumbnail to play in place · read the summary if you can't listen
            </p>
          </div>
        </div>
      </section>

      {/* Episode list with summaries */}
      <section className="bg-bone border-t border-paper/10">
        <div className="container-edge py-20 md:py-28">
          <ul className="space-y-20 md:space-y-28">
            {VIDEOS.map((v, i) => (
              <li key={v.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-16 first:pt-0 border-t first:border-t-0 border-paper/10">
                {/* Number + meta rail */}
                <div className="lg:col-span-1">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
                    Ep. {String(VIDEOS.length - i).padStart(2, '0')}
                  </p>
                </div>

                {/* Video */}
                <div className="lg:col-span-5">
                  <VideoCard video={v} index={i} />
                </div>

                {/* Summary */}
                <div className="lg:col-span-6">
                  <p className="eyebrow mb-3">Summary</p>
                  {v.summary ? (
                    <div className="space-y-5 text-[15.5px] md:text-base leading-[1.65] text-paper/85">
                      {v.summary.map((para, pi) => (
                        <p key={pi} className={pi === v.summary!.length - 1 ? 'text-paper/70 pt-2 border-t border-paper/10' : ''}>
                          {para}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-paper/50 italic">Summary coming soon.</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* YT CTA */}
      <section className="container-edge py-24 md:py-32">
        <a
          href={SITE.channelUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-t border-paper/15 pt-10"
        >
          <h2 className="display font-semibold text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.03em] text-paper max-w-4xl">
            Watch the full archive, subscribe for new episodes, and join the conversation in the comments on YouTube.
          </h2>
          <ArrowUpRight
            size={64}
            strokeWidth={1.5}
            className="shrink-0 text-paper group-hover:text-signal transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </section>
    </>
  )
}
