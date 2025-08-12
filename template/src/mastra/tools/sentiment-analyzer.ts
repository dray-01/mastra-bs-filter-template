/**
 * A basic sentiment analysis tool that scores text based on keywords.
 */
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const sentimentAnalyzer = createTool({
  id: 'sentiment_analyzer',
  description: 'Analyzes the sentiment of a given text to determine if it is positive, negative, or neutral.',
  inputSchema: z.object({
    text: z.string().describe('The text to analyze.'),
  }),
  execute: async ({ context }) => {
    // Simple lists of positive and negative words for scoring.
    const positiveWords = ['happy', 'excellent', 'great', 'good', 'love', 'awesome'];
    const negativeWords = ['sad', 'terrible', 'bad', 'hate', 'awful'];

    let score = 0;
    const words = context.text.toLowerCase().split(/\s+/);

    // Iterate through the text and adjust the score based on word matches.
    for (const word of words) {
      if (positiveWords.includes(word)) score++;
      if (negativeWords.includes(word)) score--;
    }

    // Determine the final sentiment based on the total score.
    let sentiment: 'positive' | 'negative' | 'neutral' = 'neutral';
    if (score > 0) sentiment = 'positive';
    if (score < 0) sentiment = 'negative';

    return { sentiment, score };
  },
});