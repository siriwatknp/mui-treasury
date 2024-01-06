import { ReactRenderer } from "@storybook/react";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";
import { linkTo } from "@storybook/addon-links";
import { DecoratorFunction } from "@storybook/types";
import { useCopyToClipboard } from "usehooks-ts";

export default function cliToolbar() {
  return function cliToolbarDecorator(Story, context) {
    const [hidden, setHidden] = React.useState(
      () => localStorage.getItem("cli-hidden") === "true"
    );
    const [blocks, setBlocks] = React.useState<Array<{ id: string }>>(() =>
      JSON.parse(localStorage.getItem("cli-blocks") || "[]")
    );
    const [, copy] = useCopyToClipboard();
    const [copied, setCopied] = React.useState(false);
    const timeoutRef = React.useRef<number | undefined>();
    const isAdded = blocks.some((block) => block.id === context.id);
    return (
      <>
        <Story />
        <Box
          data-chromatic="ignore"
          sx={{
            p: 0.5,
            position: "fixed",
            zIndex: 1000,
            bottom: "1rem",
            left: "3.25rem",
            borderRadius: 40,
            display: "flex",
            gap: 1,
            maxWidth: "calc(100vw - 4rem)",
          }}
        >
          <Tooltip
            placement="top-start"
            title={!hidden ? "Hide" : "Show toolbar"}
            sx={{ zIndex: 99999 }}
          >
            <IconButton
              size="small"
              onClick={() => {
                setHidden(!hidden);
                localStorage.setItem("cli-hidden", String(!hidden));
              }}
              sx={{
                transform: hidden ? "rotate(90deg)" : "rotate(-90deg)",
                borderRadius: "inherit",
                mr: hidden ? 0 : -0.5,
              }}
            >
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </SvgIcon>
            </IconButton>
          </Tooltip>
          {!hidden && (
            <>
              <Button
                disabled={!!isAdded}
                variant="outlined"
                color="inherit"
                size="small"
                sx={{ borderRadius: 40 }}
                startIcon={
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </SvgIcon>
                }
                onClick={() =>
                  setBlocks((prev) => {
                    if (prev.find((block) => block.id === context.id)) {
                      return prev;
                    }
                    localStorage.setItem(
                      "cli-blocks",
                      JSON.stringify([...prev, { id: context.id }])
                    );
                    return [...prev, { id: context.id }];
                  })
                }
              >
                {isAdded ? "Added" : "Add"}
              </Button>
              {blocks.length > 0 && (
                <Divider orientation="vertical" sx={{ my: 1 }} />
              )}
              {blocks.length > 0 && (
                <Tooltip title="Remove all" placement="top-start">
                  <IconButton
                    size="small"
                    sx={{ borderRadius: "xl" }}
                    onClick={() => {
                      setBlocks([]);
                      localStorage.setItem("cli-blocks", "[]");
                    }}
                  >
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                        />
                      </svg>
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
              )}
              {blocks.length > 0 && (
                <Tooltip
                  title={copied ? "Copied" : "Copy CLI command"}
                  placement="top-start"
                >
                  <IconButton
                    size="small"
                    sx={{ borderRadius: "xl" }}
                    onClick={async () => {
                      try {
                        await copy(
                          `npx mui-treasury@latest clone ${blocks
                            .map((block) => block.id.replace(/--.*/, ""))
                            .join(" ")}`
                        );
                        setCopied(true);
                        if (timeoutRef.current) {
                          window.clearTimeout(timeoutRef.current);
                        }
                        timeoutRef.current = window.setTimeout(() => {
                          setCopied(false);
                        }, 2000);
                      } catch (error) {}
                    }}
                  >
                    <SvgIcon>
                      {copied ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                          />
                        </svg>
                      )}
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
              )}
              {blocks.length > 0 && (
                <Box
                  sx={{
                    borderRadius: "inherit",
                    mr: -0.5,
                    my: -0.5,
                    pr: 1,
                    minWidth: 0,
                    overflow: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    background: (
                      theme
                    ) => `linear-gradient(to right, ${theme.vars.palette.background.default} 30%, rgba(255, 255, 255, 0)),
                    linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.default} 70%) 0 100%,
                    radial-gradient(
                      farthest-side at 0 50%,
                      rgba(0, 0, 0, 0.12),
                      rgba(0, 0, 0, 0)
                    ),
                    radial-gradient(
                        farthest-side at 100% 50%,
                        rgba(0, 0, 0, 0.12),
                        rgba(0, 0, 0, 0)
                      )
                      0 100%`,
                    backgroundSize:
                      "64px 100%, 64px 100%, 40px 200%, 40px 200%",
                    backgroundPosition: "0 0, 100% 0, 0 50%, 100% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "local, local, scroll, scroll",
                    backgroundColor: "neutral.softBg",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  {blocks.map((block) => (
                    <Chip
                      size="small"
                      key={block.id}
                      onClick={linkTo(block.id)}
                      sx={{
                        bgcolor: "transparent",
                        "& > button": { bgcolor: "transparent" },
                      }}
                      onDelete={() => {
                        setBlocks((prev) => {
                          const index = prev.findIndex(
                            (item) => item.id === block.id
                          );
                          if (index === -1) {
                            return prev;
                          }
                          prev.splice(index, 1);
                          localStorage.setItem(
                            "cli-blocks",
                            JSON.stringify([...prev])
                          );
                          return [...prev];
                        });
                      }}
                      label={
                        <Tooltip describeChild title="Goto block">
                          <span>{block.id.replace(/--.*/, "")}</span>
                        </Tooltip>
                      }
                    />
                  ))}
                </Box>
              )}
            </>
          )}
        </Box>
      </>
    );
  } as DecoratorFunction<ReactRenderer, {}>;
}
