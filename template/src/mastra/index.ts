import { Mastra } from '@mastra/core/mastra';
import { filterWorkflow } from './workflows/filter-workflow';

export const mastra = new Mastra({
  workflows: {
    'filter-workflow': filterWorkflow,
  },
});