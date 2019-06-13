import React, { useState } from 'react';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import ParallaxSlide from 'components/slides/ParallaxSlide';
import Typography from 'components/predefined/Typography';
import CodeHighlight from 'components/highlights/CodeHighlight';
import PdfButton from 'components/predefined/Button';
import Copier from 'components/atoms/Copier';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 48,
    fontWeight: 900,
  },
}));

const data = [
  {
    id: 1,
    boxProps: {
      bgcolor: '#c7ffcf',
    },
    title: 'Parallax #1',
    subtitle: 'Parallax #2',
  },
  {
    id: 2,
    boxProps: {
      bgcolor: '#ffcaa9',
    },
    title: 'Parallax #1',
    subtitle: 'Parallax #2',
  },
  {
    id: 3,
    boxProps: {
      bgcolor: '#c6d4ff',
    },
    title: 'Parallax #1',
    subtitle: 'Parallax #2',
  },
];

const components = [
  {
    name: 'Parallax Slide',
    component: ParallaxSlide,
    render: () => {
      const classes = useStyles();
      return (
        <Box width={'100%'}>
          <ParallaxSlide>
            {({ injectStyle }) =>
              data.map(({ boxProps, title, subtitle, id }, i) => (
                <Box key={id} {...boxProps}>
                  <Typography
                    noWrap
                    className={classes.root}
                    style={injectStyle(i, 80)}
                  >
                    {title}
                  </Typography>
                  <Typography
                    noWrap
                    className={classes.root}
                    style={injectStyle(i, 40)}
                  >
                    {subtitle}
                  </Typography>
                  <Typography className={classes.root}>Static Text</Typography>
                </Box>
              ))
            }
          </ParallaxSlide>
        </Box>
      );
    },
    previewProps: {
      inverted: true,
    },
  },
];

const ArrowPage = () => {
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

ArrowPage.propTypes = {};
ArrowPage.defaultProps = {};
ArrowPage.components = components;

export default ArrowPage;
