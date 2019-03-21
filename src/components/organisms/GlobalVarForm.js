import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Formik } from 'formik';

import Grid from '@material-ui/core/Grid';
import Box from 'components/atoms/Box';
import InputNumber from 'components/atoms/InputNumber';
import InputColor from 'components/atoms/InputColor';
import FontFamily from 'components/atoms/FontFamily';

import { globalThemeService } from 'helpers/globalTheme';

const GlobalVarForm = ({ theme, onChange }) => (
  <Formik initialValues={theme} validationSchema={globalThemeService.schema}>
    {({ values, errors, touched, handleBlur, handleChange }) => {
      const onChangeTheme = field => e => {
        handleChange(e);
        const { value } = e.target;
        globalThemeService.validators[field].isValid(value).then(isValid => {
          if (isValid)
            onChange(
              [field],
              [globalThemeService.validators[field].cast(value)],
            );
        });
      };
      return (
        <Box
          position={'sticky'}
          top={0}
          zIndex={1000}
          bgcolor={'common.white'}
          borderBottom={'1px solid #f5f5f5'}
          css={{
            position: '-webkit-sticky',
          }}
        >
          <Box
            py={2}
            px={{
              xs: 2,
              lg: 8,
            }}
            mx={'auto'}
          >
            <Grid
              container
              spacing={16}
              wrap={'nowrap'}
              style={{
                overflow: 'scroll',
                // '-webkit-overflow-scrolling': 'touch',
              }}
            >
              <Grid item style={{ flexShrink: 0 }}>
                <InputColor
                  label={'Primary Color'}
                  name={'palette.primary.main'}
                  value={get(values, 'palette.primary.main')}
                  onBlur={handleBlur}
                  onChange={onChangeTheme('palette.primary.main')}
                  error={
                    get(touched, 'palette.primary.main') &&
                    get(errors, 'palette.primary.main')
                  }
                />
              </Grid>
              <Grid item style={{ flexShrink: 0 }}>
                <InputColor
                  label={'Secondary Color'}
                  name={'palette.secondary.main'}
                  value={get(values, 'palette.secondary.main')}
                  onBlur={handleBlur}
                  onChange={onChangeTheme('palette.secondary.main')}
                  error={
                    get(touched, 'palette.secondary.main') &&
                    get(errors, 'palette.secondary.main')
                  }
                />
              </Grid>
              <Grid item style={{ flexShrink: 0 }}>
                <InputNumber
                  label={'Border Radius'}
                  name={'shape.borderRadius'}
                  value={get(values, 'shape.borderRadius')}
                  onBlur={handleBlur}
                  onChange={onChangeTheme('shape.borderRadius')}
                  error={
                    get(touched, 'shape.borderRadius') &&
                    get(errors, 'shape.borderRadius')
                  }
                />
              </Grid>
              <Grid item style={{ flexShrink: 0 }}>
                <InputNumber
                  label={'Font size'}
                  name={'typography.fontSize'}
                  value={get(values, 'typography.fontSize')}
                  onBlur={handleBlur}
                  onChange={onChangeTheme('typography.fontSize')}
                  error={
                    get(touched, 'typography.fontSize') &&
                    get(errors, 'typography.fontSize')
                  }
                />
              </Grid>
              <Grid item style={{ flexShrink: 0 }}>
                <FontFamily
                  label={'Font Family'}
                  name={'typography.fontFamily'}
                  value={get(values, 'typography.fontFamily')}
                  onBlur={handleBlur}
                  onChange={onChangeTheme('typography.fontFamily')}
                  error={
                    get(touched, 'typography.fontFamily') &&
                    get(errors, 'typography.fontFamily')
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      );
    }}
  </Formik>
);

GlobalVarForm.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GlobalVarForm;
