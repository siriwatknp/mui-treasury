---
to: stories/layout/<%=category%>/<%=category%>.stories.tsx
inject: true
append: true
skip_if: export const <%=name%>
---
export const <%=name%> = createStory("<%=name%>");