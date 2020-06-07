---
to: website/src/pages/components/<%= h.changeCase.paramCase(category) %>.tsx
unless_exists: true
---
<%displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CodeRounded from '@material-ui/icons/CodeRounded';

import * as components from '../../docs/components/<%= category %>';
import ComponentHeading from '../../components/organisms/ComponentHeading';
import {
  GridContainer,
  GridItem,
} from '../../components/ShowcaseGrid/ShowcaseGrid';
import { orderIndex, getStatusByDate } from '../../utils/functions2';
import { IMetadata, ShowcaseProps } from 'website/src/components/Showcase';

import { Row, Item } from '../../../../packages/mui-components/src/flex';
import SourceDrawer from 'website/src/containers/SourceDrawer';

interface IShowcase {
  name: string;
  Showcase: React.FC<Omit<ShowcaseProps, 'title' | 'creators'>>;
  metadata: IMetadata;
}

const <%= h.changeCase.pascal(category) %>DemoPage = () => {
  const [selectedComponent, setComponent] = React.useState({});
  return (
    <div>
      <SourceDrawer Component={selectedComponent} setComponent={setComponent} />
      <ComponentHeading
        title={'<%= changeCase.h.pascal(category) %>'}
        description={''}
      />
      <GridContainer>
        {orderIndex(components).map((Component: IShowcase) => {
          const { colSpan = 1, rowSpan = 2, createdAt, path, frameProps } =
            Component?.metadata ?? {};
          return (
            <GridItem key={path} colSpan={colSpan} rowSpan={rowSpan}>
              <Component.Showcase
                variant={colSpan >= 3 ? 'row' : 'column'}
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
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
};

export default <%= h.changeCase.pascal(category) %>DemoPage;
