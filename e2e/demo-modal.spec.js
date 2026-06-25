import { test, expect } from '@playwright/test'

test.describe('Demo Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('le bouton "Demander un accès" est présent', async ({ page }) => {
    const btn = page.getByText('Demander un accès').first()
    await expect(btn).toBeVisible()
  })

  test('le modal s\'ouvre au clic', async ({ page }) => {
    await page.getByText('Demander un accès').first().click()
    await expect(page.getByPlaceholder('Jane Doe')).toBeVisible()
    await expect(page.getByPlaceholder('jane@company.com')).toBeVisible()
  })

  test('le modal affiche le titre du projet', async ({ page }) => {
    await page.getByText('Demander un accès').first().click()
    await expect(page.getByText(/TradingAI/)).toBeVisible()
  })

  test('le modal se ferme avec le bouton X', async ({ page }) => {
    await page.getByText('Demander un accès').first().click()
    await expect(page.getByPlaceholder('Jane Doe')).toBeVisible()
    await page.getByLabel('Fermer').click()
    await expect(page.getByPlaceholder('Jane Doe')).not.toBeVisible()
  })

  test('le modal se ferme en cliquant sur le backdrop', async ({ page }) => {
    await page.getByText('Demander un accès').first().click()
    await expect(page.getByPlaceholder('Jane Doe')).toBeVisible()
    await page.locator('.modal-back').click({ position: { x: 10, y: 10 } })
    await expect(page.getByPlaceholder('Jane Doe')).not.toBeVisible()
  })

  test('le formulaire valide les champs requis', async ({ page }) => {
    await page.getByText('Demander un accès').first().click()
    await page.getByText('Envoyer la demande').click()
    await expect(page.getByPlaceholder('Jane Doe')).toBeVisible()
  })
})
