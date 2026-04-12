# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\accessibility.ui.spec.ts >> Accessibility >> should have sufficient color contrast
- Location: tests\ui\accessibility.ui.spec.ts:53:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
            - textbox [ref=e41]: 12/04/2026
          - generic [ref=e42]:
            - generic [ref=e43]: Check Out
            - textbox [ref=e46]: 13/04/2026
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
                - /url: /reservation/1?checkin=2026-04-12&checkout=2026-04-13
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
                - /url: /reservation/2?checkin=2026-04-12&checkout=2026-04-13
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
                - /url: /reservation/3?checkin=2026-04-12&checkout=2026-04-13
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
  36  |   // TC-ACCESS-002
  37  |   test('should have alt text for all images', async () => {
  38  |     await homePage.goto();
  39  | 
  40  |     const images = homePage.page.locator('img');
  41  |     const imageCount = await images.count();
  42  | 
  43  |     if (imageCount > 0) {
  44  |       for (let i = 0; i < imageCount; i++) {
  45  |         const alt = await images.nth(i).getAttribute('alt');
  46  |         expect(alt).not.toBeNull();
  47  |         expect(alt?.length).toBeGreaterThan(0);
  48  |       }
  49  |     }
  50  |   });
  51  | 
  52  |   // TC-ACCESS-003
  53  |   test('should have sufficient color contrast', async ({ page }) => {
  54  |     await homePage.goto();
  55  | 
  56  |     // Check for any obvious contrast issues by ensuring text is readable
  57  |     const textElements = page.locator('p, span, div, h1, h2, h3, h4, h5, h6');
  58  |     const visibleText = await textElements.first().isVisible();
  59  | 
  60  |     // Basic check - if text is visible, contrast is likely adequate
> 61  |     expect(visibleText).toBe(true);
      |                         ^ Error: expect(received).toBe(expected) // Object.is equality
  62  |   });
  63  | 
  64  |   // TC-ACCESS-004
  65  |   test('should support keyboard navigation through homepage', async ({ page }) => {
  66  |     await homePage.goto();
  67  | 
  68  |     // Tab through focusable elements
  69  |     await page.keyboard.press('Tab');
  70  |     const activeElement = page.locator(':focus');
  71  | 
  72  |     // Should be able to focus on at least one element
  73  |     await expect(activeElement.first()).toBeVisible();
  74  |   });
  75  | 
  76  |   // TC-ACCESS-005
  77  |   test('should have proper form labels', async () => {
  78  |     await homePage.goto();
  79  | 
  80  |     const inputs = homePage.page.locator('input, textarea, select');
  81  |     const inputCount = await inputs.count();
  82  | 
  83  |     for (let i = 0; i < inputCount; i++) {
  84  |       const input = inputs.nth(i);
  85  |       const id = await input.getAttribute('id');
  86  |       const ariaLabel = await input.getAttribute('aria-label');
  87  |       const ariaLabelledBy = await input.getAttribute('aria-labelledby');
  88  | 
  89  |       // Should have either id with label, aria-label, or aria-labelledby
  90  |       const hasLabel = id !== null || ariaLabel !== null || ariaLabelledBy !== null;
  91  |       expect(hasLabel).toBe(true);
  92  |     }
  93  |   });
  94  | 
  95  |   // TC-ACCESS-006
  96  |   test('should have descriptive link text', async ({ page }) => {
  97  |     await homePage.goto();
  98  | 
  99  |     const links = page.locator('a');
  100 |     const linkCount = await links.count();
  101 | 
  102 |     for (let i = 0; i < linkCount; i++) {
  103 |       const link = links.nth(i);
  104 |       const text = await link.innerText();
  105 |       const ariaLabel = await link.getAttribute('aria-label');
  106 | 
  107 |       // Links should have meaningful text or aria-label
  108 |       const hasMeaningfulText = text.trim().length > 0 || (ariaLabel && ariaLabel.length > 0);
  109 |       expect(hasMeaningfulText).toBe(true);
  110 |     }
  111 |   });
  112 | 
  113 |   // TC-ACCESS-007
  114 |   test('should support screen reader with ARIA landmarks', async ({ page }) => {
  115 |     await homePage.goto();
  116 | 
  117 |     // Check for common ARIA landmarks
  118 |     const landmarks = page.locator('[role="main"], [role="navigation"], [role="banner"], [role="contentinfo"], header, nav, main, footer');
  119 |     const landmarkCount = await landmarks.count();
  120 | 
  121 |     // Should have at least some structural elements
  122 |     expect(landmarkCount).toBeGreaterThan(0);
  123 |   });
  124 | 
  125 |   // TC-ACCESS-008
  126 |   test('should have proper button labels', async ({ page }) => {
  127 |     await homePage.goto();
  128 | 
  129 |     const buttons = page.locator('button, [role="button"]');
  130 |     const buttonCount = await buttons.count();
  131 | 
  132 |     for (let i = 0; i < buttonCount; i++) {
  133 |       const button = buttons.nth(i);
  134 |       const text = await button.innerText();
  135 |       const ariaLabel = await button.getAttribute('aria-label');
  136 |       const title = await button.getAttribute('title');
  137 | 
  138 |       // Buttons should have text content, aria-label, or title
  139 |       const hasLabel = text.trim().length > 0 || (ariaLabel && ariaLabel.length > 0) || (title && title.length > 0);
  140 |       expect(hasLabel).toBe(true);
  141 |     }
  142 |   });
  143 | 
  144 |   // TC-ACCESS-009
  145 |   test('should support keyboard navigation in forms', async ({ page }) => {
  146 |     await homePage.goto();
  147 | 
  148 |     // Focus on first form element
  149 |     const firstInput = page.locator('input, textarea, select').first();
  150 |     await firstInput.focus();
  151 | 
  152 |     // Should be able to tab through form elements
  153 |     await page.keyboard.press('Tab');
  154 |     const nextElement = page.locator(':focus');
  155 | 
  156 |     await expect(nextElement.first()).toBeVisible();
  157 |   });
  158 | 
  159 |   // TC-ACCESS-010
  160 |   test('should have proper table structure if tables exist', async ({ page }) => {
  161 |     await homePage.goto();
```