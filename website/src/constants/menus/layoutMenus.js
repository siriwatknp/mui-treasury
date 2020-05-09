export default [
  { key: 'layout', label: 'Introduction', to: '/layout/' },
  { key: 'core-concept', label: 'Core Concept', to: '/layout/core-concept/' },
  {
    key: 'tutorials',
    label: 'Tutorials',
    subMenus: [
      {
        key: 'dashboard-layout',
        label: 'Dashboard Layout',
        to: '/layout/tutorials/dashboard-layout/',
      },
      {
        key: 'blog-layout',
        label: 'Blog Layout',
        to: '/layout/tutorials/blog-layout/',
      },
    ],
  },
  {
    key: 'advanced',
    label: 'Advanced',
    subMenus: [
      {
        key: 'controlling-sidebar',
        label: 'Controlling Sidebar',
        to: '/layout/advanced/controlling-sidebar/',
      },
      {
        key: 'dynamic-config',
        label: 'Dynamic Config',
        to: '/layout/advanced/dynamic-config/',
      },
      {
        key: 'hide-sidebar',
        label: 'Hide Sidebar',
        to: '/layout/advanced/hide-sidebar/',
      },
      {
        key: 'mutate-preset',
        label: 'Mutate Preset',
        to: '/layout/advanced/mutate-preset/',
      },
    ],
  },
  {
    key: 'features',
    label: 'Features',
    subMenus: [
      {
        key: 'persistent-behavior',
        label: 'Persistent behavior',
        to: '/layout/features/persistent-behavior',
      },
      {
        key: 'auto-collapse',
        label: 'Auto Collapse',
        to: '/layout/features/auto-collapse',
      },
      {
        key: 'header-magnet',
        label: 'Header Magnet',
        to: '/layout/features/header-magnet',
      },
    ]
  },
  {
    key: 'api-reference',
    label: 'API Reference',
    subMenus: [
      {
        key: 'builders',
        label: 'Builders',
        subMenus: [
          {
            key: 'layout-builder',
            label: 'Layout Builder',
            to: '/layout/api-reference/layout-builder',
          },
          {
            key: 'header-builder',
            label: 'Header Builder',
            to: '/layout/api-reference/header-builder',
          },
          {
            key: 'edge-sidebar-builder',
            label: 'EdgeSidebar Builder',
            to: '/layout/api-reference/edge-sidebar-builder',
          },
          {
            key: 'inset-sidebar-builder',
            label: 'InsetSidebar Builder',
            to: '/layout/api-reference/inset-sidebar-builder',
          }
        ]
      },
      {
        key: 'layout-components',
        label: 'Layout components',
        subMenus: [
          {
            key: 'root',
            label: 'Root',
            to: '/layout/api-reference/root'
          },
          {
            key: 'header',
            label: 'Header',
            to: '/layout/api-reference/header'
          },
          {
            key: 'drawer-sidebar',
            label: 'Drawer Sidebar',
            to: '/layout/api-reference/drawer-sidebar'
          },
          {
            key: 'swipeable-sidebar',
            label: 'Swipeable Sidebar',
            to: '/layout/api-reference/swipeable-sidebar'
          },
          {
            key: 'inset-sidebar',
            label: 'Inset Sidebar',
            to: '/layout/api-reference/inset-sidebar'
          },
          {
            key: 'footer',
            label: 'Footer',
            to: '/layout/api-reference/footer'
          },
        ]
      },
      {
        key: 'supporting-components',
        label: 'Supporting components',
        subMenus: [
          {
            key: 'sidebar-trigger',
            label: 'Sidebar Trigger',
            to: '/layout/api-reference/sidebar-trigger'
          },
          {
            key: 'collapse-btn',
            label: 'Collapse Button',
            to: '/layout/api-reference/collapse-btn'
          },
          {
            key: 'fullscreen',
            label: 'Fullscreen',
            to: '/layout/api-reference/fullscreen'
          },
          {
            key: 'inset-avoiding-view',
            label: 'Inset Avoiding View',
            to: '/layout/api-reference/inset-avoiding-view'
          },
          {
            key: 'inset-container',
            label: 'Inset Container',
            to: '/layout/api-reference/inset-container'
          },
          {
            key: 'inset-footer',
            label: 'Inset Footer',
            to: '/layout/api-reference/inset-footer'
          },
        ]
      }
    ]
  },
  {
    key: 'presets',
    label: 'Presets',
    subMenus: [
      {
        key: 'default',
        label: 'Default',
        to: '/layout/presets/default/',
      },
      {
        key: 'standard',
        label: 'Standard',
        to: '/layout/presets/standard/',
      },
      {
        key: 'content-based',
        label: 'Content Based',
        to: '/layout/presets/content-based/',
      },
      {
        key: 'cozy',
        label: 'Cozy',
        to: '/layout/presets/cozy/',
      },
      {
        key: 'fixed',
        label: 'Fixed',
        to: '/layout/presets/fixed/',
      },
      {
        key: 'mui-treasury',
        label: 'MUI Treasury',
        to: '/layout/presets/mui-treasury/',
      },
    ],
  },
  {
    key: 'examples',
    label: 'Examples',
    subMenus: [
      {
        key: 'custom-theme',
        label: 'Custom theme',
        to: '/layout/examples/custom-theme?bgColor=d4b397',
      },
      {
        key: 'custom-styles',
        label: 'Custom styles',
        to:
          '/layout/examples/custom-styles?bgColor=213E9B&accent=rgb(17, 254, 220)&dark=true',
      },
      {
        key: 'control-sidebar',
        label: 'Control Sidebar',
        to:
          '/layout/examples/control-sidebar?bgColor=e9e9e9&primary=36338E&accent=ff9600',
      },
      {
        key: 'secondary-sidebar',
        label: '2nd Sidebar',
        to: '/layout/examples/secondary-sidebar',
      },
      {
        key: 'inset-sidebar',
        label: 'Inset Sidebar',
        to: '/layout/examples/inset-sidebar?bgColor=ffe4ee',
      },
    ],
  },
  {
    key: 'clones',
    label: 'Clones',
    subMenus: [
      {
        key: 'reactjs',
        label: 'React Doc',
        to: '/layout/clones/reactjs?bgColor=b6c0d4',
      },
      {
        key: 'messenger',
        label: 'Messenger',
        to: '/layout/clones/messenger?bgColor=rgb(0,153,255)&dark=true',
      },
      {
        key: 'shopping-cart',
        label: 'Shopping Cart',
        to: '/layout/clones/shopping-cart?bgColor=EAEEF1',
      },
    ],
  },
  {
    key: 'v3',
    label: 'v3.3.4',
    subMenus: [
      { key: 'builder-v3', label: 'Layout builder', to: '/layout/v3/builder' },
      {
        key: 'tutorials-v3',
        label: 'Tutorial',
        subMenus: [
          {
            key: 'dashboard-layout-v3',
            label: 'Dashboard Layout',
            to: '/layout/v3/tutorials/dashboard-layout-v3/',
          },
          {
            key: 'blog-layout-v3',
            label: 'Blog Layout',
            to: '/layout/v3/tutorials/blog-layout-v3/',
          },
        ],
      },
    ],
  },
];

