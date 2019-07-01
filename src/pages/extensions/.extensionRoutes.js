import ExtButtonPage from './ExtButtonPage';
import ExtIconPage from './ExtIconPage';
import ExtTypographyPage from './ExtTypographyPage';

/**
 * id: [String] optional
 * path: [String] must be unique from other paths
 * primaryText: [String] text in the navigator of the site
 * Page: [React Component] a page that will show in this route
 */
export default [
  {
    id: 'button',
    path: '/extensions/button',
    primaryText: 'Button',
    secondaryText: `${ExtButtonPage.components.length} examples`,
    Page: ExtButtonPage,
  },
  {
    id: 'icon',
    path: '/extensions/icon',
    primaryText: 'Icon',
    secondaryText: `${ExtIconPage.components.length} examples`,
    Page: ExtIconPage,
  },
  {
    id: 'typography',
    path: '/extensions/typography',
    primaryText: 'Typography',
    secondaryText: `${ExtTypographyPage.components.length} examples`,
    Page: ExtTypographyPage,
  },
];
