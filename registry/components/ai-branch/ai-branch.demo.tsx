"use client";

import {
  Branch,
  BranchMessages,
  BranchSelector,
  BranchPrevious,
  BranchNext,
  BranchPage,
} from "./ai-branch";

export default function AIBranchDemo() {
  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <h3 className="text-sm font-medium text-muted-foreground mb-4">
        Branch Navigation Demo
      </h3>
      <Branch>
        <BranchMessages>
          <div key="1" className="p-4 bg-secondary rounded-lg">
            <p>Branch 1: This is the first version of the response.</p>
          </div>
          <div key="2" className="p-4 bg-secondary rounded-lg">
            <p>Branch 2: Here's an alternative response.</p>
          </div>
          <div key="3" className="p-4 bg-secondary rounded-lg">
            <p>Branch 3: And yet another variation.</p>
          </div>
        </BranchMessages>

        <BranchSelector from="assistant">
          <div className="flex items-center gap-2">
            <BranchPrevious />
            <BranchPage />
            <BranchNext />
          </div>
        </BranchSelector>
      </Branch>
    </div>
  );
}
