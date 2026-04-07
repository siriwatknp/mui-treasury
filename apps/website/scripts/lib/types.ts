export interface FileInfo {
  path: string;
  relativePath: string;
  name: string;
}

export interface RegistryFile {
  path: string;
  target: string;
  content: string;
  type: string;
}

export interface RegistryMeta {
  $schema: string;
  type: string;
  title: string;
  description: string;
  dependencies?: string[];
  registryDependencies?: string[];
  meta: {
    screenshot?: string;
    category?: string;
    tags?: string[];
    previewMode?: string;
  };
}

export interface RegistryJson {
  $schema: string;
  name: string;
  type: string;
  title: string;
  description: string;
  dependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
  meta: RegistryMeta["meta"];
}
