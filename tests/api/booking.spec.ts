import { test, expect } from '@playwright/test';
import { BookingController } from '../../src/api/controllers/BookingController.js';
import { DataGenerator } from '../../src/utils/DataGenerator.js';
import { logger } from '../../src/utils/Logger.js';

test.describe('Booking API Tests', () => {
  let bookingController: BookingController;

  test.beforeEach(() => {
    bookingController = new BookingController();
  });

  test('should create a new booking', async () => {
    const bookingData = DataGenerator.generateBookingData();
    logger.info('Creating booking:', bookingData);

    const response = await bookingController.createBooking(bookingData);
    
    expect(response.status).toBe(200);
    logger.info('Booking created successfully');
  });

  test('should get booking by ID', async () => {
    const bookingId = 'BOOKING_123';
    const response = await bookingController.getBooking(bookingId);
    
    expect(response.status).toBe(200);
    logger.info('Booking retrieved:', response.data);
  });

  test('should update a booking', async () => {
    const bookingId = 'BOOKING_123';
    const updates = { guests: 2, totalPrice: 250 };
    
    const response = await bookingController.updateBooking(bookingId, updates);
    
    expect(response.status).toBe(200);
    logger.info('Booking updated');
  });

  test('should delete a booking', async () => {
    const bookingId = 'BOOKING_123';
    const response = await bookingController.deleteBooking(bookingId);
    
    expect(response.status).toBe(200);
    logger.info('Booking deleted');
  });
});
