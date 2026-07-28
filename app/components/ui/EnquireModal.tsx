'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SvgIcon from '@/app/components/ui/SvgIcon'

const CONTACT_EMAIL = 'zurichai360@gmail.com'
const EASE: [number, number, number, number] = [0.7, 0, 0.3, 1]

interface EnquireModalProps {
  open: boolean
  onClose: () => void
}

const fieldStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.2)',
  color: '#fff',
  fontSize: '1.6rem',
  fontWeight: 600,
  fontFamily: 'inherit',
  letterSpacing: '0.02em',
  padding: '1.4rem 0',
  outline: 'none',
  borderRadius: 0,
  transition: 'border-color 0.3s ease',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '1.1rem',
  letterSpacing: '0.08em',
  color: 'rgba(255,255,255,0.45)',
  marginBottom: '0.6rem',
}

export default function EnquireModal({ open, onClose }: EnquireModalProps) {
  const [sent, setSent] = useState(false)

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderBottomColor = 'var(--c-brown)')
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.2)')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const phone = String(data.get('phone') || '')
    const message = String(data.get('message') || '')

    const subject = encodeURIComponent(`Quick enquiry, ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => setSent(false), 400)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 560,
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#000',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff',
              padding: 'clamp(3rem, 5vw, 5rem)',
            }}
          >
            <button
              onClick={handleClose}
              aria-label="Close enquiry form"
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                color: '#fff',
                cursor: 'pointer',
                lineHeight: 0,
              }}
            >
              <SvgIcon id="close" width={20} height={20} />
            </button>

            {sent ? (
              <div style={{ padding: '3rem 0' }}>
                <h3 style={{
                  fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  margin: 0,
                  marginBottom: '1.6rem',
                }}>
                  Thank you
                </h3>
                <p style={{
                  fontSize: '1.4rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.55)',
                  margin: 0,
                }}>
                  Your mail app should have opened with the message ready to send.
                  If it did not, write to us directly at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--c-brown)' }}>
                    {CONTACT_EMAIL}
                  </a>.
                </p>
              </div>
            ) : (
              <>
                <span style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  letterSpacing: '0.14em',
                  color: 'var(--c-brown)',
                  marginBottom: '1.2rem',
                }}>
                  Quick enquiry
                </span>
                <h3 style={{
                  fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  lineHeight: 1.15,
                  margin: 0,
                  marginBottom: '3rem',
                  maxWidth: 420,
                }}>
                  Tell us about your project, we will get back within a day
                </h3>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <label style={labelStyle} htmlFor="eq-name">Name</label>
                    <input id="eq-name" name="name" type="text" required placeholder="Your name" style={fieldStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="eq-email">Email</label>
                    <input id="eq-email" name="email" type="email" required placeholder="you@company.com" style={fieldStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="eq-phone">Phone (optional)</label>
                    <input id="eq-phone" name="phone" type="tel" placeholder="+91" style={fieldStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="eq-message">What do you need?</label>
                    <textarea id="eq-message" name="message" required rows={3} placeholder="Branding, brochure, campaign, exhibition..." style={{ ...fieldStyle, resize: 'vertical' }} onFocus={focus} onBlur={blur} />
                  </div>

                  <button
                    type="submit"
                    style={{
                      alignSelf: 'flex-start',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '1.2rem',
                      marginTop: '1rem',
                      padding: '1.6rem 3.2rem',
                      background: 'var(--c-brown)',
                      color: '#fff',
                      fontSize: '1.2rem',
                      letterSpacing: '0.06em',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      transition: 'opacity 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Send enquiry
                  </button>
                </form>
              </>
            )}
          </motion.div>

          <style>{`
            #eq-name::placeholder, #eq-email::placeholder,
            #eq-phone::placeholder, #eq-message::placeholder {
              color: rgba(255,255,255,0.25);
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
