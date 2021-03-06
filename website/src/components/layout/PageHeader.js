import React from 'react';
import cx from 'clsx';
import { Location } from '@reach/router';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import GitHubButton from 'react-github-btn';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import { NAV_MENUS } from 'constants/menus';
import { useScreen } from '@mui-treasury/layout';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useLineNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/line';

const useStyles = makeStyles(() => ({
  nav: {
    height: '100%',
    minWidth: 0,
  },
  navOffset: {
    marginLeft: -12,
  },
}));

const PageHeader = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const { logo } = data;
  const styles = useStyles();
  const screen = useScreen();
  return (
    <Location>
      {({ location }) => {
        const shouldRenderLogo =
          screen !== 'xs' || (screen === 'xs' && location.pathname === '/');
        const paths = location.pathname.split('/');
        const firstPath = paths[0] || paths[1];
        return (
          <Box
            display={'flex'}
            alignItems={'center'}
            alignSelf={'stretch'}
            width={'100%'}
            overflow={'auto'}
          >
            <Box
              mr={{ xs: 1, md: 2 }}
              display={shouldRenderLogo ? '' : 'none'}
              component={Link}
              to={'/'}
              borderBottom={'none !important'}
              css={{
                '& img': {
                  margin: 0,
                },
              }}
              aria-label={'go to home page'}
            >
              <Image fixed={logo.childImageSharp.fixed} />
            </Box>
            <NavMenu
              className={cx(styles.nav, !shouldRenderLogo && styles.navOffset)}
              useStyles={useLineNavigationMenuStyles}
            >
              {NAV_MENUS.map(({ label, to, key, external, target }) =>
                external ? (
                  <NavItem
                    key={key}
                    href={to}
                    target={target}
                    rel={'noopener noreferer'}
                  >
                    {label}
                  </NavItem>
                ) : (
                  <NavItem
                    key={key}
                    to={to}
                    as={Link}
                    active={key === firstPath}
                  >
                    {label}
                  </NavItem>
                )
              )}
            </NavMenu>
            <Box ml={'auto'} mr={2} />
            <Box lineHeight={0}>
              <GitHubButton
                href="https://github.com/siriwatknp/mui-treasury"
                data-size="large"
                data-show-count={shouldRenderLogo}
                aria-label="Star siriwatknp/mui-treasury on GitHub"
              >
                Star
              </GitHubButton>
            </Box>
          </Box>
        );
      }}
    </Location>
  );
};

PageHeader.propTypes = {};
PageHeader.defaultProps = {};

export default PageHeader;
