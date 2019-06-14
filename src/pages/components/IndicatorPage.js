import React, { useState } from 'react';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import { Box } from 'components/atoms';
import { PreviewWidget } from 'components/molecules';
import IndicatorGroup from 'components/indicators/IndicatorGroup';
import InvertedIndicator from 'components/indicators/InvertedIndicator';
import SimpleIndicator from 'components/indicators/SimpleIndicator';
import CodeHighlight from 'components/highlights/CodeHighlight';
import PdfButton from 'components/predefined/Button';
import Copier from 'components/atoms/Copier';

const components = [
  {
    name: 'Dot Indicator',
    component: SimpleIndicator,
    render: () => {
      const [index, setIndex] = useState(0);
      return (
        <IndicatorGroup>
          {[0, 1, 2].map(i => (
            <SimpleIndicator
              key={i}
              active={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </IndicatorGroup>
      );
    },
  },
  {
    name: 'Inverted Indicator',
    component: InvertedIndicator,
    render: () => {
      const [index, setIndex] = useState(0);
      return (
        <IndicatorGroup>
          {[0, 1, 2].map(i => (
            <InvertedIndicator
              key={i}
              active={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </IndicatorGroup>
      );
    },
    previewProps: {
      inverted: true,
    },
  },
];

const IndicatorPage = () => {
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
              sm={4}
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

IndicatorPage.propTypes = {};
IndicatorPage.defaultProps = {};
IndicatorPage.components = components;

export default IndicatorPage;
