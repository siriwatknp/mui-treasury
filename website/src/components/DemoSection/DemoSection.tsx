import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import withStyles from '@material-ui/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import CodeRounded from '@material-ui/icons/CodeRounded';
import ColorLens from '@material-ui/icons/ColorLens';

import { GridContainer, GridItem } from '../../components/ShowcaseGrid';
// import { ShowcaseVariant } from '../../logics/useShowcaseVariant';
import { IMetadata, ShowcaseProps } from '../../components/Showcase';
import { PlugCard } from '../../components/PlugCard';
import { IconBtnLink } from '../../components/IconBtnLink';
import { Item, Row } from '@mui-treasury/components/flex';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

import {
  orderIndex,
  getStatusByDate,
  getResponsiveColSpan,
} from '../../utils/functions2';
import Tooltip from '@material-ui/core/Tooltip';

interface IShowcase {
  name: string;
  Showcase: React.FC<Omit<ShowcaseProps, 'title' | 'creators'>>;
  metadata: IMetadata;
}

const StyledTooltip = withStyles({
  tooltip: {
    marginTop: '0.2rem',
    backgroundColor: 'rgba(0,0,0,0.72)',
    color: '#fff',
  },
})(Tooltip);

const baseTheme = createTheme();

const DemoSection = ({ components, setComponent }) => {
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 8 });
  return (
    <ThemeProvider theme={baseTheme}>
      <GridContainer>
        {orderIndex(components).map((Component: IShowcase) => {
          const {
            colSpan = 4,
            rowSpan = 3,
            createdAt,
            path,
            frameProps,
            stylesUrl,
          } = Component?.metadata ?? {};
          const responsiveColSpan = getResponsiveColSpan(colSpan);
          return (
            <GridItem key={path} colSpan={responsiveColSpan} rowSpan={rowSpan}>
              <Component.Showcase
                variant={'column'}
                frameProps={{
                  ...(colSpan === 12 && {
                    margin: { xs: '0 -16px', sm: '0 -32px', lg: '0  -42px' },
                    overflow: 'hidden',
                    paddingLeft: 0,
                    paddingRight: 0,
                  }),
                  ...frameProps,
                }}
                status={getStatusByDate(createdAt)}
                actions={
                  <Row position={'middle-right'}>
                    {stylesUrl && (
                      <Item>
                        <StyledTooltip title="View all styles">
                          <IconButton
                            component={Link}
                            to={stylesUrl}
                            classes={iconBtnStyles}
                            data-testid="view-all-styles"
                          >
                            <ColorLens />
                          </IconButton>
                        </StyledTooltip>
                      </Item>
                    )}
                    <Item>
                      <StyledTooltip title="View code">
                        <IconButton
                          classes={iconBtnStyles}
                          onClick={() => setComponent(Component)}
                          data-testid="view-code-button"
                        >
                          <CodeRounded />
                        </IconButton>
                      </StyledTooltip>
                    </Item>
                  </Row>
                }
              />
              {/*<ShowcaseVariant colSpan={responsiveColSpan}>*/}
              {/*  {variant => (*/}
              {/*    <Component.Showcase*/}
              {/*      variant={variant}*/}
              {/*      frameProps={frameProps}*/}
              {/*      status={getStatusByDate(createdAt)}*/}
              {/*      actions={*/}
              {/*        <Row position={'middle-right'}>*/}
              {/*          <Item>*/}
              {/*            <IconButton*/}
              {/*              classes={iconBtnStyles}*/}
              {/*              onClick={() => setComponent(Component)}*/}
              {/*              data-testid="view-code-button"*/}
              {/*            >*/}
              {/*              <CodeRounded />*/}
              {/*            </IconButton>*/}
              {/*          </Item>*/}
              {/*        </Row>*/}
              {/*      }*/}
              {/*    />*/}
              {/*  )}*/}
              {/*</ShowcaseVariant>*/}
            </GridItem>
          );
        })}
        <GridItem colSpan={4} rowSpan={1}>
          <PlugCard label={'support mui-treasury'}>
            <IconBtnLink
              href={'https://opencollective.com/mui-treasury'}
              label={'Open Collective'}
              src={
                'https://seeklogo.com/images/O/open-collective-logo-8C2D7E16D3-seeklogo.com.png'
              }
            />
            <IconBtnLink
              href={'https://www.patreon.com/user?u=16324303&fan_landing=true'}
              label={'Patreon'}
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Patreon_logomark.svg/1200px-Patreon_logomark.svg.png'
              }
            />
          </PlugCard>
        </GridItem>
        <GridItem colSpan={{ sm: 3, lg: 2 }} rowSpan={2}>
          <PlugCard label={'Follow me'}>
            <IconBtnLink
              href={'https://twitter.com/siriwatknp'}
              label={'Twitter'}
              src={
                'https://pluspng.com/img-png/twitter-logo-png-twitter-logo-vector-png-clipart-library-518.png'
              }
            />
            <IconBtnLink
              href={'https://www.facebook.com/muitreasury/'}
              label={'Facebook'}
              src={
                'https://i.ya-webdesign.com/images/facebook-logo-png-transparent-background-5.png'
              }
            />
          </PlugCard>
        </GridItem>
      </GridContainer>
    </ThemeProvider>
  );
};

export default DemoSection;
