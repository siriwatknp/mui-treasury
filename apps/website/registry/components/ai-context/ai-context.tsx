"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import type { LanguageModelUsage } from "ai";
import {
  type ComponentProps,
  type ReactNode,
  createContext,
  useContext,
} from "react";
import { estimateCost, type ModelId } from "tokenlens";

const PERCENT_MAX = 100;
const ICON_RADIUS = 10;
const ICON_VIEWBOX = 24;
const ICON_CENTER = 12;
const ICON_STROKE_WIDTH = 2;

type ContextSchema = {
  usedTokens: number;
  maxTokens: number;
  usage?: LanguageModelUsage;
  modelId?: ModelId;
};

const ContextContext = createContext<ContextSchema | null>(null);

const useContextValue = () => {
  const context = useContext(ContextContext);

  if (!context) {
    throw new Error("Context components must be used within Context");
  }

  return context;
};

export type ContextProps = {
  children: ReactNode;
} & ContextSchema;

export const Context = ({
  usedTokens,
  maxTokens,
  usage,
  modelId,
  children,
}: ContextProps) => (
  <ContextContext.Provider
    value={{
      usedTokens,
      maxTokens,
      usage,
      modelId,
    }}
  >
    {children}
  </ContextContext.Provider>
);

const ContextIcon = () => {
  const { usedTokens, maxTokens } = useContextValue();
  const circumference = 2 * Math.PI * ICON_RADIUS;
  const usedPercent = usedTokens / maxTokens;
  const dashOffset = circumference * (1 - usedPercent);

  return (
    <svg
      aria-label="Model context usage"
      height="20"
      role="img"
      style={{ color: "currentcolor" }}
      viewBox={`0 0 ${ICON_VIEWBOX} ${ICON_VIEWBOX}`}
      width="20"
    >
      <circle
        cx={ICON_CENTER}
        cy={ICON_CENTER}
        fill="none"
        opacity="0.25"
        r={ICON_RADIUS}
        stroke="currentColor"
        strokeWidth={ICON_STROKE_WIDTH}
      />
      <circle
        cx={ICON_CENTER}
        cy={ICON_CENTER}
        fill="none"
        opacity="0.7"
        r={ICON_RADIUS}
        stroke="currentColor"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        strokeWidth={ICON_STROKE_WIDTH}
        style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
      />
    </svg>
  );
};

export type ContextTriggerProps = ComponentProps<typeof Button> & {
  onOpen?: (event: React.MouseEvent<HTMLElement>) => void;
};

export const ContextTrigger = ({
  children,
  onOpen,
  sx,
  ...props
}: ContextTriggerProps) => {
  const { usedTokens, maxTokens } = useContextValue();
  const usedPercent = usedTokens / maxTokens;
  const renderedPercent = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(usedPercent);

  return (
    children ?? (
      <Button
        type="button"
        variant="text"
        onClick={onOpen}
        sx={{
          minWidth: "auto",
          p: 1,
          color: "text.secondary",
          "&:hover": {
            bgcolor: "action.hover",
          },
          ...sx,
        }}
        {...props}
      >
        <Typography
          component="span"
          sx={{ fontWeight: 500, mr: 1, color: "text.secondary" }}
        >
          {renderedPercent}
        </Typography>
        <ContextIcon />
      </Button>
    )
  );
};

export type ContextContentProps = ComponentProps<typeof Box>;

export const ContextContent = ({
  sx,
  children,
  ...props
}: ContextContentProps) => (
  <Box
    sx={{
      minWidth: 240,
      "& > *:not(:last-child)": {
        borderBottom: 1,
        borderColor: "divider",
      },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export type ContextContentHeaderProps = ComponentProps<typeof Box>;

export const ContextContentHeader = ({
  children,
  sx,
  ...props
}: ContextContentHeaderProps) => {
  const { usedTokens, maxTokens } = useContextValue();
  const usedPercent = usedTokens / maxTokens;
  const displayPct = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(usedPercent);
  const used = new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(usedTokens);
  const total = new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(maxTokens);

  return (
    <Box sx={{ width: "100%", p: 1.5, ...sx }} {...props}>
      {children ?? (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1.5,
              mb: 1,
            }}
          >
            <Typography variant="caption">{displayPct}</Typography>
            <Typography
              variant="caption"
              sx={{ fontFamily: "monospace", color: "text.secondary" }}
            >
              {used} / {total}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={usedPercent * PERCENT_MAX}
            sx={{ height: 6, borderRadius: 1, bgcolor: "action.hover" }}
          />
        </>
      )}
    </Box>
  );
};

export type ContextContentBodyProps = ComponentProps<typeof Box>;

export const ContextContentBody = ({
  children,
  sx,
  ...props
}: ContextContentBodyProps) => (
  <Box sx={{ width: "100%", p: 1.5, ...sx }} {...props}>
    {children}
  </Box>
);

export type ContextContentFooterProps = ComponentProps<typeof Box>;

export const ContextContentFooter = ({
  children,
  sx,
  ...props
}: ContextContentFooterProps) => {
  const { modelId, usage } = useContextValue();
  const costUSD = modelId
    ? estimateCost({
        modelId,
        usage: {
          input: usage?.inputTokens ?? 0,
          output: usage?.outputTokens ?? 0,
        },
      }).totalUSD
    : undefined;
  const totalCost = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(costUSD ?? 0);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1.5,
        bgcolor: "action.hover",
        p: 1.5,
        ...sx,
      }}
      {...props}
    >
      {children ?? (
        <>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Total cost
          </Typography>
          <Typography variant="caption">{totalCost}</Typography>
        </>
      )}
    </Box>
  );
};

export type ContextInputUsageProps = ComponentProps<typeof Box>;

export const ContextInputUsage = ({
  sx,
  children,
  ...props
}: ContextInputUsageProps) => {
  const { usage, modelId } = useContextValue();
  const inputTokens = usage?.inputTokens ?? 0;

  if (children) {
    return <>{children}</>;
  }

  if (!inputTokens) {
    return null;
  }

  const inputCost = modelId
    ? estimateCost({
        modelId,
        usage: { input: inputTokens, output: 0 },
      }).totalUSD
    : undefined;
  const inputCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputCost ?? 0);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...sx,
      }}
      {...props}
    >
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        Input
      </Typography>
      <TokensWithCost costText={inputCostText} tokens={inputTokens} />
    </Box>
  );
};

export type ContextOutputUsageProps = ComponentProps<typeof Box>;

export const ContextOutputUsage = ({
  sx,
  children,
  ...props
}: ContextOutputUsageProps) => {
  const { usage, modelId } = useContextValue();
  const outputTokens = usage?.outputTokens ?? 0;

  if (children) {
    return <>{children}</>;
  }

  if (!outputTokens) {
    return null;
  }

  const outputCost = modelId
    ? estimateCost({
        modelId,
        usage: { input: 0, output: outputTokens },
      }).totalUSD
    : undefined;
  const outputCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(outputCost ?? 0);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...sx,
      }}
      {...props}
    >
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        Output
      </Typography>
      <TokensWithCost costText={outputCostText} tokens={outputTokens} />
    </Box>
  );
};

export type ContextReasoningUsageProps = ComponentProps<typeof Box>;

export const ContextReasoningUsage = ({
  sx,
  children,
  ...props
}: ContextReasoningUsageProps) => {
  const { usage, modelId } = useContextValue();
  const reasoningTokens = usage?.reasoningTokens ?? 0;

  if (children) {
    return <>{children}</>;
  }

  if (!reasoningTokens) {
    return null;
  }

  const reasoningCost = modelId
    ? estimateCost({
        modelId,
        usage: { reasoningTokens },
      }).totalUSD
    : undefined;
  const reasoningCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(reasoningCost ?? 0);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...sx,
      }}
      {...props}
    >
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        Reasoning
      </Typography>
      <TokensWithCost costText={reasoningCostText} tokens={reasoningTokens} />
    </Box>
  );
};

export type ContextCacheUsageProps = ComponentProps<typeof Box>;

export const ContextCacheUsage = ({
  sx,
  children,
  ...props
}: ContextCacheUsageProps) => {
  const { usage, modelId } = useContextValue();
  const cacheTokens = usage?.cachedInputTokens ?? 0;

  if (children) {
    return <>{children}</>;
  }

  if (!cacheTokens) {
    return null;
  }

  const cacheCost = modelId
    ? estimateCost({
        modelId,
        usage: { cacheReads: cacheTokens, input: 0, output: 0 },
      }).totalUSD
    : undefined;
  const cacheCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cacheCost ?? 0);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...sx,
      }}
      {...props}
    >
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        Cache
      </Typography>
      <TokensWithCost costText={cacheCostText} tokens={cacheTokens} />
    </Box>
  );
};

const TokensWithCost = ({
  tokens,
  costText,
}: {
  tokens?: number;
  costText?: string;
}) => (
  <Typography component="span" variant="caption">
    {tokens === undefined
      ? "—"
      : new Intl.NumberFormat("en-US", {
          notation: "compact",
        }).format(tokens)}
    {costText ? (
      <Typography
        component="span"
        variant="caption"
        sx={{ ml: 1, color: "text.secondary" }}
      >
        • {costText}
      </Typography>
    ) : null}
  </Typography>
);
