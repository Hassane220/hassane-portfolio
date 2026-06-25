import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DemoModal from '../components/DemoModal'
import { CONTENT } from '../content.js'

const tradingai = CONTENT.projectData.tradingai

describe('DemoModal — FR', () => {
  it('affiche le titre du projet', () => {
    render(<DemoModal p={tradingai} lang="fr" onClose={vi.fn()} />)
    expect(screen.getByText(/TradingAI/)).toBeInTheDocument()
  })

  it('affiche les champs nom et email', () => {
    render(<DemoModal p={tradingai} lang="fr" onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('jane@company.com')).toBeInTheDocument()
  })

  it('affiche le bouton de soumission', () => {
    render(<DemoModal p={tradingai} lang="fr" onClose={vi.fn()} />)
    expect(screen.getByText('Envoyer la demande')).toBeInTheDocument()
  })

  it('appelle onClose quand on clique sur le backdrop', async () => {
    const onClose = vi.fn()
    render(<DemoModal p={tradingai} lang="fr" onClose={onClose} />)
    await userEvent.click(screen.getByText(/TradingAI/).closest('.modal-back') || document.querySelector('.modal-back'))
    expect(onClose).toHaveBeenCalled()
  })

  it('affiche l\'état "envoyé" après soumission réussie', async () => {
    render(<DemoModal p={tradingai} lang="fr" onClose={vi.fn()} />)
    await userEvent.type(screen.getByPlaceholderText('Jane Doe'), 'Test User')
    await userEvent.type(screen.getByPlaceholderText('jane@company.com'), 'test@test.com')
    await userEvent.click(screen.getByText('Envoyer la demande'))
    await waitFor(() => {
      expect(screen.getByText('Demande envoyée')).toBeInTheDocument()
    })
  })
})

describe('DemoModal — EN', () => {
  it('affiche le bon titre en anglais', () => {
    render(<DemoModal p={tradingai} lang="en" onClose={vi.fn()} />)
    expect(screen.getByText('Request access')).toBeInTheDocument()
  })
})
