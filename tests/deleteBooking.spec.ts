import { test, expect } from '@playwright/test';
import { generateToken } from '../utils/authHelper';
import { createBooking } from '../utils/bookingHelper';

// Create a new test case named 'Delete booking'
test('Delete booking', async ({ request }) => {

  // authToken variable stores generated token returned from generateToken helper function
const authToken = await generateToken(request);

  // bookingId variable stores booking id returned from createBooking helper function
const bookingId = await createBooking(request);

  // deleteResponse variable stores server response after sending DELETE request using dynamic booking id
  const deleteResponse = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {

      // headers parameter passes auth token for authorization
      headers: {
        Cookie: `token=${authToken}`
      }
    }
  );

  // Verify delete booking response status code is 201
  expect(deleteResponse.status()).toBe(201);

  // getDeletedResponse variable stores server response after sending GET request using deleted booking id
  const getDeletedResponse = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`
  );

  // Verify deleted booking GET response status code is 404
  expect(getDeletedResponse.status()).toBe(404);

  // Print deleted booking GET response status code in terminal
  console.log(getDeletedResponse.status());

});