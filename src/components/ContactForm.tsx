import { useState } from 'react'
import { SITE } from '@/lib/content'
import { ArrowRight } from 'lucide-react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('Interview request')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
    const subj = encodeURIComponent(`[Website] ${subject}`)
    window.location.href = `mailto:${SITE.email}?subject=${subj}&body=${body}`
  }

  const field =
    'w-full bg-ink/50 border border-signal/12 focus:border-signal outline-none px-4 py-4 text-paper placeholder:text-paper/30 text-base md:text-lg font-medium tracking-normal transition-colors'

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      <div>
        <label htmlFor="name" className="eyebrow mb-2 block">01 / Name</label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="eyebrow mb-2 block">02 / Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
          placeholder="you@outlet.com"
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="subject" className="eyebrow mb-2 block">03 / Subject</label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={field + ' appearance-none pr-8'}
        >
          <option>Interview request</option>
          <option>Speaking / panel</option>
          <option>Commissioned reporting</option>
          <option>Press inquiry</option>
          <option>Story tip</option>
          <option>Other</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="message" className="eyebrow mb-2 block">04 / Message</label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={field + ' min-h-[180px] resize-none text-base md:text-lg'}
          placeholder="Outlet, timeline, and what you have in mind."
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-between gap-4 bg-signal px-6 py-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink shadow-[0_0_24px_rgba(32,214,255,0.25)] transition-colors hover:bg-paper hover:text-ink md:col-span-2"
      >
        Send message
        <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
      </button>

      <p className="md:col-span-2 text-xs text-paper/50 pt-2 font-mono uppercase tracking-[0.15em]">
        Opens in your mail client /{' '}
        <a href={`mailto:${SITE.email}`} className="text-paper underline underline-offset-4">
          {SITE.email}
        </a>
      </p>
    </form>
  )
}
