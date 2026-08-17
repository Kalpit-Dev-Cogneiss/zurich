export type ContactLead = {
  name: string
  email: string
  phone?: string
  message: string
}

const BRAND = {
  name: 'Zurich Graphics',
  site: 'https://zurichgraphics.com',
  logoUrl: 'https://zurichgraphics.com/zurich-logo-White.svg',
  black: '#0a0a0a',
  white: '#ffffff',
  muted: '#8a8a8a',
  hairline: '#232323',
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function shell(bodyHtml: string, preheader: string) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="dark light" />
<title>${BRAND.name}</title>
</head>
<body style="margin:0; padding:0; background:#000000; -webkit-text-size-adjust:100%;">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#000000;">
    <tr>
      <td align="center" style="padding: 48px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background:${BRAND.black};">
          ${bodyHtml}
        </table>
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">
          <tr>
            <td style="padding: 28px 8px 0; font-family: Helvetica, Arial, sans-serif; font-size: 11px; letter-spacing: 0.08em; color: ${BRAND.muted}; text-align:center; text-transform:uppercase;">
              ${BRAND.name} &middot; Branding, Brochures &amp; Exhibition Design
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function header(eyebrow: string) {
  return `
  <tr>
    <td style="padding: 44px 48px 0;">
      <img src="${BRAND.logoUrl}" alt="${BRAND.name}" width="132" height="auto" style="display:block; border:0; outline:none;" />
    </td>
  </tr>
  <tr>
    <td style="padding: 40px 48px 0;">
      <span style="display:inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: ${BRAND.muted};">
        ${escapeHtml(eyebrow)}
      </span>
    </td>
  </tr>`
}

function footerCta(label: string, href: string) {
  return `
  <tr>
    <td style="padding: 40px 48px 4px;">
      <table role="presentation" cellpadding="0" cellspacing="0">
        <tr>
          <td style="background:${BRAND.white}; border-radius: 2px;">
            <a href="${href}" style="display:inline-block; padding: 16px 32px; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: ${BRAND.black}; text-decoration: none;">
              ${escapeHtml(label)}
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>`
}

function field(label: string, value: string) {
  return `
  <tr>
    <td style="padding: 18px 48px; border-top: 1px solid ${BRAND.hairline};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td width="120" valign="top" style="font-family: Helvetica, Arial, sans-serif; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: ${BRAND.muted}; padding-right: 16px;">
            ${escapeHtml(label)}
          </td>
          <td valign="top" style="font-family: Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6; color: ${BRAND.white};">
            ${value}
          </td>
        </tr>
      </table>
    </td>
  </tr>`
}

/** Internal lead-alert sent to the studio inbox when the contact form is submitted. */
export function contactNotificationEmail(lead: ContactLead) {
  const name = escapeHtml(lead.name)
  const email = escapeHtml(lead.email)
  const phone = lead.phone ? escapeHtml(lead.phone) : '—'
  const messageHtml = escapeHtml(lead.message).replace(/\n/g, '<br />')

  const body = `
  ${header('New Website Enquiry')}
  <tr>
    <td style="padding: 20px 48px 0;">
      <h1 style="margin:0; font-family: Helvetica, Arial, sans-serif; font-size: 26px; line-height: 1.3; font-weight: 700; color: ${BRAND.white};">
        ${name} wants to talk.
      </h1>
    </td>
  </tr>
  <tr><td style="padding-top: 28px;"></td></tr>
  ${field('Name', name)}
  ${field('Email', `<a href="mailto:${email}" style="color:${BRAND.white}; text-decoration: underline;">${email}</a>`)}
  ${field('Phone', phone === '—' ? phone : `<a href="tel:${phone}" style="color:${BRAND.white}; text-decoration: underline;">${phone}</a>`)}
  ${field('Project', messageHtml)}
  ${footerCta('Reply to ' + lead.name.split(' ')[0], `mailto:${email}`)}
  <tr><td style="padding-top: 44px;"></td></tr>`

  return {
    subject: `New enquiry: ${lead.name}`,
    html: shell(body, `${lead.name} submitted the contact form on zurichgraphics.com`),
    text: `New website enquiry\n\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone || '—'}\n\n${lead.message}`,
  }
}

/** Branded confirmation sent back to the person who submitted the form. */
export function contactAutoReplyEmail(lead: ContactLead) {
  const firstName = escapeHtml(lead.name.split(' ')[0] || lead.name)

  const body = `
  ${header('Thank You')}
  <tr>
    <td style="padding: 20px 48px 0;">
      <h1 style="margin:0; font-family: Helvetica, Arial, sans-serif; font-size: 28px; line-height: 1.35; font-weight: 700; color: ${BRAND.white};">
        We've got it, ${firstName}.
      </h1>
    </td>
  </tr>
  <tr>
    <td style="padding: 20px 48px 0;">
      <p style="margin:0; font-family: Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.75; color: ${BRAND.muted};">
        Thanks for reaching out to ${BRAND.name}. Your message has landed with our team and
        a strategist will get back to you within one business day to take the conversation forward.
      </p>
    </td>
  </tr>
  <tr><td style="padding-top: 32px;"></td></tr>
  <tr>
    <td style="padding: 0 48px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top: 1px solid ${BRAND.hairline}; border-bottom: 1px solid ${BRAND.hairline};">
        <tr>
          <td style="padding: 22px 0; font-family: Helvetica, Arial, sans-serif; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: ${BRAND.muted};">
            What you told us
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 22px; font-family: Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.75; color: ${BRAND.white}; white-space: pre-wrap;">
            ${escapeHtml(lead.message).replace(/\n/g, '<br />')}
          </td>
        </tr>
      </table>
    </td>
  </tr>
  ${footerCta('Visit Our Portfolio', `${BRAND.site}/portfolio`)}
  <tr>
    <td style="padding: 28px 48px 0;">
      <p style="margin:0; font-family: Helvetica, Arial, sans-serif; font-size: 13px; line-height: 1.7; color: ${BRAND.muted};">
        In a hurry? Just reply to this email — it comes straight to our team.
      </p>
    </td>
  </tr>
  <tr><td style="padding-top: 44px;"></td></tr>`

  return {
    subject: `We've received your enquiry, ${firstName}`,
    html: shell(body, `Thanks for contacting ${BRAND.name} — we'll be in touch within one business day.`),
    text: `Hi ${firstName},\n\nThanks for reaching out to ${BRAND.name}. Your message has landed with our team and a strategist will get back to you within one business day.\n\nWhat you told us:\n${lead.message}\n\n— ${BRAND.name}`,
  }
}
