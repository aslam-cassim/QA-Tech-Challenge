import { chromium } from 'playwright';

async function testContactFormSubmission() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Navigating to contact form...');
    await page.goto('https://automationintesting.online/');
    await page.waitForLoadState('networkidle');

    // Fill out the contact form
    console.log('Filling contact form...');
    await page.locator('input[data-testid="ContactName"]').fill('Test User');
    await page.locator('input[data-testid="ContactEmail"]').fill('test@example.com');
    await page.locator('input[data-testid="ContactPhone"]').fill('01234567890');
    await page.locator('input[data-testid="ContactSubject"]').fill('Test Subject');
    await page.locator('textarea[data-testid="ContactDescription"]').fill('This is a test message.');

    // Submit the form
    console.log('Submitting form...');
    await page.locator('button:has-text("Submit")').click();

    // Wait a bit for any response
    await page.waitForTimeout(3000);

    // Look for success/error messages
    console.log('Looking for success/error messages...');

    // Check for various possible success message selectors
    const possibleSelectors = [
      'div.contact h2',
      '.alert-success',
      '.success',
      '[class*="success"]',
      'h2',
      '.contact h2',
      'div h2'
    ];

    for (const selector of possibleSelectors) {
      try {
        const element = page.locator(selector);
        const count = await element.count();
        if (count > 0) {
          const text = await element.first().textContent();
          console.log(`Found element with selector "${selector}": "${text}"`);
        }
      } catch (e) {
        // Ignore errors for selectors that don't exist
      }
    }

    // Look for any alert messages
    const alerts = page.locator('.alert, [class*="alert"]');
    const alertCount = await alerts.count();
    console.log(`Found ${alertCount} alert elements`);

    for (let i = 0; i < alertCount; i++) {
      const alert = alerts.nth(i);
      const text = await alert.textContent();
      const className = await alert.getAttribute('class');
      console.log(`Alert ${i}: class="${className}" text="${text}"`);
    }

    // Check the entire page for "Thanks" text
    const thanksElements = page.locator('text=/Thanks|Success|Thank you/i');
    const thanksCount = await thanksElements.count();
    console.log(`Found ${thanksCount} elements containing "Thanks", "Success", or "Thank you"`);

    for (let i = 0; i < thanksCount; i++) {
      const element = thanksElements.nth(i);
      const text = await element.textContent();
      const tagName = await element.evaluate(el => el.tagName);
      console.log(`Thanks element ${i}: <${tagName}> "${text}"`);
    }

    // Take screenshot after submission
    await page.screenshot({ path: 'contact-form-after-submit.png', fullPage: true });
    console.log('Screenshot saved as contact-form-after-submit.png');

    // Keep browser open for manual inspection
    console.log('Browser is open for manual inspection. Press Ctrl+C to exit.');
    await new Promise(() => {}); // Keep running

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

testContactFormSubmission();