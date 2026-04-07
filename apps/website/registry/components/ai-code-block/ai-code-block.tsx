"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { useColorScheme, useTheme } from "@mui/material/styles";
import { CheckIcon, CopyIcon } from "lucide-react";
import { memo, type ComponentProps, type ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockContextType = {
  code: string;
};

const CodeBlockContext = createContext<CodeBlockContextType>({
  code: "",
});

export type CodeBlockProps = ComponentProps<typeof Paper> & {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  children?: ReactNode;
};

export const CodeBlock = memo(
  ({
    code,
    language,
    showLineNumbers = false,
    children,
    sx,
    ...props
  }: CodeBlockProps) => {
    const theme = useTheme();
    const { mode, systemMode } = useColorScheme();
    const isDarkMode = (systemMode || mode) === "dark";

    return (
      <CodeBlockContext.Provider value={{ code }}>
        <Paper
          variant="outlined"
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            ...sx,
          }}
          {...props}
        >
          <Box sx={{ position: "relative" }}>
            <SyntaxHighlighter
              codeTagProps={{
                style: {
                  fontFamily: "monospace",
                  fontSize: "0.75rem",
                },
              }}
              customStyle={{
                margin: 0,
                padding: "16px",
                fontSize: "0.75rem",
                background: isDarkMode
                  ? (theme.vars || theme).palette.background.paper
                  : (theme.vars || theme).palette.background.default,
                color: (theme.vars || theme).palette.text.primary,
              }}
              language={language}
              lineNumberStyle={{
                color: (theme.vars || theme).palette.text.secondary,
                paddingRight: "1rem",
                minWidth: "2.5rem",
              }}
              showLineNumbers={showLineNumbers}
              style={isDarkMode ? oneDark : oneLight}
            >
              {code}
            </SyntaxHighlighter>
            {children && (
              <Box
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {children}
              </Box>
            )}
          </Box>
        </Paper>
      </CodeBlockContext.Provider>
    );
  },
);

CodeBlock.displayName = "CodeBlock";

export type CodeBlockCopyButtonProps = ComponentProps<typeof IconButton> & {
  onCopy?: () => void;
  onError?: (error: Error) => void;
  timeout?: number;
};

export const CodeBlockCopyButton = ({
  onCopy,
  onError,
  timeout = 2000,
  children,
  ...props
}: CodeBlockCopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { code } = useContext(CodeBlockContext);

  const copyToClipboard = async () => {
    if (typeof window === "undefined" || !navigator.clipboard.writeText) {
      onError?.(new Error("Clipboard API not available"));
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      onCopy?.();
      setTimeout(() => setIsCopied(false), timeout);
    } catch (error) {
      onError?.(error as Error);
    }
  };

  const Icon = isCopied ? CheckIcon : CopyIcon;

  return (
    <IconButton
      onClick={copyToClipboard}
      aria-label={isCopied ? "Copied!" : "Copy code"}
      {...props}
    >
      {children ?? <Icon size={14} />}
    </IconButton>
  );
};
