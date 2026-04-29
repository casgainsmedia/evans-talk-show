import ContactForm from '@/components/ContactForm'
import { SITE } from '@/lib/content'
import { ArrowUpRight, Mail, MapPin, MessageSquareText } from 'lucide-react'

function isPlaceholder(s: string) {
  return s.trim().startsWith('[PLACEHOLDER')
}

export default function Contact() {
  const socialLinks = [
    { label: `YouTube / ${SITE.channelHandle}`, href: SITE.social.youtube },
    { label: `X / Twitter / ${SITE.channelHandle}`, href: SITE.social.x },
    { label: 'Instagram', href: SITE.social.instagram },
    { label: 'LinkedIn', href: SITE.social.linkedin },
  ].filter((s) => !isPlaceholder(s.href))

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-paper">
        <img
          src="/channel-banner-blue.png"
          alt={SITE.name}
          className="absolute inset-0 h-full w-full object-cover opacity-24"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,11,31,0.62),#03070D_92%)]" />
        <div className="absolute inset-0 news-grid opacity-60" />
        <div className="relative container-edge pb-16 pt-36 md:pt-44">
          <div className="max-w-6xl">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
              Contact / Booking Desk
            </p>
            <h1 className="display text-5xl font-semibold leading-tight tracking-normal text-paper sm:text-7xl lg:text-[92px]">
              Send the story, book the conversation, or reach the desk.
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-bone text-paper">
        <div className="container-edge grid grid-cols-1 gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,0.66fr)_minmax(300px,0.34fr)]">
          <div>
            <div className="mb-8 flex items-center gap-3 text-signal">
              <MessageSquareText size={18} strokeWidth={2} />
              <p className="font-mono text-[10px] uppercase tracking-[0.22em]">Message Form</p>
            </div>
            <div className="border border-signal/14 bg-black/20 p-5 md:p-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-5">
            <div className="border border-signal/14 bg-black/24 p-6">
              <div className="mb-5 flex items-center gap-3 text-signal">
                <Mail size={18} strokeWidth={2} />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em]">Direct Line</p>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-baseline gap-3 break-all text-2xl font-semibold tracking-normal text-paper"
              >
                <span className="link-underline">{SITE.email}</span>
                <ArrowUpRight size={18} strokeWidth={2} className="shrink-0 opacity-60 group-hover:opacity-100" />
              </a>
            </div>

            <div className="border border-signal/14 bg-black/24 p-6">
              <div className="mb-4 flex items-center gap-3 text-signal">
                <MapPin size={18} strokeWidth={2} />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em]">Based In</p>
              </div>
              <p className="text-2xl font-semibold tracking-normal text-paper">{SITE.location}</p>
            </div>

            <div className="border border-signal/14 bg-signal/[0.04] p-6">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                Follow
              </p>
              <ul className="space-y-3">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 font-semibold tracking-normal text-paper/86 transition-colors hover:text-signal"
                    >
                      <span className="link-underline">{s.label}</span>
                      <ArrowUpRight size={14} strokeWidth={2} className="opacity-60 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-signal/14 bg-black/24 p-6">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                Response
              </p>
              <p className="text-sm leading-relaxed text-paper/70">
                Every message is read. Responses within 2 to 3 business days. For time-sensitive press, mark the subject line "Urgent."
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
