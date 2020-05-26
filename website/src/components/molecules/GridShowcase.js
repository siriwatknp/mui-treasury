import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useMetadata } from 'containers/Demo/context';
import { orderComponents, getStatusByDate } from 'utils/functions';
import ShowcaseWidget from './ShowcaseWidget';

/*
  render component in grid layout
  Wrapper is controlled by client
 */
const GridShowcase = ({
  components,
  gridStyles,
  GridItemProps,
}) => {
  const { setComponent } = useMetadata();
  return (
    <Grid container classes={gridStyles}>
      {orderComponents(components).map(Component => {
        const {
          title: name = Component.name,
          frameProps,
          createdAt,
          description,
          creators,
          stylesUrl,
        } = Component.metadata;
        return (
          <Grid key={name} item classes={gridStyles} {...GridItemProps}>
            <ShowcaseWidget
              creators={creators}
              name={name}
              status={getStatusByDate(createdAt)}
              description={description}
              frameProps={frameProps}
              height={'100%'}
              stylesUrl={stylesUrl}
              onClickCode={() => setComponent(Component)}
            >
              <Component />
            </ShowcaseWidget>
          </Grid>
        );
      })}
    </Grid>
  );
};

GridShowcase.defaultProps = {
  renderComponentWrapper: ({ children }) => <>{children}</>,
};

export default GridShowcase;
