import { test, expect } from '@playwright/test'

test.describe('Basculement de langue', () => {
  test.beforeEach(async ({ page }) => {
    await page.context().clearCookies()
    await page.evaluate(() => localStorage.clear())
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('la page démarre en français', async ({ page }) => {
    await expect(page.getByText('Voir mes projets')).toBeVisible()
  })

  test('le toggle EN bascule en anglais', async ({ page }) => {
    await page.getByText('EN').click()
    await expect(page.getByText('View my work')).toBeVisible()
  })

  test('le toggle FR revient en français', async ({ page }) => {
    await page.getByText('EN').click()
    await page.getByText('FR').click()
    await expect(page.getByText('Voir mes projets')).toBeVisible()
  })

  test('la langue est mémorisée après refresh', async ({ page }) => {
    await page.getByText('EN').click()
    await page.reload()
    await page.waitForLoadState('networkidle')
    await expect(page.getByText('View my work')).toBeVisible()
  })

  test('les projets s\'affichent en anglais', async ({ page }) => {
    await page.getByText('EN').click()
    await expect(page.getByText('What I\'ve built.')).toBeVisible()
  })
})
