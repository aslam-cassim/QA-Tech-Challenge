import { test, expect } from '@playwright/test';
import { ContactPage } from '../../src/ui/pages/ContactPage';

test.describe('Guest Functionality', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate();
  });

  test('@negative Guest cannot book with invalid email', async () => {
    await contactPage.submitForm({
      name: 'Test User',
      email: 'invalid-email', // Bad format
      phone: '01234567890',
      subject: 'Booking Inquiry',
      message: 'I would like to book a room for next week please.'
    });

    // Verify the error message appears
    await expect(contactPage.errorMessage).toBeVisible();
    await expect(contactPage.errorMessage).toContainText('must be a well-formed email address');
  });

  test('@regression Guest can submit contact form', async () => {
    await contactPage.submitForm({
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '01234567890',
      subject: 'General Inquiry',
      message: 'This is a test message to verify the contact form works.'
    });

    // Verify success
    await expect(contactPage.successMessage).toContainText('Thanks for getting in touch');
  });
});