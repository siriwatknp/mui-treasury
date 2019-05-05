/* eslint-disable max-len */
import React, { useState } from 'react';
import uniq from 'lodash/uniq';
import without from 'lodash/without';
import { styled } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Browser from 'components/atoms/Browser';
import Text from 'components/atoms/Text';
import Box from 'components/atoms/Box';
import Image from 'components/atoms/Image';
import Timeline from 'components/molecules/Timeline';
import Icon from 'components/predefined/Icon';

const eCommerce01 =
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fe-commerce_01%2Fe-commerce-01.png?alt=media';
const eCommerce01MegaMenu =
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fe-commerce_01%2Fe-commerce-01_megamenu.png?alt=media';
const eCommerce01AppBar =
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fe-commerce_01%2Fe-commerce-01_appBar.png?alt=media';
const eCommerce01Collapsor =
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fe-commerce_01%2Fe-commerce-01_collapsor.png?alt=media';
const eCommerce01ColorPicker =
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fe-commerce_01%2Fe-commerce-01_colorPicker.png?alt=media';
const eCommerce01Pagination =
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fe-commerce_01%2Fe-commerce-01_pagination.png?alt=media';
const eCommerce01ProductAds =
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fe-commerce_01%2Fe-commerce-01_productAds.png?alt=media';
const eCommerce01ProductCard =
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fe-commerce_01%2Fe-commerce-01_productCard.png?alt=media';
const eCommerce01SizePicker =
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fe-commerce_01%2Fe-commerce-01_sizePicker.png?alt=media';
const txtCategoryProps = {
  variant: 'h3',
  fontSize: {
    xs: 18,
  },
  fontWeight: 800,
  my: 1,
  textAlign: 'center',
  // color: 'primary.main',
  lineHeight: 1.5,
};
// eslint-disable-next-line react/prop-types
const PersistentImage = styled('img')(({ visible }) => ({
  position: 'absolute',
  top: 30,
  left: 0,
  display: 'block',
  width: '100%',
  opacity: visible ? 1 : 0,
  transition: '0.3s',
}));
const TimelinePage = () => {
  const [activeImages, setActiveImages] = useState([]);
  const createSection = prefix => (
    <>
      <Grid item xs={12} sm={12} md={5}>
        <Box
          position={{ xs: 'absolute', md: 'initial' }}
          right={{ xs: '-20%', sm: 16 }}
          left={{ xs: '56%', sm: '48%' }}
        >
          <Browser>
            <Box
              minHeight={{ xs: 88, sm: 140, md: 180 }}
              {...Box.allCenter}
              bgcolor={'grey.100'}
            >
              <i className={'far fa-image fa-3x'} color={'#a5a5a5'} />
            </Box>
          </Browser>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Timeline
          data={[
            {
              id: `${prefix}-component`,
            },
            {
              id: `${prefix}-component`,
            },
            {
              id: `${prefix}-component`,
            },
            {
              id: `${prefix}-page-01`,
              primary: `${prefix}`,
              large: true,
            },
          ]}
        />
      </Grid>
    </>
  );
  return (
    <Box
      maxWidth={{
        xs: 'auto',
        sm: 732,
        md: 960,
        lg: 1152,
      }}
      px={{
        xs: 2,
        md: 3,
      }}
      py={{
        xs: 2,
        sm: 3,
        md: 5,
      }}
      mx={'auto'}
    >
      <Box
        textAlign={{
          xs: 'left',
          md: 'center',
        }}
      >
        <Text
          variant={'h1'}
          fontSize={{
            xs: 24,
            sm: 40,
          }}
          fontWeight={900}
          gutterBottom
        >
          Timeline 2019
        </Text>
        <Text color={'text.secondary'} variant={'h6'}>
          Accomplish <b>6</b> Inspiring Demo Pages
        </Text>
        <Text variant={'caption'} textAlign={'inherit'} mt={0}>
          (To prove that Material-UI is not limited by material design)
        </Text>
        <br />
        <Grid container>
          <Grid item md={1} />
          <Grid item xs={12} sm={4} md={3}>
            <Text {...txtCategoryProps}>
              <Icon push={'right'}>far fa-shopping-cart</Icon> Online Shopping
            </Text>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Text {...txtCategoryProps}>
              <Icon push={'right'}>dashboard</Icon> CMS Dashboard
            </Text>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Text {...txtCategoryProps}>
              <Icon push={'right'}>far fa-book-reader</Icon> Informative Blog
            </Text>
          </Grid>
          <Grid item md={1} />
        </Grid>
        <br />
        <br />
      </Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={5}>
          <Box
            position={{ xs: 'absolute', md: 'initial' }}
            right={{ xs: '-20%', sm: 16 }}
            left={{ xs: '56%', sm: '48%' }}
          >
            <Browser>
              <Image src={eCommerce01} />
              <PersistentImage
                src={eCommerce01AppBar}
                visible={activeImages.includes('os-appBar-01')}
              />
              <PersistentImage
                src={eCommerce01MegaMenu}
                visible={activeImages.includes('os-megaMenu-01')}
              />
              <PersistentImage
                src={eCommerce01Collapsor}
                visible={activeImages.includes('os-collapsor-01')}
              />
              <PersistentImage
                src={eCommerce01ColorPicker}
                visible={activeImages.includes('os-colorPicker-01')}
              />
              <PersistentImage
                src={eCommerce01Pagination}
                visible={activeImages.includes('os-pagination-01')}
              />
              <PersistentImage
                src={eCommerce01ProductAds}
                visible={activeImages.includes('os-productAds-01')}
              />
              <PersistentImage
                src={eCommerce01ProductCard}
                visible={activeImages.includes('os-productCard-01')}
              />
              <PersistentImage
                src={eCommerce01SizePicker}
                visible={activeImages.includes('os-sizePicker-01')}
              />
            </Browser>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Timeline
            data={[
              {
                id: 'os-appBar-01',
                primary: 'App Bar',
                state: 'processing',
              },
              {
                id: 'os-megaMenu-01',
                primary: 'Mega Menu',
              },
              {
                id: 'os-productAds-01',
                primary: 'Product Ads',
              },
              {
                id: 'os-productCard-01',
                primary: 'Product Card',
              },
              {
                id: 'os-collapsor-01',
                primary: 'Collapsor',
              },
              {
                id: 'os-colorPicker-01',
                primary: 'Color Picker',
              },
              {
                id: 'os-sizePicker-01',
                primary: 'Size Picker',
              },
              {
                id: 'os-pagination-01',
                primary: 'Pagination',
              },
              {
                id: 'os-page-01',
                primary: 'Amigo Online Shopping',
                large: true,
              },
            ]}
            onMouseOver={id => setActiveImages(uniq([...activeImages, id]))}
            onFocus={id => setActiveImages(uniq([...activeImages, id]))}
            onMouseLeave={id => setActiveImages(without(activeImages, id))}
          />
        </Grid>
        {createSection('Blog I')}
        {createSection('CMS I')}
        {createSection('Online Shopping II')}
        {createSection('Blog II')}
        {createSection('CMS II')}
      </Grid>
    </Box>
  );
};

TimelinePage.propTypes = {};
TimelinePage.defaultProps = {};

export default TimelinePage;
