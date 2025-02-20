const { test, expect, describe } = require("@playwright/test");

describe("Payment Form Tests", () => {
  test("User can successfully submit the payment form with valid inputs", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000"); // Adjust the URL to your local server

    await page.fill('[data-testid="name-input"]', "John Doe");
    await page.fill('[data-testid="zip-input"]', "12345");
    await page.fill('[data-testid="cardNumber-input"]', "1234567812345678");
    await page.fill('[data-testid="expMonth-input"]', "12");
    await page.fill('[data-testid="expYear-input"]', "2025");
    await page.fill('[data-testid="cvc-input"]', "123");

    await page.click('button[type="submit"]');

    // Check that no error messages are displayed
    const errorMessages = await page.$$(".error-message");
    expect(errorMessages.length).toBe(0);

    // Optionally, check for a success message or some indication of successful form submission
    await expect(page).toHaveURL("http://localhost:3000/success"); // Adjust the URL to your success page
  });

  test("User enters bad data, sees error messages, then enters good data and successfully submits", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000"); // Adjust the URL to your local server

    // Enter bad data
    await page.fill('[data-testid="name-input"]', "");
    await page.fill('[data-testid="zip-input"]', "abcde");
    await page.fill('[data-testid="cardNumber-input"]', "1111222233334444");
    await page.fill('[data-testid="expMonth-input"]', "13");
    await page.fill('[data-testid="expYear-input"]', "2020");
    await page.fill('[data-testid="cvc-input"]', "12");

    await page.click('button[type="submit"]');

    // Check that error messages are displayed
    let errorMessages = await page.$$(".error-message");
    expect(errorMessages.length).toBeGreaterThan(0);

    // Enter good data
    await page.fill('[data-testid="name-input"]', "John Doe");
    await page.fill('[data-testid="zip-input"]', "12345");
    await page.fill('[data-testid="cardNumber-input"]', "1234567812345678");
    await page.fill('[data-testid="expMonth-input"]', "12");
    await page.fill('[data-testid="expYear-input"]', "2025");
    await page.fill('[data-testid="cvc-input"]', "123");

    await page.click('button[type="submit"]');

    // Check that no error messages are displayed
    errorMessages = await page.$$(".error-message");
    expect(errorMessages.length).toBe(0);

    // Optionally, check for a success message or some indication of successful form submission
    await expect(page).toHaveURL("http://localhost:3000/success"); // Adjust the URL to your success page
  });
});
