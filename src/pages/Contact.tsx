import ContactForm from '@/components/ContactForm'
import { SITE } from '@/lib/content'
import { ArrowUpRight } from 'lucide-react'

function isPlaceholder(s: string) {
  return s.trim().startsWith('[PLACEHOLDER')
}

export default function Contact() {
  const socialLinks = [
    { label: `YouTube — ${SITE.channelHandle}`, href: SITE.social.youtube },
    { label: `X / Twitter — ${SITE.channelHandle}`, href: SITE.social.x },
    { label: 'Instagram', href: SITE.social.instagram },
    { label: 'LinkedIn', href: SITE.social.linkedin },
  ].filter((s) => !isPlaceholder(s.href))

  return (
    <>
      {/* Title */}
      <section className="container-edge pt-36 md:pt-44 pb-14 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="eyebrow">Contact · 001</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-[1.0] tracking-[-0.04em] text-paper max-w-5xl">
              Send a note for interviews, speaking engagements, commissioned reporting, or a story tip — I read every message and respond within two to three business days.
            </h1>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60 max-w-xl">
              Direct email below · or use the form
            </p>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="container-edge pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-16">
        <div className="md:col-span-7">
          <ContactForm />
        </div>

        <aside className="md:col-span-5 md:pl-12 md:border-l md:border-paper/15 space-y-14">
          <div>
            <p className="eyebrow mb-4">Direct</p>
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-baseline gap-3 font-semibold text-2xl md:text-3xl text-paper tracking-[-0.02em] break-all"
            >
              <span className="link-underline">{SITE.email}</span>
              <ArrowUpRight size={20} strokeWidth={2} className="shrink-0 opacity-60 group-hover:opacity-100" />
            </a>
          </div>

          <div>
            <p className="eyebrow mb-4">Based in</p>
            <p className="text-paper font-semibold text-xl tracking-tight">{SITE.location}</p>
          </div>

          <div>
            <p className="eyebrow mb-4">Follow</p>
            <ul className="space-y-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-paper font-semibold text-lg tracking-tight"
                  >
                    <span className="link-underline">{s.label}</span>
                    <ArrowUpRight size={14} strokeWidth={2} className="opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rule pt-10">
            <p className="eyebrow mb-3">Response</p>
            <p className="text-paper/70 text-sm leading-relaxed">
              Every message is read. Responses within 2–3 business days. For
              time-sensitive press, mark the subject line "Urgent."
            </p>
          </div>
        </aside>
      </section>
    </>
  )
}
