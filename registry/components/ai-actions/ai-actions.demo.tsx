"use client";

import { Actions, Action } from "./ai-actions";
import { CopyIcon, ShareIcon, MoreVerticalIcon } from "lucide-react";

export default function AIActionsDemo() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Basic Actions
        </h3>
        <Actions>
          <Action label="Copy" onClick={() => console.log("Copy clicked")}>
            <CopyIcon className="size-4" />
          </Action>
          <Action label="Share" onClick={() => console.log("Share clicked")}>
            <ShareIcon className="size-4" />
          </Action>
          <Action label="More" onClick={() => console.log("More clicked")}>
            <MoreVerticalIcon className="size-4" />
          </Action>
        </Actions>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Actions with Tooltips
        </h3>
        <Actions>
          <Action
            tooltip="Copy to clipboard"
            onClick={() => console.log("Copy clicked")}
          >
            <CopyIcon className="size-4" />
          </Action>
          <Action
            tooltip="Share this content"
            onClick={() => console.log("Share clicked")}
          >
            <ShareIcon className="size-4" />
          </Action>
          <Action
            tooltip="More options"
            onClick={() => console.log("More clicked")}
          >
            <MoreVerticalIcon className="size-4" />
          </Action>
        </Actions>
      </div>
    </div>
  );
}
