---
to: stories/layout/<%=category%>/<%=category%>.stories.tsx
inject: true
after: Pages
skip_if: <%=name%>
---
  <%=name%>: React.lazy(() => import('./<%=name%>')),