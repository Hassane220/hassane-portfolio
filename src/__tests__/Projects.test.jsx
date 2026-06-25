import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Projects from '../components/Projects'
import { CONTENT } from '../content.js'

describe('Projects', () => {
  const t = CONTENT.fr
  const onDemo = vi.fn()

  it('affiche le titre de section', () => {
    render(<Projects t={t} lang="fr" onDemo={onDemo} />)
    expect(screen.getByText(t.projects.title)).toBeInTheDocument()
  })

  it('affiche les 4 projets', () => {
    render(<Projects t={t} lang="fr" onDemo={onDemo} />)
    expect(screen.getByText('TradingAI — Dashboard de trading')).toBeInTheDocument()
    expect(screen.getByText('NEXUS — Application métier')).toBeInTheDocument()
    expect(screen.getByText(/SODECA \/ ENERCA/)).toBeInTheDocument()
    expect(screen.getByText(/Traçabilité/)).toBeInTheDocument()
  })

  it('affiche les groupes (personnels + pro)', () => {
    render(<Projects t={t} lang="fr" onDemo={onDemo} />)
    expect(screen.getByText('Projets personnels')).toBeInTheDocument()
    expect(screen.getByText('Expériences professionnelles')).toBeInTheDocument()
  })

  it('affiche les boutons "Demander un accès" pour TradingAI et NEXUS', () => {
    render(<Projects t={t} lang="fr" onDemo={onDemo} />)
    const demoButtons = screen.getAllByText('Demander un accès')
    expect(demoButtons).toHaveLength(2)
  })

  it('appelle onDemo quand on clique sur "Demander un accès"', async () => {
    render(<Projects t={t} lang="fr" onDemo={onDemo} />)
    const buttons = screen.getAllByText('Demander un accès')
    await userEvent.click(buttons[0])
    expect(onDemo).toHaveBeenCalledOnce()
  })

  it('SODECA et Orange n\'ont pas de bouton demo', () => {
    render(<Projects t={t} lang="fr" onDemo={onDemo} />)
    const demoButtons = screen.getAllByText('Demander un accès')
    expect(demoButtons).toHaveLength(2)
  })

  it('affiche les numéros de projet 01 à 04', () => {
    render(<Projects t={t} lang="fr" onDemo={onDemo} />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
  })
})
