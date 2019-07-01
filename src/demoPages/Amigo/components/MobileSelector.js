import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from 'extensions/Icon';
import Typography from 'extensions/Typography';
import CategoryPicker from './CategoryPicker';
import Expander from './Expander';
import PricePicker from './PricePicker';
import BrandPicker from './BrandPicker';
import ColorPicker from './ColorPicker';
import SizePicker from './SizePicker';

const MobileSelector = () => {
  const [categoryOpened, setCategoryOpened] = useState(false);
  const [filterOpened, setFilterOpened] = useState(false);
  return (
    <>
      <Grid container>
        <Grid item xs={6} style={{ borderRight: '1px solid #f0f0f0' }}>
          <ListItem button onClick={() => setCategoryOpened(true)}>
            <ListItemText>CATEGORY</ListItemText>
            <Icon>keyboard_arrow_down</Icon>
          </ListItem>
        </Grid>
        <Grid item xs={6}>
          <ListItem button onClick={() => setFilterOpened(true)}>
            <ListItemText>FILTER</ListItemText>
            <Icon>keyboard_arrow_down</Icon>
          </ListItem>
        </Grid>
      </Grid>
      <Drawer open={categoryOpened} onClose={() => setCategoryOpened(false)}>
        <Box width={300} p={2}>
          <Typography
            bottomSpace={'small'}
            weight={'bold'}
            secondFamily
            size={'big'}
          >
            Choose Category
          </Typography>
          <CategoryPicker categories={CategoryPicker.data} />
        </Box>
      </Drawer>
      <Drawer
        anchor={'right'}
        open={filterOpened}
        onClose={() => setFilterOpened(false)}
      >
        <Box width={300} py={2}>
          <Typography
            push={'left'}
            bottomSpace={'small'}
            weight={'bold'}
            secondFamily
            size={'big'}
          >
            Adjust Filter
          </Typography>
          <Expander label={'PRICE'}>
            <PricePicker min={10} max={400} />
          </Expander>
          <Divider light />
          <Expander label={'BRAND'}>
            <BrandPicker brands={BrandPicker.data} />
          </Expander>
          <Divider light />
          <Expander label={'COLOR'}>
            <Box p={1}>
              <ColorPicker colors={ColorPicker.data} />
            </Box>
          </Expander>
          <Divider light />
          <Expander label={'SIZE'}>
            <Box p={1}>
              <SizePicker sizes={SizePicker.data} />
            </Box>
          </Expander>
          <Divider light />
        </Box>
      </Drawer>
    </>
  );
};

MobileSelector.propTypes = {};
MobileSelector.defaultProps = {};

export default MobileSelector;
