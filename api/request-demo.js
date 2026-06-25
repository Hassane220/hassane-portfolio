import jwt from 'jsonwebtoken'
import { Resend } from 'resend'

const PORTFOLIO_SECRET = process.env.PORTFOLIO_SECRET
const HASSANE_EMAIL    = 'hassanesoumahoro6@gmail.com'
const resend           = new Resend(process.env.RESEND_API_KEY)
const BASE_URL         = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, project } = req.body
  if (!name || !email || !project) return res.status(400).json({ error: 'Champs manquants' })

  // Token signé valable 24h — contient toutes les infos de la demande
  const requestToken = jwt.sign(
    { name, email, project },
    PORTFOLIO_SECRET,
    { expiresIn: '24h' }
  )

  const acceptUrl = `${BASE_URL}/api/accept-demo?token=${requestToken}`

  await resend.emails.send({
    from: 'Portfolio <noreply@nxs-solutions.com>',
    to:   HASSANE_EMAIL,
    subject: `Demande d'accès demo — ${project}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:auto">
        <h2 style="color:#111">Nouvelle demande d'accès</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 0;color:#666">Nom</td><td><strong>${name}</strong></td></tr>
          <tr><td style="padding:6px 0;color:#666">Email</td><td><strong>${email}</strong></td></tr>
          <tr><td style="padding:6px 0;color:#666">Projet</td><td><strong>${project}</strong></td></tr>
        </table>
        <a href="${acceptUrl}"
           style="display:inline-block;margin-top:24px;padding:12px 28px;background:#7c3aed;color:#fff;border-radius:8px;text-decoration:none;font-weight:600">
          ✅ Accepter la demande
        </a>
        <p style="margin-top:16px;color:#999;font-size:13px">Lien valable 24h</p>
      </div>
    `,
  })

  return res.status(200).json({ ok: true })
}
