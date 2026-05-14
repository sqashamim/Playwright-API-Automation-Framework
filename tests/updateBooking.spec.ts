import { test, expect } from '@playwright/test';
import { generateToken } from '../utils/authHelper';
import { createBooking } from '../utils/bookingHelper';

// Create a new test case named 'Update booking'
test('Update booking', async ({ request }) => {

  // authToken variable stores generated token returned from generateToken helper function
const authToken = await generateToken(request);

  // bookingId variable stores booking id returned from createBooking helper function
const bookingId = await createBooking(request);

  // updateResponse variable stores server response after sending PUT request using dynamic booking id
  const updateResponse = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {

      // headers parameter passes auth token for authorization
      headers: {
        Cookie: `token=${authToken}`
      },

      // updateBody parameter passes updated booking details as request body
      data: {
        firstname: 'Updated Shamim',
        lastname: 'Updated Test',
        totalprice: 2000,
        depositpaid: false,

        // bookingdates object stores updated checkin and checkout dates
        bookingdates: {
          checkin: '2026-06-01',
          checkout: '2026-06-10'
        },

        additionalneeds: 'Lunch'
      }
    }
  );

  // Verify update booking response status code is 200
  expect(updateResponse.status()).toBe(200);

  // updateResponseBody variable stores update booking response body in JSON format
  const updateResponseBody = await updateResponse.json();

  // Print updated booking response body in terminal
  console.log(updateResponseBody);

  // Verify firstname value is updated successfully
  expect(updateResponseBody.firstname).toBe('Updated Shamim');

});