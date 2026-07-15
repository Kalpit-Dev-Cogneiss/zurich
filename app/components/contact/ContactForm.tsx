'use client'
import { useState } from 'react'
import SplitText from '@/app/components/ui/SplitText'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import ContactMap from '@/app/components/contact/ContactMap'

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
  color: 'var(--c-brown)',
  paddingTop: '2.4rem',
}

/**
 * Editorial oversized form — each field is a numbered row, magazine-style,
 * instead of a boxed form.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const phone = String(data.get('phone') || '')
    const message = String(data.get('message') || '')

    const subject = encodeURIComponent(`Project enquiry — ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderBottomColor = 'var(--c-brown)')
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.2)')

  const fields = [
    { num: '01', label: 'What should we call you?', name: 'name', type: 'text', placeholder: 'Your name', required: true },
    { num: '02', label: 'Where do we reply?', name: 'email', type: 'email', placeholder: 'you@company.com', required: true },
    { num: '03', label: 'A number, if calls are easier', name: 'phone', type: 'tel', placeholder: '+91', required: false },
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
            textTransform: 'uppercase',
            color: 'var(--c-brown)',
            marginBottom: '2.4rem',
          }}>
            Or tell us everything at once
          </span>
        </AnimateReveal>

        <SplitText
          as="h2"
          mode="lines"
          text="EVERY LANDMARK STARTS WITH A CONVERSATION"
          style={{
            fontSize: 'clamp(3rem, 4.6vw, 6.4rem)',
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
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
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                margin: 0,
                marginBottom: '1.6rem',
              }}>
                Thank you
              </h3>
              <p style={{
                fontSize: '1.5rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.55)',
                margin: 0,
                maxWidth: 460,
              }}>
                Your mail app should have opened with the message ready to send.
                If it didn&apos;t, write to us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--c-brown)' }}>
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
                        textTransform: 'uppercase',
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
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.45)',
                      marginTop: '1.6rem',
                    }}
                  >
                    The project — branding, brochure, advertising, exhibition?
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

            <AnimateReveal delay={0.45}>
              <div style={{ paddingLeft: '8.4rem', marginTop: '4rem' }}>
                <button
                  type="submit"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    padding: '1.8rem 3.6rem',
                    background: 'var(--c-brown)',
                    color: '#fff',
                    fontSize: '1.2rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Send message
                </button>
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
          #contact-form form > div > div,
          #contact-form form > div > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
