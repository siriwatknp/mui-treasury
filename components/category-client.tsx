"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense, useRef, useState } from "react";
import { RegistryItem } from "@/lib/registry";
import TagFilter from "@/components/tag-filter";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { ExternalLinkIcon, Copy, Check, Terminal } from "lucide-react";
import { useColorScheme } from "@mui/material/styles";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import type { ImperativePanelHandle } from "react-resizable-panels";
import type { SyntaxHighlighterProps } from "react-syntax-highlighter";
import React from "react";

interface CategoryClientProps {
  categoryInfo: { name: string; label: string };
  allItems: RegistryItem[];
  availableTags: string[];
  selectedTags: string[];
  metaOnlyItems: RegistryItem[];
  regularItems: RegistryItem[];
}

interface ComponentPreviewContentProps {
  item: RegistryItem;
  needsIframe: boolean;
}

const ComponentPreviewContent = React.memo(
  ({ item, needsIframe }: ComponentPreviewContentProps) => {
    const DynamicComponent = React.useMemo(() => {
      if (needsIframe) return null;

      try {
        const componentPath = item.path.replace(".tsx", "");
        return dynamic(
          () =>
            // First try to import .demo version
            import(`@/registry/${componentPath}.demo`)
              .catch(() => {
                // If .demo doesn't exist, try the original path
                return import(`@/registry/${componentPath}`);
              })
              .catch(() => {
                // Return a fallback component for failed imports
                return {
                  default: function FallbackComponent() {
                    return (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <span className="text-sm">Preview unavailable</span>
                      </div>
                    );
                  },
                };
              }),
          {
            loading: () => (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-pulse bg-muted rounded w-16 h-16"></div>
              </div>
            ),
            ssr: false,
          }
        );
      } catch {
        return function ErrorFallback() {
          return (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Preview unavailable</span>
            </div>
          );
        };
      }
    }, [item.path, needsIframe]);

    if (needsIframe) {
      return (
        <div
          className={`w-full h-full relative ${
            item.meta.previewClassName || ""
          }`}
        >
          <iframe
            src={`/preview/${item.name}`}
            className="aspect-video border-none min-h-[80vh] max-w-full [color-scheme:auto]"
          />
        </div>
      );
    }

    if (!DynamicComponent) {
      return (
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <span className="text-sm">Preview unavailable</span>
        </div>
      );
    }

    return (
      <div
        className={`w-full h-full flex items-center justify-center p-4 overflow-hidden ${
          item.meta.previewClassName || ""
        }`}
      >
        <DynamicComponent />
      </div>
    );
  }
);

ComponentPreviewContent.displayName = "ComponentPreviewContent";

function ComponentPreview({ item }: { item: RegistryItem }) {
  // Use explicit previewMode from registry metadata
  const needsIframe = item.meta.previewMode === "iframe";
  const [copiedIndex, setCopiedIndex] = useState<number>(-1);
  const [activeTab, setActiveTab] = useState<string>("preview");
  const [activeFileIndex, setActiveFileIndex] = useState<number>(0);
  const [SyntaxHighlighter, setSyntaxHighlighter] = useState<{
    Component: React.ComponentType<SyntaxHighlighterProps>;
    lightStyle: Record<string, React.CSSProperties>;
    darkStyle: Record<string, React.CSSProperties>;
  } | null>(null);
  const panelRef = useRef<ImperativePanelHandle | null>(null);
  const { mode, systemMode } = useColorScheme();

  // Memoize display files: prepend demo file and filter out index.ts
  const displayFiles = React.useMemo(() => {
    const allFiles = item.demoFile
      ? [item.demoFile, ...item.files]
      : item.files;
    return allFiles.filter((file) => !file.path.endsWith("index.ts"));
  }, [item.demoFile, item.files]);

  const handleCopy = React.useCallback(
    async (content: string, index: number) => {
      await navigator.clipboard.writeText(content);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(-1), 2000);
    },
    []
  );

  const handleCopyCLI = async () => {
    const cliCommand = `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${item.name}.json`;
    await navigator.clipboard.writeText(cliCommand);
    setCopiedIndex(-2); // Use -2 for CLI button
    setTimeout(() => setCopiedIndex(-1), 2000);
  };

  const handleTabChange = async (value: string) => {
    setActiveTab(value);

    // Dynamically import syntax highlighter when code tab is first accessed
    if (value === "code" && !SyntaxHighlighter) {
      try {
        const [syntaxHighlighterModule, stylesModule] = await Promise.all([
          import("react-syntax-highlighter") as Promise<{
            Prism: React.ComponentType<SyntaxHighlighterProps>;
          }>,
          import("react-syntax-highlighter/dist/esm/styles/prism") as Promise<{
            oneLight: Record<string, React.CSSProperties>;
            oneDark: Record<string, React.CSSProperties>;
          }>,
        ]);
        setSyntaxHighlighter({
          Component: syntaxHighlighterModule.Prism,
          lightStyle: stylesModule.oneLight,
          darkStyle: stylesModule.oneDark,
        });
      } catch (error) {
        console.error("Failed to load syntax highlighter:", error);
        // Set a fallback to prevent infinite loading
        setSyntaxHighlighter(null);
      }
    }
  };

  const renderPreview = React.useCallback(() => {
    return (
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <ResizablePanel ref={panelRef} defaultSize={100} minSize={30}>
          <ComponentPreviewContent item={item} needsIframe={needsIframe} />
        </ResizablePanel>
        <ResizableHandle
          withHandle
          onDoubleClick={() => {
            if (panelRef.current) {
              panelRef.current.resize(100);
            }
          }}
        />
        <ResizablePanel defaultSize={0} minSize={0} maxSize={70} />
      </ResizablePanelGroup>
    );
  }, [item, needsIframe, panelRef]);

  const renderFileContent = React.useCallback(
    (file: RegistryItem["files"][0], index: number, showHeader: boolean) => {
      return (
        <div
          key={file.path}
          className={
            needsIframe ? "aspect-video max-w-full min-h-[80vh]" : "h-[400px]"
          }
        >
          {showHeader && (
            <div className="flex items-center justify-between bg-muted px-3 py-2 text-sm">
              <span className="font-mono">{file.path.split("/").pop()}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(file.content, index)}
                className="h-6 px-2"
              >
                {copiedIndex === index ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </Button>
            </div>
          )}
          <div
            className={
              showHeader
                ? "h-[calc(100%-40px)] overflow-auto"
                : "h-full overflow-auto"
            }
          >
            {activeTab === "code" ? (
              SyntaxHighlighter ? (
                <SyntaxHighlighter.Component
                  language={
                    file.path.endsWith(".tsx") || file.path.endsWith(".ts")
                      ? "tsx"
                      : "jsx"
                  }
                  style={
                    (systemMode || mode) === "dark"
                      ? SyntaxHighlighter.darkStyle
                      : SyntaxHighlighter.lightStyle
                  }
                  customStyle={{
                    margin: 0,
                    padding: "16px",
                    fontSize: "12px",
                  }}
                  showLineNumbers
                >
                  {file.content}
                </SyntaxHighlighter.Component>
              ) : SyntaxHighlighter === null ? (
                <pre className="p-4 text-xs bg-background">
                  <code>{file.content}</code>
                </pre>
              ) : (
                <div className="p-4 text-xs bg-background flex items-center justify-center">
                  <div className="animate-pulse">
                    Loading syntax highlighter...
                  </div>
                </div>
              )
            ) : (
              <pre className="p-4 text-xs bg-background">
                <code>{file.content}</code>
              </pre>
            )}
          </div>
        </div>
      );
    },
    [
      activeTab,
      copiedIndex,
      handleCopy,
      mode,
      needsIframe,
      SyntaxHighlighter,
      systemMode,
    ]
  );

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="w-full h-full"
    >
      <div className="flex justify-between items-center mb-2">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyCLI}
            className="h-8 px-3 text-xs font-mono"
          >
            {copiedIndex === -2 ? (
              <Check className="h-3 w-3 mr-1.5" />
            ) : (
              <Terminal className="h-3 w-3 mr-1.5" />
            )}
            npx shadcn
          </Button>
          {process.env.NEXT_PUBLIC_OPEN_V0_BUTTON === "true" && (
            <OpenInV0Button name={item.name} className="h-8" />
          )}
        </div>
      </div>

      <TabsContent
        value="preview"
        className="h-full mt-0 bg-muted border rounded-lg overflow-hidden"
      >
        {renderPreview()}
      </TabsContent>

      <TabsContent
        value="code"
        className="h-full mt-0 border rounded-lg overflow-hidden"
      >
        {displayFiles.length > 1 ? (
          <>
            <div className="flex border-b">
              {displayFiles.map((file, index) => (
                <button
                  key={file.path}
                  onClick={() => setActiveFileIndex(index)}
                  className={`px-4 py-2 text-sm font-mono transition-colors relative ${
                    activeFileIndex === index
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {file.path.split("/").pop()}
                  {activeFileIndex === index && (
                    <div className="absolute bottom-0 left-4 right-4 h-[1px] rounded-2xl bg-foreground" />
                  )}
                </button>
              ))}
              <div className="ml-auto flex items-center px-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    handleCopy(
                      displayFiles[activeFileIndex].content,
                      activeFileIndex
                    )
                  }
                  className="h-6 px-2"
                >
                  {copiedIndex === activeFileIndex ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>
            </div>
            {renderFileContent(
              displayFiles[activeFileIndex],
              activeFileIndex,
              false
            )}
          </>
        ) : (
          renderFileContent(displayFiles[0], 0, true)
        )}
      </TabsContent>
    </Tabs>
  );
}

function MetaOnlyItem({ item }: { item: RegistryItem }) {
  const [copiedIndex, setCopiedIndex] = React.useState<number>(-1);

  const handleCopyCLI = async () => {
    const cliCommand = `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${item.name}.json`;
    await navigator.clipboard.writeText(cliCommand);
    setCopiedIndex(-2);
    setTimeout(() => setCopiedIndex(-1), 2000);
  };

  return (
    <div className="bg-muted/50 rounded-lg p-6 text-center">
      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopyCLI}
          className="h-8 px-3 text-xs font-mono"
        >
          {copiedIndex === -2 ? (
            <Check className="h-3 w-3 mr-1.5" />
          ) : (
            <Terminal className="h-3 w-3 mr-1.5" />
          )}
          npx shadcn
        </Button>
        {process.env.NEXT_PUBLIC_OPEN_V0_BUTTON === "true" && (
          <OpenInV0Button name={item.name} className="h-8" />
        )}
      </div>
    </div>
  );
}

function LazyComponentPreview({ item }: { item: RegistryItem }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const loadingSkeleton = (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="animate-pulse bg-muted rounded h-[36px] w-[128px]"></div>
        <div className="flex gap-2">
          <div className="animate-pulse bg-muted rounded h-[32px] w-[114px]"></div>
          <div className="animate-pulse bg-muted rounded h-[32px] w-[92px]"></div>
        </div>
      </div>
      <div className="animate-pulse bg-muted rounded-lg h-[306px] w-full"></div>
    </div>
  );

  return (
    <div ref={ref} className="min-h-[360px]">
      {isVisible ? (
        <Suspense fallback={loadingSkeleton}>
          <ComponentPreview item={item} />
        </Suspense>
      ) : (
        loadingSkeleton
      )}
    </div>
  );
}

export default function CategoryClient({
  categoryInfo,
  availableTags,
  selectedTags,
  metaOnlyItems,
  regularItems,
}: CategoryClientProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-10">
      {/* Header */}
      <div className="py-8 text-center">
        <h1 className="text-3xl font-bold capitalize mb-2">
          {categoryInfo.label === "Ai" ? "AI" : categoryInfo.label}
        </h1>
        <p className="text-muted-foreground">
          {regularItems.length}{" "}
          {regularItems.length === 1 ? "component" : "components"}
          {selectedTags.length > 0 && (
            <span> matching: {selectedTags.join(", ")}</span>
          )}
        </p>
      </div>

      {/* Meta-only items (collection items without preview) */}
      {metaOnlyItems.length > 0 && (
        <div className="pb-10">
          {metaOnlyItems.map((item) => (
            <MetaOnlyItem key={item.name} item={item} />
          ))}
        </div>
      )}

      {/* Sticky Tag Filter */}
      <TagFilter
        availableTags={availableTags}
        selectedTags={selectedTags}
        category={categoryInfo.name}
      />

      {/* Registry Grid */}
      {regularItems.length > 0 ? (
        <div className="grid gap-8">
          {/* Regular items with preview */}
          {regularItems.map((item) => (
            <div key={item.name} className="min-w-0 flex flex-col space-y-3">
              {/* Title and Description */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg">
                    {item.title.replace(/^Ai\s/, "AI ")}
                  </h3>
                  <Link
                    href={`/preview/${item.name}`}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary"
                    title="Open full preview"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Live Component Preview */}
              <LazyComponentPreview item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No components found matching the selected filters.
          </p>
        </div>
      )}
    </div>
  );
}
