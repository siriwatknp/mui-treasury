import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CodeRounded from '@material-ui/icons/CodeRounded';

import { GridContainer, GridItem } from '../../components/ShowcaseGrid';
// import { ShowcaseVariant } from '../../logics/useShowcaseVariant';
import { IMetadata, ShowcaseProps } from '../../components/Showcase';
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
      </GridContainer>
    </ThemeProvider>
  );
};

export default DemoSection;
