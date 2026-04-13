import { test, expect } from '@playwright/test';
import { BookingController } from '../../src/api/controllers/BookingController.js';

const controller = new BookingController();

test.describe('Restful Booker Auth API Tests', () => {
  // TC-AUTH-001 @critical @authentication
  test('should create an auth token with valid credentials', async () => {
    const response = await controller.createAuthToken('admin', 'password');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('token');
    expect(typeof response.data.token).toBe('string');
    expect(response.data.token.length).toBeGreaterThan(0);
  });

  // TC-AUTH-002 @critical @authentication @negative
  test('should reject auth token creation with invalid credentials', async () => {
    const response = await controller.createAuthToken('admin', 'wrong-password');

    expect([400, 401, 403]).toContain(response.status);
    expect(response.data).toHaveProperty('reason');
  });
});
