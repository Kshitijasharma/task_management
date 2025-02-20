import { generateText } from "@ai-sdk/togetherai";
import * as dotenv from "dotenv";

dotenv.config();

export async function askTogetherAI(prompt: string): Promise<string> {
  const response = await generateText({
    model: "mistralai/Mistral-7B-Instruct",
    messages: [{ role: "user", content: prompt }],
    apiKey: process.env.TOGETHER_API_KEY,
  });

  return response.choices[0].message.content || "No response received.";
}
