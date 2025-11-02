"use client";

import {
  Task,
  TaskTrigger,
  TaskContent,
  TaskItem,
  TaskItemFile,
} from "./ai-task";

export default function AITaskDemo() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 p-8">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Task Component
        </h3>

        <div className="space-y-4">
          <Task>
            <TaskTrigger title="Searching for React hooks usage" />
            <TaskContent>
              <TaskItem>
                Found <TaskItemFile>useEffect</TaskItemFile> in 12 files
              </TaskItem>
              <TaskItem>
                Found <TaskItemFile>useState</TaskItemFile> in 23 files
              </TaskItem>
              <TaskItem>
                Found <TaskItemFile>useCallback</TaskItemFile> in 8 files
              </TaskItem>
            </TaskContent>
          </Task>

          <Task>
            <TaskTrigger title="Analyzing component structure" />
            <TaskContent>
              <TaskItem>
                Scanning <TaskItemFile>src/components</TaskItemFile>
              </TaskItem>
              <TaskItem>Found 45 component files</TaskItem>
              <TaskItem>Checking for unused exports</TaskItem>
            </TaskContent>
          </Task>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Collapsed Task
        </h3>

        <Task defaultOpen={false}>
          <TaskTrigger title="Running tests" />
          <TaskContent>
            <TaskItem>
              Running test suite <TaskItemFile>auth.test.ts</TaskItemFile>
            </TaskItem>
            <TaskItem>✅ All tests passed (15/15)</TaskItem>
            <TaskItem>Coverage: 92%</TaskItem>
          </TaskContent>
        </Task>
      </div>
    </div>
  );
}
