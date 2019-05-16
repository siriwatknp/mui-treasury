import Amigo from './Amigo';

/**
 * id: [String] optional
 * path: [String] must be unique from other paths
 * primaryText: [String] text in the navigator of the site
 * Page: [React Component] a page that will show in this route
 */
export default [
  {
    id: 'amigo',
    path: '/demo-pages/amigo-e-commerce',
    primaryText: 'Amigo',
    secondaryText: '1 pages',
    Page: Amigo,
  },
];
