// 1. Correct import path and function name
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const wordCounter = createTool({
  // 2. Property is 'id', not 'name'
  id: 'word_counter', 
  description: 'Counts the number of words in a given text.',
  inputSchema: z.object({
    text: z.string().describe('The text to count words in.'),
  }),
  // 3. The execute function receives 'context'
  execute: async ({ context }) => { 
    // The input data is inside the 'context' object
    const wordCount = context.text.trim().split(/\s+/).length;
    return { wordCount };
  },
});