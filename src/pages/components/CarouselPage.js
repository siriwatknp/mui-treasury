import React, { useState } from 'react';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import { Box } from 'components/atoms';
import Copier from 'components/atoms/Copier';
import { PreviewWidget } from 'components/molecules';
import ParallaxCarousel from 'components/carousels/ParallaxCarousel';
import CodeHighlight from 'components/highlights/CodeHighlight';
import PdfButton from 'components/predefined/Button';

const fontUrl =
  // eslint-disable-next-line max-len
  'https://fonts.googleapis.com/css?family=Poppins:900&display=swap';
const data = [
  {
    id: 1,
    title: 'Huarache',
    subtitle: 'Gripp',
    image:
      // eslint-disable-next-line max-len
      'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-huarache-gripp.png?alt=media',
  },
  {
    id: 2,
    title: 'Air Max',
    subtitle: '270 P',
    image:
      // eslint-disable-next-line max-len
      'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-270.png?alt=media',
  },
  {
    id: 3,
    title: 'Air Max',
    subtitle: 'Deluxe',
    image:
      // eslint-disable-next-line max-len
      'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-deluxe.png?alt=media',
  },
];

const components = [
  {
    name: 'Parallax Carousel',
    component: ParallaxCarousel,
    render: () => (
      <Box width={'100%'} maxWidth={840} mx={'auto'}>
        <ParallaxCarousel data={data} />
      </Box>
    ),
    previewProps: {
      // inverted: true,
    },
  },
];

const CarouselPage = () => {
  const [currentItem, setCurrentItem] = useState('');
  const apiUrl = get(currentItem, 'component.metadata.api');
  // eslint-disable-next-line react/prop-types
  const renderButton = ({ label, url }) => (
    <PdfButton
      key={label}
      style={{ marginLeft: 8 }}
      size={'small'}
      variant={'contained'}
      color={'primary'}
      component={Link}
      href={url}
      target={'_blank'}
      rel={'noopener'}
      underline={'none'}
      icon={'call_made'}
      iconPosition={'end'}
    >
      {label || 'Full API'}
    </PdfButton>
  );
  return (
    <Box
      width={'100%'}
      p={{
        xs: 2,
        sm: 4,
      }}
    >
      <Helmet>
        <link href={fontUrl} rel="stylesheet" />
      </Helmet>
      <Grid container spacing={4}>
        {components.map(item => {
          const { name, component, render, gridItemProps, previewProps } = item;
          return (
            <Grid
              key={name || get(component, 'metadata.name')}
              item
              xs={12}
              {...gridItemProps}
            >
              <PreviewWidget
                {...get(component, 'metadata')}
                {...previewProps}
                name={name || get(component, 'metadata.name')}
                onClickCode={() => setCurrentItem(item)}
              >
                {render()}
              </PreviewWidget>
            </Grid>
          );
        })}
      </Grid>
      <Drawer
        open={Boolean(currentItem)}
        anchor={'right'}
        variant={'temporary'}
        onClose={() => setCurrentItem('')}
        PaperProps={{ style: { background: 'rgb(40, 44, 52)' } }}
      >
        <Box
          width={{
            xs: 375,
            sm: 600,
            md: 720,
          }}
          px={2}
          py={3}
        >
          {apiUrl && (
            <>
              <Box px={2} pb={2} textAlign={'right'}>
                {typeof apiUrl === 'string'
                  ? renderButton({ url: apiUrl })
                  : apiUrl.map(renderButton)}
              </Box>
              <Divider style={{ background: 'rgba(255, 255, 255, 0.12)' }} />
            </>
          )}
          <Box mr={2} textAlign={'right'}>
            <Copier text={get(currentItem, ['component', 'code'], '')}>
              {({ copied }) => (
                <PdfButton
                  icon={copied ? 'check_circle' : 'file_copy'}
                  iconProps={{
                    color: copied ? 'success' : '',
                  }}
                  variant={'contained'}
                  color={copied ? 'default' : 'secondary'}
                  size={'small'}
                >
                  {copied ? 'Copied' : 'Copy code'}
                </PdfButton>
              )}
            </Copier>
          </Box>
          <CodeHighlight code={get(currentItem, ['component', 'code'], '')} />
        </Box>
      </Drawer>
    </Box>
  );
};

CarouselPage.propTypes = {};
CarouselPage.defaultProps = {};
CarouselPage.components = components;

export default CarouselPage;
