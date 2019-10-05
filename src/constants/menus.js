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
    // {
    //   key: 'readme',
    //   label: 'README',
    //   subMenus: [
    //     {
    //       key: 'instruction',
    //       label: 'Instruction',
    //       to: '/components/instruction',
    //     },
    //     {
    //       key: 'instruction',
    //       label: 'Instruction',
    //       to: '/components/instruction',
    //     },
    //   ],
    // },
    // {
    //   key: 'instruction',
    //   label: 'INSTRUCTION',
    //   to: '/components/instruction',
    // },
    {
      key: 'basic',
      label: 'BASIC (5)',
      subMenus: [
        { key: 'button', label: 'Button', to: '/components/button' },
        {
          key: 'cardContent',
          label: 'Card Content',
          to: '/components/cardContent',
        },
        {
          key: 'cardFooter',
          label: 'Card Footer',
          to: '/components/cardFooter',
        },
        {
          key: 'cardHeader',
          label: 'Card Header',
          to: '/components/cardHeader',
        },
        {
          key: 'cardMedia',
          label: 'Card Media',
          to: '/components/cardMedia',
        },
        {
          key: 'chatMsg',
          label: 'Chat Message',
          to: '/components/chatMsg',
        },
        {
          key: 'grid',
          label: 'Grid',
          to: '/components/grid',
        },
        { key: 'shadow', label: 'Shadow', to: '/components/shadow' },
        { key: 'tabs', label: 'Tabs', to: '/components/tabs' },
        // { key: 'arrow', label: 'Arrow' },
        // { key: 'input', label: 'Input' },
        // { key: 'indicator', label: 'Indicator' },
        // { key: 'slide', label: 'Slide' },
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
          // subMenus: [
          //   { key: 'postCard', label: 'Post Card' },
          //   { key: 'reviewCard', label: 'Review Card' },
          //   { key: 'project', label: 'Project Card' },
          // ],
        },
        // { key: 'carousel', label: 'Carousel' },
        // { key: 'textField', label: 'TextField' },
      ],
    },
  ],
};
