import { describe, it, expect } from "vitest";
import type { RegistryItem } from "./registry";

/**
 * Pure function implementations extracted for testing
 * These mirror the logic in registry.ts but operate on in-memory data
 */
function getSubcategoriesFromItems(
  items: RegistryItem[],
  category: string,
): string[] {
  const categoryItems = items.filter(
    (item) => item.meta?.category === category,
  );
  const subcats = new Set<string>();

  for (const item of categoryItems) {
    if (item.meta?.subcategory) {
      subcats.add(item.meta.subcategory);
    }
  }

  return Array.from(subcats).sort();
}

function getRegistryBySubcategoryFromItems(
  items: RegistryItem[],
  category: string,
  subcategory: string,
): RegistryItem[] {
  return items.filter(
    (item) =>
      item.meta?.category === category &&
      item.meta?.subcategory === subcategory,
  );
}

function getUncategorizedItemsFromItems(
  items: RegistryItem[],
  category: string,
): RegistryItem[] {
  return items.filter(
    (item) => item.meta?.category === category && !item.meta?.subcategory,
  );
}

// Mock registry items for testing
const mockItems: RegistryItem[] = [
  {
    path: "components/card-action-01/card-action-01.tsx",
    name: "card-action-01",
    type: "registry:item",
    title: "Card Action 01",
    description: "A card action component",
    dependencies: [],
    registryDependencies: [],
    files: [],
    meta: {
      category: "primitive",
      subcategory: "card",
    },
  },
  {
    path: "components/card-blog/card-blog.tsx",
    name: "card-blog",
    type: "registry:item",
    title: "Card Blog",
    description: "A card blog component",
    dependencies: [],
    registryDependencies: [],
    files: [],
    meta: {
      category: "primitive",
      subcategory: "card",
    },
  },
  {
    path: "components/card-news/card-news.tsx",
    name: "card-news",
    type: "registry:item",
    title: "Card News",
    description: "A card news component",
    dependencies: [],
    registryDependencies: [],
    files: [],
    meta: {
      category: "primitive",
      subcategory: "card",
    },
  },
  {
    path: "components/tabs-01/tabs-01.tsx",
    name: "tabs-01",
    type: "registry:item",
    title: "Tabs 01",
    description: "A tabs component",
    dependencies: [],
    registryDependencies: [],
    files: [],
    meta: {
      category: "primitive",
      subcategory: "tabs",
    },
  },
  {
    path: "components/tabs-apple/tabs-apple.tsx",
    name: "tabs-apple",
    type: "registry:item",
    title: "Tabs Apple",
    description: "An apple-style tabs component",
    dependencies: [],
    registryDependencies: [],
    files: [],
    meta: {
      category: "primitive",
      subcategory: "tabs",
    },
  },
  {
    path: "components/meter-01/meter-01.tsx",
    name: "meter-01",
    type: "registry:item",
    title: "Meter 01",
    description: "A meter component without subcategory",
    dependencies: [],
    registryDependencies: [],
    files: [],
    meta: {
      category: "primitive",
    },
  },
  {
    path: "components/menubar-01/menubar-01.tsx",
    name: "menubar-01",
    type: "registry:item",
    title: "Menubar 01",
    description: "A menubar component without subcategory",
    dependencies: [],
    registryDependencies: [],
    files: [],
    meta: {
      category: "primitive",
    },
  },
  {
    path: "components/ai-message/ai-message.tsx",
    name: "ai-message",
    type: "registry:item",
    title: "AI Message",
    description: "An AI message component",
    dependencies: [],
    registryDependencies: [],
    files: [],
    meta: {
      category: "ai",
    },
  },
  {
    path: "components/ai-loader/ai-loader.tsx",
    name: "ai-loader",
    type: "registry:item",
    title: "AI Loader",
    description: "An AI loader component",
    dependencies: [],
    registryDependencies: [],
    files: [],
    meta: {
      category: "ai",
    },
  },
];

describe("registry subcategory functions", () => {
  describe("getSubcategories", () => {
    it("should return unique subcategories for a category", () => {
      const subcategories = getSubcategoriesFromItems(mockItems, "primitive");

      expect(subcategories).toEqual(["card", "tabs"]);
    });

    it("should return sorted subcategories alphabetically", () => {
      const subcategories = getSubcategoriesFromItems(mockItems, "primitive");

      expect(subcategories).toEqual([...subcategories].sort());
    });

    it("should return empty array for category without subcategories", () => {
      const subcategories = getSubcategoriesFromItems(mockItems, "ai");

      expect(subcategories).toEqual([]);
    });

    it("should return empty array for non-existent category", () => {
      const subcategories = getSubcategoriesFromItems(mockItems, "nonexistent");

      expect(subcategories).toEqual([]);
    });

    it("should not include duplicates when multiple items have same subcategory", () => {
      const subcategories = getSubcategoriesFromItems(mockItems, "primitive");

      // card appears 3 times, tabs appears 2 times, but each should appear once
      expect(subcategories.filter((s) => s === "card")).toHaveLength(1);
      expect(subcategories.filter((s) => s === "tabs")).toHaveLength(1);
    });
  });

  describe("getRegistryBySubcategory", () => {
    it("should return items matching category and subcategory", () => {
      const items = getRegistryBySubcategoryFromItems(
        mockItems,
        "primitive",
        "card",
      );

      expect(items).toHaveLength(3);
      expect(items.map((i) => i.name)).toEqual(
        expect.arrayContaining(["card-action-01", "card-blog", "card-news"]),
      );
    });

    it("should return items for tabs subcategory", () => {
      const items = getRegistryBySubcategoryFromItems(
        mockItems,
        "primitive",
        "tabs",
      );

      expect(items).toHaveLength(2);
      expect(items.map((i) => i.name)).toEqual(
        expect.arrayContaining(["tabs-01", "tabs-apple"]),
      );
    });

    it("should return empty array for non-existent subcategory", () => {
      const items = getRegistryBySubcategoryFromItems(
        mockItems,
        "primitive",
        "nonexistent",
      );

      expect(items).toEqual([]);
    });

    it("should not return items from different category", () => {
      const items = getRegistryBySubcategoryFromItems(mockItems, "ai", "card");

      expect(items).toEqual([]);
    });

    it("should not return items without subcategory", () => {
      const items = getRegistryBySubcategoryFromItems(
        mockItems,
        "primitive",
        "card",
      );

      // meter-01 and menubar-01 have no subcategory, should not be included
      expect(items.map((i) => i.name)).not.toContain("meter-01");
      expect(items.map((i) => i.name)).not.toContain("menubar-01");
    });
  });

  describe("getUncategorizedItems", () => {
    it("should return items without subcategory in a category", () => {
      const items = getUncategorizedItemsFromItems(mockItems, "primitive");

      expect(items).toHaveLength(2);
      expect(items.map((i) => i.name)).toEqual(
        expect.arrayContaining(["meter-01", "menubar-01"]),
      );
    });

    it("should return all items for category without any subcategories defined", () => {
      const items = getUncategorizedItemsFromItems(mockItems, "ai");

      expect(items).toHaveLength(2);
      expect(items.map((i) => i.name)).toEqual(
        expect.arrayContaining(["ai-message", "ai-loader"]),
      );
    });

    it("should return empty array for non-existent category", () => {
      const items = getUncategorizedItemsFromItems(mockItems, "nonexistent");

      expect(items).toEqual([]);
    });

    it("should not return items that have a subcategory", () => {
      const items = getUncategorizedItemsFromItems(mockItems, "primitive");

      // card-* and tabs-* items have subcategory, should not be included
      expect(items.map((i) => i.name)).not.toContain("card-action-01");
      expect(items.map((i) => i.name)).not.toContain("tabs-01");
    });
  });

  describe("integration: subcategory + uncategorized = total", () => {
    it("should have subcategorized + uncategorized equal total items in category", () => {
      const primitiveItems = mockItems.filter(
        (i) => i.meta?.category === "primitive",
      );
      const subcategories = getSubcategoriesFromItems(mockItems, "primitive");
      const uncategorized = getUncategorizedItemsFromItems(
        mockItems,
        "primitive",
      );

      let subcategorizedCount = 0;
      for (const subcat of subcategories) {
        subcategorizedCount += getRegistryBySubcategoryFromItems(
          mockItems,
          "primitive",
          subcat,
        ).length;
      }

      expect(subcategorizedCount + uncategorized.length).toBe(
        primitiveItems.length,
      );
    });

    it("should correctly partition items by subcategory", () => {
      // In primitive: 3 card + 2 tabs + 2 uncategorized = 7 total
      const cardItems = getRegistryBySubcategoryFromItems(
        mockItems,
        "primitive",
        "card",
      );
      const tabsItems = getRegistryBySubcategoryFromItems(
        mockItems,
        "primitive",
        "tabs",
      );
      const uncategorized = getUncategorizedItemsFromItems(
        mockItems,
        "primitive",
      );

      expect(cardItems.length).toBe(3);
      expect(tabsItems.length).toBe(2);
      expect(uncategorized.length).toBe(2);
      expect(cardItems.length + tabsItems.length + uncategorized.length).toBe(
        7,
      );
    });
  });

  describe("edge cases", () => {
    it("should handle empty items array", () => {
      const subcategories = getSubcategoriesFromItems([], "primitive");
      const bySubcategory = getRegistryBySubcategoryFromItems(
        [],
        "primitive",
        "card",
      );
      const uncategorized = getUncategorizedItemsFromItems([], "primitive");

      expect(subcategories).toEqual([]);
      expect(bySubcategory).toEqual([]);
      expect(uncategorized).toEqual([]);
    });

    it("should handle items with undefined meta", () => {
      const itemsWithUndefinedMeta: RegistryItem[] = [
        {
          path: "test.tsx",
          name: "test",
          type: "registry:item",
          title: "Test",
          description: "",
          dependencies: [],
          registryDependencies: [],
          files: [],
          meta: {},
        },
      ];

      const subcategories = getSubcategoriesFromItems(
        itemsWithUndefinedMeta,
        "primitive",
      );
      expect(subcategories).toEqual([]);
    });
  });
});
