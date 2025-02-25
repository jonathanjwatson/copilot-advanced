# Activity: Integrating Continue with Ollama in Visual Studio Code

## Objective

In this activity, you will learn how to install Continue in Visual Studio Code and integrate it with a locally running instance of Ollama.

## Prerequisites

- Visual Studio Code installed on your machine
- A locally running instance of Ollama

## Steps

### Step 1: Install Continue Extension in Visual Studio Code

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. In the search box, type `Continue`.
4. Find the Continue extension from the list and click the `Install` button.

### Step 2: Configure Continue

1. After installing the Continue extension, click on the gear icon next to the Continue extension in the Extensions view and select `Extension Settings`.
2. In the settings, you will need to configure the Continue extension to connect to your locally running instance of Ollama.

### Step 3: Install and Run Ollama

1. If you haven't already, install Ollama by following the instructions on the [Ollama website](https://www.ollama.dev/).
2. Start Ollama by running the following command in your terminal:
   ```bash
   ollama start
   ```
3. Ensure that Ollama is running and accessible on the default port.

### Step 4: Integrate Continue with Ollama

1. In Visual Studio Code, open the Command Palette by pressing `Ctrl+Shift+P`.
2. Type `Continue: Connect to Ollama` and select it.
3. Enter the URL of your locally running Ollama instance (e.g., `http://localhost:3000`).

### Step 5: Verify Integration

1. Open a project in Visual Studio Code.
2. Use the Continue extension to interact with your codebase.
3. Verify that the Continue extension is successfully communicating with Ollama by checking the output in the Continue panel.

## Conclusion

You have successfully installed and configured the Continue extension in Visual Studio Code and integrated it with a locally running instance of Ollama. You can now leverage the capabilities of both tools to enhance your development workflow.
