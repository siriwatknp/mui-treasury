import React from 'react';
import Grid from '@material-ui/core/Grid';
import ShowcaseWidget from './ShowcaseWidget';

const GridShowcase = ({
  gridStyles,
  components,
  GridItemProps,
  setComponent,
  ShowcaseWidgetProps = {},
}) => (
  <Grid container classes={gridStyles}>
    {components.map(Component => {
      const {
        title: name = Component.name,
        frameProps,
        description,
      } = Component.metadata;
      return (
        <Grid key={name} item classes={gridStyles} {...GridItemProps}>
          <ShowcaseWidget
            {...ShowcaseWidgetProps}
            frameProps={{
              ...ShowcaseWidgetProps.frameProps,
              ...frameProps,
            }}
            description={description}
            name={name}
            height={'100%'}
            onClickCode={() => setComponent(Component)}
          >
            <Component />
          </ShowcaseWidget>
        </Grid>
      );
    })}
  </Grid>
);

export default GridShowcase;
