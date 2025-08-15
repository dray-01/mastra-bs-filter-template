/**
 * A simple Mastra tool for counting words in a string.
 */
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const wordCounter = createTool({
  // The unique identifier for this tool.
  id: 'word_counter',

  // A clear description of what the tool does for the AI to understand.
  description: 'Counts the number of words in a given text.',

  // Defines the expected input using a Zod schema for validation.
  inputSchema: z.object({
    text: z.string().describe('The text to count words in.'),
  }),

  // The main logic of the tool.
  execute: async ({ context }) => {
    // We trim whitespace and split the string by spaces to get an array of words.
    const wordCount = context.text.trim().split(/\s+/).length;
    // The tool must return an object matching its implicit output schema.
    return { wordCount };
  },
});