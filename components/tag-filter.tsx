"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface TagFilterProps {
  availableTags: string[];
  selectedTags: string[];
  category: string;
}

export default function TagFilter({
  availableTags,
  selectedTags,
  category,
}: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggleTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    const params = new URLSearchParams(searchParams);

    if (newSelectedTags.length > 0) {
      params.set("tags", newSelectedTags.join(","));
    } else {
      params.delete("tags");
    }

    const search = params.toString();
    router.push(`/${category}${search ? `?${search}` : ""}`);
  };

  const clearAllTags = () => {
    router.push(`/${category}`);
  };

  if (availableTags.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-[57px] bg-background/80 backdrop-blur-sm py-4 mb-8 z-20">
      <div className="flex flex-wrap gap-3 justify-center">
        {availableTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border-1 text-sm font-medium transition-all duration-200 capitalize",
                isSelected
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
              )}
            >
              {isSelected && <Check className="w-4 h-4" />}
              {tag}
            </button>
          );
        })}

        {selectedTags.length > 0 && (
          <button
            onClick={clearAllTags}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
}
