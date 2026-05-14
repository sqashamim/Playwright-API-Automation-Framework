import { expect } from '@playwright/test';

// generateToken function sends auth request and returns generated token
export async function generateToken(request: any) {

  // authResponse variable stores server response after sending POST request to auth endpoint
  const authResponse = await request.post(
    'https://restful-booker.herokuapp.com/auth',
    {

      // authBody parameter passes username and password as request body
      data: {
        username: 'admin',
        password: 'password123'
      }
    }
  );

  // Verify auth response status code is 200
  expect(authResponse.status()).toBe(200);

  // authResponseBody variable stores auth response body in JSON format
  const authResponseBody = await authResponse.json();

  // Print full auth response body in terminal
  console.log(authResponseBody);

  // authToken variable stores token from auth response body
  const authToken = authResponseBody.token;

  // Print generated auth token in terminal
  console.log(authToken);

  // Return generated auth token
  return authToken;

}