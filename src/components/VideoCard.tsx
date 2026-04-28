import type { Video } from '@/lib/content'
import { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'

type Props = { video: Video; index?: number; large?: boolean }

export default function VideoCard({ video, index, large }: Props) {
  const [active, setActive] = useState(false)
  const thumb = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`
  const thumbFallback = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
  const embed = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1`
  const watch = `https://www.youtube.com/watch?v=${video.id}`

  return (
    <article className="group flex flex-col">
      <div
        className={[
          'relative w-full aspect-video bg-ink overflow-hidden cursor-pointer',
          'ring-1 ring-signal/15 shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_28px_rgba(32,214,255,0.08)]',
        ].join(' ')}
        onClick={() => setActive(true)}
      >
        {active ? (
          <iframe
            src={embed}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <>
            <img
              src={thumb}
              onError={(e) => {
                const img = e.currentTarget
                if (img.src !== thumbFallback) img.src = thumbFallback
              }}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#FF0000] text-white transition-transform duration-300 group-hover:scale-110 shadow-[0_0_28px_rgba(255,0,0,0.28)]">
                <Play size={large ? 28 : 22} strokeWidth={2} fill="currentColor" />
              </span>
            </div>
            {typeof index === 'number' && (
              <span className="absolute top-4 left-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper bg-ink/60 px-2 py-1">
                EP {String(index + 1).padStart(2, '0')}
              </span>
            )}
            <a
              href={watch}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Open on YouTube"
              className="absolute top-4 right-4 w-9 h-9 inline-flex items-center justify-center bg-paper/90 text-ink hover:bg-signal hover:text-ink transition-colors"
            >
              <ExternalLink size={14} strokeWidth={2} />
            </a>
          </>
        )}
      </div>
      <div className="pt-5">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/55">
            {video.date ?? '—'}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">
            Analysis
          </span>
        </div>
        <h3 className={[
          'font-semibold tracking-[-0.01em] text-paper leading-[1.15]',
          large ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl',
        ].join(' ')}>
          {video.title}
        </h3>
      </div>
    </article>
  )
}
