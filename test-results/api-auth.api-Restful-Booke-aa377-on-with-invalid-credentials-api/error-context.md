# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\auth.api.spec.ts >> Restful Booker Auth API Tests >> should reject auth token creation with invalid credentials
- Location: tests\api\auth.api.spec.ts:18:3

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected value: 200
Received array: [400, 401, 403]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { BookingController } from '../../src/api/controllers/BookingController.js';
  3  | 
  4  | const controller = new BookingController();
  5  | 
  6  | test.describe('Restful Booker Auth API Tests', () => {
  7  |   // TC-AUTH-001 @critical @authentication
  8  |   test('should create an auth token with valid credentials', async () => {
  9  |     const response = await controller.createAuthToken('admin', 'password');
  10 | 
  11 |     expect(response.status).toBe(200);
  12 |     expect(response.data).toHaveProperty('token');
  13 |     expect(typeof response.data.token).toBe('string');
  14 |     expect(response.data.token.length).toBeGreaterThan(0);
  15 |   });
  16 | 
  17 |   // TC-AUTH-002 @critical @authentication @negative
  18 |   test('should reject auth token creation with invalid credentials', async () => {
  19 |     const response = await controller.createAuthToken('admin', 'wrong-password');
  20 | 
> 21 |     expect([400, 401, 403]).toContain(response.status);
     |                             ^ Error: expect(received).toContain(expected) // indexOf
  22 |     expect(response.data).toHaveProperty('reason');
  23 |   });
  24 | });
  25 | 
```