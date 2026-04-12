import { test, expect } from '@playwright/test';
import { BookingService } from '../../src/api/BookingService.js';
import { DataGenerator } from '../../src/utils/DataGenerator.js';
import { logger } from '../../src/utils/Logger.js';

test.describe('Booking API Tests', () => {
  let bookingService: BookingService;

  test.beforeEach(() => {
    bookingService = new BookingService();
  });

  test('should create a new booking', async () => {
    const bookingData = DataGenerator.generateBookingData();
    logger.info('Creating booking:', bookingData);

    const response = await bookingService.createBooking(bookingData);
    
    expect(response.status).toBe(200);
    logger.info('Booking created successfully');
  });

  test('should get booking by ID', async () => {
    const bookingId = 'BOOKING_123';
    const response = await bookingService.getBooking(bookingId);
    
    expect(response.status).toBe(200);
    logger.info('Booking retrieved:', response.data);
  });

  test('should update a booking', async () => {
    const bookingId = 'BOOKING_123';
    const updates = { guests: 2, totalPrice: 250 };
    
    const response = await bookingService.updateBooking(bookingId, updates);
    
    expect(response.status).toBe(200);
    logger.info('Booking updated');
  });

  test('should delete a booking', async () => {
    const bookingId = 'BOOKING_123';
    const response = await bookingService.deleteBooking(bookingId);
    
    expect(response.status).toBe(200);
    logger.info('Booking deleted');
  });
});
