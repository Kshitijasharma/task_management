import { askTogetherAI } from "./llm";
import { executeTask } from "./executor";

export async function runAgent(objective: string) {
  console.log(`🔍 Generating tasks for: ${objective}`);

  const response = await askTogetherAI(
    `Given the objective: "${objective}", list the tasks required to complete it.`
  );

  const tasks = response.split("\n").filter(task => task.trim() !== "");
  console.log("\n✅ Generated Tasks:");
  tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));

  for (const task of tasks) {
    console.log(`\n🚀 Executing Task: ${task}`);
    await executeTask(task);
  }
}
