import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import Widgets from '@material-ui/icons/Widgets';
import { ColumnToRow, Row, Item } from '@mui-treasury/components/flex';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';

import { useMoonSocialLinkStyles } from '@mui-treasury/styles/socialLink/moon';
import { useBootstrapEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/bootstrap';
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain';

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  legalLink: {
    ...typography.caption,
    justifyContent: 'center',
    color:
      palette.type === 'dark'
        ? 'rgba(255,255,255,0.57)'
        : palette.text.secondary,
    position: 'relative',
    [breakpoints.up('sm')]: {
      '&:not(:first-of-type)': {
        '&:before': {
          content: '"|"',
          display: 'block',
          position: 'absolute',
          left: 0,
        },
      },
    },
  },
  newsletter: {
    fontSize: typography.caption.fontSize,
  },
  navMenu: {
    flexWrap: 'wrap',
  }
}));

export const NeptuneAppFooterDemo = React.memo(function NeptuneAppFooter() {
  const classes = useStyles();
  return (
    <Box bgcolor={'background.paper'} width={'100%'}>
      <Container>
        <Box pt={8} pb={2}>
          <Row wrap>
            <Item grow={2}>
              <Row alignItems={'center'}>
                <Item color={'#007bff'} fontSize={64} lineHeight={0}>
                  <Widgets fontSize={'inherit'} color={'inherit'} />
                </Item>
                <Item>
                  <Typography variant={'h6'} color={'textSecondary'}>
                    Your Logo
                  </Typography>
                </Item>
              </Row>
              <NavMenu className={classes.navMenu}>
                <NavItem>About</NavItem>
                <NavItem>Careers</NavItem>
                <NavItem>Press</NavItem>
                <NavItem>Customer Care</NavItem>
                <NavItem>Services</NavItem>
              </NavMenu>
            </Item>
            <Item grow maxWidth={500} mx={'auto'}>
              <Box textAlign={'center'} mt={{ xs: 2, md: 0 }} my={2}>
                <SocialProvider useStyles={useMoonSocialLinkStyles}>
                  <SocialLink
                    brand={'FacebookCircle'}
                    href={'https://www.facebook.com/siriwat.kunaporn/'}
                  />
                  <SocialLink
                    brand={'Twitter'}
                    href={'https://twitter.com/siriwatknp'}
                  />
                  <SocialLink brand={'Instagram'} href={''} />
                </SocialProvider>
              </Box>
              <FormLabel htmlFor={'newsletter'} className={classes.newsletter}>
                Get the freshest news from us
              </FormLabel>
              <EmailSubscribe
                onSubmit={email => alert(`Your email is ${email}.`)}
                useStyles={useBootstrapEmailSubscribeStyles}
                inputClearedAfterSubmit
              >
                <EmailTextInput
                  id={'newsletter'}
                  placeholder="Enter your email"
                />
                <SubmitButton>Subscribe</SubmitButton>
              </EmailSubscribe>
            </Item>
          </Row>
        </Box>
        <Divider />
        <Box pt={2} pb={10}>
          <ColumnToRow
            at={'md'}
            columnStyle={{ alignItems: 'center' }}
            rowStyle={{ alignItems: 'unset' }}
          >
            <Item grow ml={-2} shrink={0}>
              <NavMenu useStyles={usePlainNavigationMenuStyles}>
                <ColumnToRow at={'sm'}>
                  <NavItem className={cx(classes.legalLink)}>
                    Terms & Conditions
                  </NavItem>
                  <NavItem className={cx(classes.legalLink)}>
                    Privacy Policy
                  </NavItem>
                  <NavItem className={cx(classes.legalLink)}>
                    Accessibility
                  </NavItem>
                  <NavItem className={cx(classes.legalLink)}>Legal</NavItem>
                </ColumnToRow>
              </NavMenu>
            </Item>
            <Item>
              <Box py={1} textAlign={{ xs: 'center', md: 'right' }}>
                <Typography
                  component={'p'}
                  variant={'caption'}
                  color={'textSecondary'}
                >
                  Designed by Anonymous © Fake Studio 2020 All right reserved
                </Typography>
              </Box>
            </Item>
          </ColumnToRow>
        </Box>
      </Container>
    </Box>
  );
});
// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';
import { breakpoints } from '@material-ui/system';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'Neptune'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
  >
    <NeptuneAppFooterDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/appFooter/neptune',
  colSpan: 12,
  createdAt: 'Sun Jul 26 2020',
  files: [],
};
// @ts-ignore
NeptuneAppFooterDemo.Showcase = AttachedShowcase;
// @ts-ignore
NeptuneAppFooterDemo.metadata = metadata;
// hide-end
