import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CodeRounded from '@material-ui/icons/CodeRounded';

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

interface IShowcase {
  name: string;
  Showcase: React.FC<Omit<ShowcaseProps, 'title' | 'creators'>>;
  metadata: IMetadata;
}

const baseTheme = createMuiTheme();

const DemoSection = ({ components, setComponent }) => {
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 8 });
  return (
    <ThemeProvider theme={baseTheme}>
      <GridContainer>
        {orderIndex(components).map((Component: IShowcase) => {
          const { colSpan = 4, rowSpan = 3, createdAt, path, frameProps } =
            Component?.metadata ?? {};
          const responsiveColSpan = getResponsiveColSpan(colSpan);
          return (
            <GridItem key={path} colSpan={responsiveColSpan} rowSpan={rowSpan}>
              <Component.Showcase
                variant={'column'}
                frameProps={frameProps}
                status={getStatusByDate(createdAt)}
                actions={
                  <Row position={'middle-right'}>
                    <Item>
                      <IconButton
                        classes={iconBtnStyles}
                        onClick={() => setComponent(Component)}
                        data-testid="view-code-button"
                      >
                        <CodeRounded />
                      </IconButton>
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
