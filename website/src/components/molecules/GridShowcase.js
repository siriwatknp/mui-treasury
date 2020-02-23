import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useMetadata } from 'containers/Demo/context';
import { orderComponents, getStatusByDate } from 'utils/functions';

/*
  render component in grid layout
  Wrapper is controlled by client
 */
const GridShowcase = ({
  components,
  gridStyles,
  GridItemProps,
  renderComponentWrapper: Wrapper,
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
        } = Component.metadata;
        return (
          <Grid key={name} item classes={gridStyles} {...GridItemProps}>
            <Wrapper
              creators={creators}
              name={name}
              status={getStatusByDate(createdAt)}
              description={description}
              frameProps={frameProps}
              height={'100%'}
              onClickCode={() => setComponent(Component)}
            >
              <Component />
            </Wrapper>
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
