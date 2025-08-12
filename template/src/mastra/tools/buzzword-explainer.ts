/**
 * A humorous tool that provides a fake, convoluted definition for corporate jargon.
 */
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const buzzwordExplainer = createTool({
  id: 'buzzword_explainer',
  description: 'Provides a humorously complex and nonsensical explanation for a given corporate buzzword.',
  inputSchema: z.object({
    buzzword: z.string().describe('The corporate buzzword to explain, e.g., "synergy"'),
  }),
  execute: async ({ context }) => {
    // Our "knowledge base" of buzzwords and their fake definitions.
    const definitions: { [key: string]: string } = {
      synergy: 'The quantum entanglement of collaborative mindsets, resulting in a multi-dimensional array of actionable outcomes.',
      'circle back': 'A temporal paradox wherein a team agrees to discuss a topic in a future that never arrives.',
      'low-hanging fruit': 'The initial, deceptively simple tasks in a project, designed to boost morale before the inevitable descent into chaos.',
      'paradigm shift': 'What happens when management discovers a new business book and decides to restructure the entire company based on chapter three.',
      leverage: 'The art of using someone else’s resources, time, or ideas to achieve your own goals, while making it sound like teamwork.',
    };

    const keyword = context.buzzword.toLowerCase();
    // Look up the definition, or provide a default if it's not found.
    const explanation = definitions[keyword] || `A state-of-the-art concept so advanced it defies simple explanation, but is crucial for our Q4 objectives.`;
    
    return { explanation };
  },
});