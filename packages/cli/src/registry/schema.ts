import { z } from "zod";

export const registryItemFileSchema = z.object({
  path: z.string(),
  content: z.string().optional(),
  type: z.string(),
  target: z.string(),
});

export const registryItemSchema = z.object({
  $schema: z.string().optional(),
  name: z.string(),
  type: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional().default([]),
  devDependencies: z.array(z.string()).optional().default([]),
  registryDependencies: z.array(z.string()).optional().default([]),
  files: z.array(registryItemFileSchema).optional().default([]),
  meta: z.record(z.any()).optional(),
});

export type RegistryItem = z.infer<typeof registryItemSchema>;
export type RegistryItemFile = z.infer<typeof registryItemFileSchema>;
