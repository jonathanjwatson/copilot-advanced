# 06-Test-Theory README

## Overview

In this activity, we will explore best practices for writing tests for our payment portal. With data-testids and a series of validations in place, our goal is to create robust and reliable tests that ensure the functionality and security of our payment system.

## Why Are We Doing This?

We aim to be smarter than the machines! By clearly understanding our end goal, we can write better prompts, resulting in better code and, in this case, better tests. Effective end-to-end tests help us catch issues early, improve code quality, and provide confidence in our application's performance.

## Objectives

- Understand the distinction between unit tests and end-to-end tests.
- Appreciate the importance of end-to-end testing.
- Learn best practices for writing tests.
- Implement tests using data-testids and validations.
- Ensure the reliability and security of the payment portal.

## Best Practices for Writing Tests

1. **Clear Test Cases**: Define clear and concise test cases that cover all possible scenarios.
2. **Validation Checks**: Implement validation checks to ensure data integrity and security.
3. **Automate Tests**: Automate tests to run frequently and catch issues early.
4. **Maintainability**: Write tests that are easy to maintain and update as the application evolves.

### Unit Tests

- Single describe block at the top of the file.
- Nested describe blocks for individual features.
- Nested it (or test) blocks for unique outcomes.

### End-to-End Tests

- Expensive to run.
- May choose to validate smaller aspects (individual input validation)
- Split happy path vs sad path

## Conclusion

By following these best practices and steps, we can create effective end-to-end tests that enhance the reliability and security of our payment portal. Let's get started and write some great tests!
