import React from 'react';
import GoogleFontLoader, {
  GoogleFontLoaderProps,
} from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';

const FontContext = React.createContext<GoogleFontLoaderProps['fonts']>([]);

export const FontProvider = (
  props: React.PropsWithChildren<GoogleFontLoaderProps>
) => {
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={props.fonts} />
      </NoSsr>
      <FontContext.Provider value={props.fonts}>
        {props.children}
      </FontContext.Provider>
    </>
  );
};

export const Font = ({
  index = 0,
  weight,
  children,
}: React.PropsWithChildren<{ index?: number; weight?: number }>) => {
  const ctx = React.useContext(FontContext);
  const { font } = ctx[index] || {};
  return (
    <span style={{ fontFamily: font, fontWeight: weight }}>{children}</span>
  );
};
