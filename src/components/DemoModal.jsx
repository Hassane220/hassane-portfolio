import { useState } from 'react'
import { X } from 'lucide-react'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function DemoModal({ p, lang, onClose }) {
  const [name, setName]     = useState('')
  const [email, setEmail]   = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent]     = useState(false)
  const [error, setError]   = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/request-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, project: p.title[lang] }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError(lang === 'fr' ? 'Erreur, réessaie.' : 'Error, please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Fermer">
          <X size={20} />
        </button>
        {sent ? (
          <div className="sent">
            <div className="check">✓</div>
            <h3>{lang === 'fr' ? 'Demande envoyée' : 'Request sent'}</h3>
            <p>
              {lang === 'fr'
                ? 'Je vous recontacte avec un accès sous 24h.'
                : "I'll get back to you with access within 24h."}
            </p>
          </div>
        ) : (
          <>
            <h3>{lang === 'fr' ? 'Demander un accès' : 'Request access'}</h3>
            <p>
              {p.title[lang]} —{' '}
              {lang === 'fr'
                ? "indiquez votre email, je vous envoie un accès de démonstration."
                : "leave your email and I'll send you a demo access."}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>{lang === 'fr' ? 'Votre nom' : 'Your name'}</label>
                <input
                  required
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  required
                  type="email"
                  placeholder="jane@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {error && (
                <p style={{ color: '#ef4444', fontSize: 13, margin: '4px 0 0' }}>{error}</p>
              )}
              <button
                className="btn btn-primary"
                type="submit"
                disabled={loading}
                style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
              >
                {loading
                  ? (lang === 'fr' ? 'Envoi…' : 'Sending…')
                  : (lang === 'fr' ? 'Envoyer la demande' : 'Send request')}
                {!loading && <ArrowIcon />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
