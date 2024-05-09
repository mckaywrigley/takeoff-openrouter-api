import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY
});

async function main() {
  const response = await openai.chat.completions.create({
    model: "meta-llama/llama-3-8b-instruct:free",
    messages: [{ role: "user", content: "Say this is a test" }]
  });
  console.log(response);

  const message = response.choices[0].message;
  console.log(message);
}

main();
