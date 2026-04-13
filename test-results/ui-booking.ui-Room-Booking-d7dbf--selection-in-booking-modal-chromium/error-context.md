# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\booking.ui.spec.ts >> Room Booking >> should display a calendar for date selection in booking modal
- Location: tests\ui\booking.ui.spec.ts:39:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[type="date"], .calendar, [class*="date-picker"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[type="date"], .calendar, [class*="date-picker"]').first()

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
  3   | import { BookingModal } from '../../src/ui/pages/BookingModal';
  4   | 
  5   | /**
  6   |  * ============================================================
  7   |  * TC-BOOK-001 to TC-BOOK-012
  8   |  * Room Booking — Modal, Calendar, Validation, Confirmation
  9   |  * ============================================================
  10  |  */
  11  | test.describe('Room Booking', () => {
  12  |   let homePage: HomePage;
  13  |   let bookingModal: BookingModal;
  14  | 
  15  |   test.beforeEach(async ({ page }) => {
  16  |     homePage = new HomePage(page);
  17  |     bookingModal = new BookingModal(page);
  18  |     await homePage.goto();
  19  |   });
  20  | 
  21  |   // TC-BOOK-001 @critical
  22  |   test('should open booking modal when Book This Room is clicked', async () => {
  23  |     await expect(bookingModal.bookBtn).toBeVisible();
  24  |     await bookingModal.openBookingForm();
  25  |     const isVisible = await bookingModal.isModalVisible();
  26  |     expect(isVisible).toBe(true);
  27  |   });
  28  | 
  29  |   // TC-BOOK-002 @critical
  30  |   test('should display booking form fields inside the modal', async () => {
  31  |     await bookingModal.openBookingForm();
  32  |     await expect(bookingModal.firstnameInput).toBeVisible({ timeout: 5000 });
  33  |     await expect(bookingModal.lastnameInput).toBeVisible();
  34  |     await expect(bookingModal.emailInput).toBeVisible();
  35  |     await expect(bookingModal.phoneInput).toBeVisible();
  36  |   });
  37  | 
  38  |   // TC-BOOK-003 @critical
  39  |   test('should display a calendar for date selection in booking modal', async () => {
  40  |     await bookingModal.openBookingForm();
  41  |     const dateInputs = bookingModal.page.locator('input[type="date"], .calendar, [class*="date-picker"]');
> 42  |     await expect(dateInputs.first()).toBeVisible({ timeout: 5000 });
      |                                      ^ Error: expect(locator).toBeVisible() failed
  43  |   });
  44  | 
  45  |   // TC-BOOK-004 @critical @validation
  46  |   test('should show error when booking form is submitted without dates', async () => {
  47  |     await bookingModal.openBookingForm();
  48  |     await expect(bookingModal.firstnameInput).toBeVisible();
  49  |     const dateInputs = bookingModal.page.locator('input[type="date"]');
  50  |     await expect(dateInputs.first()).toBeVisible({ timeout: 5000 });
  51  |   });
  52  | 
  53  |   // TC-BOOK-005 @critical @validation
  54  |   test('should show error when firstname is missing from booking', async () => {
  55  |     await bookingModal.openBookingForm();
  56  |     await expect(bookingModal.firstnameInput).toBeVisible();
  57  |     const isRequired = await bookingModal.firstnameInput.getAttribute('required');
  58  |     expect(isRequired !== null || (await bookingModal.firstnameInput.getAttribute('aria-required')) === 'true').toBe(true);
  59  |   });
  60  | 
  61  |   // TC-BOOK-006 @critical @validation
  62  |   test('should show error when lastname is missing from booking', async () => {
  63  |     await bookingModal.openBookingForm();
  64  |     await expect(bookingModal.lastnameInput).toBeVisible();
  65  |     const isRequired = await bookingModal.lastnameInput.getAttribute('required');
  66  |     expect(isRequired !== null || (await bookingModal.lastnameInput.getAttribute('aria-required')) === 'true').toBe(true);
  67  |   });
  68  | 
  69  |   // TC-BOOK-007 @critical @validation
  70  |   test('should show error when email is invalid in booking form', async () => {
  71  |     await bookingModal.openBookingForm();
  72  |     await expect(bookingModal.emailInput).toBeVisible();
  73  |     const inputType = await bookingModal.emailInput.getAttribute('type');
  74  |     expect(inputType === 'email' || (await bookingModal.emailInput.getAttribute('pattern')) !== null).toBe(true);
  75  |   });
  76  | 
  77  |   // TC-BOOK-008 @critical @validation
  78  |   test('should show error when phone is missing from booking', async () => {
  79  |     await bookingModal.openBookingForm();
  80  |     await expect(bookingModal.phoneInput).toBeVisible();
  81  |     const isRequired = await bookingModal.phoneInput.getAttribute('required');
  82  |     expect(isRequired !== null || (await bookingModal.phoneInput.getAttribute('aria-required')) === 'true').toBe(true);
  83  |   });
  84  | 
  85  |   // TC-BOOK-009 @navigation
  86  |   test('should be able to navigate the calendar to next month', async () => {
  87  |     await bookingModal.openBookingForm();
  88  |     const dateInputs = bookingModal.page.locator('input[type="date"], .calendar, [class*="date-picker"]');
  89  |     await expect(dateInputs.first()).toBeVisible({ timeout: 5000 });
  90  |   });
  91  | 
  92  |   // TC-BOOK-010 @interaction
  93  |   test('Cancel or close button should dismiss the booking modal', async ({ page }) => {
  94  |     await bookingModal.openBookingForm();
  95  |     const closeBtn = page.locator('button:has-text("Close"), button:has-text("Cancel"), [aria-label*="close"], [aria-label*="Close"]').first();
  96  |     await expect(closeBtn).toBeVisible();
  97  |     await closeBtn.click();
  98  |     const isVisible = await bookingModal.isModalVisible();
  99  |     expect(isVisible).not.toBe(true);
  100 |   });
  101 | 
  102 |   // TC-BOOK-011
  103 |   test('should display room features/amenities on room cards', async ({ page }) => {
  104 |     const roomCard = page.locator('.room, .room-card, [class*="room"]').first();
  105 |     const cardExists = await roomCard.count() > 0;
  106 |     expect(cardExists).toBe(true);
  107 | 
  108 |     if (cardExists) {
  109 |       const amenityIcons = roomCard.locator('i, svg, .fa, img[alt]');
  110 |       const textContent = await roomCard.innerText();
  111 |       // Room cards should have some descriptive content
  112 |       expect(textContent.length).toBeGreaterThan(5);
  113 |     }
  114 |   });
  115 | 
  116 |   // TC-BOOK-012
  117 |   test('should show room image or placeholder on room cards', async ({ page }) => {
  118 |     const roomCards = page.locator('.room, .room-card, [class*="room"]');
  119 |     const cardsExist = await roomCards.count() > 0;
  120 |     expect(cardsExist).toBe(true);
  121 | 
  122 |     if (cardsExist) {
  123 |       // Check for images or placeholders in room cards
  124 |       const images = roomCards.locator('img, [class*="image"], [class*="placeholder"]');
  125 |       const hasVisualContent = await images.count() > 0;
  126 |       expect(hasVisualContent).toBe(true);
  127 |     }
  128 |   });
  129 | });
```