import { UIMessage } from "@ai-sdk/react";
import {
  ChatTransport,
  generateId as generateIdFunc,
  IdGenerator,
  UIMessageChunk,
  type Tool,
} from "ai";
import {
  getAI,
  getGenerativeModel,
  type AIOptions,
  type ChatSession,
  type FunctionCall,
  type FunctionDeclaration,
  type FunctionResponsePart,
  type GenerativeModel,
  type HybridParams,
  type ModelParams,
  type Part,
} from "firebase/ai";
import type { FirebaseApp } from "firebase/app";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SharedV3ProviderMetadata = Record<string, any>;

/**
 * A grounding chunk from Google Search.
 * @see https://firebase.google.com/docs/ai-logic/grounding-google-search
 */
export interface GroundingChunk {
  web?: {
    uri?: string;
    title?: string;
  };
}

/**
 * Maps a response text segment to grounding sources.
 * @see https://firebase.google.com/docs/ai-logic/grounding-google-search
 */
export interface GroundingSupport {
  segment?: {
    startIndex?: number;
    endIndex?: number;
  };
  groundingChunkIndices?: number[];
  confidenceScores?: number[];
}

/**
 * Google Search entry point for rendering required attribution.
 * @see https://firebase.google.com/docs/ai-logic/grounding-google-search
 */
export interface SearchEntryPoint {
  renderedContent?: string;
}

/**
 * Grounding metadata returned when Google Search grounding is enabled.
 * @see https://firebase.google.com/docs/ai-logic/grounding-google-search
 */
export interface GroundingMetadata {
  webSearchQueries?: string[];
  searchEntryPoint?: SearchEntryPoint;
  groundingChunks?: GroundingChunk[];
  groundingSupports?: GroundingSupport[];
}

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
   * Options for initializing the AI instance.
   * Includes backend configuration and other AI-specific settings.
   * @see https://firebase.google.com/docs/ai/get-started
   */
  aiOptions?: AIOptions;

  /**
   * Parameters for configuring the generative model.
   * Includes model name, system instructions, generation config, safety settings, and tools.
   * @see https://firebase.google.com/docs/reference/js/ai.modelparams
   */
  modelParams?: ModelParams | HybridParams;

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
}

/**
 * Client-side ChatTransport implementation for Firebase AI Logic (Gemini).
 *
 * Enables browser-based chat streaming using Firebase's sendMessageStream API
 * with multi-turn conversation support and automatic tool execution.
 *
 * Features:
 * - Multi-turn text streaming
 * - Multimodal input/output (images via inlineData)
 * - Interleaved text and image generation (requires gemini-2.5-flash-image model)
 * - Thinking/reasoning support (via thoughtSummary, streamed incrementally)
 * - Client-side tool/function calling with automatic execution
 * - Tool call loop (model can call multiple tools until final response)
 * - Google Search grounding (via enableGoogleSearch option)
 *
 * Limitations:
 * - Only Data URL supported for files (no hosted URLs yet)
 * - Single active chat at a time
 * - No stream reconnection (client-side)
 * - Client-side tool execution only (no server-side tool execution)
 * - No tool approval workflow (tools execute immediately)
 * - Maximum 10 tool execution iterations per request (prevents infinite loops)
 *
 * @example Basic usage
 * ```ts
 * import { initializeApp } from 'firebase/app';
 * import { GoogleAIBackend } from 'firebase/ai';
 * import { FirebaseChatTransport } from '@ai-sdk/ui-utils';
 *
 * const app = initializeApp({ ... });
 * const transport = new FirebaseChatTransport({
 *   firebaseApp: app,
 *   aiOptions: { backend: new GoogleAIBackend() },
 *   modelParams: { model: 'gemini-2.5-flash' }
 * });
 * ```
 *
 * @example With thinking enabled
 * ```ts
 * const transport = new FirebaseChatTransport({
 *   firebaseApp: app,
 *   aiOptions: { backend: new GoogleAIBackend() },
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
 *   aiOptions: { backend: new GoogleAIBackend() },
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
 *   aiOptions: { backend: new GoogleAIBackend() },
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
 *   aiOptions: { backend: new GoogleAIBackend() },
 *   modelParams: { model: 'gemini-2.5-flash' },
 *   enableGoogleSearch: true,
 * });
 * // Grounding metadata available in message.metadata.grounding:
 * // - webSearchQueries: string[]
 * // - searchEntryPoint: { renderedContent: string } (required HTML to render)
 * // - groundingChunks: Array<{ web: { uri, title } }>
 * // - groundingSupports: Array<{ segment, groundingChunkIndices, confidenceScores }>
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
  private readonly MAX_TOOL_ITERATIONS = 10;

  constructor(options: FirebaseChatTransportOptions) {
    const ai = getAI(options.firebaseApp, options.aiOptions);

    this.tools = options.tools || {};
    this.generateId = options.generateId ?? generateIdFunc;

    const functionDeclarations = Object.entries(this.tools).map(
      ([name, tool]) => this.convertToolToFunctionDeclaration(name, tool),
    );

    // Build tools array with function declarations and/or Google Search
    const toolsArray: Array<
      { functionDeclarations: FunctionDeclaration[] } | { googleSearch: object }
    > = [];
    if (functionDeclarations.length > 0) {
      toolsArray.push({ functionDeclarations });
    }
    if (options.enableGoogleSearch) {
      toolsArray.push({ googleSearch: {} });
    }

    const modelParamsWithTools =
      toolsArray.length > 0
        ? {
            ...(options.modelParams || { model: "gemini-2.5-flash" }),
            tools: toolsArray,
          }
        : options.modelParams || { model: "gemini-2.5-flash" };

    this.firebaseModel = getGenerativeModel(ai, modelParamsWithTools);
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
          // Pre-process messages to convert blob URLs to data URLs
          await this.preprocessMessages(messages);

          // Convert messages to Firebase format
          const firebaseMessages =
            this.convertMessagesToFirebaseContent(messages);
          const lastUserMessage = this.extractLastUserMessage(messages);

          // Create or reuse chat session
          if (!this.chatSession) {
            // New session: startChat with history (exclude last message)
            const history = firebaseMessages.slice(0, -1);
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
          let iteration = 0;

          while (
            continueLoop &&
            !isAborted &&
            iteration < this.MAX_TOOL_ITERATIONS
          ) {
            iteration++;

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
            let lastProviderMetadata: SharedV3ProviderMetadata | undefined =
              undefined;

            // Simple state: track current text part and emitted images
            let currentTextId: string | null = null;
            const emittedImageHashes = new Set<string>();

            for await (const chunk of result.stream) {
              if (isAborted) break;

              // Extract provider metadata from chunk
              const providerMetadata = this.extractProviderMetadata(chunk);
              lastProviderMetadata = providerMetadata;

              // Access parts structure for interleaved streaming
              const chunkParts = (
                chunk as {
                  candidates?: Array<{ content?: { parts?: Part[] } }>;
                }
              ).candidates?.[0]?.content?.parts;

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
                    // Use hash to dedupe images
                    const imageHash = part.inlineData.data.substring(0, 100);
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
                    const imageHash = part.inlineData.data.substring(0, 100);
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
              // Execute tools and prepare responses for next iteration
              pendingFunctionResponses = await this.executeTools(
                functionCalls,
                controller,
              );
            }
          }

          if (iteration >= this.MAX_TOOL_ITERATIONS) {
            controller.enqueue({
              type: "error",
              errorText: `Maximum tool iteration limit (${this.MAX_TOOL_ITERATIONS}) reached`,
            });
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
   * Handles text and file parts (images via inlineData).
   */
  private convertMessagesToFirebaseContent(
    messages: UI_MESSAGE[],
  ): Array<{ role: "user" | "model"; parts: Part[] }> {
    return messages
      .map((message) => ({
        role: this.convertRole(message.role),
        parts: message.parts
          .map((part: UI_MESSAGE["parts"][number]) => {
            if (part.type === "text") {
              return { text: part.text };
            }
            if (part.type === "file") {
              return {
                inlineData: {
                  mimeType: part.mediaType,
                  data: this.extractBase64FromDataUrl(part.url),
                },
              };
            }
            return null;
          })
          .filter((p) => p !== null),
      }))
      .filter((content) => content.parts.length > 0);
  }

  /**
   * Extract last user message from messages array.
   * Throws if last message is not from user.
   */
  private extractLastUserMessage(messages: UI_MESSAGE[]): Part[] {
    if (messages.length === 0) {
      throw new Error("Cannot send empty message history");
    }

    const lastMessage = messages[messages.length - 1];

    if (lastMessage.role !== "user") {
      throw new Error(
        "Last message must be from user. Firebase requires user message to generate response.",
      );
    }

    const parts: Part[] = lastMessage.parts
      .map((part: UI_MESSAGE["parts"][number]) => {
        if (part.type === "text") {
          return { text: part.text };
        }
        if (part.type === "file") {
          return {
            inlineData: {
              mimeType: part.mediaType,
              data: this.extractBase64FromDataUrl(part.url),
            },
          };
        }
        return null;
      })
      .filter((p) => p !== null);

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
   * Extract base64 data from Data URL.
   * Data URL format: data:[<mediatype>][;base64],<data>
   *
   * TODO: Add support for hosted URLs (http/https) using Firebase's fileData format.
   * @see https://firebase.google.com/docs/ai-logic/image-prompts
   */
  private extractBase64FromDataUrl(dataUrl: string): string {
    const base64Match = dataUrl.match(/^data:[^;]+;base64,(.+)$/);
    if (base64Match) {
      return base64Match[1];
    }
    throw new Error(
      "Invalid data URL format. Expected base64 encoded data URL.",
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
   * Includes usageMetadata, modelVersion, and responseId when available.
   */
  private extractProviderMetadata(
    chunk: unknown,
  ): SharedV3ProviderMetadata | undefined {
    const metadata: SharedV3ProviderMetadata = {};
    const chunkObj = chunk as SharedV3ProviderMetadata;

    if (chunkObj.usageMetadata !== undefined) {
      metadata.usageMetadata = chunkObj.usageMetadata;
    }

    return Object.keys(metadata).length > 0
      ? { firebase: metadata }
      : undefined;
  }
}
