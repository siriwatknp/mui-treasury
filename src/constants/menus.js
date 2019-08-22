export const PKG = {
  nav: 'nav',
  components: 'components',
};

export default {
  [PKG.nav]: [
    { key: '/how-to', label: 'How to' },
    { key: '/components', label: 'Components' },
    { key: '/form', label: 'Form' },
    { key: '/layout', label: 'Layout' },
    { key: '/styling', label: 'Styling' },
    { key: '/theme', label: 'Theme' },
  ],
  [PKG.components]: [
    {
      key: 'instruction',
      label: 'Instruction',
    },
    {
      key: 'basic',
      label: 'BASIC (5)',
      subMenus: [
        { key: 'arrow', label: 'Arrow' },
        { key: 'chat', label: 'Chat' },
        { key: 'input', label: 'Input' },
        { key: 'indicator', label: 'Indicator' },
        { key: 'slide', label: 'Slide' },
      ],
    },
    {
      key: 'complex',
      label: 'COMPLEX (4)',
      subMenus: [
        {
          key: 'card',
          label: 'Card',
          subMenus: [
            { key: 'postCard', label: 'Post Card' },
            { key: 'reviewCard', label: 'Review Card' },
            { key: 'project', label: 'Project Card' },
          ],
        },
        { key: 'carousel', label: 'Carousel' },
        { key: 'tabs', label: 'Tabs' },
        { key: 'textField', label: 'TextField' },
      ],
    },
  ],
};
