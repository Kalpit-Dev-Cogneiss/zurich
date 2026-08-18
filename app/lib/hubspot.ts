import type { ContactLead } from '@/app/lib/emailTemplates'

/** Turns a URL pathname into a "Website - <Page>" label for the HubSpot lead_source property. */
export function formatLeadSource(pathname: string) {
  const clean = (pathname || '/').split('?')[0].split('#')[0]
  if (clean === '/' || clean === '') return 'Website - Home'

  const label = clean
    .split('/')
    .filter(Boolean)
    .join(' ')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

  return `Website - ${label}`
}

/** Pushes a lead into HubSpot as a Contact, creating or updating by email in one call. */
export async function upsertHubspotContact(lead: ContactLead) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN
  if (!token) throw new Error('HubSpot is not configured — missing HUBSPOT_ACCESS_TOKEN')

  const messageProperty = process.env.HUBSPOT_MESSAGE_PROPERTY || 'message'
  const [firstname, ...rest] = lead.name.trim().split(/\s+/)
  const lastname = rest.join(' ')

  const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: [
        {
          idProperty: 'email',
          id: lead.email,
          properties: {
            email: lead.email,
            firstname,
            ...(lastname ? { lastname } : {}),
            ...(lead.phone ? { phone: lead.phone } : {}),
            ...(lead.source ? { lead_source: lead.source } : {}),
            [messageProperty]: lead.message,
          },
        },
      ],
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`HubSpot upsert failed (${res.status}): ${body}`)
  }
}
