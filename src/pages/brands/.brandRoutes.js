import PeapodsPage from 'brands/peapods/PeapodsPage';

/**
 * id: [String] optional
 * path: [String] must be unique from other paths
 * primaryText: [String] text in the navigator of the site
 * Page: [React Component] a page that will show in this route
 */
export default [
  {
    id: 'peapods',
    path: '/brands/peapods',
    primaryText: 'Peapods',
    secondaryText: `${PeapodsPage.components.length} items`,
    Page: PeapodsPage,
  },
];
