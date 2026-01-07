# Tech Analysis: Adding Subcategory to Registry Metadata

## Problem Statement

1. **Scroll fatigue**: `primitive` category has 69 items - too long to scroll
2. **Dev perf**: Loading all items in one category slows dev server (all components dynamically imported)

## Current Architecture

```
app/
├── [category]/
│   ├── page.tsx          # CategoryPage - renders all items
│   ├── layout.tsx        # CategoryLayout - header + layout
│   └── [name]/
│       └── page.tsx      # Individual registry item page

lib/registry.ts           # Data fetching functions
components/
├── category-client.tsx   # Main UI: sidebar + grid of previews
```

### Data Flow

```
registry/*.meta.json → getRegistryItems() → getRegistryByCategory() → CategoryClient
                                                                         ├── Sidebar (all items)
                                                                         └── Grid (all items)
```

### Current Meta Schema

```json
{
  "$schema": "...",
  "type": "registry:item",
  "title": "Card Action 01",
  "description": "...",
  "meta": {
    "category": "primitive",
    "tags": ["card"],
    "previewMode": "normal"
  }
}
```

---

## Decisions Made

1. **Route structure**: Move `[name]` into `[subcategory]/[name]`
2. **Backward compat**: Items WITHOUT subcategory MUST still work at `/category/name`
3. **Migration**: Auto-generate subcategory from item name prefix based on MUI components

---

## Proposed Solution

### 1. Add `subcategory` to Meta (Optional Field)

```json
{
  "meta": {
    "category": "primitive",
    "subcategory": "card", // NEW: optional field
    "tags": ["card"]
  }
}
```

### 2. New Route Structure

```
app/
├── [category]/
│   ├── page.tsx                    # Category overview (subcategory grid OR all items)
│   ├── layout.tsx                  # Shared layout
│   └── [...slug]/
│       └── page.tsx                # Handles all variations:
│                                   #   - /primitive/card → subcategory listing
│                                   #   - /primitive/card-action-01 → item (no subcategory)
│                                   #   - /primitive/card/card-action-01 → item (with subcategory)
```

**Why `[...slug]` instead of `[subcategory]/[name]`?**

- Handles variable path depth (1 or 2 segments)
- Single file handles both subcategory listing and item detail
- Simpler backward compatibility logic

### 3. Route Resolution Logic

```ts
// app/[category]/[...slug]/page.tsx
export default async function Page({ params }) {
  const { category, slug } = await params;
  // slug = ['card'] OR ['card-action-01'] OR ['card', 'card-action-01']

  if (slug.length === 1) {
    const param = slug[0];

    // Priority 1: Check if it's a subcategory
    const subcategories = getSubcategories(category);
    if (subcategories.includes(param)) {
      const items = getRegistryBySubcategory(category, param);
      return <SubcategoryPage items={items} subcategory={param} />;
    }

    // Priority 2: Check if it's a registry item (no subcategory)
    const item = getRegistryByName(param);
    if (item && item.meta.category === category && !item.meta.subcategory) {
      return <ItemDetailPage item={item} />;
    }

    // Neither → 404
    notFound();
  }

  if (slug.length === 2) {
    const [subcategory, name] = slug;
    const item = getRegistryByName(name);

    // Validate: item exists, category matches, subcategory matches
    if (item && item.meta.category === category && item.meta.subcategory === subcategory) {
      return <ItemDetailPage item={item} />;
    }

    notFound();
  }

  notFound();
}
```

### 4. URL Examples

| URL                              | Renders                                       |
| -------------------------------- | --------------------------------------------- |
| `/primitive`                     | Category page (subcategory grid)              |
| `/primitive/card`                | Subcategory listing (all card-\* items)       |
| `/primitive/card/card-action-01` | Item detail (with subcategory)                |
| `/primitive/meter-01`            | Item detail (no subcategory, backward compat) |
| `/ai`                            | Category page (no subcategories → all items)  |
| `/ai/ai-message`                 | Item detail                                   |

---

## Impact Analysis

### Files to Modify

| File                             | Change                                                 |
| -------------------------------- | ------------------------------------------------------ |
| `lib/registry.ts`                | Add `getSubcategories()`, `getRegistryBySubcategory()` |
| `app/[category]/page.tsx`        | Render subcategory grid when subcategories exist       |
| `components/category-client.tsx` | Add collapsible groups in Sidebar                      |
| Registry meta files (~40)        | Add `subcategory` field (only items with clear prefix) |

### Files to Move/Create

| Action | From/To                                                                   |
| ------ | ------------------------------------------------------------------------- |
| DELETE | `app/[category]/[name]/page.tsx`                                          |
| CREATE | `app/[category]/[...slug]/page.tsx`                                       |
| CREATE | `components/subcategory-client.tsx` (optional, can reuse category-client) |

### TypeScript Changes

```ts
// lib/registry.ts
interface RegistryItem {
  meta: {
    category?: string;
    subcategory?: string; // NEW - optional
    tags?: string[];
    // ...
  };
}

// NEW functions
export function getSubcategories(category: string): string[] {
  const items = getRegistryByCategory(category);
  const subcats = new Set<string>();
  items.forEach((item) => {
    if (item.meta.subcategory) subcats.add(item.meta.subcategory);
  });
  return Array.from(subcats).sort();
}

export function getRegistryBySubcategory(
  category: string,
  subcategory: string,
): RegistryItem[] {
  return getRegistryItems().filter(
    (item) =>
      item.meta.category === category && item.meta.subcategory === subcategory,
  );
}

// For items without subcategory
export function getUncategorizedItems(category: string): RegistryItem[] {
  return getRegistryItems().filter(
    (item) => item.meta.category === category && !item.meta.subcategory,
  );
}
```

### Sidebar Changes

```tsx
// category-client.tsx Sidebar component

// Group items by subcategory
const groupedItems = useMemo(() => {
  const groups = new Map<string, RegistryItem[]>();

  // Items with subcategory
  items.forEach((item) => {
    if (item.meta.subcategory) {
      if (!groups.has(item.meta.subcategory))
        groups.set(item.meta.subcategory, []);
      groups.get(item.meta.subcategory)!.push(item);
    }
  });

  // Items without subcategory go to root level (not in collapsible)
  const uncategorized = items.filter((item) => !item.meta.subcategory);

  return { groups, uncategorized };
}, [items]);

// Render: uncategorized items at root, then collapsible groups
<>
  {groupedItems.uncategorized.map((item) => (
    <SidebarLink key={item.name} item={item} />
  ))}

  {Array.from(groupedItems.groups).map(([subcategory, groupItems]) => (
    <Collapsible
      key={subcategory}
      defaultOpen={groupItems.some((item) => activeItem === item.name)}
    >
      <CollapsibleTrigger>{subcategory}</CollapsibleTrigger>
      <CollapsibleContent>
        {groupItems.map((item) => (
          <SidebarLink key={item.name} item={item} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  ))}
</>;
```

---

## Subcategory Mapping (Based on MUI Components)

Auto-generate from item name prefix:

| Subcategory  | Items Prefix                     | MUI Component Reference                                    |
| ------------ | -------------------------------- | ---------------------------------------------------------- |
| `card`       | `card-*`                         | [Card](https://mui.com/material-ui/react-card/)            |
| `tabs`       | `tabs-*`                         | [Tabs](https://mui.com/material-ui/react-tabs/)            |
| `info`       | `info-*`                         | ListItemText pattern                                       |
| `text-field` | `text-field-*`, `number-field-*` | [TextField](https://mui.com/material-ui/react-text-field/) |
| `select`     | `select-*`                       | [Select](https://mui.com/material-ui/react-select/)        |
| `radio`      | `radio-*`                        | [Radio](https://mui.com/material-ui/react-radio-button/)   |
| `checkbox`   | `checkbox-*`                     | [Checkbox](https://mui.com/material-ui/react-checkbox/)    |
| `button`     | `button-*`                       | [Button](https://mui.com/material-ui/react-button/)        |
| `list`       | `list-*`, `list-item-*`          | [List](https://mui.com/material-ui/react-list/)            |

Items that don't match any prefix → no subcategory (remain at root level)

---

## Migration Script

```ts
// scripts/add-subcategory.ts
const SUBCATEGORY_MAP: Record<string, string> = {
  "card-": "card",
  "tabs-": "tabs",
  "info-": "info",
  "radio-": "radio",
  "select-": "select",
  "text-field-": "text-field",
  "number-field-": "text-field",
  "list-item-": "list",
  "color-scheme-": "color-scheme",
  // ... add more based on MUI components
};

function inferSubcategory(itemName: string): string | undefined {
  for (const [prefix, subcategory] of Object.entries(SUBCATEGORY_MAP)) {
    if (itemName.startsWith(prefix)) return subcategory;
  }
  return undefined;
}

// Read each meta.json, add subcategory if inferrable, write back
```

---

## Static Generation

```ts
// app/[category]/[...slug]/page.tsx
export async function generateStaticParams() {
  const items = getRegistryItems();
  const paths: Array<{ category: string; slug: string[] }> = [];

  // Subcategory listings
  const categories = getCategories();
  for (const cat of categories) {
    const subcats = getSubcategories(cat.name);
    for (const subcat of subcats) {
      paths.push({ category: cat.name, slug: [subcat] });
    }
  }

  // Item detail pages
  for (const item of items) {
    if (item.meta.category) {
      if (item.meta.subcategory) {
        // With subcategory: /category/subcategory/name
        paths.push({
          category: item.meta.category,
          slug: [item.meta.subcategory, item.name],
        });
      } else {
        // Without subcategory: /category/name
        paths.push({
          category: item.meta.category,
          slug: [item.name],
        });
      }
    }
  }

  return paths;
}
```

---

## Complexity Assessment

| Area            | Complexity | Notes                                      |
| --------------- | ---------- | ------------------------------------------ |
| Route structure | Medium     | `[...slug]` handles multiple cases         |
| Data layer      | Low        | Simple filter functions                    |
| Sidebar UI      | Medium     | Collapsible groups + uncategorized at root |
| Migration       | Low        | Script to add subcategory to meta files    |
| Backward compat | Low        | Items without subcategory work as-is       |

---

## Summary

1. Use `[...slug]` catch-all route to handle variable path depth
2. Items WITH subcategory: `/category/subcategory/name`
3. Items WITHOUT subcategory: `/category/name` (unchanged)
4. Sidebar: uncategorized items at root, collapsible groups for subcategorized
5. Auto-generate subcategory from item prefix based on MUI component names
