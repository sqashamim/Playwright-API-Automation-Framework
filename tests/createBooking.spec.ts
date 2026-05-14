import { test, expect } from '@playwright/test';

// Create a new test case named 'Create booking'
test('Create booking', async ({ request }) => {

  // request object sends POST request to booking endpoint
  const response = await request.post(
    'https://restful-booker.herokuapp.com/booking',
    {

      // Send booking data as request body
      data: {
        firstname: 'Samsuzzoha',
        lastname: 'Shamim',
        totalprice: 1000,
        depositpaid: true,

        bookingdates: {
          checkin: '2026-05-14',
          checkout: '2026-05-20'
        },

        additionalneeds: 'Breakfast'
      }
    }
  );

  // Verify response status code is 200
  expect(response.status()).toBe(200);

  // response.json() stores response body into body variable
  const body = await response.json();

  // Print response body in terminal
  console.log(body);

});