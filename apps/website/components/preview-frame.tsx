import * as React from "react";
import Link from "next/link";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { ExternalLink } from "lucide-react";

interface PreviewFrameProps {
  name: string;
  title?: string;
  children?: React.ReactNode;
  minHeight?: string;
  className?: string;
  href?: string;
  showOpenInV0?: boolean;
  fullWidth?: boolean;
  registryType?: "component" | "block" | "theme" | "lib" | "hook" | "page";
}

export function PreviewFrame({
  name,
  title,
  children,
  minHeight = "200px",
  className = "",
  href,
  showOpenInV0 = true,
  fullWidth = false,
  registryType,
}: PreviewFrameProps) {
  const extraClasses = fullWidth ? "xl:[grid-column:1/3]" : "";
  const isIframe = href && !children;

  const getChipStyles = (type: typeof registryType) => {
    switch (type) {
      case "component":
        return "bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300";
      case "block":
        return "bg-purple-500/10 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300";
      case "theme":
        return "bg-green-500/10 text-green-700 dark:bg-green-500/20 dark:text-green-300";
      case "lib":
        return "bg-orange-500/10 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300";
      case "hook":
        return "bg-pink-500/10 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300";
      case "page":
        return "bg-yellow-500/10 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div
      data-preview={name}
      className={`flex flex-col gap-4 border rounded-lg p-4 min-h-[${minHeight}] relative ${extraClasses} ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {registryType && (
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getChipStyles(registryType)}`}
            >
              {registryType}
            </span>
          )}
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:underline focus:underline inline-flex items-center gap-1"
            >
              {title || name}
              <ExternalLink className="w-3 h-3" />
            </Link>
          ) : (
            <h2 className="text-sm text-muted-foreground">{title || name}</h2>
          )}
        </div>
        <div className="flex gap-2">
          {!isIframe && href && (
            <Link
              href={href}
              className="text-sm text-muted-foreground hover:underline"
            >
              Preview →
            </Link>
          )}
          {showOpenInV0 &&
            process.env.NEXT_PUBLIC_OPEN_V0_BUTTON === "true" && (
              <OpenInV0Button name={name} className={isIframe ? "w-fit" : ""} />
            )}
        </div>
      </div>
      {isIframe ? (
        <iframe
          src={href}
          className="flex flex-1 items-center justify-center min-h-[400px] relative"
          style={{ width: "100%", border: "none" }}
        />
      ) : (
        children
      )}
    </div>
  );
}
