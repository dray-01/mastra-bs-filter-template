# BS Filter & Comedy Engine - Mastra AI Template 🎭

A versatile Mastra AI template that demonstrates a multi-persona agent and a rich library of tools for creative and humorous text transformations. Built for the MASTRA.BUILD hackathon.

---
## Overview

This repository contains a Mastra AI project that functions as a powerful **"Comedy Engine."** It's designed to be a robust starting point for developers looking to build creative, personality-driven AI applications.

The project showcases two core Mastra concepts:
1.  A **multi-persona agent** (The "BS Filter") that can change its behavior and tone based on a user-selected "filter."
2.  A **rich library of tools** that gives the agent a wide range of capabilities beyond simple text generation, from sentiment analysis to dad joke generation.

---
## Project Structure 📁

This repository is structured into two main parts: the compliant hackathon submission and a local testing application.

* `./template/` - This directory contains the pure, framework-free, and mergeable Mastra template. **This is the official hackathon submission.**
* `./run.ts`, `package.json`, etc. - The files in the root directory form a "tester" application, a command-line interface designed to run and demonstrate the template's full functionality.

---
## Features ✨

### Multi-Persona Agent (The "BS Filter")

The core of this template is a workflow powered by a sophisticated agent with four distinct humor filters:

* **`corporate`**: The classic filter. Translates evasive business-speak into the brutally honest truth.
* **`unpassive`**: Decodes polite, passive-aggressive office-speak into the direct, angry message the sender was too afraid to write.
* **`dramatic`**: Elevates boring, everyday sentences into a hilarious, over-the-top, theatrical monologue.
* **`literal`**: Strips the figurative meaning from common idioms, revealing their absurd literal reality.

### Rich Tool Library 🧰

The agent is connected to a workflow that gives it access to six pre-built, general-purpose tools:

* **`word_counter`**: Counts the words in a piece of text.
* **`sentiment_analyzer`**: Analyzes text for positive, negative, or neutral sentiment.
* **`case_converter`**: Converts text to uppercase or lowercase.
* **`dad_joke_generator`**: Provides a random, high-quality dad joke.
* **`corporate_praise_generator`**: Creates exaggerated, buzzword-filled praise for minor accomplishments.
* **`buzzword_explainer`**: Gives a fake, humorously convoluted definition for corporate jargon.

---
## Getting Started (Running the Tester App)

To run the interactive tester application on your local machine, follow these steps.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/YourUsername/your-repo-name.git](https://github.com/YourUsername/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Create Your Environment File:**
    Copy the example environment file. Use `copy` on Windows or `cp` on Mac/Linux.
    ```bash
    # On Windows
    copy .env.example .env
    ```
    Now, open the `.env` file and add your OpenAI API key.

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Run the Application:**
    ```bash
    npm run dev
    ```
    This will compile the project and start the interactive command-line interface.

---
## Environment Variables

This template requires a Google AI API key to function.

1.  Create a **`.env`** file in the root of your project.
2.  Add your API key to the file:

    ```
    GOOGLE_GENERATIVE_AI_API_KEY="your-google-api-key-here"
    ```
You can get a free API key at the [Google AI Studio](https://makersuite.google.com/app/apikey).