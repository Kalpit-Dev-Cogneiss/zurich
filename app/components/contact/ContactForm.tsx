'use client'
import { useRef, useState } from 'react'
import SplitText from '@/app/components/ui/SplitText'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import ContactMap from '@/app/components/contact/ContactMap'
import Recaptcha, { RecaptchaHandle } from '@/app/components/ui/Recaptcha'

const CONTACT_EMAIL = 'zurichai360@gmail.com'

const bigInputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.2)',
  color: '#fff',
  fontSize: 'clamp(1.8rem, 2vw, 2.6rem)',
  fontWeight: 600,
  fontFamily: 'inherit',
  letterSpacing: '0.02em',
  padding: '1.8rem 0',
  outline: 'none',
  borderRadius: 0,
  transition: 'border-color 0.3s ease',
}

const numStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  letterSpacing: '0.18em',
  color: 'rgba(255,255,255,0.4)',
  paddingTop: '2.4rem',
}

/**
 * Editorial oversized form — each field is a numbered row, magazine-style,
 * instead of a boxed form.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<RecaptchaHandle>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setError('')

    if (!captchaToken) {
      setError('Please verify you are not a robot.')
      return
    }

    const data = new FormData(form)
    data.set('page', window.location.pathname)
    setSending(true)

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error || 'Something went wrong. Please try again.')
      }
      form.reset()
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      captchaRef.current?.reset()
    } finally {
      setSending(false)
    }
  }

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderBottomColor = '#fff')
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.2)')

  const fields = [
    { num: '01', label: 'What Should We Call You?', name: 'name', type: 'text', placeholder: 'Your name', required: true },
    { num: '02', label: 'Where Do We Reply?', name: 'email', type: 'email', placeholder: 'you@company.com', required: true },
    { num: '03', label: 'A Number, If Calls Are Easier', name: 'phone', type: 'tel', placeholder: '+91', required: false },
  ]

  return (
    <section
      id="contact-form"
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '12rem 4rem 10rem',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%' }}>
        <AnimateReveal>
          <span style={{
            display: 'block',
            fontSize: '1.1rem',
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '2.4rem',
          }}>
            A little context now. A much bigger conversation soon.
          </span>
        </AnimateReveal>

        <SplitText
          as="h2"
          mode="lines"
          text="Fill us in. We'll take it forward."
          style={{
            fontSize: 'clamp(3rem, 4.6vw, 6.4rem)',
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: '0.02em',
            margin: 0,
            marginBottom: '6rem',
            maxWidth: 1100,
          }}
        />

      <div style={{ display: 'flex', gap: 'clamp(3rem, 6vw, 7rem)', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 560px', minWidth: 'min(100%, 480px)' }}>
        {sent ? (
          <AnimateReveal>
            <div style={{ padding: '4rem 0' }}>
              <h3 style={{
                fontSize: 'clamp(2.4rem, 3vw, 4rem)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                margin: 0,
                marginBottom: '1.6rem',
              }}>
                Thank You
              </h3>
              <p style={{
                fontSize: '1.5rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.55)',
                margin: 0,
                maxWidth: 460,
              }}>
                We&apos;ve got your message and sent a confirmation to your inbox.
                A strategist will be in touch within one business day. In the
                meantime, reach us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#fff' }}>
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </div>
          </AnimateReveal>
        ) : (
          <form onSubmit={handleSubmit}>
            {fields.map((f, i) => (
              <AnimateReveal key={f.name} delay={0.1 + i * 0.08} y={36}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '6rem 1fr',
                  gap: '2.4rem',
                  borderTop: i === 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                  padding: '1.2rem 0',
                }}>
                  <span style={numStyle}>{f.num}</span>
                  <div>
                    <label
                      htmlFor={`cf-${f.name}`}
                      style={{
                        display: 'block',
                        fontSize: '1.15rem',
                        letterSpacing: '0.16em',
                        color: 'rgba(255,255,255,0.45)',
                        marginTop: '1.6rem',
                      }}
                    >
                      {f.label}
                    </label>
                    <input
                      id={`cf-${f.name}`}
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      style={bigInputStyle}
                      onFocus={focus}
                      onBlur={blur}
                    />
                  </div>
                </div>
              </AnimateReveal>
            ))}

            <AnimateReveal delay={0.35} y={36}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '6rem 1fr',
                gap: '2.4rem',
                padding: '1.2rem 0',
              }}>
                <span style={numStyle}>04</span>
                <div>
                  <label
                    htmlFor="cf-message"
                    style={{
                      display: 'block',
                      fontSize: '1.15rem',
                      letterSpacing: '0.16em',
                      color: 'rgba(255,255,255,0.45)',
                      marginTop: '1.6rem',
                    }}
                  >
                    The project: branding, brochure, advertising, exhibition?
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    required
                    rows={3}
                    placeholder="Whatever you have, even a sentence"
                    style={{ ...bigInputStyle, resize: 'vertical' }}
                    onFocus={focus}
                    onBlur={blur}
                  />
                </div>
              </div>
            </AnimateReveal>

            <AnimateReveal delay={0.4} y={36}>
              <div className="contact-submit-wrap" style={{ paddingLeft: '8.4rem', marginTop: '2rem' }}>
                <Recaptcha ref={captchaRef} onChange={setCaptchaToken} />
              </div>
            </AnimateReveal>

            <AnimateReveal delay={0.45}>
              <div className="contact-submit-wrap" style={{ paddingLeft: '8.4rem', marginTop: '4rem' }}>
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    padding: '1.8rem 3.6rem',
                    background: '#fff',
                    color: '#000',
                    fontSize: '1.2rem',
                    letterSpacing: '0.12em',
                    border: 'none',
                    cursor: sending ? 'default' : 'pointer',
                    opacity: sending ? 0.6 : 1,
                    fontFamily: 'inherit',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={e => { if (!sending) e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={e => { if (!sending) e.currentTarget.style.opacity = '1' }}
                >
                  {sending ? 'Sending…' : 'Send Message'}
                </button>
                {error && (
                  <p style={{
                    marginTop: '1.6rem',
                    fontSize: '1.2rem',
                    color: 'rgba(255,120,120,0.9)',
                  }}>
                    {error}
                  </p>
                )}
              </div>
            </AnimateReveal>
          </form>
        )}
      </div>

      <AnimateReveal delay={0.2} y={26} style={{ flex: '1 1 380px', minWidth: 'min(100%, 320px)' }}>
        <ContactMap />
      </AnimateReveal>
      </div>
      </div>

      <style>{`
        #contact-form input::placeholder,
        #contact-form textarea::placeholder {
          color: rgba(255,255,255,0.22);
        }
        @media (max-width: 640px) {
          #contact-form {
            padding: 9rem 2rem 5rem !important;
          }
          #contact-form form > div > div,
          #contact-form form > div > div > div {
            grid-template-columns: 1fr !important;
          }
          .contact-submit-wrap {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
