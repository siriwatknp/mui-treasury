import { convertToModelMessages, streamText, type UIMessage } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: "openai/gpt-4.1-nano",
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
