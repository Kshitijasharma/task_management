import { askTogetherAI } from "./llm";

export async function executeTask(task: string) {
  const response = await askTogetherAI(`Complete the following task: "${task}"`);
  console.log(`✅ Task Result: ${response}`);
}
