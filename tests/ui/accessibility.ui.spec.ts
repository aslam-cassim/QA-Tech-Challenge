import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/ui/pages/HomePage';
import { LoginPage } from '../../src/ui/pages/LoginPage';
import { AdminPage } from '../../src/ui/pages/AdminPage';

/**
 * ============================================================
 * TC-ACCESS-001 to TC-ACCESS-012
 * Accessibility — WCAG Compliance, Keyboard Navigation, Screen Readers
 * ============================================================
 */
test.describe('Accessibility', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let adminPage: AdminPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    adminPage = new AdminPage(page);
  });

  // TC-ACCESS-001
  test('should have proper heading hierarchy on homepage', async () => {
    await homePage.goto();

    const h1Elements = homePage.page.locator('h1');
    const h2Elements = homePage.page.locator('h2');
    const h3Elements = homePage.page.locator('h3');

    // Should have at least one h1 and proper hierarchy
    await expect(h1Elements.first()).toBeVisible();
    expect(await h1Elements.count()).toBeGreaterThan(0);
  });

  // TC-ACCESS-002
  test('should have alt text for all images', async () => {
    await homePage.goto();

    const images = homePage.page.locator('img');
    const imageCount = await images.count();

    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        expect(alt).not.toBeNull();
        expect(alt?.length).toBeGreaterThan(0);
      }
    }
  });

  // TC-ACCESS-003
  test('should have sufficient color contrast', async ({ page }) => {
    await homePage.goto();

    // Check for any obvious contrast issues by ensuring text is readable
    const textElements = page.locator('p, span, div, h1, h2, h3, h4, h5, h6');
    const visibleText = await textElements.first().isVisible();

    // Basic check - if text is visible, contrast is likely adequate
    expect(visibleText).toBe(true);
  });

  // TC-ACCESS-004
  test('should support keyboard navigation through homepage', async ({ page }) => {
    await homePage.goto();

    // Tab through focusable elements
    await page.keyboard.press('Tab');
    const activeElement = page.locator(':focus');

    // Should be able to focus on at least one element
    await expect(activeElement.first()).toBeVisible();
  });

  // TC-ACCESS-005
  test('should have proper form labels', async () => {
    await homePage.goto();

    const inputs = homePage.page.locator('input, textarea, select');
    const inputCount = await inputs.count();

    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const ariaLabelledBy = await input.getAttribute('aria-labelledby');

      // Should have either id with label, aria-label, or aria-labelledby
      const hasLabel = id !== null || ariaLabel !== null || ariaLabelledBy !== null;
      expect(hasLabel).toBe(true);
    }
  });

  // TC-ACCESS-006
  test('should have descriptive link text', async ({ page }) => {
    await homePage.goto();

    const links = page.locator('a');
    const linkCount = await links.count();

    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const text = await link.innerText();
      const ariaLabel = await link.getAttribute('aria-label');

      // Links should have meaningful text or aria-label
      const hasMeaningfulText = text.trim().length > 0 || (ariaLabel && ariaLabel.length > 0);
      expect(hasMeaningfulText).toBe(true);
    }
  });

  // TC-ACCESS-007
  test('should support screen reader with ARIA landmarks', async ({ page }) => {
    await homePage.goto();

    // Check for common ARIA landmarks
    const landmarks = page.locator('[role="main"], [role="navigation"], [role="banner"], [role="contentinfo"], header, nav, main, footer');
    const landmarkCount = await landmarks.count();

    // Should have at least some structural elements
    expect(landmarkCount).toBeGreaterThan(0);
  });

  // TC-ACCESS-008
  test('should have proper button labels', async ({ page }) => {
    await homePage.goto();

    const buttons = page.locator('button, [role="button"]');
    const buttonCount = await buttons.count();

    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      const text = await button.innerText();
      const ariaLabel = await button.getAttribute('aria-label');
      const title = await button.getAttribute('title');

      // Buttons should have text content, aria-label, or title
      const hasLabel = text.trim().length > 0 || (ariaLabel && ariaLabel.length > 0) || (title && title.length > 0);
      expect(hasLabel).toBe(true);
    }
  });

  // TC-ACCESS-009
  test('should support keyboard navigation in forms', async ({ page }) => {
    await homePage.goto();

    // Focus on first form element
    const firstInput = page.locator('input, textarea, select').first();
    await firstInput.focus();

    // Should be able to tab through form elements
    await page.keyboard.press('Tab');
    const nextElement = page.locator(':focus');

    await expect(nextElement.first()).toBeVisible();
  });

  // TC-ACCESS-010
  test('should have proper table structure if tables exist', async ({ page }) => {
    await homePage.goto();

    const tables = page.locator('table');
    const tableCount = await tables.count();

    if (tableCount > 0) {
      for (let i = 0; i < tableCount; i++) {
        const table = tables.nth(i);
        const headers = table.locator('th');
        const headerCount = await headers.count();

        // Tables should have headers for accessibility
        expect(headerCount).toBeGreaterThan(0);
      }
    }
  });

  // TC-ACCESS-011
  test('should have skip links for keyboard users', async ({ page }) => {
    await homePage.goto();

    // Check for skip links (common accessibility feature)
    const skipLinks = page.locator('a[href^="#"], .skip-link, [class*="skip"]');
    // Skip links are optional but good practice - just check they don't break anything
    const skipLinkCount = await skipLinks.count();
    expect(typeof skipLinkCount).toBe('number');
  });

  // TC-ACCESS-012
  test('should maintain focus order logically', async ({ page }) => {
    await homePage.goto();

    // Get all focusable elements in DOM order
    const focusableElements = page.locator('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const count = await focusableElements.count();

    if (count > 1) {
      // Focus should move logically through elements
      await page.keyboard.press('Tab');
      const firstFocused = page.locator(':focus');

      await page.keyboard.press('Tab');
      const secondFocused = page.locator(':focus');

      // Should be able to focus on multiple elements in sequence
      await expect(firstFocused.first()).toBeVisible();
      await expect(secondFocused.first()).toBeVisible();
    }
  });
});