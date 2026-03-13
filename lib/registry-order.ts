/**
 * Custom ordering for subcategories within a category.
 * Key: category name (e.g., "ai")
 * Value: array of subcategory names in desired order
 */
export const subcategoryOrder: Record<string, string[]> = {
  ai: ["elements", "firebase"],
};

/**
 * Custom ordering for registry items by pathname.
 * Key: pathname segment (e.g., "ai/firebase" for /ai/firebase route)
 * Value: array of registry names in desired order
 *
 * Items not in the array will be sorted alphabetically after ordered items.
 * If pathname not present, default alphabetical sorting is used.
 */
export const registryOrder: Record<string, string[]> = {
  "ai/firebase": [
    "firebase-chat-transport",
    "firebase-generate-text",
    "firebase-tool-calling",
    "firebase-thinking-model",
    "firebase-image-generation",
    "firebase-analyze-image",
    "firebase-story-telling",
    "firebase-google-search",
  ],
};

/**
 * Orders items based on registryOrder config.
 * Items in the order array come first (in specified order),
 * remaining items are sorted alphabetically.
 */
export function orderItems<T extends { name: string }>(
  items: T[],
  pathname: string,
): T[] {
  const order = registryOrder[pathname];
  const orderMap = order
    ? new Map(order.map((name, index) => [name, index]))
    : null;

  // Extract subcategory name from pathname (e.g., "primitive/sidebar" → "sidebar")
  const subcategory = pathname.split("/").pop();

  return [...items].sort((a, b) => {
    if (orderMap) {
      const aIndex = orderMap.get(a.name);
      const bIndex = orderMap.get(b.name);

      if (aIndex !== undefined && bIndex !== undefined) {
        return aIndex - bIndex;
      }
      if (aIndex !== undefined) return -1;
      if (bIndex !== undefined) return 1;
    }

    // Parent item (name matches subcategory) always comes first
    if (subcategory) {
      if (a.name === subcategory) return -1;
      if (b.name === subcategory) return 1;
    }

    return a.name.localeCompare(b.name);
  });
}

/**
 * Orders subcategories based on subcategoryOrder config.
 */
export function orderSubcategories(
  subcategories: string[],
  categoryName: string,
): string[] {
  const order = subcategoryOrder[categoryName];
  if (!order || order.length === 0) {
    return subcategories;
  }

  const orderMap = new Map(order.map((name, index) => [name, index]));

  return [...subcategories].sort((a, b) => {
    const aIndex = orderMap.get(a);
    const bIndex = orderMap.get(b);

    if (aIndex !== undefined && bIndex !== undefined) {
      return aIndex - bIndex;
    }
    if (aIndex !== undefined) return -1;
    if (bIndex !== undefined) return 1;
    return a.localeCompare(b);
  });
}
