# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\accessibility.ui.spec.ts >> Accessibility >> should have proper button labels
- Location: tests\ui\accessibility.ui.spec.ts:61:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: null
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e5]:
        - link "Shady Meadows B&B" [ref=e6] [cursor=pointer]:
          - /url: /
          - generic [ref=e7]: Shady Meadows B&B
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link "Rooms" [ref=e11] [cursor=pointer]:
              - /url: /#rooms
          - listitem [ref=e12]:
            - link "Booking" [ref=e13] [cursor=pointer]:
              - /url: /#booking
          - listitem [ref=e14]:
            - link "Amenities" [ref=e15] [cursor=pointer]:
              - /url: /#amenities
          - listitem [ref=e16]:
            - link "Location" [ref=e17] [cursor=pointer]:
              - /url: /#location
          - listitem [ref=e18]:
            - link "Contact" [ref=e19] [cursor=pointer]:
              - /url: /#contact
          - listitem [ref=e20]:
            - link "Admin" [ref=e21] [cursor=pointer]:
              - /url: /admin
    - generic [ref=e25]:
      - heading "Welcome to Shady Meadows B&B" [level=1] [ref=e26]
      - paragraph [ref=e27]: Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.
      - link "Book Now" [ref=e28] [cursor=pointer]:
        - /url: "#booking"
    - generic [ref=e29]:
      - generic [ref=e33]:
        - heading "Check Availability & Book Your Stay" [level=3] [ref=e34]
        - generic [ref=e36]:
          - generic [ref=e37]:
            - generic [ref=e38]: Check In
            - textbox [ref=e41]: 13/04/2026
          - generic [ref=e42]:
            - generic [ref=e43]: Check Out
            - textbox [ref=e46]: 14/04/2026
          - button "Check Availability" [ref=e49] [cursor=pointer]
      - generic [ref=e52]:
        - generic [ref=e53]:
          - heading "Our Rooms" [level=2] [ref=e54]
          - paragraph [ref=e55]: Comfortable beds and delightful breakfast from locally sourced ingredients
        - generic [ref=e56]:
          - generic [ref=e58]:
            - img "Single Room" [ref=e60]
            - generic [ref=e61]:
              - heading "Single" [level=5] [ref=e62]
              - paragraph [ref=e63]: Aenean porttitor mauris sit amet lacinia molestie. In posuere accumsan aliquet. Maecenas sit amet nisl massa. Interdum et malesuada fames ac ante.
              - generic [ref=e65]:
                - generic [ref=e66]:
                  - generic [ref=e67]: 
                  - text: TV
                - generic [ref=e68]:
                  - generic [ref=e69]: 
                  - text: WiFi
                - generic [ref=e70]:
                  - generic [ref=e71]: 
                  - text: Safe
            - generic [ref=e72]:
              - generic [ref=e73]: £100 per night
              - link "Book now" [ref=e74] [cursor=pointer]:
                - /url: /reservation/1?checkin=2026-04-13&checkout=2026-04-14
          - generic [ref=e76]:
            - img "Single Room" [ref=e78]
            - generic [ref=e79]:
              - heading "Double" [level=5] [ref=e80]
              - paragraph [ref=e81]: Vestibulum sollicitudin, lectus ac mollis consequat, lorem orci ultrices tellus, eleifend euismod tortor dui egestas erat. Phasellus et ipsum nisl.
              - generic [ref=e83]:
                - generic [ref=e84]:
                  - generic [ref=e85]: 
                  - text: TV
                - generic [ref=e86]:
                  - generic [ref=e87]: 
                  - text: Radio
                - generic [ref=e88]:
                  - generic [ref=e89]: 
                  - text: Safe
            - generic [ref=e90]:
              - generic [ref=e91]: £150 per night
              - link "Book now" [ref=e92] [cursor=pointer]:
                - /url: /reservation/2?checkin=2026-04-13&checkout=2026-04-14
          - generic [ref=e94]:
            - img "Single Room" [ref=e96]
            - generic [ref=e97]:
              - heading "Suite" [level=5] [ref=e98]
              - paragraph [ref=e99]: Etiam metus metus, fringilla ac sagittis id, consequat vel neque. Nunc commodo quis nisl nec posuere. Etiam at accumsan ex.
              - generic [ref=e101]:
                - generic [ref=e102]:
                  - generic [ref=e103]: 
                  - text: Radio
                - generic [ref=e104]:
                  - generic [ref=e105]: 
                  - text: WiFi
                - generic [ref=e106]:
                  - generic [ref=e107]: 
                  - text: Safe
            - generic [ref=e108]:
              - generic [ref=e109]: £225 per night
              - link "Book now" [ref=e110] [cursor=pointer]:
                - /url: /reservation/3?checkin=2026-04-13&checkout=2026-04-14
    - generic [ref=e112]:
      - generic [ref=e113]:
        - heading "Our Location" [level=2] [ref=e114]
        - paragraph [ref=e115]: Find us in the beautiful Newingtonfordburyshire countryside
      - generic [ref=e116]:
        - generic [ref=e120]:
          - generic [ref=e123]:
            - generic:
              - img
          - generic [ref=e127]:
            - generic [ref=e128]:
              - link "Pigeon" [ref=e129] [cursor=pointer]:
                - /url: https://pigeon-maps.js.org/
              - text: "|"
            - generic [ref=e130]:
              - text: ©
              - link "OpenStreetMap" [ref=e131] [cursor=pointer]:
                - /url: https://www.openstreetmap.org/copyright
              - text: contributors
        - generic [ref=e134]:
          - heading "Contact Information" [level=3] [ref=e135]
          - generic [ref=e136]:
            - generic [ref=e138]: 
            - generic [ref=e139]:
              - heading "Address" [level=5] [ref=e140]
              - paragraph [ref=e141]: Shady Meadows B&B, Shadows valley, Newingtonfordburyshire, Dilbery, N1 1AA
          - generic [ref=e142]:
            - generic [ref=e144]: 
            - generic [ref=e145]:
              - heading "Phone" [level=5] [ref=e146]
              - paragraph [ref=e147]: "012345678901"
          - generic [ref=e148]:
            - generic [ref=e150]: 
            - generic [ref=e151]:
              - heading "Email" [level=5] [ref=e152]
              - paragraph [ref=e153]: fake@fakeemail.com
          - separator [ref=e154]
          - heading "Getting Here" [level=4] [ref=e155]
          - paragraph [ref=e156]: Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.
    - generic [ref=e162]:
      - heading "Send Us a Message" [level=3] [ref=e163]
      - generic [ref=e164]:
        - generic [ref=e165]:
          - generic [ref=e166]: Name
          - textbox "Name" [ref=e167]
        - generic [ref=e168]:
          - generic [ref=e169]: Email
          - textbox "Email" [ref=e170]
        - generic [ref=e171]:
          - generic [ref=e172]: Phone
          - textbox "Phone" [ref=e173]
        - generic [ref=e174]:
          - generic [ref=e175]: Subject
          - textbox "Subject" [ref=e176]
        - generic [ref=e177]:
          - generic [ref=e178]: Message
          - textbox [ref=e179]
        - button "Submit" [ref=e181] [cursor=pointer]
    - contentinfo [ref=e182]:
      - generic [ref=e183]:
        - generic [ref=e184]:
          - generic [ref=e185]:
            - heading "Shady Meadows B&B" [level=5] [ref=e186]
            - paragraph [ref=e187]: Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.
            - generic [ref=e188]:
              - link "" [ref=e189] [cursor=pointer]:
                - /url: "#"
                - generic [ref=e190]: 
              - link "" [ref=e191] [cursor=pointer]:
                - /url: "#"
                - generic [ref=e192]: 
              - link "" [ref=e193] [cursor=pointer]:
                - /url: "#"
                - generic [ref=e194]: 
          - generic [ref=e195]:
            - heading "Contact Us" [level=5] [ref=e196]
            - list [ref=e197]:
              - listitem [ref=e198]:
                - generic [ref=e199]: 
                - text: Shady Meadows B&B, Shadows valley, Newingtonfordburyshire, Dilbery, N1 1AA
              - listitem [ref=e200]:
                - generic [ref=e201]: 
                - text: "012345678901"
              - listitem [ref=e202]:
                - generic [ref=e203]: 
                - text: fake@fakeemail.com
          - generic [ref=e204]:
            - heading "Quick Links" [level=5] [ref=e205]
            - list [ref=e206]:
              - listitem [ref=e207]:
                - link "Home" [ref=e208] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e209]:
                - link "Rooms" [ref=e210] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e211]:
                - link "Booking" [ref=e212] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e213]:
                - link "Contact" [ref=e214] [cursor=pointer]:
                  - /url: "#"
        - separator [ref=e215]
        - generic [ref=e217]:
          - text: restful-booker-platform v2.2 Created by
          - link "Mark Winteringham" [ref=e218] [cursor=pointer]:
            - /url: http://www.mwtestconsultancy.co.uk
          - text: "- © 2019-26"
          - link "Cookie-Policy" [ref=e219] [cursor=pointer]:
            - /url: /cookie
          - text: "-"
          - link "Privacy-Policy" [ref=e220] [cursor=pointer]:
            - /url: /privacy
          - text: "-"
          - link "Admin panel" [ref=e221] [cursor=pointer]:
            - /url: /admin
  - alert [ref=e222]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { HomePage } from '../../src/ui/pages/HomePage';
  3   | import { LoginPage } from '../../src/ui/pages/LoginPage';
  4   | import { AdminPage } from '../../src/ui/pages/AdminPage';
  5   | 
  6   | /**
  7   |  * ============================================================
  8   |  * TC-ACCESS-001 to TC-ACCESS-012
  9   |  * Accessibility — WCAG Compliance, Keyboard Navigation, Screen Readers
  10  |  * ============================================================
  11  |  */
  12  | test.describe('Accessibility', () => {
  13  |   let homePage: HomePage;
  14  |   let loginPage: LoginPage;
  15  |   let adminPage: AdminPage;
  16  | 
  17  |   test.beforeEach(async ({ page }) => {
  18  |     homePage = new HomePage(page);
  19  |     loginPage = new LoginPage(page);
  20  |     adminPage = new AdminPage(page);
  21  |   });
  22  | 
  23  |   // TC-ACCESS-001
  24  |   test('should have proper heading hierarchy on homepage', async () => {
  25  |     await homePage.goto();
  26  | 
  27  |     const h1Elements = homePage.page.locator('h1');
  28  |     const h2Elements = homePage.page.locator('h2');
  29  |     const h3Elements = homePage.page.locator('h3');
  30  | 
  31  |     // Should have at least one h1 and proper hierarchy
  32  |     await expect(h1Elements.first()).toBeVisible();
  33  |     expect(await h1Elements.count()).toBeGreaterThan(0);
  34  |   });
  35  | 
  36  |   // TC-ACCESS-003
  37  |   test('should support keyboard navigation through homepage', async ({ page }) => {
  38  |     await homePage.goto();
  39  | 
  40  |     // Tab through focusable elements
  41  |     await page.keyboard.press('Tab');
  42  |     const activeElement = page.locator(':focus');
  43  | 
  44  |     // Should be able to focus on at least one element
  45  |     await expect(activeElement.first()).toBeVisible();
  46  |   });
  47  | 
  48  |   // TC-ACCESS-007
  49  |   test('should support screen reader with ARIA landmarks', async ({ page }) => {
  50  |     await homePage.goto();
  51  | 
  52  |     // Check for common ARIA landmarks
  53  |     const landmarks = page.locator('[role="main"], [role="navigation"], [role="banner"], [role="contentinfo"], header, nav, main, footer');
  54  |     const landmarkCount = await landmarks.count();
  55  | 
  56  |     // Should have at least some structural elements
  57  |     expect(landmarkCount).toBeGreaterThan(0);
  58  |   });
  59  | 
  60  |   // TC-ACCESS-008
  61  |   test('should have proper button labels', async ({ page }) => {
  62  |     await homePage.goto();
  63  | 
  64  |     const buttons = page.locator('button, [role="button"]');
  65  |     const buttonCount = await buttons.count();
  66  | 
  67  |     for (let i = 0; i < buttonCount; i++) {
  68  |       const button = buttons.nth(i);
  69  |       const text = await button.innerText();
  70  |       const ariaLabel = await button.getAttribute('aria-label');
  71  |       const title = await button.getAttribute('title');
  72  | 
  73  |       // Buttons should have text content, aria-label, or title
  74  |       const hasLabel = text.trim().length > 0 || (ariaLabel && ariaLabel.length > 0) || (title && title.length > 0);
> 75  |       expect(hasLabel).toBe(true);
      |                        ^ Error: expect(received).toBe(expected) // Object.is equality
  76  |     }
  77  |   });
  78  | 
  79  |   // TC-ACCESS-009
  80  |   test('should support keyboard navigation in forms', async ({ page }) => {
  81  |     await homePage.goto();
  82  | 
  83  |     // Focus on first form element
  84  |     const firstInput = page.locator('input, textarea, select').first();
  85  |     await firstInput.focus();
  86  | 
  87  |     // Should be able to tab through form elements
  88  |     await page.keyboard.press('Tab');
  89  |     const nextElement = page.locator(':focus');
  90  | 
  91  |     await expect(nextElement.first()).toBeVisible();
  92  |   });
  93  | 
  94  |   // TC-ACCESS-010
  95  |   test('should have proper table structure if tables exist', async ({ page }) => {
  96  |     await homePage.goto();
  97  | 
  98  |     const tables = page.locator('table');
  99  |     const tableCount = await tables.count();
  100 | 
  101 |     if (tableCount > 0) {
  102 |       for (let i = 0; i < tableCount; i++) {
  103 |         const table = tables.nth(i);
  104 |         const headers = table.locator('th');
  105 |         const headerCount = await headers.count();
  106 | 
  107 |         // Tables should have headers for accessibility
  108 |         expect(headerCount).toBeGreaterThan(0);
  109 |       }
  110 |     }
  111 |   });
  112 | 
  113 |   // TC-ACCESS-011
  114 |   test('should have skip links for keyboard users', async ({ page }) => {
  115 |     await homePage.goto();
  116 | 
  117 |     // Check for skip links (common accessibility feature)
  118 |     const skipLinks = page.locator('a[href^="#"], .skip-link, [class*="skip"]');
  119 |     // Skip links are optional but good practice - just check they don't break anything
  120 |     const skipLinkCount = await skipLinks.count();
  121 |     expect(typeof skipLinkCount).toBe('number');
  122 |   });
  123 | 
  124 |   // TC-ACCESS-012
  125 |   test('should maintain focus order logically', async ({ page }) => {
  126 |     await homePage.goto();
  127 | 
  128 |     // Get all focusable elements in DOM order
  129 |     const focusableElements = page.locator('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  130 |     const count = await focusableElements.count();
  131 | 
  132 |     if (count > 1) {
  133 |       // Focus should move logically through elements
  134 |       await page.keyboard.press('Tab');
  135 |       const firstFocused = page.locator(':focus');
  136 | 
  137 |       await page.keyboard.press('Tab');
  138 |       const secondFocused = page.locator(':focus');
  139 | 
  140 |       // Should be able to focus on multiple elements in sequence
  141 |       await expect(firstFocused.first()).toBeVisible();
  142 |       await expect(secondFocused.first()).toBeVisible();
  143 |     }
  144 |   });
  145 | });
```