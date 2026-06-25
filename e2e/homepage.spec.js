import { test, expect } from '@playwright/test'

test.describe('Homepage — chargement', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('la page se charge sans erreur JS', async ({ page }) => {
    const errors = []
    page.on('pageerror', (err) => errors.push(err.message))
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    expect(errors).toHaveLength(0)
  })

  test('le titre du document est correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Soumahoro|Hassane|Portfolio/)
  })

  test('la section hero est visible', async ({ page }) => {
    await expect(page.locator('#hero')).toBeVisible()
  })

  test('la section projets est présente', async ({ page }) => {
    await expect(page.locator('#projects')).toBeAttached()
  })

  test('la section skills est présente', async ({ page }) => {
    await expect(page.locator('#skills')).toBeAttached()
  })

  test('la section contact est présente', async ({ page }) => {
    await expect(page.locator('#contact')).toBeAttached()
  })

  test('le nom "Soumahoro" apparaît dans le hero', async ({ page }) => {
    await expect(page.getByText('Soumahoro')).toBeVisible()
  })

  test('le nom "Hassane" apparaît dans le hero', async ({ page }) => {
    await expect(page.getByText('Hassane')).toBeVisible()
  })
})
