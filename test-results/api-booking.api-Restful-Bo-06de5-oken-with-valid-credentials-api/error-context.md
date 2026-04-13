# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\booking.api.spec.ts >> Restful Booker API Tests >> should create an auth token with valid credentials
- Location: tests\api\booking.api.spec.ts:104:3

# Error details

```
Error: expect(received).toHaveProperty(path)

Expected path: "token"
Received path: []

Received value: {"reason": "Bad credentials"}
```

# Test source

```ts
  8   |   // Helper function to generate booking data
  9   |   const generateBookingData = (): Booking => ({
  10  |     firstname: `API_${Date.now()}`,
  11  |     lastname: 'Booker',
  12  |     totalprice: 325,
  13  |     depositpaid: true,
  14  |     bookingdates: {
  15  |       checkin: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
  16  |       checkout: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
  17  |     },
  18  |     additionalneeds: 'Breakfast',
  19  |   });
  20  | 
  21  |   // TC-API-001 @critical
  22  |   test('should create a new booking', async () => {
  23  |     const bookingData = generateBookingData();
  24  |     const response = await controller.createBooking(bookingData);
  25  |     logger.info('Booking create response', response);
  26  | 
  27  |     expect(response.status).toBe(200);
  28  |     expect(response.data).toHaveProperty('bookingid');
  29  |     expect(response.data).toHaveProperty('booking');
  30  |     expect(response.data.booking.firstname).toBe(bookingData.firstname);
  31  |   });
  32  | 
  33  |   // TC-API-002 @critical
  34  |   test('should retrieve a booking by ID', async () => {
  35  |     // Create a new booking first to ensure we have a valid ID
  36  |     const bookingData = generateBookingData();
  37  |     const createResponse = await controller.createBooking(bookingData);
  38  |     const bookingId = createResponse.data.bookingid;
  39  | 
  40  |     // Retrieve the created booking
  41  |     const getResponse = await controller.getBooking(bookingId);
  42  |     logger.info('Booking retrieved', getResponse);
  43  | 
  44  |     expect(getResponse.status).toBe(200);
  45  |     expect(getResponse.data.firstname).toBe(bookingData.firstname);
  46  |     expect(getResponse.data.lastname).toBe(bookingData.lastname);
  47  |   });
  48  | 
  49  |   // TC-API-003 @critical
  50  |   test('should create auth token and update a booking', async () => {
  51  |     // Create a booking to update
  52  |     const bookingData = generateBookingData();
  53  |     const createResponse = await controller.createBooking(bookingData);
  54  |     const bookingId = createResponse.data.bookingid;
  55  | 
  56  |     // Create auth token
  57  |     const tokenResponse = await controller.createAuthToken();
  58  |     expect(tokenResponse.status).toBe(200);
  59  |     expect(tokenResponse.data.token).toBeTruthy();
  60  |     const authToken = tokenResponse.data.token;
  61  | 
  62  |     // Update the booking
  63  |     const updateResponse = await controller.updateBooking(bookingId, { additionalneeds: 'Late checkout' }, authToken);
  64  |     logger.info('Booking update response', updateResponse);
  65  | 
  66  |     expect(updateResponse.status === 200 || updateResponse.status === 201).toBe(true);
  67  |     expect(updateResponse.data.additionalneeds).toBe('Late checkout');
  68  |   });
  69  | 
  70  |   // TC-API-004 @critical
  71  |   test('should delete a booking with valid token', async () => {
  72  |     // Create a booking to delete
  73  |     const bookingData = generateBookingData();
  74  |     const createResponse = await controller.createBooking(bookingData);
  75  |     const bookingId = createResponse.data.bookingid;
  76  | 
  77  |     // Create auth token
  78  |     const tokenResponse = await controller.createAuthToken();
  79  |     expect(tokenResponse.status).toBe(200);
  80  |     const authToken = tokenResponse.data.token;
  81  | 
  82  |     // Delete the booking
  83  |     const deleteResponse = await controller.deleteBooking(bookingId, authToken);
  84  |     logger.info('Booking delete response', deleteResponse);
  85  | 
  86  |     expect([201, 200]).toContain(deleteResponse.status);
  87  |   });
  88  | 
  89  |   // TC-API-005 @critical @authentication
  90  |   test('should reject delete requests without valid auth token', async () => {
  91  |     // Create a booking first
  92  |     const bookingData = generateBookingData();
  93  |     const createResponse = await controller.createBooking(bookingData);
  94  |     const bookingId = createResponse.data.bookingid;
  95  | 
  96  |     // Try to delete with invalid token
  97  |     const deleteResponse = await controller.deleteBooking(bookingId, 'invalid-token');
  98  |     logger.info('Unauthorized booking delete response', deleteResponse);
  99  | 
  100 |     expect([401, 403]).toContain(deleteResponse.status);
  101 |   });
  102 | 
  103 |   // TC-API-006 @authentication
  104 |   test('should create an auth token with valid credentials', async () => {
  105 |     const response = await controller.createAuthToken('admin', 'password');
  106 | 
  107 |     expect(response.status).toBe(200);
> 108 |     expect(response.data).toHaveProperty('token');
      |                           ^ Error: expect(received).toHaveProperty(path)
  109 |     expect(typeof response.data.token).toBe('string');
  110 |     expect(response.data.token.length).toBeGreaterThan(0);
  111 |   });
  112 | 
  113 |   // TC-API-007 @authentication @negative
  114 |   test('should reject auth token creation with invalid credentials', async () => {
  115 |     const response = await controller.createAuthToken('admin', 'wrong-password');
  116 | 
  117 |     expect([400, 401, 403]).toContain(response.status);
  118 |     expect(response.data).toHaveProperty('reason');
  119 |   });
  120 | });
  121 | 
```