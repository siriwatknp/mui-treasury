export default ({ header, sidebar, content, footer }) => ({
  sidebar: {
    variant: 'temporary',
    width: 256,
    collapsible: false,
    collapsedWidth: 64,
    ...sidebar,
  },
  header: {
    position: 'fixed',
    clipped: true,
    offsetHeight: 64,
    persistentPushed: true,
    persistentScreenFit: true,
    ...header,
  },
  content: {
    persistentPushed: true,
    persistentScreenFit: true,
    ...content,
  },
  footer: {
    persistentPushed: true,
    persistentScreenFit: true,
    ...footer,
  },
});
