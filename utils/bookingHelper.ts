import { expect } from '@playwright/test';

// createBooking function sends create booking request and returns booking id
export async function createBooking(request: any) {

  // createResponse variable stores server response after sending POST request to booking endpoint
  const createResponse = await request.post(
  'https://restful-booker.herokuapp.com/booking',
    {

      // createBody parameter passes booking details as request body
      data: {
        firstname: 'Shamim',
        lastname: 'Test',
        totalprice: 1000,
        depositpaid: true,

        // bookingdates object stores checkin and checkout dates
        bookingdates: {
          checkin: '2026-05-14',
          checkout: '2026-05-20'
        },

        additionalneeds: 'Breakfast'
      }
    }
  );

  // Verify create booking response status code is 200
  expect(createResponse.status()).toBe(200);

  // createResponseBody variable stores create booking response body in JSON format
  const createResponseBody = await createResponse.json();

  // Print full create booking response body in terminal
  console.log(createResponseBody);

  // bookingId variable stores bookingid from create booking response body
  const bookingId = createResponseBody.bookingid;

  // Print created booking id in terminal
  console.log(bookingId);

  // Return created booking id
  return bookingId;

}