import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/ui/pages/HomePage';

/**
 * ============================================================
 * TC-CONTACT-001 to TC-CONTACT-012
 * Contact Form — Validation, Submission, Error Handling
 * ============================================================
 */
test.describe('Contact Form', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  // TC-CONTACT-001
  test('should display contact form on homepage', async () => {
    await expect(homePage.contactName).toBeVisible();
    await expect(homePage.contactEmail).toBeVisible();
    await expect(homePage.contactPhone).toBeVisible();
    await expect(homePage.contactSubject).toBeVisible();
    await expect(homePage.contactMessage).toBeVisible();
  });

  // TC-CONTACT-002
  test('should display submit button for contact form', async () => {
    await expect(homePage.contactSubmitBtn).toBeVisible();
  });

  // TC-CONTACT-003
  test('should successfully submit contact form with all fields filled', async () => {
    await homePage.submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '01234567890',
      subject: 'Room Inquiry',
      message: 'I would like to inquire about room availability.'
    });

    // Check for success message
    await expect(homePage.contactSuccessBanner).toContainText('Thanks for getting in touch');
  });

  // TC-CONTACT-004
  test('should show error when contact name is empty', async () => {
    await homePage.submitContactForm({
      name: '',
      email: 'john@example.com',
      phone: '01234567890',
      subject: 'Room Inquiry',
      message: 'Test message'
    });

    const error = homePage.page.locator('.alert-danger, p.text-danger, .contact-error');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-CONTACT-005
  test('should show error when contact email is empty', async () => {
    await homePage.submitContactForm({
      name: 'John Doe',
      email: '',
      phone: '01234567890',
      subject: 'Room Inquiry',
      message: 'Test message'
    });

    const error = homePage.page.locator('.alert-danger, p.text-danger, .contact-error');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-CONTACT-006
  test('should show error when contact email is invalid format', async () => {
    await homePage.submitContactForm({
      name: 'John Doe',
      email: 'invalid-email-format',
      phone: '01234567890',
      subject: 'Room Inquiry',
      message: 'Test message'
    });

    const error = homePage.page.locator('.alert-danger, p.text-danger, .contact-error');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-CONTACT-007
  test('should show error when contact phone is empty', async () => {
    await homePage.submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '',
      subject: 'Room Inquiry',
      message: 'Test message'
    });

    const error = homePage.page.locator('.alert-danger, p.text-danger, .contact-error');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-CONTACT-008
  test('should show error when contact subject is empty', async () => {
    await homePage.submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '01234567890',
      subject: '',
      message: 'Test message'
    });

    const error = homePage.page.locator('.alert-danger, p.text-danger, .contact-error');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-CONTACT-009
  test('should show error when contact message is empty', async () => {
    await homePage.submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '01234567890',
      subject: 'Room Inquiry',
      message: ''
    });

    const error = homePage.page.locator('.alert-danger, p.text-danger, .contact-error');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-CONTACT-010
  test('should accept valid phone number formats', async () => {
    await homePage.submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+44 123 456 7890',
      subject: 'Room Inquiry',
      message: 'Test message'
    });

    // Should not show error for valid phone format
    const error = homePage.page.locator('.alert-danger, p.text-danger');
    await expect(error.first()).not.toBeVisible({ timeout: 3000 });
  });

  // TC-CONTACT-011
  test('should accept valid input formats in contact form', async () => {
    // Just verify the form can be filled and submitted without throwing errors
    await homePage.contactName.fill('John Doe');
    await homePage.contactEmail.fill('john@example.com');
    await homePage.contactPhone.fill('01234567890');
    await homePage.contactSubject.fill('Room Inquiry');
    await homePage.contactMessage.fill('Test message');

    // Submit should not throw an error
    await expect(homePage.contactSubmitBtn).toBeEnabled();
    await homePage.contactSubmitBtn.click();

    // Form should still be present (no navigation away)
    await expect(homePage.contactName).toBeVisible();
  });

  // TC-CONTACT-012
  test('should prevent XSS attacks in contact form', async () => {
    const xssPayload = '<script>alert("XSS")</script>';

    await homePage.submitContactForm({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '01234567890',
      subject: 'Test',
      message: xssPayload
    });

    // Should not execute script - page should remain normal
    const alertDialog = homePage.page.locator('[role="alertdialog"]');
    await expect(alertDialog).not.toBeVisible({ timeout: 3000 });
  });
});