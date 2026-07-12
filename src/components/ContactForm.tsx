import { FormEvent, useState } from 'react'

// Set your Formspree endpoint after creating a form at https://formspree.io
const FORM_ENDPOINT: string | null = null

export function ContactForm() {
  const [status, setStatus] = useState('')
  const [statusClass, setStatusClass] = useState('form-status')
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!FORM_ENDPOINT) {
      setStatus('Form not configured yet. Set FORM_ENDPOINT in src/components/ContactForm.tsx or email via LinkedIn.')
      setStatusClass('form-status form-status--error')
      return
    }

    setSending(true)
    setStatus('')
    setStatusClass('form-status')

    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      e.currentTarget.reset()
      setStatus("Message sent — thank you! I'll get back to you soon.")
      setStatusClass('form-status form-status--success')
    } catch {
      setStatus('Something went wrong. Please try again or reach out on LinkedIn.')
      setStatusClass('form-status form-status--error')
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" required autoComplete="name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="you@company.com" required autoComplete="email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="What's on your mind?" required />

      <button type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
      </button>
      <p className={statusClass} role="status" aria-live="polite">
        {status}
      </p>
    </form>
  )
}
