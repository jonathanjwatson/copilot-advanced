# Building a Basic Webpage: An Exercise in Prompt Engineering

## Objective

The goal of this activity is to demonstrate the importance of prompt engineering by guiding you through the process of building a basic webpage using HTML, CSS, and JavaScript. You will learn how to craft effective prompts to get the best results from AI tools.

## Activity Overview

1. **Introduction to Prompt Engineering**

   - Understand what prompt engineering is and why it is important.
   - Learn best practices for crafting effective prompts.

2. **Setting Up Your Project**

   - Use the provided directory, `my-website`
   - Open up the basic file structure: `index.html`, `styles.css`, and `script.js`.

3. **Building the HTML Structure**

   - Write a prompt to generate the basic HTML structure for your webpage.
   - Include a header, a main content area, and a footer.

4. **Styling with CSS**

   - Write a prompt to generate CSS styles for your webpage.
   - Style the header, main content area, and footer.

5. **Adding Interactivity with JavaScript**
   - Write a prompt to generate JavaScript code that adds interactivity to your webpage.
   - Include a simple interactive feature, such as a button that changes the content of the main area.

## Detailed Steps

### 1. Introduction to Prompt Engineering

- **What is Prompt Engineering?**
  Prompt engineering is the process of designing and refining prompts to get the best possible results from AI tools.

- **Best Practices:**
  - Be clear and specific.
  - Provide context and examples.
  - Iterate and refine your prompts.

### 2. Setting Up Your Project

    - Use the provided directory, `my-website`
    - Open up the basic file structure: `index.html`, `styles.css`, and `script.js`.

### 3. Building the HTML Structure

- **Prompt Example:**

  ```
  Generate the basic HTML structure for a webpage with a header, main content area, and footer.
  ```

- **Minimum Expected Output:**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Basic Webpage</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <header>
        <h1>Welcome to My Webpage</h1>
      </header>
      <main>
        <p>This is the main content area.</p>
      </main>
      <footer>
        <p>&copy; 2023 My Webpage</p>
      </footer>
      <script src="script.js"></script>
    </body>
  </html>
  ```

  **Improved Prompting:**

  What could you do to improve the output of this basic webpage?

  - Pre-supply content?
  - Specify a CSS Library?
  - ...?

### 4. Styling with CSS

- **Prompt Example:**

  ```
  Generate CSS styles for the header, main content area, and footer of a basic webpage.
  ```

- **Expected Output:**

  ```css
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: #4caf50;
    color: white;
    text-align: center;
    padding: 1em 0;
  }

  main {
    padding: 1em;
  }

  footer {
    background-color: #f1f1f1;
    text-align: center;
    padding: 1em 0;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  ```

  **Improved Prompting:**

  - How does the above expected output change based on your improved prompting above?
  - How could you improve on your CSS here?
    - Instruct it to generate variables?
    - What about a dark mode?

### 5. Adding Interactivity with JavaScript

- **Prompt Example:**

  ```
  Generate JavaScript code that changes the content of the main area when a button is clicked.
  ```

- **Expected Output:**

  ```javascript
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    button.textContent = "Change Content";
    document.body.appendChild(button);

    button.addEventListener("click", function () {
      const main = document.querySelector("main");
      main.innerHTML = "<p>The content has been changed!</p>";
    });
  });
  ```

  **Improved  Prompting:**

  - If you've been able to successfully implement the code above, try adding the functionality to toggle between dark mode and light mode. 

## Conclusion

By following this activity, you will gain hands-on experience in prompt engineering and understand how to effectively use AI tools to build a basic webpage. Remember to iterate and refine your prompts to achieve the best results. 

Don't be afraid to version your files, e.g. `index-1.html` or `script-2.js`. You may find it helpful to store your prompts as comments inside the file version for this course. BUT, for best results, keep your versioned files in a separate folder. 

Happy coding!
