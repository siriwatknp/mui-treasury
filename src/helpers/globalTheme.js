import * as Yup from 'yup';
import toArray from 'lodash/toArray';

const GlobalTheme = () => {
  const FIELDS = {
    primary: 'palette.primary.main',
    secondary: 'palette.secondary.main',
    borderRadius: 'shape.borderRadius',
    fontSize: 'typography.fontSize',
    fontFamily: 'typography.fontFamily',
  };
  const color = Yup.string()
    .matches(/^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/, 'only hex color')
    .required('Please fill color in hexa format');

  const positiveInt = Yup.number()
    .integer()
    .min(0);

  const exist = Yup.string().required();

  const schema = Yup.object().shape({
    palette: Yup.object().shape({
      primary: Yup.object().shape({
        main: color,
      }),
      secondary: Yup.object().shape({
        main: color,
      }),
    }),
    shape: Yup.object().shape({
      borderRadius: positiveInt,
    }),
    typography: Yup.object().shape({
      fontSize: positiveInt,
      fontFamily: exist,
    }),
  });

  const validators = {
    [FIELDS.primary]: color,
    [FIELDS.secondary]: color,
    [FIELDS.borderRadius]: positiveInt,
    [FIELDS.fontSize]: positiveInt,
    [FIELDS.fontFamily]: exist,
  };
  return {
    KEYS: toArray(FIELDS),
    schema,
    validators,
  };
};

export const globalThemeService = GlobalTheme();

export default GlobalTheme;
