/**
 * A utility tool to convert the case of a given string.
 */
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const caseConverter = createTool({
  id: 'case_converter',
  description: 'Converts a given text to either uppercase or lowercase.',
  inputSchema: z.object({
    text: z.string().describe('The text to convert.'),
    // z.enum ensures the format is one of the two allowed values.
    format: z.enum(['upper', 'lower']).describe('The desired case format.'),
  }),
  execute: async ({ context }) => {
    let convertedText: string;

    if (context.format === 'upper') {
      convertedText = context.text.toUpperCase();
    } else {
      convertedText = context.text.toLowerCase();
    }

    return { convertedText };
  },
});