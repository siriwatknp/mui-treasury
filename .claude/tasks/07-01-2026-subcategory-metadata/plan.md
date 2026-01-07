---
title: Subcategory Support for Registry Metadata
date: 07-01-2026
reference: .claude/tasks/07-01-2026-subcategory-metadata/tech-analysis.md
---

# Implementation Plan: Subcategory Support

## Overview

Add optional `subcategory` field to registry metadata to group items within categories, reducing scroll fatigue and improving dev performance.

---

## Phase 0: Setup & Preparation

- [ ] **Completed**

### Tasks

1. Verify dev server runs without errors

   ```bash
   pnpm dev
   ```

2. Ensure all existing tests pass (if any)

   ```bash
   pnpm lint
   npx tsc --noEmit
   ```

3. Create a test branch
   ```bash
   git checkout -b feat/subcategory-support
   ```

### Expected Result

- Dev server runs on `localhost:3000`
- No TypeScript or lint errors
- Working branch created

---

## Phase 1: Data Layer - Add Registry Functions

- [ ] **Completed**

### Scope

Add new functions to `lib/registry.ts` for subcategory support. No UI changes yet.

### Tasks

1. **Update `RegistryItem` interface** - add optional `subcategory` field

   ```ts
   // lib/registry.ts
   meta: {
     category?: string;
     subcategory?: string; // NEW
     tags?: string[];
     // ...
   }
   ```

2. **Add `getSubcategories(category: string)`** - returns unique subcategories for a category

3. **Add `getRegistryBySubcategory(category, subcategory)`** - returns items filtered by both

4. **Add `getUncategorizedItems(category)`** - returns items without subcategory

### Files to Modify

- `lib/registry.ts`

### Expected Result

```ts
// Test in Node REPL or temporary script
getSubcategories("primitive"); // [] (no subcategories yet)
getUncategorizedItems("primitive"); // all 69 items
getRegistryBySubcategory("primitive", "card"); // [] (no items with subcategory yet)
```

---

## Phase 2: Migration Script - Add Subcategory to Meta Files

- [ ] **Completed**

### Scope

Create and run a script to add `subcategory` field to existing meta.json files based on name prefix.

### Tasks

1. **Create migration script** at `scripts/add-subcategory.ts`

   ```ts
   import fs from "fs";
   import path from "path";
   import { glob } from "glob";

   const SUBCATEGORY_MAP: Record<string, string> = {
     "card-": "card",
     "tabs-": "tabs",
     "info-": "info",
     "radio-": "radio",
     "select-": "select",
     "text-field-": "text-field",
     "number-field-": "text-field",
     "number-input": "text-field",
     "list-item-": "list",
     "color-scheme-": "color-scheme",
   };

   function inferSubcategory(itemName: string): string | undefined {
     for (const [prefix, subcategory] of Object.entries(SUBCATEGORY_MAP)) {
       if (itemName.startsWith(prefix)) return subcategory;
     }
     return undefined;
   }

   async function main() {
     const metaFiles = await glob("registry/**/*.meta.json");

     for (const metaPath of metaFiles) {
       const content = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
       const itemName = path.basename(metaPath).replace(".meta.json", "");

       // Only add subcategory if category is "primitive" and inferrable
       if (content.meta?.category === "primitive") {
         const subcategory = inferSubcategory(itemName);
         if (subcategory) {
           content.meta.subcategory = subcategory;
           fs.writeFileSync(metaPath, JSON.stringify(content, null, 2) + "\n");
           console.log(`Updated: ${itemName} → ${subcategory}`);
         }
       }
     }
   }

   main();
   ```

2. **Run the script**

   ```bash
   npx tsx scripts/add-subcategory.ts
   ```

3. **Verify changes**
   ```bash
   # Check a few files
   cat registry/components/card-action-01/card-action-01.meta.json
   # Should have "subcategory": "card"
   ```

### Files to Create

- `scripts/add-subcategory.ts`

### Files Modified (by script)

- `registry/components/card-*/card-*.meta.json` (~25 files)
- `registry/components/tabs-*/tabs-*.meta.json` (~10 files)
- `registry/components/info-*/info-*.meta.json` (~8 files)
- Other matching prefixes

### Expected Result

```ts
getSubcategories("primitive"); // ["card", "color-scheme", "info", "list", "radio", "select", "tabs", "text-field"]
getRegistryBySubcategory("primitive", "card"); // ~25 items
getUncategorizedItems("primitive"); // remaining items without prefix match
```

---

## Phase 3: Route Structure - Create Catch-All Route

- [ ] **Completed**

### Scope

Replace `[name]` route with `[...slug]` catch-all to handle:

- `/category/subcategory` → subcategory listing
- `/category/name` → item detail (no subcategory)
- `/category/subcategory/name` → item detail (with subcategory)

### Tasks

1. **Delete old route**

   ```bash
   rm -rf app/[category]/[name]
   ```

2. **Create new catch-all route** at `app/[category]/[...slug]/page.tsx`

   ```tsx
   import { notFound } from "next/navigation";
   import {
     getRegistryByName,
     getSubcategories,
     getRegistryBySubcategory,
     getCategories,
     getRegistryItems,
   } from "@/lib/registry";
   // ... import UI components

   interface SlugPageProps {
     params: Promise<{ category: string; slug: string[] }>;
   }

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
           paths.push({
             category: item.meta.category,
             slug: [item.meta.subcategory, item.name],
           });
         } else {
           paths.push({
             category: item.meta.category,
             slug: [item.name],
           });
         }
       }
     }

     return paths;
   }

   export default async function SlugPage({ params }: SlugPageProps) {
     const { category, slug } = await params;

     if (slug.length === 1) {
       const param = slug[0];

       // Priority 1: Check if it's a subcategory
       const subcategories = getSubcategories(category);
       if (subcategories.includes(param)) {
         const items = getRegistryBySubcategory(category, param);
         return (
           <SubcategoryPage
             category={category}
             subcategory={param}
             items={items}
           />
         );
       }

       // Priority 2: Check if it's a registry item (no subcategory)
       const item = getRegistryByName(param);
       if (item && item.meta.category === category && !item.meta.subcategory) {
         return <ItemDetailPage item={item} category={category} />;
       }

       notFound();
     }

     if (slug.length === 2) {
       const [subcategory, name] = slug;
       const item = getRegistryByName(name);

       if (
         item &&
         item.meta.category === category &&
         item.meta.subcategory === subcategory
       ) {
         return <ItemDetailPage item={item} category={category} />;
       }

       notFound();
     }

     notFound();
   }
   ```

3. **Extract ItemDetailPage component** - reuse existing item detail UI from old `[name]/page.tsx`

4. **Create SubcategoryPage component** - similar to CategoryClient but for subcategory items

### Files to Delete

- `app/[category]/[name]/page.tsx`

### Files to Create

- `app/[category]/[...slug]/page.tsx`

### Expected Result

Test these URLs:

- `/primitive/card` → subcategory listing (all card-\* items)
- `/primitive/card/card-action-01` → item detail
- `/primitive/meter-01` → item detail (no subcategory, backward compat)
- `/ai/ai-message` → item detail (no subcategories in ai category)

---

## Phase 4: Subcategory Listing Page UI

- [ ] **Completed**

### Scope

Create the subcategory listing page that shows all items within a subcategory.

### Tasks

1. **Create SubcategoryClient component** (or reuse CategoryClient with props)
   - Similar to CategoryClient but filtered to subcategory items
   - Sidebar shows only items in this subcategory
   - No collapsible groups needed (flat list)
   - Breadcrumb: `Category > Subcategory`

2. **Add subcategory header**
   ```tsx
   <header>
     <nav>
       <a href={`/${category}`}>{category}</a> / {subcategory}
     </nav>
     <h1>{subcategory}</h1>
     <p>{items.length} components</p>
   </header>
   ```

### Files to Create/Modify

- `components/subcategory-client.tsx` (new, or extend category-client.tsx)

### Expected Result

- `/primitive/card` shows grid of all card-\* components
- Sidebar lists all card-\* items (flat, no groups)
- Header shows "Card" with breadcrumb to "primitive"

---

## Phase 5: Category Page - Subcategory Grid

- [x] **Completed** (revised - subcategory cards + sidebar links, non-subcategory previews only)

### Scope

Update category page to show subcategory cards when subcategories exist.

### Tasks

1. **Modify CategoryPage** to detect subcategories

   ```tsx
   // app/[category]/page.tsx
   const subcategories = getSubcategories(category);
   const uncategorizedItems = getUncategorizedItems(category);

   if (subcategories.length > 0) {
     return (
       <CategoryWithSubcategories
         category={category}
         subcategories={subcategories}
         uncategorizedItems={uncategorizedItems}
       />
     );
   }

   // Existing behavior for categories without subcategories
   return <CategoryClient ... />;
   ```

2. **Create subcategory grid UI**

   ```tsx
   // Subcategory cards in a grid
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
     {subcategories.map((subcat) => (
       <Link key={subcat} href={`/${category}/${subcat}`}>
         <Card>
           <CardTitle>{subcat}</CardTitle>
           <CardDescription>
             {getRegistryBySubcategory(category, subcat).length} components
           </CardDescription>
         </Card>
       </Link>
     ))}
   </div>;

   {
     /* Uncategorized items below */
   }
   {
     uncategorizedItems.length > 0 && (
       <section>
         <h2>Other Components</h2>
         {/* Render uncategorized items */}
       </section>
     );
   }
   ```

### Files to Modify

- `app/[category]/page.tsx`
- `components/category-client.tsx` (or create new component)

### Expected Result

- `/primitive` shows grid of subcategory cards (card, tabs, info, etc.)
- Each card links to `/primitive/{subcategory}`
- Uncategorized items shown below the grid
- `/ai` shows all items directly (no subcategories)

---

## Phase 6: Sidebar - Collapsible Groups

- [x] **Completed**

### Scope

Update sidebar in CategoryClient to group items by subcategory with collapsible sections.

### Tasks

1. **Install Collapsible component** (if not already available)

   ```bash
   npx shadcn@latest add collapsible
   ```

2. **Update Sidebar component** in `category-client.tsx`

   ```tsx
   import {
     Collapsible,
     CollapsibleContent,
     CollapsibleTrigger,
   } from "@/components/ui/collapsible";

   function Sidebar({ items }: { items: RegistryItem[] }) {
     const [activeItem, setActiveItem] = useState("");

     const { groups, uncategorized } = useMemo(() => {
       const groups = new Map<string, RegistryItem[]>();
       items.forEach((item) => {
         if (item.meta.subcategory) {
           if (!groups.has(item.meta.subcategory)) {
             groups.set(item.meta.subcategory, []);
           }
           groups.get(item.meta.subcategory)!.push(item);
         }
       });
       return {
         groups,
         uncategorized: items.filter((item) => !item.meta.subcategory),
       };
     }, [items]);

     return (
       <nav>
         {/* Uncategorized items at root level */}
         {uncategorized.map((item) => (
           <SidebarLink
             key={item.name}
             item={item}
             isActive={activeItem === item.name}
           />
         ))}

         {/* Collapsible groups for subcategorized items */}
         {Array.from(groups).map(([subcategory, groupItems]) => (
           <Collapsible
             key={subcategory}
             defaultOpen={groupItems.some((item) => activeItem === item.name)}
           >
             <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium">
               {subcategory}
               <ChevronDown className="h-4 w-4" />
             </CollapsibleTrigger>
             <CollapsibleContent>
               {groupItems.map((item) => (
                 <SidebarLink
                   key={item.name}
                   item={item}
                   isActive={activeItem === item.name}
                   className="pl-6"
                 />
               ))}
             </CollapsibleContent>
           </Collapsible>
         ))}
       </nav>
     );
   }
   ```

3. **Auto-expand active group** - ensure group containing active item is expanded

### Files to Modify

- `components/category-client.tsx`

### Files to Create (if needed)

- `components/ui/collapsible.tsx` (via shadcn)

### Expected Result

- Sidebar shows uncategorized items at top
- Subcategories are collapsible sections
- Clicking item expands its group
- Active item's group is auto-expanded on page load

---

## Phase 7: Final Testing & Cleanup

- [ ] **Completed**

### Scope

End-to-end testing and cleanup.

### Tasks

1. **Test all URL patterns**
   - [ ] `/primitive` → subcategory grid
   - [ ] `/primitive/card` → card items listing
   - [ ] `/primitive/card/card-action-01` → item detail
   - [ ] `/primitive/meter-01` → item detail (backward compat)
   - [ ] `/ai` → all items (no subcategories)
   - [ ] `/ai/ai-message` → item detail

2. **Test sidebar behavior**
   - [ ] Collapsible groups work
   - [ ] Auto-expand on active item
   - [ ] Scroll-to-active works

3. **Run lint and type check**

   ```bash
   pnpm lint
   npx tsc --noEmit
   ```

4. **Test production build**

   ```bash
   pnpm build
   ```

5. **Delete migration script** (optional, or keep for future use)

6. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: add subcategory support for registry metadata"
   ```

### Expected Result

- All URLs work correctly
- No TypeScript or lint errors
- Production build succeeds
- PR ready for review

---

## Summary

| Phase | Description            | Est. Effort |
| ----- | ---------------------- | ----------- |
| 0     | Setup & Preparation    | 10 min      |
| 1     | Data Layer Functions   | 30 min      |
| 2     | Migration Script       | 30 min      |
| 3     | Catch-All Route        | 1 hour      |
| 4     | Subcategory Listing UI | 1 hour      |
| 5     | Category Page Grid     | 1 hour      |
| 6     | Sidebar Collapsible    | 1 hour      |
| 7     | Testing & Cleanup      | 30 min      |

**Total: ~5-6 hours**
