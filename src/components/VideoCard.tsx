import type { Video } from '@/lib/content'
import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'

type Props = { video: Video; index?: number; large?: boolean; autoPlay?: boolean }

export default function VideoCard({ video, index, large, autoPlay = false }: Props) {
  const [active, setActive] = useState(false)
  const thumb = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`
  const thumbFallback = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
  const embed = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1`

  useEffect(() => {
    if (autoPlay) {
      setActive(true)
    }
  }, [autoPlay])

  return (
    <article className="group bg-[#061120]">
      <div
        className="relative w-full aspect-video cursor-pointer overflow-hidden border border-signal/16 bg-ink shadow-[0_22px_52px_rgba(0,0,0,0.38),0_0_32px_rgba(32,214,255,0.08)]"
        onClick={() => setActive(true)}
      >
        {active ? (
          <iframe
            src={embed}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
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
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,13,0.1),rgba(3,7,13,0.55))]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center bg-signal text-ink shadow-[0_0_34px_rgba(32,214,255,0.34)] transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                <Play size={large ? 28 : 22} strokeWidth={2} fill="currentColor" />
              </span>
            </div>
            {typeof index === 'number' && (
              <span className="absolute left-4 top-4 border border-signal/18 bg-ink/78 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-paper">
                EP {String(index + 1).padStart(2, '0')}
              </span>
            )}
          </>
        )}
      </div>

      <div className="border-x border-b border-signal/16 bg-black/24 p-4 md:p-5">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/55">
            {video.date ?? '-'}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">
            Analysis
          </span>
        </div>
        <h3
          className={[
            'font-semibold tracking-normal text-paper leading-[1.15]',
            large ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl',
          ].join(' ')}
        >
          {video.title}
        </h3>
      </div>
    </article>
  )
}
