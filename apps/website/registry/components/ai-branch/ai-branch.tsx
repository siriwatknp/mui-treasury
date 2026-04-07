"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import type { UIMessage } from "ai";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { memo, type ComponentProps, type ReactElement } from "react";
import { createContext, useContext, useEffect, useState } from "react";

type BranchContextType = {
  currentBranch: number;
  totalBranches: number;
  goToPrevious: () => void;
  goToNext: () => void;
  branches: ReactElement[];
  setBranches: (branches: ReactElement[]) => void;
};

const BranchContext = createContext<BranchContextType | null>(null);

const useBranch = () => {
  const context = useContext(BranchContext);

  if (!context) {
    throw new Error("Branch components must be used within Branch");
  }

  return context;
};

export type BranchProps = ComponentProps<typeof Box> & {
  defaultBranch?: number;
  onBranchChange?: (branchIndex: number) => void;
};

export const Branch = ({
  defaultBranch = 0,
  onBranchChange,
  children,
  sx,
  ...props
}: BranchProps) => {
  const [currentBranch, setCurrentBranch] = useState(defaultBranch);
  const [branches, setBranches] = useState<ReactElement[]>([]);

  const handleBranchChange = (newBranch: number) => {
    setCurrentBranch(newBranch);
    onBranchChange?.(newBranch);
  };

  const goToPrevious = () => {
    const newBranch =
      currentBranch > 0 ? currentBranch - 1 : branches.length - 1;
    handleBranchChange(newBranch);
  };

  const goToNext = () => {
    const newBranch =
      currentBranch < branches.length - 1 ? currentBranch + 1 : 0;
    handleBranchChange(newBranch);
  };

  const contextValue: BranchContextType = {
    currentBranch,
    totalBranches: branches.length,
    goToPrevious,
    goToNext,
    branches,
    setBranches,
  };

  return (
    <BranchContext.Provider value={contextValue}>
      <Box
        sx={{
          display: "grid",
          width: "100%",
          gap: 1,
          "& > div": {
            pb: 0,
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </Box>
    </BranchContext.Provider>
  );
};

export type BranchMessagesProps = ComponentProps<typeof Box>;

export const BranchMessages = ({
  children,
  sx,
  ...props
}: BranchMessagesProps) => {
  const { currentBranch, setBranches, branches } = useBranch();
  const childrenArray = Array.isArray(children) ? children : [children];

  // Use useEffect to update branches when they change
  useEffect(() => {
    if (branches.length !== childrenArray.length) {
      setBranches(childrenArray);
    }
  }, [childrenArray, branches, setBranches]);

  return childrenArray.map((branch, index) => (
    <Box
      sx={{
        display: index === currentBranch ? "grid" : "none",
        gap: 1,
        overflow: "hidden",
        "& > div": {
          pb: 0,
        },
        ...sx,
      }}
      key={branch.key}
      {...props}
    >
      {branch}
    </Box>
  ));
};

export type BranchSelectorProps = ComponentProps<typeof Box> & {
  from: UIMessage["role"];
};

export const BranchSelector = memo(
  ({ from, sx, children, ...props }: BranchSelectorProps) => {
    const { totalBranches } = useBranch();

    // Don't render if there's only one branch
    if (totalBranches <= 1) {
      return null;
    }

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          alignSelf: "end",
          px: 5,
          justifyContent: from === "assistant" ? "flex-start" : "flex-end",
          ...sx,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

BranchSelector.displayName = "BranchSelector";

export type BranchPreviousProps = ComponentProps<typeof IconButton>;

export const BranchPrevious = ({
  children,
  sx,
  ...props
}: BranchPreviousProps) => {
  const { goToPrevious, totalBranches } = useBranch();

  return (
    <IconButton
      aria-label="Previous branch"
      sx={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        color: "text.secondary",
        transition: "all 0.2s",
        "&:hover": {
          bgcolor: "action.hover",
          color: "text.primary",
        },
        "&:disabled": {
          opacity: 0.5,
          pointerEvents: "none",
        },
        ...sx,
      }}
      disabled={totalBranches <= 1}
      onClick={goToPrevious}
      size="small"
      type="button"
      {...props}
    >
      {children ?? <ChevronLeftIcon size={14} />}
    </IconButton>
  );
};

export type BranchNextProps = ComponentProps<typeof IconButton>;

export const BranchNext = ({ children, sx, ...props }: BranchNextProps) => {
  const { goToNext, totalBranches } = useBranch();

  return (
    <IconButton
      aria-label="Next branch"
      sx={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        color: "text.secondary",
        transition: "all 0.2s",
        "&:hover": {
          bgcolor: "action.hover",
          color: "text.primary",
        },
        "&:disabled": {
          opacity: 0.5,
          pointerEvents: "none",
        },
        ...sx,
      }}
      disabled={totalBranches <= 1}
      onClick={goToNext}
      size="small"
      type="button"
      {...props}
    >
      {children ?? <ChevronRightIcon size={14} />}
    </IconButton>
  );
};

export type BranchPageProps = ComponentProps<typeof Typography>;

export const BranchPage = ({ sx, ...props }: BranchPageProps) => {
  const { currentBranch, totalBranches } = useBranch();

  return (
    <Typography
      component="span"
      variant="caption"
      sx={{
        fontWeight: 500,
        color: "text.secondary",
        fontVariantNumeric: "tabular-nums",
        ...sx,
      }}
      {...props}
    >
      {currentBranch + 1} of {totalBranches}
    </Typography>
  );
};
