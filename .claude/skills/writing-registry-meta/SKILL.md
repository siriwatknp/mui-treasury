---
name: writing-registry-meta
description: Use this skill when writing meta file for MUI Treasury registry.
---

- The meta file must be in JSON format.
- The meta file must be located in the same directory as the registry file.
- The meta file must have the same name as the registry file, but with a .meta.json extension.
- The meta file must contain the following fields:
  - `name`: The registry name in kebab-case, same as file name without extension.
  - `title`: The name of the registry usually the same as the component name in Pascal case.
  - `type`: always `"registry:item"`.
  - `description`: IMPORTANT! Describe the registry in detail to help LLM understand what the interface looks like and its purpose. Start with "Integrated [library name]" if using third-party libraries (e.g., Base UI). Focus on visible features (buttons, labels, states) and accessibility. DO NOT list individual Material UI components.
  - `meta`: Additional metadata about the registry
    - `category`: one of "primitive", "ai"
    - `previewClassName`: The extra class name to add to the preview container.
