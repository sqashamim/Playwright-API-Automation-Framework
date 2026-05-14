import { test, expect } from '@playwright/test';
import { createBooking } from '../utils/bookingHelper';

// Create a new test case named 'Get created booking'
test('Get created booking', async ({ request }) => {

  // bookingId variable stores booking id returned from createBooking helper function
const bookingId = await createBooking(request);

  // getResponse variable stores server response after sending GET request using dynamic booking id
  const getResponse = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`
  );

  // Verify GET booking response status code is 200
  expect(getResponse.status()).toBe(200);

  // getResponseBody variable stores GET booking response body in JSON format
  const getResponseBody = await getResponse.json();

  // Verify firstname value is Shamim in GET booking response body
  expect(getResponseBody.firstname).toBe('Shamim');

  // Print retrieved booking details in terminal
  console.log(getResponseBody);

});