import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

beforeEach(() => {
  localStorage.clear()
})

describe('App', () => {
  it('se monte sans erreur', () => {
    render(<App />)
    expect(document.body).toBeInTheDocument()
  })

  it('affiche le nom complet dans le hero', () => {
    render(<App />)
    const hero = document.querySelector('#hero')
    expect(hero.textContent).toContain('Soumahoro')
    expect(hero.textContent).toContain('Hassane')
  })

  it('affiche toutes les sections principales', () => {
    render(<App />)
    expect(document.querySelector('#hero')).toBeInTheDocument()
    expect(document.querySelector('#projects')).toBeInTheDocument()
    expect(document.querySelector('#skills')).toBeInTheDocument()
    expect(document.querySelector('#contact')).toBeInTheDocument()
  })

  it('démarre en français par défaut', () => {
    render(<App />)
    expect(screen.getByText('Voir mes projets')).toBeInTheDocument()
  })

  it('bascule en anglais via le toggle', async () => {
    render(<App />)
    const toggle = screen.getByText('EN')
    await userEvent.click(toggle)
    expect(screen.getByText('View my work')).toBeInTheDocument()
  })

  it('la langue est persistée en localStorage', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('EN'))
    expect(localStorage.getItem('ptf_lang')).toBe('en')
  })

  it('ouvre le DemoModal quand on clique sur "Demander un accès"', async () => {
    render(<App />)
    const demoButtons = screen.getAllByText('Demander un accès')
    await userEvent.click(demoButtons[0])
    expect(screen.getByPlaceholderText('Jane Doe')).toBeInTheDocument()
  })

  it('ferme le DemoModal avec le bouton X', async () => {
    render(<App />)
    await userEvent.click(screen.getAllByText('Demander un accès')[0])
    await userEvent.click(screen.getByLabelText('Fermer'))
    expect(screen.queryByPlaceholderText('Jane Doe')).not.toBeInTheDocument()
  })
})
