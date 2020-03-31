import React from 'react';
import cx from 'clsx';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import GitHubButton from 'react-github-btn';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import HorzMenuList from '@mui-treasury/components/menuList/HorzMenuList';
import { useScreen } from '@mui-treasury/layout';
import { NAV_MENUS } from 'constants/menus';
import logo from 'assets/logo.png';

const useStyles = makeStyles(() => ({
  nav: {
    minWidth: 0,
    overflow: 'auto',
  },
  navOffset: {
    marginLeft: -12,
  },
}));

const PageHeader = () => {
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
            {shouldRenderLogo && (
              <Box
                mr={{ xs: 1, md: 2 }}
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
                <Avatar variant="square" src={logo} alt="" />
              </Box>
            )}
            <HorzMenuList
              className={cx(styles.nav, !shouldRenderLogo && styles.navOffset)}
              Link={Link}
              selectedKey={key => firstPath === key}
              menus={NAV_MENUS}
            />
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
