---
to: ../blocks/<%=name%>/usage.mdx
unless_exists: true
---
import { Meta, Source } from "@storybook/blocks";
import raw from "./<%=h.toName(name)%>?raw";

<Meta title="<%=h.getFirstPascal(name)%>/<%=h.getSecondPascal(name)%><%=h.getThirdPascal(name) ? `/${h.getThirdPascal(name)}` : ''%>" />

## CLI

```sh
npx mui-treasury@latest clone <%=name%>
```

## <%=h.toName(name)%>

<Source code={raw} language="tsx" />
