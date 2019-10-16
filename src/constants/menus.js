export const PKG = {
  nav: 'nav',
  components: 'components',
};

export default {
  [PKG.nav]: [
    // { key: 'how-to', label: 'How to' },
    { key: 'components', label: 'Components', to: '/components/button' },
    { key: 'form', label: 'Form', disabled: true },
    { key: 'layout', label: 'Layout', disabled: true },
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
          key: 'cardContent',
          label: 'Card Content',
          to: '/components/card-content',
        },
        {
          key: 'cardFooter',
          label: 'Card Footer',
          to: '/components/card-footer',
        },
        {
          key: 'cardHeader',
          label: 'Card Header',
          to: '/components/card-header',
        },
        {
          key: 'cardMedia',
          label: 'Card Media',
          to: '/components/card-media',
        },
        {
          key: 'chatMsg',
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
        { key: 'textField', label: 'TextField', to: '/components/text-field' },
      ],
    },
  ],
};
