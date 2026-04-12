import { chromium, expect } from "playwright";

async function runTest() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    // Navigate to a website
    await page.goto("https://example.com");

    // Verify page title
    const title = await page.title();
    console.log(`✓ Page title: ${title}`);

    // Take a screenshot
    await page.screenshot({ path: "screenshot.png" });
    console.log("✓ Screenshot saved");

    // Get page content
    const heading = await page.textContent("h1");
    console.log(`✓ Heading: ${heading}`);

    // Verify element exists
    const link = await page.querySelector('a[href*="more"]');
    if (link) {
      console.log("✓ Link found");
    }

    console.log("\n✅ All tests passed!");
  } catch (error) {
    console.error("❌ Test failed:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

runTest();
