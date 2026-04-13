import { test, expect } from '@playwright/test';
import { BookingService } from '../../src/api/BookingService.js';
import { DataGenerator } from '../../src/utils/DataGenerator.js';
import { logger } from '../../src/utils/Logger.js';

// Helper function to generate unique booking data
const generateUniqueBookingData = () => ({
  ...DataGenerator.generateBookingData(),
  timestamp: Date.now(), // Ensure uniqueness
  bookingId: `BOOKING_${Date.now()}_${Math.random()}`
});

test.describe('Booking API Tests', () => {
  let bookingService: BookingService;

  test.beforeEach(() => {
    bookingService = new BookingService();
  });

  // TC-BOOKING-API-001 @critical @crud
  test('should create a new booking with valid data', async () => {
    const bookingData = generateUniqueBookingData();
    logger.info('Creating booking:', bookingData);

    const response = await bookingService.createBooking(bookingData);
    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('bookingid');
    logger.info('Booking created successfully with ID:', response.data.bookingid);
  });

  // TC-BOOKING-API-002 @crud
  test('should retrieve a created booking by ID', async () => {
    // First create a booking
    const bookingData = generateUniqueBookingData();
    const createResponse = await bookingService.createBooking(bookingData);
    expect(createResponse.status).toBe(200);
    
    const bookingId = createResponse.data.bookingid;
    const response = await bookingService.getBooking(bookingId);
    
    expect(response.status).toBe(200);
    expect(response.data.bookingid).toBe(bookingId);
    logger.info('Booking retrieved:', response.data);
  });

  // TC-BOOKING-API-003 @crud
  test('should update a booking with new values', async () => {
    // First create a booking
    const bookingData = generateUniqueBookingData();
    const createResponse = await bookingService.createBooking(bookingData);
    const bookingId = createResponse.data.bookingid;
    
    // Then update it
    const updates = { 
      totalprice: 350,
      depositpaid: true,
      additionalneeds: 'Extra pillow'
    };
    
    const response = await bookingService.updateBooking(bookingId, updates);
    
    expect(response.status).toBe(200);
    expect(response.data.totalprice).toBe(350);
    logger.info('Booking updated successfully');
  });

  // TC-BOOKING-API-004 @crud
  test('should delete a booking', async () => {
    // First create a booking
    const bookingData = generateUniqueBookingData();
    const createResponse = await bookingService.createBooking(bookingData);
    const bookingId = createResponse.data.bookingid;
    
    // Then delete it
    const response = await bookingService.deleteBooking(bookingId);
    
    expect(response.status).toBe(200);
    logger.info('Booking deleted successfully');
  });

  // TC-BOOKING-API-005 @validation @negative
  test('should reject booking with missing required fields', async () => {
    const invalidBookingData = {
      firstname: 'John'
      // Missing required fields like lastname, totalprice, etc.
    };
    
    const response = await bookingService.createBooking(invalidBookingData);
    
    // Should return 400 (Bad Request) or 500 (Server Error) with validation failure
    expect([400, 422, 500]).toContain(response.status);
    logger.info('Invalid booking rejected as expected');
  });

  // TC-BOOKING-API-006 @validation
  test('should handle concurrent booking requests independently', async () => {
    const bookingData1 = generateUniqueBookingData();
    const bookingData2 = generateUniqueBookingData();
    
    // Create two bookings in parallel
    const [response1, response2] = await Promise.all([
      bookingService.createBooking(bookingData1),
      bookingService.createBooking(bookingData2)
    ]);
    
    expect(response1.status).toBe(200);
    expect(response2.status).toBe(200);
    expect(response1.data.bookingid).not.toBe(response2.data.bookingid);
    logger.info('Concurrent bookings created with different IDs');
  });

  // TC-BOOKING-API-007 @critical @validation
  test('should not retrieve non-existent booking', async () => {
    const fakeBookingId = 99999999;
    const response = await bookingService.getBooking(fakeBookingId);
    
    // Should return 404 (Not Found)
    expect(response.status).toBe(404);
    logger.info('Non-existent booking correctly returned 404');
  });
