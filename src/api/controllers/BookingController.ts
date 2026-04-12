/**
 * BookingController - Example API Controller
 * Handles booking-related API endpoints
 */

import { HttpClient } from '../clients/HttpClient.js';

export interface Booking {
  id?: string;
  userId: string;
  hotelId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
}

export class BookingController {
  private client: HttpClient;

  constructor(baseUrl?: string) {
    this.client = new HttpClient(baseUrl);
  }

  async createBooking(booking: Booking) {
    return this.client.post('/api/bookings', booking);
  }

  async getBooking(bookingId: string) {
    return this.client.get(`/api/bookings/${bookingId}`);
  }

  async updateBooking(bookingId: string, updates: Partial<Booking>) {
    return this.client.put(`/api/bookings/${bookingId}`, updates);
  }

  async deleteBooking(bookingId: string) {
    return this.client.delete(`/api/bookings/${bookingId}`);
  }

  async listBookings(userId: string) {
    return this.client.get(`/api/bookings?userId=${userId}`);
  }
}
