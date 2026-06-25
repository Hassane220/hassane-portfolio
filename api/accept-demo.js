const jwt    = require('jsonwebtoken')
const { Resend } = require('resend')

const PORTFOLIO_SECRET      = process.env.PORTFOLIO_SECRET
const TRADINGAI_DEMO_SECRET = process.env.TRADINGAI_DEMO_SECRET

const PROJECT_URLS = {
  'TradingAI — Dashboard de trading': 'https://app.tradingai.dev',
  'TradingAI — Trading dashboard':    'https://app.tradingai.dev',
}

module.exports = async function handler(req, res) {
  const { token } = req.query
  if (!token) return res.status(400).send('Token manquant')

  let payload
  try {
    payload = jwt.verify(token, PORTFOLIO_SECRET)
  } catch {
    return res.status(403).send('Lien invalide ou expiré.')
  }

  const { name, email, project } = payload
  const resend   = new Resend(process.env.RESEND_API_KEY)
  const appUrl   = PROJECT_URLS[project] || 'https://app.tradingai.dev'
  const demoToken = jwt.sign({ email, project, demo: true }, TRADINGAI_DEMO_SECRET, { expiresIn: '10m' })
  const demoLink  = `${appUrl}/demo-login?token=${demoToken}`

  try {
    await resend.emails.send({
      from:    'Hassane Soumahoro <noreply@nxs-solutions.com>',
      to:      email,
      subject: `Accès demo accordé — ${project}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:auto">
          <h2 style="color:#111">Bonjour ${name},</h2>
          <p style="color:#444">Hassane Soumahoro vous donne accès au dashboard <strong>${project}</strong> pour <strong>10 minutes</strong>.</p>
          <a href="${demoLink}"
             style="display:inline-block;margin-top:20px;padding:14px 32px;background:#10b981;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px">
            🚀 Accéder au dashboard
          </a>
          <p style="margin-top:20px;color:#999;font-size:13px">Ce lien expire dans <strong>10 minutes</strong>. Ne le partagez pas.</p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #eee"/>
          <p style="color:#999;font-size:12px">Hassane Soumahoro · hassane-portfolio.vercel.app</p>
        </div>
      `,
    })
  } catch (err) {
    console.error('accept-demo resend error:', err)
  }

  res.setHeader('Content-Type', 'text/html')
  return res.status(200).send(`
    <html><body style="font-family:sans-serif;text-align:center;padding:60px">
      <h2>✅ Accès envoyé</h2>
      <p><strong>${name}</strong> (${email}) a reçu son lien d'accès pour <strong>${project}</strong>.</p>
      <p style="color:#999;font-size:14px">Le lien est valable 10 minutes.</p>
    </body></html>
  `)
}
