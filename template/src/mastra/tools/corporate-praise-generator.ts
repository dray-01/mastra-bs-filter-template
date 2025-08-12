/**
 * A humorous tool that generates exaggerated corporate praise for a minor task.
 */
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const corporatePraiseGenerator = createTool({
  id: 'corporate_praise_generator',
  description: 'Generates over-the-top, buzzword-heavy corporate praise for a minor accomplishment.',
  inputSchema: z.object({
    task: z.string().describe('The minor task that was completed, e.g., "answered an email"'),
  }),
  execute: async ({ context }) => {
    // A list of praise templates.
    const praises = [
      `Your work on {task} has been a paradigm shift in our operational synergy. Truly a game-changer.`,
      `We need to circle back and appreciate the incredible value-add you brought by {task}. Let's leverage this momentum.`,
      `The cross-functional impact of you {task} is off the charts. You've really moved the needle on our core KPIs.`,
      `Let's unpack the innovative disruption you've spearheaded by {task}. A truly scalable solution.`
    ];

    // Select a random template and inject the user's task into it.
    const randomIndex = Math.floor(Math.random() * praises.length);
    const praise = praises[randomIndex].replace('{task}', context.task);

    return { praise };
  },
});