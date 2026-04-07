// Get the base URL for registry dependencies based on environment
export function getRegistryBaseUrl(): string {
  const vercelEnv = process.env.VERCEL_ENV;

  // For production, use VERCEL_PROJECT_PRODUCTION_URL if available
  if (vercelEnv === "production") {
    const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    if (productionUrl) {
      return `https://${productionUrl}`;
    }
    // Fallback to mui-treasury.com if production URL not available
    return "https://mui-treasury.com";
  }

  // For preview/development, use VERCEL_BRANCH_URL
  const branchUrl = process.env.VERCEL_BRANCH_URL;
  if (vercelEnv && vercelEnv !== "production" && branchUrl) {
    return `https://${branchUrl}`;
  }

  // Fallback for local development
  return "http://localhost:3000";
}

export function extractDependencies(content: string): string[] {
  const dependencies = new Set<string>();

  // Extract all npm package imports (not relative or @/ alias imports)
  const importMatches = content.match(/from\s+["']([^"']+)["']/g) || [];
  importMatches.forEach((imp) => {
    const match = imp.match(/from\s+["']([^"']+)["']/);
    if (match) {
      const importPath = match[1];
      // Skip relative imports (. or ..), absolute paths (/), and alias imports (@/)
      if (
        importPath.startsWith(".") ||
        importPath.startsWith("/") ||
        importPath.startsWith("@/")
      ) {
        return;
      }
      // Extract package name (handle scoped packages like @mui/material)
      const pkgMatch = importPath.match(/^(@[^/]+\/[^/]+|[^/]+)/);
      if (pkgMatch) {
        dependencies.add(pkgMatch[1]);
      }
    }
  });

  // Always add emotion dependencies if MUI is used
  const hasMui = Array.from(dependencies).some((dep) =>
    dep.startsWith("@mui/")
  );
  if (hasMui) {
    dependencies.add("@emotion/react");
    dependencies.add("@emotion/styled");
  }

  // Filter out React (peer dependency)
  dependencies.delete("react");

  return Array.from(dependencies);
}

/**
 * Extract the name of a default export from file content
 * Handles patterns like:
 * - export default function FunctionName
 * - export default class ClassName
 * - export default const ConstName
 * - export default ComponentName
 */
export function extractDefaultExportName(content: string): string | null {
  // Pattern 1: export default function/class with a name
  const namedExportMatch = content.match(
    /export\s+default\s+(?:function|class)\s+([A-Z][a-zA-Z0-9]*)/
  );
  if (namedExportMatch) {
    return namedExportMatch[1];
  }

  // Pattern 2: export default const ConstName
  const constExportMatch = content.match(
    /export\s+default\s+const\s+([A-Z][a-zA-Z0-9]*)/
  );
  if (constExportMatch) {
    return constExportMatch[1];
  }

  // Pattern 3: export default Identifier (not arrow function or object literal)
  // Must start with uppercase to be a component/class name
  const identifierMatch = content.match(
    /export\s+default\s+([A-Z][a-zA-Z0-9]*)\s*;/
  );
  if (identifierMatch) {
    return identifierMatch[1];
  }

  return null;
}
