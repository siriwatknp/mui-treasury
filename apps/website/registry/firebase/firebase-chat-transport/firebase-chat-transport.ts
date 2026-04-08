/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  generateId as generateIdFunc,
  IdGenerator,
  stepCountIs,
  type ChatTransport,
  type UIMessageChunk,
  type StopCondition,
  type Tool,
  type ToolSet,
  type StepResult,
} from "ai";
import { UIMessage } from "@ai-sdk/react";
import {
  getAI,
  getGenerativeModel,
  GoogleAIBackend,
  type ChatSession,
  type EnhancedGenerateContentResponse,
  type FileDataPart,
  type FunctionCall,
  type FunctionDeclaration,
  type FunctionResponsePart,
  type GenerativeModel,
  type HybridParams,
  type InlineDataPart,
  type ModelParams,
  type Part,
  type Tool as FirebaseAiTool,
} from "firebase/ai";
import type { FirebaseApp } from "firebase/app";
import { z } from "zod";

type ProviderMetadata = Record<string, any>;

/**
 * Options for initializing FirebaseChatTransport.
 *
 * Note: Firebase SDK types are not imported to avoid hard dependency.
 * Users must install firebase package separately.
 */
export interface FirebaseChatTransportOptions {
  /**
   * Initialized Firebase app instance.
   * Must be created via initializeApp() from 'firebase/app'.
   */
  firebaseApp: FirebaseApp; // FirebaseApp type

  /**
   * ID generator function for message IDs.
   * @default AI SDK's generateId
   */
  generateId?: IdGenerator;

  /**
   * Parameters for configuring the generative model.
   * Includes model name, system instructions, generation config, safety settings, and tools.
   * @see https://firebase.google.com/docs/reference/js/ai.modelparams
   */
  modelParams: ModelParams | HybridParams;

  /**
   * AI SDK tools for client-side function calling.
   * Tools are converted to Firebase FunctionDeclarations and executed automatically.
   * @see https://firebase.google.com/docs/ai-logic/function-calling
   */
  tools?: Record<string, Tool>;

  /**
   * Enable grounding with Google Search.
   * When enabled, responses may include grounding metadata in message.metadata.grounding.
   * @see https://firebase.google.com/docs/ai-logic/grounding-google-search
   */
  enableGoogleSearch?: boolean;

  /**
   * Stop condition(s) for tool execution loop.
   * Controls when to stop executing tools and return final response.
   * Uses the same API as generateText/streamText stopWhen.
   *
   * @default stepCountIs(20)
   * @example
   * // Stop after 5 iterations
   * stopWhen: stepCountIs(5)
   *
   * @example
   * // Stop when specific tool is called
   * stopWhen: hasToolCall('final_answer')
   *
   * @example
   * // Multiple conditions (OR logic - stops if ANY condition is met)
   * stopWhen: [stepCountIs(10), hasToolCall('done')]
   */
  stopWhen?: StopCondition<any> | Array<StopCondition<any>>;
}

async function isStopConditionMet<TOOLS extends ToolSet>({
  stopConditions,
  steps,
}: {
  stopConditions: Array<StopCondition<TOOLS>>;
  steps: Array<StepResult<TOOLS>>;
}): Promise<boolean> {
  return (
    await Promise.all(stopConditions.map((condition) => condition({ steps })))
  ).some((result) => result);
}

/**
 * Client-side ChatTransport implementation for Firebase AI Logic (Gemini).
 *
 * Enables browser-based chat streaming using Firebase's sendMessageStream API
 * with multi-turn conversation support and automatic tool execution.
 *
 * Features:
 * - Multi-turn text streaming
 * - Multimodal input/output (images, videos, audio)
 *   - Data URLs (base64): converted to inlineData
 *   - Hosted URLs (http/https): converted to fileData with fileUri
 *   - YouTube URLs supported for video analysis
 * - Interleaved text and image generation (requires gemini-2.5-flash-image model)
 * - Thinking/reasoning support (via thoughtSummary, streamed incrementally)
 * - Client-side tool/function calling with automatic execution
 * - Tool call loop (model can call multiple tools until final response)
 * - Configurable stop conditions (via stopWhen option, same API as generateText)
 * - Google Search grounding (via enableGoogleSearch option)
 *
 * Limitations:
 * - Single active chat at a time
 * - No stream reconnection (client-side)
 * - Client-side tool execution only (no server-side tool execution)
 * - No tool approval workflow (tools execute immediately)
 *
 * @example Basic usage
 * ```ts
 * import { initializeApp } from 'firebase/app';
 * import { FirebaseChatTransport } from '@ai-sdk/ui-utils';
 *
 * const app = initializeApp({ ... });
 * const transport = new FirebaseChatTransport({
 *   firebaseApp: app,
 *   modelParams: { model: 'gemini-2.5-flash' }
 * });
 * ```
 *
 * @example With thinking enabled
 * ```ts
 * const transport = new FirebaseChatTransport({
 *   firebaseApp: app,
 *   modelParams: {
 *     model: 'gemini-2.5-flash',
 *     generationConfig: {
 *       thinkingConfig: { includeThoughts: true }
 *     }
 *   }
 * });
 * // Reasoning parts will be streamed as 'reasoning' type in message.parts
 * ```
 *
 * @example With interleaved text and image generation
 * ```ts
 * import { ResponseModality } from 'firebase/ai';
 *
 * const transport = new FirebaseChatTransport({
 *   firebaseApp: app,
 *   modelParams: {
 *     model: 'gemini-2.5-flash-image',
 *     generationConfig: {
 *       responseModalities: [ResponseModality.TEXT, ResponseModality.IMAGE]
 *     }
 *   }
 * });
 * // Images will be emitted as 'file' chunks with data URLs
 * ```
 *
 * @example With tools
 * ```ts
 * import { tool } from 'ai';
 * import { z } from 'zod';
 *
 * const transport = new FirebaseChatTransport({
 *   firebaseApp: app,
 *   modelParams: { model: 'gemini-2.5-flash' },
 *   tools: {
 *     getWeather: tool({
 *       description: 'Get weather for a city',
 *       inputSchema: z.object({
 *         city: z.string(),
 *         state: z.string(),
 *       }),
 *       execute: async ({ city, state }) => {
 *         return { temperature: 72, conditions: 'sunny' };
 *       },
 *     }),
 *   },
 * });
 * ```
 *
 * @example With Google Search grounding
 * ```ts
 * const transport = new FirebaseChatTransport({
 *   firebaseApp: app,
 *   modelParams: { model: 'gemini-2.5-flash' },
 *   enableGoogleSearch: true,
 * });
 * // Grounding metadata available in message.metadata.grounding:
 * // - webSearchQueries: string[]
 * // - searchEntryPoint: { renderedContent: string } (required HTML to render)
 * // - groundingChunks: Array<{ web: { uri, title } }>
 * // - groundingSupports: Array<{ segment, groundingChunkIndices, confidenceScores }>
 * ```
 *
 * @example With YouTube URLs in text
 * ```ts
 * // YouTube URLs in text are automatically extracted as fileData parts!
 * // User input: "Summarize this video https://youtube.com/watch?v=xxx"
 * // Converted to: [{ text: "Summarize this video" }, { fileData: { fileUri: "...", mimeType: "video/*" } }]
 *
 * // Supported YouTube URL formats:
 * // - https://www.youtube.com/watch?v=VIDEO_ID
 * // - https://youtube.com/watch?v=VIDEO_ID
 * // - https://youtu.be/VIDEO_ID
 * // - https://www.youtube.com/embed/VIDEO_ID
 * ```
 *
 * @example With custom stop conditions
 * ```ts
 * import { stepCountIs, hasToolCall } from 'ai';
 *
 * const transport = new FirebaseChatTransport({
 *   firebaseApp: app,
 *   modelParams: { model: 'gemini-2.5-flash' },
 *   tools: { /* ... *\/ },
 *   // Stop after 5 tool iterations OR when 'done' tool is called
 *   stopWhen: [stepCountIs(5), hasToolCall('done')],
 * });
 * ```
 */
export class FirebaseChatTransport<UI_MESSAGE extends UIMessage>
  implements ChatTransport<UI_MESSAGE>
{
  private firebaseModel: GenerativeModel;
  private currentChatId: string | null = null;
  private chatSession: ChatSession | null = null;
  private generateId: IdGenerator;
  private tools: Record<string, Tool>;
  private stopConditions: Array<StopCondition<any>>;

  constructor(options: FirebaseChatTransportOptions) {
    const ai = getAI(options.firebaseApp, { backend: new GoogleAIBackend() });

    this.tools = options.tools || {};
    this.generateId = options.generateId ?? generateIdFunc;

    // Initialize stop conditions (default: stepCountIs(20) to match server-side)
    const stopWhen = options.stopWhen ?? stepCountIs(20);
    this.stopConditions = Array.isArray(stopWhen) ? stopWhen : [stopWhen];

    const functionDeclarations = Object.entries(this.tools).map(
      ([name, tool]) => this.convertToolToFunctionDeclaration(name, tool),
    );

    // Build tools array with function declarations and/or Google Search
    const toolsArray: Array<FirebaseAiTool> = [];
    if (functionDeclarations.length > 0) {
      toolsArray.push({ functionDeclarations });
    }
    if (options.enableGoogleSearch) {
      toolsArray.push({ googleSearch: {} });
    }

    const modelParams = { ...options.modelParams } as ModelParams;
    if (toolsArray.length > 0) {
      modelParams.tools = toolsArray;
    }

    this.firebaseModel = getGenerativeModel(ai, modelParams);
  }

  async sendMessages(
    options: Parameters<ChatTransport<UI_MESSAGE>["sendMessages"]>[0],
  ): Promise<ReadableStream<UIMessageChunk>> {
    const { chatId, messages, abortSignal } = options;

    // Check if chat session needs reset
    if (this.currentChatId !== chatId) {
      this.currentChatId = chatId;
      this.chatSession = null;
    }

    return new ReadableStream<UIMessageChunk>({
      start: async (controller) => {
        let isAborted = false;

        // Listen for abort signal
        if (abortSignal) {
          abortSignal.addEventListener("abort", () => {
            isAborted = true;
            controller.enqueue({ type: "abort" });
            controller.close();
          });
        }

        try {
          // Extract and preprocess only the last user message
          const lastUserMessage = await this.extractLastUserMessage(messages);

          // Create or reuse chat session
          if (!this.chatSession) {
            // New session: convert all prior messages as history
            const priorMessages = messages.slice(0, -1);
            await this.preprocessMessages(priorMessages);
            const history =
              this.convertMessagesToFirebaseContent(priorMessages);
            this.chatSession = this.firebaseModel.startChat({
              history: history.length > 0 ? history : undefined,
            });
          }

          // Generate message ID for tracking
          const messageId = this.generateId();

          // Tool execution loop
          let continueLoop = true;
          let startEmitted = false;
          let pendingFunctionResponses: FunctionResponsePart[] | null = null;
          // Track steps for stop condition evaluation
          const steps: StepResult<any>[] = [];

          while (continueLoop && !isAborted) {
            let result;

            if (pendingFunctionResponses) {
              // Send function responses from previous iteration
              result = await this.chatSession.sendMessageStream(
                pendingFunctionResponses,
              );
              pendingFunctionResponses = null;
            } else {
              // Send initial user message
              result =
                await this.chatSession.sendMessageStream(lastUserMessage);
            }

            // Emit start chunk after connection established (once)
            if (!startEmitted) {
              controller.enqueue({
                type: "start",
                messageId,
              });
              startEmitted = true;
            }

            // Stream text and handle interleaved images
            let hasReasoning = false;
            let reasoningId: string | null = null;
            let lastProviderMetadata: ProviderMetadata | undefined = undefined;

            // Simple state: track current text part and emitted images
            let currentTextId: string | null = null;
            const emittedImageHashes = new Set<string>();

            for await (const chunk of result.stream) {
              if (isAborted) break;

              // Extract provider metadata from chunk
              const providerMetadata = this.extractProviderMetadata(chunk);
              lastProviderMetadata = providerMetadata;

              // Access parts structure for interleaved streaming
              const chunkParts = chunk.candidates?.[0]?.content?.parts;

              // Handle thinking/reasoning content (streamed)
              // If thought exists, process ONLY reasoning and skip text
              const thought = chunk.thoughtSummary?.();
              if (thought) {
                if (!hasReasoning) {
                  reasoningId = this.generateId();
                  controller.enqueue({
                    type: "reasoning-start",
                    id: reasoningId,
                    providerMetadata,
                  });
                  hasReasoning = true;
                }

                controller.enqueue({
                  type: "reasoning-delta",
                  id: reasoningId!,
                  delta: thought,
                  providerMetadata,
                });
                continue; // Skip text processing while thinking
              }

              // Close reasoning when thought stops growing and we move to text
              if (hasReasoning && reasoningId) {
                controller.enqueue({
                  type: "reasoning-end",
                  id: reasoningId,
                  providerMetadata,
                });
                hasReasoning = false;
                reasoningId = null;
              }

              if (chunkParts && chunkParts.length > 0) {
                for (const part of chunkParts) {
                  if ("text" in part && part.text) {
                    // Start text part if not already open
                    if (!currentTextId) {
                      currentTextId = this.generateId();
                      controller.enqueue({
                        type: "text-start",
                        id: currentTextId,
                        providerMetadata,
                      });
                    }

                    // Emit delta directly - Firebase sends incremental text per chunk
                    controller.enqueue({
                      type: "text-delta",
                      id: currentTextId,
                      delta: part.text,
                      providerMetadata,
                    });
                  }

                  if ("inlineData" in part && part.inlineData) {
                    // Dedupe images using hash of length + samples from start/middle/end.
                    // Using only the first N chars causes collision because images
                    // often share similar base64 headers (e.g., PNG/JPEG magic bytes).
                    const data = part.inlineData.data;
                    const imageHash = `${data.length}:${data.substring(0, 50)}:${data.substring(Math.floor(data.length / 2), Math.floor(data.length / 2) + 50)}:${data.substring(data.length - 50)}`;
                    if (!emittedImageHashes.has(imageHash)) {
                      // Close current text part before emitting image
                      if (currentTextId) {
                        controller.enqueue({
                          type: "text-end",
                          id: currentTextId,
                          providerMetadata,
                        });
                        currentTextId = null;
                      }

                      controller.enqueue({
                        type: "file",
                        url: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`,
                        mediaType: part.inlineData.mimeType,
                      });
                      emittedImageHashes.add(imageHash);
                    }
                  }
                }
              } else {
                // Fallback: parts not available, use chunk.text()
                const text = chunk.text();
                if (text) {
                  // Close reasoning when text starts
                  if (hasReasoning && reasoningId) {
                    controller.enqueue({
                      type: "reasoning-end",
                      id: reasoningId,
                      providerMetadata,
                    });
                    hasReasoning = false;
                    reasoningId = null;
                  }

                  // Start text part if not already open
                  if (!currentTextId) {
                    currentTextId = this.generateId();
                    controller.enqueue({
                      type: "text-start",
                      id: currentTextId,
                      providerMetadata,
                    });
                  }

                  // Emit delta directly
                  controller.enqueue({
                    type: "text-delta",
                    id: currentTextId,
                    delta: text,
                    providerMetadata,
                  });
                }
              }
            }

            if (isAborted) return;

            // Close any open reasoning part
            if (hasReasoning && reasoningId) {
              controller.enqueue({
                type: "reasoning-end",
                id: reasoningId,
                providerMetadata: lastProviderMetadata,
              });
            }

            // Close any open text part
            if (currentTextId) {
              controller.enqueue({
                type: "text-end",
                id: currentTextId,
                providerMetadata: lastProviderMetadata,
              });
            }

            // Get final response and check for function calls
            const response = await result.response;
            const functionCalls = response.functionCalls?.();

            if (!functionCalls || functionCalls.length === 0) {
              // Emit any remaining images not emitted during streaming
              const parts = response.candidates?.[0]?.content?.parts;
              if (parts) {
                for (const part of parts) {
                  if ("inlineData" in part && part.inlineData) {
                    // Same hash logic as streaming section (length + start/middle/end samples)
                    const data = part.inlineData.data;
                    const imageHash = `${data.length}:${data.substring(0, 50)}:${data.substring(Math.floor(data.length / 2), Math.floor(data.length / 2) + 50)}:${data.substring(data.length - 50)}`;
                    if (!emittedImageHashes.has(imageHash)) {
                      controller.enqueue({
                        type: "file",
                        url: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`,
                        mediaType: part.inlineData.mimeType,
                      });
                      emittedImageHashes.add(imageHash);
                    }
                  }
                }
              }

              // Track this step for stop condition evaluation (matches server-side behavior)
              // Every LLM response creates a step, regardless of tool calls
              steps.push({ toolCalls: [] } as unknown as StepResult<any>);

              // No tool calls - emit finish and exit loop
              const finishReason = response.candidates?.[0]?.finishReason;

              // Extract grounding metadata if available
              const groundingMetadata =
                response.candidates?.[0]?.groundingMetadata;

              controller.enqueue({
                type: "finish",
                finishReason: this.mapFinishReason(finishReason),
                messageMetadata: groundingMetadata,
              });
              continueLoop = false;
            } else {
              // Track step for stop condition evaluation
              steps.push({
                toolCalls: functionCalls.map((fc: FunctionCall) => ({
                  type: "tool-call" as const,
                  toolCallId: this.generateId(),
                  toolName: fc.name,
                  input: fc.args,
                })),
              } as StepResult<any>);

              // Check stop conditions (OR logic - stops if ANY condition is met)
              // Cast needed: StopCondition expects full StepResult but built-in
              // helpers (stepCountIs, hasToolCall) only access steps.length and toolCalls
              const shouldStop = await isStopConditionMet({
                stopConditions: this.stopConditions,
                steps,
              });

              if (shouldStop) {
                // Stop condition met - finish with tool-calls reason
                controller.enqueue({
                  type: "finish",
                  finishReason: "tool-calls",
                });
                continueLoop = false;
              } else {
                // Execute tools and prepare responses for next iteration
                pendingFunctionResponses = await this.executeTools(
                  functionCalls,
                  controller,
                );
              }
            }
          }

          controller.close();
        } catch (error) {
          // Emit error chunk and close gracefully
          controller.enqueue({
            type: "error",
            errorText: error instanceof Error ? error.message : "Unknown error",
          });
          controller.close();
        }
      },
    });
  }

  async reconnectToStream(
    _: Parameters<ChatTransport<UI_MESSAGE>["reconnectToStream"]>[0],
  ): Promise<ReadableStream<UIMessageChunk> | null> {
    // Client-side cannot reconnect to streams
    // Would need server-side persistence
    return null;
  }

  /**
   * Convert UI message role to Firebase Content role.
   */
  private convertRole(role: UI_MESSAGE["role"]): "user" | "model" {
    return role === "assistant" ? "model" : "user";
  }

  /**
   * Convert UI messages to Firebase Content format.
   * - Text parts: YouTube URLs extracted as fileData parts
   * - File parts: converted to inlineData (data URLs) or fileData (hosted URLs)
   */
  private convertMessagesToFirebaseContent(
    messages: UI_MESSAGE[],
  ): Array<{ role: "user" | "model"; parts: Part[] }> {
    return messages
      .map((message) => ({
        role: this.convertRole(message.role),
        parts: message.parts.flatMap(
          (part: UI_MESSAGE["parts"][number]): Part[] => {
            if (part.type === "text") {
              return this.convertTextToPartsWithYouTube(part.text);
            }
            if (part.type === "file") {
              return [this.convertFileToFirebasePart(part.url, part.mediaType)];
            }
            return [];
          },
        ),
      }))
      .filter((content) => content.parts.length > 0);
  }

  /**
   * Extract and preprocess last user message from messages array.
   * - Converts blob URLs to data URLs
   * - Extracts YouTube URLs from text as fileData parts
   * Throws if last message is not from user.
   */
  private async extractLastUserMessage(
    messages: UI_MESSAGE[],
  ): Promise<Part[]> {
    if (messages.length === 0) {
      throw new Error("Cannot send empty message history");
    }

    const lastMessage = messages[messages.length - 1];

    if (lastMessage.role !== "user") {
      throw new Error(
        "Last message must be from user. Firebase requires user message to generate response.",
      );
    }

    // Preprocess only the last message (convert blob URLs)
    await this.preprocessMessages([lastMessage]);

    const parts = lastMessage.parts.flatMap(
      (part: UI_MESSAGE["parts"][number]): Part[] => {
        if (part.type === "text") {
          return this.convertTextToPartsWithYouTube(part.text);
        }
        if (part.type === "file") {
          return [this.convertFileToFirebasePart(part.url, part.mediaType)];
        }
        return [];
      },
    );

    if (parts.length === 0) {
      throw new Error("Last message has no text or file content");
    }

    return parts;
  }

  /**
   * Map Firebase finish reason to AI SDK format.
   */
  private mapFinishReason(
    finishReason?: string,
  ): "stop" | "length" | "content-filter" | "other" {
    switch (finishReason) {
      case "STOP":
        return "stop";
      case "MAX_TOKENS":
        return "length";
      case "SAFETY":
        return "content-filter";
      default:
        return "other";
    }
  }

  /**
   * Execute Firebase function calls and emit tool chunks.
   * Returns array of function responses to send back to Firebase.
   */
  private async executeTools(
    functionCalls: FunctionCall[],
    controller: ReadableStreamDefaultController<UIMessageChunk>,
  ): Promise<FunctionResponsePart[]> {
    const results: FunctionResponsePart[] = [];

    for (const call of functionCalls) {
      const toolCallId = this.generateId();
      const toolName = call.name;

      // Emit tool-input-start
      controller.enqueue({
        type: "tool-input-start",
        toolCallId,
        toolName,
      });

      // Emit tool-input-available (Firebase provides complete input)
      controller.enqueue({
        type: "tool-input-available",
        toolCallId,
        toolName,
        input: call.args,
      });

      try {
        // Look up and execute tool
        const tool = this.tools[toolName];
        if (!tool) {
          throw new Error(`Tool '${toolName}' not found`);
        }

        if (!tool.execute) {
          throw new Error(`Tool '${toolName}' has no execute function`);
        }

        const output = await tool.execute(call.args, {
          toolCallId,
          messages: [],
        });

        // Emit tool-output-available
        controller.enqueue({
          type: "tool-output-available",
          toolCallId,
          output: output ?? null,
        });

        // Build Firebase function response
        results.push({
          functionResponse: {
            name: toolName,
            response: output ?? null,
          },
        });
      } catch (error) {
        const errorText =
          error instanceof Error ? error.message : "Unknown error";

        // Emit tool-output-error
        controller.enqueue({
          type: "tool-output-error",
          toolCallId,
          errorText,
        });

        // Return error response to Firebase
        results.push({
          functionResponse: {
            name: toolName,
            response: { error: errorText },
          },
        });
      }
    }

    return results;
  }

  /**
   * Convert AI SDK Tool to Firebase FunctionDeclaration.
   */
  private convertToolToFunctionDeclaration(
    toolName: string,
    tool: Tool,
  ): FunctionDeclaration {
    return {
      name: toolName,
      description: tool.description || "",
      parameters: this.convertSchemaToFirebase(tool.inputSchema),
    };
  }

  /**
   * Convert AI SDK schema to Firebase Schema format.
   * Uses Zod's built-in toJSONSchema for Zod schemas, passes through JSON schemas.
   * Strips fields not supported by Gemini's OpenAPI Schema subset.
   */
  private convertSchemaToFirebase(
    schema: Tool["inputSchema"],
  ): FunctionDeclaration["parameters"] {
    let jsonSchema: Record<string, unknown>;
    if (schema !== null && typeof schema === "object" && "_zod" in schema) {
      jsonSchema = z.toJSONSchema(schema, {
        target: "draft-7",
        io: "output",
        reused: "inline",
      }) as Record<string, unknown>;
    } else {
      jsonSchema = schema as Record<string, unknown>;
    }
    return this.stripUnsupportedSchemaFields(
      jsonSchema,
    ) as FunctionDeclaration["parameters"];
  }

  /**
   * Recursively strip JSON Schema fields not supported by Gemini API.
   * Gemini uses OpenAPI Schema subset which doesn't support $schema, additionalProperties, etc.
   */
  private stripUnsupportedSchemaFields(obj: unknown): unknown {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => this.stripUnsupportedSchemaFields(item));
    }

    const unsupportedFields = ["$schema", "additionalProperties"];
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      if (!unsupportedFields.includes(key)) {
        result[key] = this.stripUnsupportedSchemaFields(value);
      }
    }

    return result;
  }

  /**
   * YouTube URL pattern to match various formats:
   * - https://www.youtube.com/watch?v=VIDEO_ID
   * - https://youtube.com/watch?v=VIDEO_ID
   * - https://youtu.be/VIDEO_ID
   * - https://www.youtube.com/embed/VIDEO_ID
   */
  private static readonly YOUTUBE_URL_REGEX =
    /https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)[\w-]+(?:[?&][\w=-]*)*(?:#[\w-]*)?/g;

  /**
   * Check if URL is a YouTube URL.
   */
  private isYouTubeUrl(url: string): boolean {
    return (
      url.includes("youtube.com/") ||
      url.includes("youtu.be/") ||
      url.includes("youtube.googleapis.com/")
    );
  }

  /**
   * Convert a text part to Firebase Parts, extracting YouTube URLs as fileData.
   * Example: "Summarize https://youtube.com/watch?v=xxx please"
   * Becomes: [{ text: "Summarize " }, { fileData: {...} }, { text: " please" }]
   */
  private convertTextToPartsWithYouTube(text: string): Part[] {
    const parts: Part[] = [];
    let lastIndex = 0;

    // Reset regex state
    FirebaseChatTransport.YOUTUBE_URL_REGEX.lastIndex = 0;

    let match;
    while (
      (match = FirebaseChatTransport.YOUTUBE_URL_REGEX.exec(text)) !== null
    ) {
      // Add text before the URL
      if (match.index > lastIndex) {
        const textBefore = text.slice(lastIndex, match.index).trim();
        if (textBefore) {
          parts.push({ text: textBefore });
        }
      }

      // Add YouTube URL as fileData
      parts.push({
        fileData: {
          mimeType: "video/*",
          fileUri: match[0],
        },
      });

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text after last URL
    if (lastIndex < text.length) {
      const textAfter = text.slice(lastIndex).trim();
      if (textAfter) {
        parts.push({ text: textAfter });
      }
    }

    // No YouTube URLs found, return original text
    if (parts.length === 0) {
      return [{ text }];
    }

    return parts;
  }

  /**
   * Convert a file part URL to Firebase Part format.
   * Supports:
   * - Data URLs (data:...): converted to inlineData
   * - Hosted URLs (http/https): converted to fileData with fileUri
   *
   * @see https://firebase.google.com/docs/ai-logic/input-file-requirements
   */
  private convertFileToFirebasePart(
    url: string,
    mimeType: string,
  ): InlineDataPart | FileDataPart {
    // YouTube URL: use fileData with video/*
    if (this.isYouTubeUrl(url)) {
      return {
        fileData: {
          mimeType: "video/*",
          fileUri: url,
        },
      };
    }

    // Data URL: use inlineData
    if (url.startsWith("data:")) {
      const base64Match = url.match(/^data:[^;]+;base64,(.+)$/);
      if (!base64Match) {
        throw new Error(
          "Invalid data URL format. Expected base64 encoded data URL.",
        );
      }
      return {
        inlineData: {
          mimeType,
          data: base64Match[1],
        },
      };
    }

    // Hosted URL (http/https): use fileData
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return {
        fileData: {
          mimeType,
          fileUri: url,
        },
      };
    }

    throw new Error(
      `Unsupported URL format: ${url.substring(
        0,
        50,
      )}. Expected data: or http(s): URL.`,
    );
  }

  /**
   * Convert blob URL to base64 data URL.
   */
  private async blobUrlToDataUrl(blobUrl: string): Promise<string> {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  /**
   * Pre-process messages to convert blob URLs to data URLs.
   */
  private async preprocessMessages(messages: UI_MESSAGE[]): Promise<void> {
    for (const message of messages) {
      for (const part of message.parts) {
        if (part.type === "file" && part.url && part.url.startsWith("blob:")) {
          // Convert blob URL to data URL in place
          (part as { url: string }).url = await this.blobUrlToDataUrl(part.url);
        }
      }
    }
  }

  /**
   * Extract provider metadata from Firebase chunk.
   * Includes usageMetadata when available.
   */
  private extractProviderMetadata(
    chunk: EnhancedGenerateContentResponse,
  ): ProviderMetadata | undefined {
    if (chunk.usageMetadata) {
      return { firebase: { usageMetadata: chunk.usageMetadata } };
    }
    return undefined;
  }
}
