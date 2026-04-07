import { ollama } from "ollama-ai-provider-v2";
// To switch to other providers, e.g. Google Gemini:
// create .env.local with GOOGLE_GENERATIVE_AI_API_KEY=<your_api_key>
// `npm install @ai-sdk/google` and uncomment the import below
// import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText, stepCountIs, tool } from "ai";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Convert UIMessage[] to ModelMessage[] format
    const modelMessages = convertToModelMessages(messages);

    const result = streamText({
      model: ollama("llama3.2"),
      messages: modelMessages,
      temperature: 0.7,
      stopWhen: stepCountIs(5),
      tools: {
        getWeather: tool({
          description: "Get the current weather for a city",
          inputSchema: z.object({
            city: z.string().describe("The city to get weather for"),
            unit: z
              .enum(["celsius", "fahrenheit"])
              .describe("The temperature unit")
              .default("celsius"),
          }),
          execute: async ({
            city,
            unit,
          }: {
            city: string;
            unit: "celsius" | "fahrenheit";
          }) => {
            // Simulate API call with mock data
            const temp = unit === "celsius" ? 22 : 72;
            return {
              city,
              temperature: temp,
              unit,
              condition: "Sunny",
              humidity: 65,
            };
          },
        }),
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process chat request. Make sure Ollama is running.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
