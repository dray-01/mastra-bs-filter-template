/**
 * A fun tool that provides a random dad joke from a predefined list.
 */
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const dadJokeGenerator = createTool({
  id: 'dad_joke_generator',
  description: 'Tells a random, high-quality dad joke.',
  // The input schema is an empty object because this tool requires no input.
  inputSchema: z.object({}),
  execute: async () => {
    const jokes = [
      "I'm afraid for the calendar. Its days are numbered.",
      "My wife said I should do lunges to stay in shape. That would be a big step forward.",
      "Why don't eggs tell jokes? They'd crack each other up.",
      "I don't trust stairs. They're always up to something.",
      "What do you call a fake noodle? An impasta."
    ];

    // Select a random joke from the array.
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];

    return { joke };
  },
});