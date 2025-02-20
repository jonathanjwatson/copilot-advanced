# Self-Hosted Activity: Exploring Ollama Models

Welcome to the self-hosted activity where you will install Ollama locally on your machine and explore various models. This activity will help you understand how to set up and use Ollama for your generative AI projects.

## Objectives

- Install Ollama on your local machine
- Explore different models available in Ollama
- Run sample code to generate outputs using these models

## Prerequisites

- A computer with internet access
- Basic knowledge of command-line interface

## Steps

### 1. Install Ollama

Follow the instructions below to install Ollama on your local machine:

1. **Download the installer**: Visit the [Ollama website](https://ollama.com/download) and download the installer for your operating system.
2. **Run the installer**: Follow the on-screen instructions to complete the installation process.
3. **Verify the installation**: Open your terminal and run the following command to verify that Ollama is installed correctly:
   ```sh
   ollama --version
   ```

### 2. Explore Ollama Models

Ollama offers a variety of models for different tasks. To explore the available models, use the following command:

```sh
ollama list models
```

### 3. Experiment with Different Models

Try using different models and prompts to see how the outputs vary. Update the `model` and `prompt` variables in the sample code to experiment with different scenarios.

[Ollama Model Library](https://ollama.com/library)

## Conclusion

By completing this activity, you have successfully installed Ollama on your local machine and explored various models. You are now ready to use Ollama for your generative AI projects. (NOTE: for this course, it is recommended you turn Ollama OFF to preserve computing power.)

## Bonus: Install Open WebUI

If you find the terminal interface of Ollama offputting, you may be interested in installing [Open WebUI](https://openwebui.com/). This will provide a user-friendly GUI similar to ChatGPT. Best of all, it's open-source. [GitHub Repo](https://github.com/open-webui/open-webui).

NOTE: This will require you to have Docker Desktop installed on your machine. If you are unfamiliar with Docker, please do not attempt this process during class.
