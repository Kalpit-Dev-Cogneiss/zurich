'use client'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        params: { sitekey: string; callback: (token: string) => void; 'expired-callback'?: () => void }
      ) => number
      reset: (widgetId?: number) => void
    }
    __onRecaptchaApiLoad?: () => void
  }
}

export interface RecaptchaHandle {
  reset: () => void
}

interface RecaptchaProps {
  onChange: (token: string | null) => void
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
const SCRIPT_ID = 'recaptcha-v2-script'
const SCRIPT_SRC = 'https://www.google.com/recaptcha/api.js?onload=__onRecaptchaApiLoad&render=explicit'

let apiReady = false
const readyCallbacks: Array<() => void> = []

function flushReadyCallbacks() {
  apiReady = true
  readyCallbacks.splice(0).forEach((cb) => cb())
}

if (typeof window !== 'undefined') {
  window.__onRecaptchaApiLoad = flushReadyCallbacks
}

function whenApiReady(callback: () => void) {
  if (apiReady && window.grecaptcha?.render) {
    callback()
    return
  }
  readyCallbacks.push(callback)
  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  }
}

/**
 * Renders a reCAPTCHA v2 checkbox widget. Uses explicit rendering (via the
 * documented `onload` query-string callback, not the script tag's own `load`
 * event — `window.grecaptcha` exists before `.render` is actually usable) so
 * multiple widgets can be mounted on the same page at once, each with its
 * own widget id.
 */
const Recaptcha = forwardRef<RecaptchaHandle, RecaptchaProps>(function Recaptcha({ onChange }, ref) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<number | null>(null)
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current !== null) {
        window.grecaptcha?.reset(widgetIdRef.current)
        onChangeRef.current(null)
      }
    },
  }))

  useEffect(() => {
    let cancelled = false

    whenApiReady(() => {
      if (cancelled || !containerRef.current || widgetIdRef.current !== null || !window.grecaptcha) return
      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: (token) => onChangeRef.current(token),
        'expired-callback': () => onChangeRef.current(null),
      })
    })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={containerRef} />
})

export default Recaptcha
