/**
 * BookingService - Service layer for Restful Booker API
 * Handles all booking-related API calls
 */

export interface Booking {
  id?: string;
  userId: string;
  hotelId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
}

export interface ApiResponse<T = unknown> {
  status: number;
  data: T;
  headers: Record<string, unknown>;
}

export class BookingService {
  private baseUrl: string;

  constructor(baseUrl: string = process.env.API_BASE_URL || 'https://restful-booker.herokuapp.com') {
    this.baseUrl = baseUrl;
  }

  private async request<T = unknown>(method: string, endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    // Replace with actual axios/fetch implementation when ready
    console.log(`[API] ${method} ${this.baseUrl}${endpoint}`, data);
    
    return {
      status: 200,
      data: {} as T,
      headers: {},
    };
  }

  async createBooking(booking: Booking): Promise<ApiResponse> {
    return this.request('POST', '/booking', booking);
  }

  async getBooking(bookingId: string): Promise<ApiResponse> {
    return this.request('GET', `/booking/${bookingId}`);
  }

  async updateBooking(bookingId: string, updates: Partial<Booking>): Promise<ApiResponse> {
    return this.request('PUT', `/booking/${bookingId}`, updates);
  }

  async deleteBooking(bookingId: string): Promise<ApiResponse> {
    return this.request('DELETE', `/booking/${bookingId}`);
  }

  async listBookings(): Promise<ApiResponse> {
    return this.request('GET', '/booking');
  }
}
