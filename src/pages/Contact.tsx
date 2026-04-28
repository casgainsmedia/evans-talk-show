import ContactForm from '@/components/ContactForm'
import { SITE } from '@/lib/content'
import { ArrowUpRight, Mail } from 'lucide-react'

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
      <section className="relative overflow-hidden bg-navy border-b border-signal/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(32,214,255,0.19),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(138,92,255,0.13),transparent_24%),linear-gradient(180deg,rgba(2,11,31,0.24),#03070D_92%)]" />
        <div className="relative container-edge pt-36 md:pt-44 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-6">
              Contact / Booking Desk
            </p>
            <h1 className="display font-semibold text-4xl sm:text-6xl lg:text-[88px] leading-[0.96] tracking-[-0.04em] text-paper max-w-6xl">
              Send a story tip, booking note, or interview request.
            </h1>
          </div>

          <aside className="border border-signal/16 bg-black/25 p-6 self-end">
            <div className="flex items-center gap-3 text-signal mb-5">
              <Mail size={18} strokeWidth={2} />
              <p className="font-mono text-[10px] uppercase tracking-[0.22em]">Direct Line</p>
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-baseline gap-3 font-semibold text-2xl text-paper tracking-[-0.02em] break-all"
            >
              <span className="link-underline">{SITE.email}</span>
              <ArrowUpRight size={18} strokeWidth={2} className="shrink-0 opacity-60 group-hover:opacity-100" />
            </a>
          </aside>
        </div>
      </section>

      <section className="container-edge py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[minmax(0,0.68fr)_minmax(300px,0.32fr)] gap-12 lg:gap-16">
        <div className="border border-signal/14 bg-black/18 p-5 md:p-8">
          <ContactForm />
        </div>

        <aside className="space-y-6">
          <div className="border border-signal/14 bg-bone/72 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-4">
              Based In
            </p>
            <p className="text-paper font-semibold text-2xl tracking-[-0.02em]">{SITE.location}</p>
          </div>

          <div className="border border-signal/14 bg-bone/72 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-5">
              Follow
            </p>
            <ul className="space-y-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-paper/86 font-semibold tracking-tight hover:text-signal transition-colors"
                  >
                    <span className="link-underline">{s.label}</span>
                    <ArrowUpRight size={14} strokeWidth={2} className="opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-signal/14 bg-signal/[0.04] p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-4">
              Response
            </p>
            <p className="text-paper/70 text-sm leading-relaxed">
              Every message is read. Responses within 2 to 3 business days. For time-sensitive press, mark the subject line "Urgent."
            </p>
          </div>
        </aside>
      </section>
    </>
  )
}
