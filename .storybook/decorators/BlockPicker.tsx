import React, { memo } from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { Button, IconButton } from "@storybook/components";
import { AddIcon, CheckIcon, CloseIcon, CopyIcon } from "@storybook/icons";
import {
  useParameter,
  useStorybookApi,
  useStorybookState,
} from "@storybook/manager-api";
import { useCopyToClipboard } from "usehooks-ts";

export const BlockPicker = memo(function MyAddonSelector() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const modules = useParameter<string[] | undefined>("modules");
  const storybookApi = useStorybookApi();
  const storybookState = useStorybookState();
  const [blocks, setBlocks] = React.useState<Array<{ id: string }>>(() =>
    JSON.parse(localStorage.getItem("cli-blocks") || "[]"),
  );
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<number | undefined>();
  const isAdded = blocks.some(
    (block) =>
      block.id.replace(/--.*/, "") ===
      storybookState.storyId.replace(/--.*/, ""),
  );
  return (
    <React.Fragment key="cli-toolbar/toolbar">
      <Box sx={{ width: 8 }} />
      <Button
        disabled={!!isAdded}
        onClick={() =>
          setBlocks((prev) => {
            if (
              prev.find(
                (block) =>
                  block.id.replace(/--.*/, "") ===
                  storybookState.storyId.replace(/--.*/, ""),
              )
            ) {
              return prev;
            }
            const list = [
              { id: storybookState.storyId },
              ...(modules || [])
                .filter((m: string) => !prev.find((item) => item.id === m))
                .map((m: string) => ({
                  id: m,
                })),
              ...prev,
            ];
            localStorage.setItem("cli-blocks", JSON.stringify(list));
            copy(
              `npx mui-treasury@latest clone ${list
                .map((block) => block.id.replace(/--.*/, ""))
                .join(" ")}`,
            );
            return list;
          })
        }
      >
        {(<AddIcon />) as any} {isAdded ? "Added" : "Add"}
      </Button>
      {blocks.length > 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& > button:focus": { zIndex: 1 },
          }}
        >
          <Button
            id="view-blocks"
            onClick={(event) => {
              setAnchorEl(event.currentTarget as HTMLElement);
            }}
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            View Blocks ({blocks.length})
            {
              (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M7 10l5 5 5-5z"></path>
                </svg>
              ) as any
            }
          </Button>
          <Button
            title="Copy CLI command"
            onClick={async () => {
              try {
                await copy(
                  `npx mui-treasury@latest clone ${blocks
                    .map((block) => block.id.replace(/--.*/, ""))
                    .join(" ")}`,
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
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              marginLeft: "-1px",
              minWidth: 90,
            }}
          >
            {copied ? ((<CheckIcon />) as any) : ((<CopyIcon />) as any)}
            {copied ? "Copied" : "Copy CLI"}
          </Button>
        </Box>
      )}
      <Popper
        id={Boolean(anchorEl) ? "view-blocks" : undefined}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        placement="bottom-start"
        sx={{ zIndex: 9999 }}
      >
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
          <Paper variant="outlined">
            <List dense>
              {blocks.map((block) => (
                <ListItem
                  key={block.id}
                  disablePadding
                  secondaryAction={
                    <IconButton
                      onClick={() => {
                        setBlocks((prev) => {
                          const index = prev.findIndex(
                            (item) => item.id === block.id,
                          );
                          if (index === -1) {
                            return prev;
                          }
                          prev.splice(index, 1);
                          localStorage.setItem(
                            "cli-blocks",
                            JSON.stringify([...prev]),
                          );
                          return [...prev];
                        });
                      }}
                    >
                      {(<CloseIcon />) as any}
                    </IconButton>
                  }
                  sx={{
                    "& .MuiListItemSecondaryAction-root": { right: "unset" },
                  }}
                >
                  <ListItemButton
                    key={block.id}
                    selected={
                      storybookState.storyId.replace(/--.*/, "") ===
                      block.id.replace(/--.*/, "")
                    }
                    onClick={() => {
                      storybookApi.selectStory(block.id);
                      setAnchorEl(null);
                    }}
                    sx={{ fontSize: "0.875rem" }}
                    style={{ paddingInline: "32px 12px" }}
                  >
                    {block.id.replace(/--.*/, "")}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </React.Fragment>
  );
});
