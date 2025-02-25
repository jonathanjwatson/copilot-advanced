# Activity: Converting a Blazor Component to a React Component

1. **Create a New React Component File**: Create a new file named `Counter.jsx` in your React project.

2. **Use GitHub Copilot Chat** Grant access to the .razor file and the .jsx file

3. **Generate the File** Ask Copilot to convert

4. **Things to Look Out For**:
   - **State Management**: Ensure that state variables and methods are correctly converted to React's `useState` and other hooks.
   - **Event Handling**: Convert Blazor's event handlers (e.g., `@onclick`) to React's event handlers (e.g., `onClick`).
   - **JSX Syntax**: Ensure that the HTML-like syntax in Blazor is correctly converted to JSX.

## Bonus: Generate Test Cases with `react-testing-library`

1. **Create a Test File**: Create a new file named `Counter.test.jsx` alongside your `Counter.jsx` file.

2. **Write Test Cases**:

   - Use GitHub Copilot to generate test cases by typing a comment such as `// Test cases for Counter component`.
   - Ensure that the tests cover the following scenarios:
     - The component renders correctly.
     - The counter increments when the button is clicked.
     - The initial state of the counter is correct.

Question: How can we be sure that we have accurately mimicked the original component's functionality?