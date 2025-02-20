# Better Error Handling with GitHub Copilot

## Overview

In this activity, you will improve error handling in a Node.js Express server using GitHub Copilot. The server has two endpoints: a success endpoint that works correctly and a failure endpoint that throws an unhandled error.

## Prerequisites

- Node.js installed on your machine

## Setup

1. Navigate to the server directory:

   ```bash
   cd /04-Developing-with-GitHub-Copilot/Activities/03-Better-Error-Handling/server
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. The server should now be running and accessible at `http://localhost:3000`.

## Task

- Access the success endpoint at `http://localhost:3000/success` to see a successful response.
- Access the failure endpoint at `http://localhost:3000/failure` to observe the unhandled error.

## Goal

Use GitHub Copilot to implement better error handling for the failure endpoint. Ensure that any errors thrown are properly caught and handled, providing a meaningful response to the client.

## Tips

- Look into Express error-handling middleware.
- Consider logging the error details for debugging purposes. (How hard would it be to have copilot create a logger instance using a new Node package?)
