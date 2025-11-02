"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import {
  memo,
  type ComponentProps,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
  type MouseEvent,
} from "react";

export type InlineCitationProps = ComponentProps<typeof Box>;

export const InlineCitation = ({ sx, ...props }: InlineCitationProps) => (
  <Box
    component="span"
    sx={{
      display: "inline",
      ...sx,
    }}
    {...props}
  />
);

export type InlineCitationTextProps = ComponentProps<typeof Box>;

export const InlineCitationText = ({
  sx,
  ...props
}: InlineCitationTextProps) => (
  <Box
    component="span"
    sx={{
      display: "inline",
      transition: "background-color 0.2s",
      borderRadius: 0.5,
      px: 0.25,
      "&:hover": {
        bgcolor: "action.hover",
      },
      ...sx,
    }}
    {...props}
  />
);

export type InlineCitationCardProps = {
  sources: string[];
  children: React.ReactNode;
};

export const InlineCitationCard = ({
  sources,
  children,
}: InlineCitationCardProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const hoverState = useRef({ chip: false, popover: false });
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const checkClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => {
      if (!hoverState.current.chip && !hoverState.current.popover) {
        setAnchorEl(null);
      }
    }, 150);
  }, []);

  const handleChipMouseEnter = useCallback((e: MouseEvent<HTMLDivElement>) => {
    hoverState.current.chip = true;
    setAnchorEl(e.currentTarget);
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
  }, []);

  const handleChipMouseLeave = useCallback(() => {
    hoverState.current.chip = false;
    checkClose();
  }, [checkClose]);

  const handlePopoverMouseEnter = useCallback(() => {
    hoverState.current.popover = true;
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
  }, []);

  const handlePopoverMouseLeave = useCallback(() => {
    hoverState.current.popover = false;
    checkClose();
  }, [checkClose]);

  return (
    <>
      <InlineCitationCardTrigger
        sources={sources}
        onMouseEnter={handleChipMouseEnter}
        onMouseLeave={handleChipMouseLeave}
      />
      <InlineCitationCardBody
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        onMouseEnter={handlePopoverMouseEnter}
        onMouseLeave={handlePopoverMouseLeave}
      >
        {children}
      </InlineCitationCardBody>
    </>
  );
};

export type InlineCitationCardTriggerProps = ComponentProps<typeof Chip> & {
  sources: string[];
  onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
};

export const InlineCitationCardTrigger = ({
  sources,
  onMouseEnter,
  onMouseLeave,
  sx,
  ...props
}: InlineCitationCardTriggerProps) => {
  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return url;
    }
  };

  return (
    <Chip
      component="span"
      size="small"
      color="secondary"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      label={
        sources.length ? (
          <>
            {getHostname(sources[0])}
            {sources.length > 1 && ` +${sources.length - 1}`}
          </>
        ) : (
          "unknown"
        )
      }
      sx={{
        ml: 0.25,
        height: 20,
        fontSize: "0.7rem",
        fontWeight: 400,
        cursor: "pointer",
        verticalAlign: "middle",
        ...sx,
      }}
      {...props}
    />
  );
};

export type InlineCitationCardBodyProps = ComponentProps<typeof Box> & {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const InlineCitationCardBody = ({
  anchorEl,
  open,
  onClose,
  onMouseEnter,
  onMouseLeave,
  children,
  sx,
  ...props
}: InlineCitationCardBodyProps) => (
  <Popper
    open={open}
    anchorEl={anchorEl}
    placement="bottom-start"
    modifiers={[
      {
        name: "offset",
        options: {
          offset: [0, 4],
        },
      },
    ]}
    sx={{ zIndex: 1300 }}
  >
    <Paper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        width: 320,
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      <Box sx={{ position: "relative", ...sx }} {...props}>
        {children}
      </Box>
    </Paper>
  </Popper>
);

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];

const CarouselApiContext = createContext<CarouselApi | undefined>(undefined);

const useCarouselApi = () => {
  const context = useContext(CarouselApiContext);
  return context;
};

export type InlineCitationCarouselProps = ComponentProps<typeof Box>;

export const InlineCitationCarousel = ({
  children,
  sx,
  ...props
}: InlineCitationCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  return (
    <CarouselApiContext.Provider value={emblaApi}>
      <Box
        ref={emblaRef}
        sx={{
          width: "100%",
          overflow: "hidden",
          ...sx,
        }}
        {...props}
      >
        {children}
      </Box>
    </CarouselApiContext.Provider>
  );
};

export type InlineCitationCarouselContentProps = ComponentProps<typeof Box>;

export const InlineCitationCarouselContent = ({
  sx,
  ...props
}: InlineCitationCarouselContentProps) => (
  <Box sx={{ display: "flex", ...sx }} {...props} />
);

export type InlineCitationCarouselItemProps = ComponentProps<typeof Box>;

export const InlineCitationCarouselItem = ({
  sx,
  ...props
}: InlineCitationCarouselItemProps) => (
  <Box
    sx={{
      width: "100%",
      flexShrink: 0,
      p: 2,
      pl: 4,
      display: "flex",
      flexDirection: "column",
      gap: 1,
      ...sx,
    }}
    {...props}
  />
);

export type InlineCitationCarouselHeaderProps = ComponentProps<typeof Box>;

export const InlineCitationCarouselHeader = ({
  sx,
  ...props
}: InlineCitationCarouselHeaderProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 1,
      bgcolor: "action.hover",
      p: 1,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      ...sx,
    }}
    {...props}
  />
);

export type InlineCitationCarouselIndexProps = ComponentProps<typeof Box>;

export const InlineCitationCarouselIndex = ({
  children,
  sx,
  ...props
}: InlineCitationCarouselIndexProps) => {
  const api = useCarouselApi();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        px: 1.5,
        py: 0.5,
        ...sx,
      }}
      {...props}
    >
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        {children ?? `${current}/${count}`}
      </Typography>
    </Box>
  );
};

export type InlineCitationCarouselPrevProps = ComponentProps<typeof IconButton>;

export const InlineCitationCarouselPrev = ({
  sx,
  ...props
}: InlineCitationCarouselPrevProps) => {
  const api = useCarouselApi();

  const handleClick = useCallback(() => {
    if (api) {
      api.scrollPrev();
    }
  }, [api]);

  return (
    <IconButton
      size="small"
      aria-label="Previous"
      onClick={handleClick}
      sx={{
        p: 0.5,
        color: "text.secondary",
        ...sx,
      }}
      {...props}
    >
      <ArrowLeftIcon className="size-4" />
    </IconButton>
  );
};

export type InlineCitationCarouselNextProps = ComponentProps<typeof IconButton>;

export const InlineCitationCarouselNext = ({
  sx,
  ...props
}: InlineCitationCarouselNextProps) => {
  const api = useCarouselApi();

  const handleClick = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  return (
    <IconButton
      size="small"
      aria-label="Next"
      onClick={handleClick}
      sx={{
        p: 0.5,
        color: "text.secondary",
        ...sx,
      }}
      {...props}
    >
      <ArrowRightIcon className="size-4" />
    </IconButton>
  );
};

export type InlineCitationSourceProps = ComponentProps<typeof Box> & {
  title?: string;
  url?: string;
  description?: string;
};

export const InlineCitationSource = memo(
  ({
    title,
    url,
    description,
    children,
    sx,
    ...props
  }: InlineCitationSourceProps) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        ...sx,
      }}
      {...props}
    >
      {title && (
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            lineHeight: 1.2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
      )}
      {url && (
        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            wordBreak: "break-all",
          }}
        >
          {url}
        </Typography>
      )}
      {description && (
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
      )}
      {children}
    </Box>
  ),
);

InlineCitationSource.displayName = "InlineCitationSource";

export type InlineCitationQuoteProps = ComponentProps<"blockquote"> & {
  sx?: ComponentProps<typeof Box>["sx"];
};

export const InlineCitationQuote = ({
  children,
  sx,
  ...props
}: InlineCitationQuoteProps) => (
  <Box
    component="blockquote"
    sx={{
      borderLeft: 2,
      borderColor: "divider",
      pl: 1.5,
      fontStyle: "italic",
      color: "text.secondary",
      fontSize: "0.875rem",
      m: 0,
      ...sx,
    }}
    {...(props as any)}
  >
    {children}
  </Box>
);
