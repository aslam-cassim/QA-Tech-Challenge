/**
 * DataGenerator - Test data generation using Faker
 * Generates realistic test data for API and UI tests
 */

export class DataGenerator {
  static generateUserId(): string {
    return `USR_${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }

  static generateEmail(): string {
    const timestamp = Date.now();
    return `test_${timestamp}@example.com`;
  }

  static generatePassword(): string {
    return `TestPass${Math.random().toString(36).substr(2, 10)}!`;
  }

  static generateHotelId(): string {
    return `HOTEL_${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }

  static generateBookingData(overrides: Record<string, unknown> = {}) {
    const checkIn = new Date();
    checkIn.setDate(checkIn.getDate() + 5);
    
    const checkOut = new Date(checkIn);
    checkOut.setDate(checkOut.getDate() + 3);

    return {
      userId: this.generateUserId(),
      hotelId: this.generateHotelId(),
      checkIn: checkIn.toISOString().split('T')[0],
      checkOut: checkOut.toISOString().split('T')[0],
      guests: Math.floor(Math.random() * 4) + 1,
      totalPrice: Math.floor(Math.random() * 500) + 100,
      ...overrides,
    };
  }

  static generateCredentials() {
    return {
      username: `test_${Date.now()}`,
      email: this.generateEmail(),
      password: this.generatePassword(),
    };
  }
}
