import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CodeRounded from '@material-ui/icons/CodeRounded';

import * as components from '../../docs/components/card';
import ComponentHeading from '../../components/organisms/ComponentHeading';
import {
  GridContainer,
  GridItem,
} from '../../components/ShowcaseGrid/ShowcaseGrid';
import { orderIndex, getStatusByDate } from '../../utils/functions2';
import { IMetadata, ShowcaseProps } from 'website/src/components/Showcase';

import { Row, Item } from '../../../../packages/mui-components/src/flex';
import SourceDrawer from 'website/src/containers/SourceDrawer';
import { ShowcaseVariant } from 'website/src/logics/useShowcaseVariant';

interface IShowcase {
  name: string;
  Showcase: React.FC<Omit<ShowcaseProps, 'title' | 'creators'>>;
  metadata: IMetadata;
}

const baseTheme = createMuiTheme();

const CardDemoPage = () => {
  const [selectedComponent, setComponent] = React.useState({});
  return (
    <div>
      <SourceDrawer Component={selectedComponent} setComponent={setComponent} />
      <ComponentHeading
        title={'Card'}
        description={'A must for displaying data in grid'}
      />
      <ThemeProvider theme={baseTheme}>
        <GridContainer rowHeight={200}>
          {orderIndex(components).map((Component: IShowcase) => {
            const { colSpan = 1, rowSpan = 2, createdAt, path, frameProps } =
              Component?.metadata ?? {};
            return (
              <GridItem key={path} colSpan={colSpan} rowSpan={rowSpan}>
                <ShowcaseVariant colSpan={colSpan}>
                  {variant => (
                    <Component.Showcase
                      variant={variant}
                      frameProps={frameProps}
                      status={getStatusByDate(createdAt)}
                      actions={
                        <Row position={'middle-right'}>
                          <Item>
                            <IconButton
                              onClick={() => setComponent(Component)}
                              data-testid="view-code-button"
                            >
                              <CodeRounded />
                            </IconButton>
                          </Item>
                        </Row>
                      }
                    />
                  )}
                </ShowcaseVariant>
              </GridItem>
            );
          })}
        </GridContainer>
      </ThemeProvider>
    </div>
  );
};

export default CardDemoPage;
