---
to: ../blocks/<%=name%>/usage.mdx
unless_exists: true
---
import { Meta, Source } from "@storybook/blocks";
import raw from "./src/<%=h.toNameCamel(name)%>?raw";

<Meta title="Hook/<%=h.toNameCamel(name)%>" />

## CLI

```sh
npx mui-treasury@latest clone <%=name%>
```

## <%=h.toName(name)%>

<Source code={raw} language="tsx" />
