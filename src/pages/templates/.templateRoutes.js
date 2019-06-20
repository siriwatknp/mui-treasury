import LoginTemplates from './LoginTemplates';

/**
 * id: [String] optional
 * path: [String] must be unique from other paths
 * primaryText: [String] text in the navigator of the site
 * Page: [React Component] a page that will show in this route
 */
export default [
  {
    id: 'login',
    path: '/templates/login',
    primaryText: 'Login',
    secondaryText: `${LoginTemplates.components.length} items`,
    Page: LoginTemplates,
  },
];
