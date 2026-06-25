import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from '../components/Skills'
import { CONTENT } from '../content.js'

describe('Skills', () => {
  it('affiche le kicker et le titre', () => {
    render(<Skills t={CONTENT.fr} lang="fr" />)
    expect(screen.getByText(CONTENT.fr.skills.kicker)).toBeInTheDocument()
    expect(screen.getByText(CONTENT.fr.skills.title)).toBeInTheDocument()
  })

  it('affiche les 4 catégories en FR', () => {
    render(<Skills t={CONTENT.fr} lang="fr" />)
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('Bases de données')).toBeInTheDocument()
    expect(screen.getByText('DevOps & Outils')).toBeInTheDocument()
  })

  it('affiche les 4 catégories en EN', () => {
    render(<Skills t={CONTENT.en} lang="en" />)
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('Databases')).toBeInTheDocument()
    expect(screen.getByText('DevOps & Tools')).toBeInTheDocument()
  })

  it('affiche les technologies clés', () => {
    render(<Skills t={CONTENT.fr} lang="fr" />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
  })
})
