import { test, expect } from '@playwright/test';
import { createBooking } from '../utils/bookingHelper';

// Create a new test case named 'Get booking details'
test('Get booking details', async ({ request }) => {

  // bookingId variable stores booking id returned from createBooking helper function
  const bookingId = await createBooking(request);

  // response variable stores server response after sending GET request using dynamic booking id
  const response = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`
  );

  // Verify response status code is 200
  expect(response.status()).toBe(200);

  // responseBody variable stores GET response body in JSON format
  const responseBody = await response.json();

  // Print response body in terminal
  console.log(responseBody);

});