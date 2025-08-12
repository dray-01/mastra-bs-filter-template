import 'dotenv/config';
// This is the direct, relative path to the index file
import { mastra } from './template/src/mastra';

async function main() {
  const inquirer = (await import('inquirer')).default;

  console.log('--- The BS Filter ---');
  console.log('Choose a BS filter type. Type "exit" to quit.');

  const filters = ['corporate', 'unpassive', 'dramatic', 'literal'];

  while (true) {
    const answers = await inquirer.prompt<{ persona: string; text: string }>([
      {
        type: 'list', name: 'persona', message: 'Choose a BS filter type:', choices: filters,
      },
      {
        type: 'input', name: 'text', message: 'Enter text to filter:',
      },
    ]);

    if (answers.text.toLowerCase() === 'exit') break;

    const formattedInput = `filter: ${answers.persona}, text: "${answers.text}"`;
    
    const run = await mastra.getWorkflow('filter-workflow').createRunAsync();
    const result = await run.start({
      inputData: {
        input: formattedInput,
      },
    });

    if (result.status === 'success') {
      console.log(`\n🤖 Result: ${result.result.output}\n`);
    } else {
      console.error(`\nWorkflow failed with status: ${result.status}\n`);
    }
  }
}

main();