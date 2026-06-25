import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'
import { CONTENT } from '../content.js'

describe('Hero — FR', () => {
  const t = CONTENT.fr

  it('affiche le prénom et le nom', () => {
    render(<Hero t={t} lang="fr" />)
    expect(screen.getByText('Soumahoro')).toBeInTheDocument()
    expect(screen.getByText('Hassane')).toBeInTheDocument()
  })

  it('affiche la localisation dans la pill', () => {
    const { container } = render(<Hero t={t} lang="fr" />)
    expect(container.textContent).toContain('Abidjan')
    expect(container.textContent).toContain('Cocody')
  })

  it('affiche le bouton CTA principal', () => {
    render(<Hero t={t} lang="fr" />)
    expect(screen.getByText(t.hero.ctaPrimary)).toBeInTheDocument()
  })

  it('affiche le bouton CV', () => {
    render(<Hero t={t} lang="fr" />)
    expect(screen.getByText(t.hero.ctaCv)).toBeInTheDocument()
  })

  it('affiche le lien Email', () => {
    render(<Hero t={t} lang="fr" />)
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('affiche les 4 labels de stats', () => {
    render(<Hero t={t} lang="fr" />)
    expect(screen.getByText("Années d'expérience")).toBeInTheDocument()
    expect(screen.getByText('Projets livrés')).toBeInTheDocument()
    expect(screen.getByText('Entreprises clientes')).toBeInTheDocument()
    expect(screen.getByText('Mis en production')).toBeInTheDocument()
  })

  it('le lien email pointe vers la bonne adresse', () => {
    render(<Hero t={t} lang="fr" />)
    const emailLink = screen.getByText('Email').closest('a')
    expect(emailLink).toHaveAttribute('href', `mailto:${CONTENT.social.email}`)
  })
})

describe('Hero — EN', () => {
  const t = CONTENT.en

  it('affiche le bon CTA en anglais', () => {
    const { container } = render(<Hero t={t} lang="en" />)
    expect(container.textContent).toContain(t.hero.ctaPrimary)
    expect(container.textContent).toContain(t.hero.ctaCv)
  })

  it('affiche la localisation anglaise', () => {
    const { container } = render(<Hero t={t} lang="en" />)
    expect(container.textContent).toContain('Ivory Coast')
  })

  it('affiche les labels de stats en anglais', () => {
    render(<Hero t={t} lang="en" />)
    expect(screen.getByText('Years of experience')).toBeInTheDocument()
    expect(screen.getByText('Projects shipped')).toBeInTheDocument()
  })
})
