import { NextRequest, NextResponse } from 'next/server'
import { getTransporter } from '@/app/lib/mailer'
import { contactAutoReplyEmail, contactNotificationEmail } from '@/app/lib/emailTemplates'
import { formatLeadSource, upsertHubspotContact } from '@/app/lib/hubspot'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const name = String(data.get('name') || '').trim()
  const email = String(data.get('email') || '').trim()
  const phone = String(data.get('phone') || '').trim()
  const message = String(data.get('message') || '').trim()
  const page = String(data.get('page') || '').trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }

  const lead = { name, email, phone, message, source: formatLeadSource(page) }
  const fromAddress = process.env.SMTP_USER!
  const toAddress = process.env.CONTACT_TO_EMAIL || fromAddress

  const hubspotResult = upsertHubspotContact(lead).catch((error) => {
    console.error('HubSpot contact upsert failed:', error)
  })

  try {
    const transporter = getTransporter()
    const notification = contactNotificationEmail(lead)
    const autoReply = contactAutoReplyEmail(lead)

    await Promise.all([
      transporter.sendMail({
        from: `"Zurich Graphics — Website" <${fromAddress}>`,
        to: toAddress,
        replyTo: email,
        subject: notification.subject,
        html: notification.html,
        text: notification.text,
      }),
      transporter.sendMail({
        from: `"Zurich Graphics" <${fromAddress}>`,
        to: email,
        subject: autoReply.subject,
        html: autoReply.html,
        text: autoReply.text,
      }),
    ])

    await hubspotResult
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form email failed:', error)
    return NextResponse.json({ error: 'Could not send your message. Please try again.' }, { status: 500 })
  }
}
