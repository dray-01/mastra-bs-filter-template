import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';
import { generateText } from 'ai';
// 1. Import the agent's configuration instead of defining it here
import { bsFilterAgentInstructions, bsFilterAgentModel } from '../agents/bs-filter-agent';

// --- Step Definition ---
const filterStep = createStep({
  id: 'filter-step',
  inputSchema: z.object({
    input: z.string(),
  }),
  outputSchema: z.object({
    output: z.string(),
  }),
  execute: async ({ inputData }) => {
    // 2. Use the imported configuration to make the AI call
    const { text } = await generateText({
      model: bsFilterAgentModel,
      system: bsFilterAgentInstructions,
      prompt: inputData.input,
    });

    return { output: text };
  },
});

// --- Workflow Definition ---
export const filterWorkflow = createWorkflow({
  id: 'filter-workflow',
  description: 'Applies a selected humor filter to a piece of text.',
  inputSchema: z.object({
    input: z.string(),
  }),
  outputSchema: z.object({
    output: z.string(),
  }),
})
  .then(filterStep)
  .commit();