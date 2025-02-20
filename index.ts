import dotenv from "dotenv";
dotenv.config();

import { generateText } from "@ai-sdk/togetherai";

console.log("Task Management AI is running...");

// Example function using AI SDK (Modify as needed)
async function getAIResponse(prompt: string) {
    const response = await generateText({
        model: "togetherai",
        prompt
    });

    console.log("AI Response:", response);
}

getAIResponse("Hello, AI!");
