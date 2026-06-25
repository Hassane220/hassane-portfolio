import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from '../components/Contact'
import { CONTENT } from '../content.js'

describe('Contact', () => {
  it('affiche le titre de section', () => {
    render(<Contact t={CONTENT.fr} lang="fr" styleKey="aurora" />)
    expect(screen.getByText(CONTENT.fr.contact.title)).toBeInTheDocument()
  })

  it('affiche le lien email', () => {
    render(<Contact t={CONTENT.fr} lang="fr" styleKey="aurora" />)
    const links = screen.getAllByText(CONTENT.social.email)
    expect(links.length).toBeGreaterThan(0)
  })

  it('affiche le numéro de téléphone', () => {
    render(<Contact t={CONTENT.fr} lang="fr" styleKey="aurora" />)
    expect(screen.getByText(CONTENT.social.phone)).toBeInTheDocument()
  })

  it('affiche le bouton CTA email', () => {
    render(<Contact t={CONTENT.fr} lang="fr" styleKey="aurora" />)
    expect(screen.getByText(CONTENT.fr.contact.cta)).toBeInTheDocument()
  })

  it('le lien email pointe vers la bonne adresse', () => {
    render(<Contact t={CONTENT.fr} lang="fr" styleKey="aurora" />)
    const emailLink = screen.getByRole('link', { name: /Envoyer un email/i })
    expect(emailLink).toHaveAttribute('href', `mailto:${CONTENT.social.email}`)
  })

  it('affiche "Disponible partout dans le monde" (globe caption)', () => {
    render(<Contact t={CONTENT.fr} lang="fr" styleKey="aurora" />)
    expect(screen.getByText('Disponible partout dans le monde')).toBeInTheDocument()
  })

  it('affiche la version anglaise correctement', () => {
    render(<Contact t={CONTENT.en} lang="en" styleKey="aurora" />)
    expect(screen.getByText(CONTENT.en.contact.title)).toBeInTheDocument()
    expect(screen.getByText('Available worldwide')).toBeInTheDocument()
  })
})
