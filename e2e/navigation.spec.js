import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('la navbar est visible', async ({ page }) => {
    await expect(page.locator('nav')).toBeVisible()
  })

  test('le lien "Projets" dans la nav est présent', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Projets' })).toBeAttached()
  })

  test('le lien "Stack" dans la nav est présent', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Stack' })).toBeAttached()
  })

  test('le lien "Contact" dans la nav est présent', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Contact' })).toBeAttached()
  })

  test('le CTA "Me contacter" est présent dans la nav', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Me contacter' })).toBeAttached()
  })

  test('le bouton "Voir mes projets" scroll vers #projects', async ({ page }) => {
    await page.getByRole('link', { name: 'Voir mes projets' }).click()
    await page.waitForTimeout(800)
    const projectsSection = page.locator('#projects')
    await expect(projectsSection).toBeInViewport({ ratio: 0.1 })
  })

  test('le back-to-top n\'est pas visible au chargement', async ({ page }) => {
    const backToTop = page.locator('.back-top, [aria-label="Haut de page"], [aria-label="Back to top"]')
    if (await backToTop.count() > 0) {
      await expect(backToTop.first()).not.toBeVisible()
    }
  })
})
