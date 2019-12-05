import React from 'react';
import { getThemeProps, useTheme } from '@material-ui/styles';
// import useWindow from './useWindow';

function getWindow({ customWindow }) {
  return customWindow || window;
}

function useMediaQuery(queryInput, options = {}) {
  const theme = useTheme();
  const thisWindow = getWindow(options);

  const props = getThemeProps({
    theme,
    name: 'MuiUseMediaQuery',
    props: {},
  });

  if (process.env.NODE_ENV !== 'production') {
    if (typeof queryInput === 'function' && theme === null) {
      console.error(
        [
          'Material-UI: the `query` argument provided is invalid.',
          'You are providing a function without a theme in the context.',
          'One of the parent elements needs to use a ThemeProvider.',
        ].join('\n')
      );
    }
  }

  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, '');

  // Wait for jsdom to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.
  const supportMatchMedia =
    typeof thisWindow !== 'undefined' &&
    typeof thisWindow.matchMedia !== 'undefined';

  const { defaultMatches = false, noSsr = false, ssrMatchMedia = null } = {
    ...props,
    ...options,
  };

  const [match, setMatch] = React.useState(() => {
    if (noSsr && supportMatchMedia) {
      return thisWindow.matchMedia(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }

    // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.
    return defaultMatches;
  });

  React.useEffect(() => {
    let active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    const queryList = thisWindow.matchMedia(query);
    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, supportMatchMedia]);

  return match;
}

export default useMediaQuery;
