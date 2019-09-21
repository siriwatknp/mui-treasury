export const PKG = {
  nav: 'nav',
  components: 'components',
};

export default {
  [PKG.nav]: [
    // { key: 'how-to', label: 'How to' },
    { key: 'components', label: 'Components', to: '/components/instruction' },
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
          key: 'chatMsg',
          label: 'Chat Message',
          to: '/components/chatMsg',
        },
        { key: 'tabs', label: 'Tabs', to: '/components/tabs' },
        // { key: 'arrow', label: 'Arrow' },
        // { key: 'input', label: 'Input' },
        // { key: 'indicator', label: 'Indicator' },
        // { key: 'slide', label: 'Slide' },
      ],
    },
    // {
    //   key: 'complex',
    //   label: 'COMPLEX (4)',
    //   subMenus: [
    //     {
    //       key: 'card',
    //       label: 'Card',
    //       subMenus: [
    //         { key: 'postCard', label: 'Post Card' },
    //         { key: 'reviewCard', label: 'Review Card' },
    //         { key: 'project', label: 'Project Card' },
    //       ],
    //     },
    //     { key: 'carousel', label: 'Carousel' },
    //     { key: 'textField', label: 'TextField' },
    //   ],
    // },
  ],
};
