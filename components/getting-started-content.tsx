import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";
import { CopyButton } from "./copy-button";

// Custom pre component with copy button
function Pre({ children, ...props }: { children: React.ReactNode }) {
  // Extract text content from the pre element
  function extractTextFromChildren(node: React.ReactNode): string {
    if (typeof node === "string") return node;
    if (!node) return "";
    if (Array.isArray(node)) return node.map(extractTextFromChildren).join("");
    if (
      typeof node === "object" &&
      "props" in node &&
      node.props &&
      typeof node.props === "object" &&
      "children" in node.props
    ) {
      return extractTextFromChildren(node.props.children as React.ReactNode);
    }
    return "";
  }

  const code = extractTextFromChildren(children);

  return (
    <div className="relative group">
      <pre {...props} className="overflow-x-auto">
        {children}
      </pre>
      <CopyButton text={code} />
    </div>
  );
}

// MDX components override
const components = {
  pre: Pre,
};

export async function GettingStartedContent() {
  const filePath = path.join(process.cwd(), "GETTING_STARTED.md");
  const source = await fs.readFile(filePath, "utf8");

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote source={source} components={components} />
        </div>
      </div>
    </section>
  );
}
