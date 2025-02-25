# End-to-End Testing with Playwright

## Overview of End-to-End (E2E) Tests

End-to-End (E2E) tests are designed to test the complete functionality of an application by simulating real user scenarios. These tests ensure that the application behaves as expected from start to finish, covering all integrated components and systems.

## Overview of Playwright

Playwright is a Node.js library developed by Microsoft for automating web browsers. It enables developers to write reliable and fast end-to-end tests for web applications. Playwright supports multiple browsers, including Chromium, Firefox, and WebKit, and provides a rich API to interact with web pages.

## Manually Writing a Playwright Test

### Step 1: Install Playwright on Your Computer (this will take some time)

```bash
npx playwright install
```

### Step 2: Install Playwright in the Project

Cd into the app folder and run the following command:

```bash
npm install @playwright

```

### Step 3: Create a Test File

Create a new file named `example.spec.js` in your tests directory and add the following code:

```javascript
const { test, expect } = require("@playwright/test");

test("basic test", async ({ page }) => {
  await page.goto("https://example.com");
  const title = await page.title();
  expect(title).toBe("Example Domain");
});
```

### Step 4: Run the Test

To run the test, add the following script to your `package.json`:

```json
"scripts": {
    "test": "playwright test"
}
```

Then, execute the test using the command:

```bash
npm test
```

Now that you can run Playwright, ask GitHub Copilot to write an End-to-End test for your Payment Portal.

## Writing an End-to-End Test for the Payment Portal

### Step 5: Create a Test File for the Payment Portal

Create a new file named `payment.spec.js` in your tests directory and ask GitHub Copilot to write a test for you.

NOTE: This is most easily accomplished using Copilot Chat and adding files for it to reference.

This will run the `payment.spec.js` test file which unfortunately will fail because you are not running the React app.

## Bonus: setup a new react app, drop the Payment Portal component in and get the tests to pass.
