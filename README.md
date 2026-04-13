# Restful Booker Platform Test Automation Framework

A comprehensive test automation framework for the Restful Booker Platform, built with Playwright, TypeScript, and following Page Object Model patterns.

## 🎯 Framework Overview

This framework provides end-to-end test coverage for the Restful Booker Platform frontend and API. It uses Playwright and TypeScript to validate both browser workflows and RESTful backend behavior.

## 🛠️ Technology Stack & Justification

### **Playwright** - Browser Automation + API Testing
- **Why Playwright?** Industry-leading browser automation with cross-browser support, API testing built in, and excellent TypeScript integration
- **Key Benefits:**
  - Native support for modern web features (shadow DOM, iframes, etc.)
  - Built-in API request fixtures for RESTful backends
  - Unified reporting across UI and API tests
  - Fast execution, retries, and trace capture
  - Excellent performance and stability

### **TypeScript** - Type Safety
- **Why TypeScript?** Provides compile-time type checking and better IDE support
- **Key Benefits:**
  - Catches errors early in development
  - Improved code maintainability and refactoring
  - Better IntelliSense and developer experience

### **Page Object Model (POM)** - Test Organization
- **Why POM?** Encapsulates page-specific logic and selectors
- **Key Benefits:**
  - Reduced code duplication
  - Easier maintenance when UI changes
  - Clear separation of concerns
  - Improved test readability

## 📊 Test Coverage Analysis

### **Application Under Test Overview**

The Restful Booker Platform consists of:

**🏨 Guest-Facing Features:**
- Hotel information and room display
- Booking inquiry form
- Contact form for general inquiries
- Navigation between sections (Rooms, Booking, Amenities, Location, Contact)
- Responsive design for mobile/desktop

**⚙️ Admin Panel Features:**
- Authentication and authorization
- Room management (CRUD operations)
- Message management (contact form submissions)
- Branding configuration
- Reporting and analytics
- Front page content management

## 📈 Current Test Suite Status (Latest Release v2.0)

```bash
✅ 54 tests total (45+ passing)
📍 Coverage: ~60% of total application functionality
🎯 Focus: Comprehensive admin and guest workflows with enhanced quality
⚡ Test Tags: @critical, @admin, @authentication, @validation, @security, @negative, @crud, @interaction
```

### **Test Categories & Coverage:**

| Category | Tests | Status | Coverage | Quality |
|----------|-------|--------|----------|---------|
| **Admin Login** | 4 tests | ✅ Complete | Authentication flows | Enhanced with env vars |
| **Admin Room Management** | 12 tests | ✅ Complete | Full CRUD | Comprehensive validation |
| **Guest Contact Form** | 12 tests | ✅ Complete | All scenarios | XSS protected, multi-error detection |
| **Guest Booking** | 12 tests | ✅ Complete | Modal & validation | Form field verification |
| **Homepage** | 10 tests | ✅ Complete | Layout & content | Responsive checks |
| **Accessibility** | 12 tests | ✅ Implemented | WCAG compliance | Keyboard navigation, ARIA |
| **API - Auth** | 2 tests | ✅ Running | Token generation | Full coverage |
| **API - Bookings** | 7 tests | ✅ Running | CRUD operations | Independent tests, no dependencies |

## 🎯 Recent Test Quality Improvements (v2.0)

### **What's Been Enhanced**

#### **1. Stronger Assertions** 
- ✅ Replaced generic placeholder assertions with real test logic
- ✅ Added comprehensive validation for form fields and required attributes
- ✅ Implemented proper element visibility and state checks

#### **2. Test Independence**
- ✅ Removed test coupling and execution order dependencies
- ✅ Each API test now creates its own isolated test data
- ✅ No more shared state between tests; safe for parallel execution

#### **3. Environment Variable Support**
- ✅ Credentials can be controlled via environment variables
- ✅ Supports: `TEST_ADMIN_USERNAME`, `TEST_ADMIN_PASSWORD`
- ✅ Secure credential management for CI/CD pipelines

**Usage:**
```bash
# On Windows PowerShell
$env:TEST_ADMIN_USERNAME='customadmin'
$env:TEST_ADMIN_PASSWORD='custompass'
npm test

# On Unix/Linux/Mac
export TEST_ADMIN_USERNAME='customadmin'
export TEST_ADMIN_PASSWORD='custompass'
npm test
```

#### **4. Test Tagging System**
- ✅ `@critical` - Must pass before release
- ✅ `@admin` - Admin panel functionality
- ✅ `@authentication` - Login/auth related tests
- ✅ `@validation` - Input and form validation
- ✅ `@security` - XSS, injection, security tests
- ✅ `@negative` - Negative/error case testing
- ✅ `@crud` - Create, Read, Update, Delete operations
- ✅ `@interaction` - UI interaction and navigation

#### **5. Robust Error Detection**
- ✅ Multi-selector fallback strategies for flexible element detection
- ✅ Better error message validation with multiple selector patterns
- ✅ XSS attack prevention verification

#### **6. Centralized Credentials Management**
- ✅ Environment-aware credential loading
- ✅ Applied across login.spec.ts, admin_rooms.spec.ts, and all auth tests
- ✅ Reduces security risks from hardcoded credentials

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Install Playwright Browsers
```bash
npx playwright install
```

### Run Tests

#### **Run All Tests**
```bash
npm test
```

#### **Run by Category**
```bash
# UI tests only
npm run test:ui

# API tests only
npm run test:api

# Run with HTML report
npx playwright test --reporter=html
```

#### **Run by Tags**
```bash
# Run only critical tests
npx playwright test --grep "@critical"

# Run authentication tests
npx playwright test --grep "@authentication"

# Run validation tests
npx playwright test --grep "@validation"

# Run security tests
npx playwright test --grep "@security"
```

### View Test Reports
```bash
npx playwright show-report
```

## 📁 Project Structure

```
├── src/
│   ├── ui/pages/          # Page Object classes
│   │   ├── LoginPage.ts   # Admin login page
│   │   ├── AdminPage.ts   # Admin room management
│   │   ├── BookingModal.ts # Booking modal
│   │   ├── HomePage.ts    # Homepage
│   │   └── ContactPage.ts # Guest contact form
│   ├── api/               # API testing utilities
│   │   ├── controllers/
│   │   ├── clients/
│   │   └── models/
│   └── utils/             # Shared utilities
├── tests/
│   ├── ui/                # UI test specifications
│   │   ├── admin_rooms.spec.ts
│   │   ├── booking.ui.spec.ts
│   │   ├── contact.ui.spec.ts
│   │   ├── login.ui.spec.ts
│   │   ├── homepage.ui.spec.ts
│   │   └── accessibility.ui.spec.ts
│   └── api/               # API test specifications
│       ├── auth.api.spec.ts
│       └── booking.api.spec.ts
├── playwright.config.ts   # Playwright configuration
└── README.md             # This file
```

## 🎨 Page Object Pattern Implementation

### Example: ContactPage

```typescript
export class ContactPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('[data-testid="contact-name"]');
    this.emailInput = page.locator('[data-testid="contact-email"]');
    this.submitButton = page.locator('[data-testid="contact-submit"]');
    this.successMessage = page.locator('h2:has-text("Thanks for getting in touch")');
  }

  async submitForm(contactDetails: ContactFormData) {
    await this.nameInput.fill(contactDetails.name);
    await this.emailInput.fill(contactDetails.email);
    // ... form submission logic
  }
}
```

## 🔧 Configuration

### Playwright Config (`playwright.config.ts`)
- **Projects:** Separate API and UI test execution
- **Base URL:** `https://restful-booker.herokuapp.com`
- **Browser:** Chromium (default), extensible to Firefox/WebKit
- **Parallel Execution:** 4 workers for faster test runs
- **Screenshots:** Automatic on failure
- **Video Recording:** Optional for debugging
- **Trace Recording:** On first retry for debugging

### Test Data Management
- **DataGenerator:** Creates unique test data to avoid conflicts
- **Test Isolation:** Each test uses fresh data
- **Cleanup:** Automatic resource cleanup where possible
- **Timestamp Usage:** Unique identifiers using Date.now()

## 📈 CI/CD Integration

### GitHub Actions Workflow
- **Trigger:** Push to main branch
- **Environment:** Ubuntu latest with Node.js 18
- **Steps:**
  1. Checkout code
  2. Setup Node.js
  3. Install dependencies
  4. Install Playwright browsers
  5. Run test suite with environment variables
  6. Upload test artifacts (reports, screenshots)

### Environment Variables for CI/CD
```yaml
- name: Run tests
  env:
    TEST_ADMIN_USERNAME: ${{ secrets.TEST_ADMIN_USERNAME }}
    TEST_ADMIN_PASSWORD: ${{ secrets.TEST_ADMIN_PASSWORD }}
  run: npm test
```

## 🎯 Testing Philosophy

### **Coverage over Quantity**
We prioritize testing **business-critical user journeys** rather than achieving 100% code coverage. Focus areas:

1. **Happy Path Testing** - Core functionality works end-to-end
2. **Negative Testing** - Error handling and validation
3. **Data Validation** - Edge cases and boundary conditions
4. **Regression Testing** - Critical features remain stable
5. **Security Testing** - XSS, injection prevention
6. **Accessibility Testing** - WCAG compliance monitoring

### **Risk-Based Testing Matrix**

| Risk Level | Business Impact | Test Priority | Current Status |
|------------|----------------|---------------|----------------|
| **Critical** | System unusable | P0 - Block release | ✅ Admin login, room creation |
| **High** | Core feature broken | P1 - Must fix | ✅ Contact form, bookings |
| **Medium** | Feature degraded | P2 - Should fix | ✅ Navigation, accessibility |
| **Low** | Minor inconvenience | P3 - Nice to fix | 🔄 Mobile, performance |

## 🚀 Future Enhancements

### **Immediate Priorities (Next Sprint)**
1. **Mobile/Responsive Testing**
   - Device emulation
   - Touch gesture testing
   - Responsive breakpoint validation

2. **Cross-Browser Support**
   - Firefox and WebKit test execution
   - Browser-specific issue detection

3. **Performance Testing**
   - Page load times
   - API response times
   - Resource usage monitoring

### **Medium-term Goals**
1. **Visual Regression Testing**
   - Screenshot comparison
   - Layout consistency verification

2. **API Contract Testing**
   - Response schema validation
   - API versioning checks

3. **Load and Stress Testing**
   - Concurrent user simulation
   - Performance degradation analysis

### **Long-term Vision**
1. **Advanced Accessibility Testing**
2. **Machine Learning-based anomaly detection**
3. **Real-time test dashboards**
4. **Automated flakiness detection and mitigation**

## 🛠️ Troubleshooting

### Common Issues

#### **Issue: Tests timeout on certain machines**
**Solution:** Increase timeout in playwright.config.ts or use `--workers=1` for sequential execution

#### **Issue: "No tests found"**
**Solution:** Ensure test files match the glob pattern in playwright.config.ts

#### **Issue: Element not found errors**
**Solution:** Check if page has fully loaded; use `page.waitForLoadState('networkidle')`

#### **Issue: Flaky tests**
**Solution:** Add explicit waits for elements, use `waitForSelector` with reasonable timeouts

## 📞 Support & Contribution

### Reporting Issues
Please include:
- Test name and file path
- Error message and stack trace
- Screenshot or video if available
- Environment details (OS, Node version, Browser)

### Contributing
1. Fork the repository
2. Create a feature branch
3. Write tests for new features
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎉 Changelog

### Version 2.0 (Latest)
- ✅ Enhanced test assertions and removed placeholder tests
- ✅ Implemented test independence for API tests
- ✅ Added environment variable support for credentials
- ✅ Created comprehensive test tagging system
- ✅ Improved error detection with multi-selector strategies
- ✅ Added XSS attack prevention testing
- ✅ 54 total tests with improved coverage

### Version 1.0
- ✅ Initial framework setup
- ✅ Basic UI and API test coverage
- ✅ Page Object Model implementation
- ✅ CI/CD configuration
