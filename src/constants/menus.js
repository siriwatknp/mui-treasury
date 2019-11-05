export const PKG = {
  nav: 'nav',
  components: 'components',
  layouts: 'layouts',
};

export default {
  [PKG.layouts]: [
    { key: 'layout', label: 'Introduction', to: '/layout' },
    { key: 'builder', label: 'Builder', to: '/layout/builder' },
  ],
  [PKG.nav]: [
    // { key: 'how-to', label: 'How to' },
    { key: 'components', label: 'Components', to: '/components/button' },
    { key: 'form', label: 'Form', disabled: true },
    { key: 'layout', label: 'Layout', to: '/layout' },
    { key: 'styling', label: 'Styling', disabled: true },
    { key: 'theme', label: 'Theme', disabled: true },
  ],
  [PKG.components]: [
    {
      key: 'basic',
      label: 'BASIC (5)',
      subMenus: [
        { key: 'arrow', label: 'Arrow', to: '/components/arrow' },
        { key: 'button', label: 'Button', to: '/components/button' },
        {
          key: 'card-content',
          label: 'Card Content',
          to: '/components/card-content',
        },
        {
          key: 'card-footer',
          label: 'Card Footer',
          to: '/components/card-footer',
        },
        {
          key: 'card-header',
          label: 'Card Header',
          to: '/components/card-header',
        },
        {
          key: 'card-media',
          label: 'Card Media',
          to: '/components/card-media',
        },
        {
          key: 'chat-msg',
          label: 'Chat Message',
          to: '/components/chat-msg',
        },
        {
          key: 'grid',
          label: 'Grid',
          to: '/components/grid',
        },
        {
          key: 'group',
          label: 'Group',
          to: '/components/group',
        },
        { key: 'input', label: 'Input', to: '/components/input' },
        { key: 'indicator', label: 'Indicator', to: '/components/indicator' },
        { key: 'rip', label: 'Rip', to: '/components/rip' },
        { key: 'slide', label: 'Slide', to: '/components/slide' },
        { key: 'shadow', label: 'Shadow', to: '/components/shadow' },
        { key: 'tabs', label: 'Tabs', to: '/components/tabs' },
        { key: 'tag', label: 'Tag', to: '/components/tag' },
      ],
    },
    {
      key: 'complex',
      label: 'COMPLEX (4)',
      subMenus: [
        {
          key: 'card',
          label: 'Card',
          to: '/components/card',
        },
        { key: 'carousel', label: 'Carousel', to: '/components/carousel' },
        { key: 'text-field', label: 'TextField', to: '/components/text-field' },
      ],
    },
  ],
};
