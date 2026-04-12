# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\booking.ui.spec.ts >> Room Booking >> should display booking form fields inside the modal
- Location: tests\ui\booking.ui.spec.ts:28:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.openBooking').first()

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
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class BookingModal {
  4  |   readonly page: Page;
  5  |   readonly bookBtn: Locator;
  6  |   readonly firstnameInput: Locator;
  7  |   readonly lastnameInput: Locator;
  8  |   readonly emailInput: Locator;
  9  |   readonly phoneInput: Locator;
  10 |   readonly bookConfirmBtn: Locator;
  11 |   readonly successBanner: Locator;
  12 |   readonly calendarNextBtn: Locator;
  13 |   readonly cancelBtn: Locator;
  14 |   readonly modal: Locator;
  15 | 
  16 |   constructor(page: Page) {
  17 |     this.page = page;
  18 |     this.bookBtn = page.locator('.openBooking').first();
  19 |     this.firstnameInput = page.locator('[data-testid="firstname"]');
  20 |     this.lastnameInput = page.locator('[data-testid="lastname"]');
  21 |     this.emailInput = page.locator('[data-testid="email"]');
  22 |     this.phoneInput = page.locator('[data-testid="phone"]');
  23 |     this.bookConfirmBtn = page.locator('#doReservation');
  24 |     this.successBanner = page.locator('.booking-confirmation');
  25 |     this.calendarNextBtn = page.locator('.rbc-btn-group button').last();
  26 |     this.cancelBtn = page.locator('button:has-text("Cancel"), button:has-text("Close"), .close');
  27 |     this.modal = page.locator('.booking-form, .room-booking, [class*="booking"]');
  28 |   }
  29 | 
  30 |   async openBookingForm() {
> 31 |     await this.bookBtn.click();
     |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  32 |     await this.modal.first().waitFor({ state: 'visible', timeout: 5000 });
  33 |   }
  34 | 
  35 |   async fillBookingDetails(data: {
  36 |     firstname: string;
  37 |     lastname: string;
  38 |     email: string;
  39 |     phone: string;
  40 |   }) {
  41 |     await this.firstnameInput.fill(data.firstname);
  42 |     await this.lastnameInput.fill(data.lastname);
  43 |     await this.emailInput.fill(data.email);
  44 |     await this.phoneInput.fill(data.phone);
  45 |   }
  46 | 
  47 |   async submitBooking() {
  48 |     await this.bookConfirmBtn.click();
  49 |   }
  50 | 
  51 |   async cancelBooking() {
  52 |     if (await this.cancelBtn.count() > 0) {
  53 |       await this.cancelBtn.first().click();
  54 |     }
  55 |   }
  56 | 
  57 |   async navigateCalendarNext() {
  58 |     if (await this.calendarNextBtn.count() > 0) {
  59 |       await this.calendarNextBtn.first().click();
  60 |     }
  61 |   }
  62 | 
  63 |   async isModalVisible(): Promise<boolean> {
  64 |     return await this.modal.first().isVisible();
  65 |   }
  66 | }
```