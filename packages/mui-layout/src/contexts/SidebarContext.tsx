import React from 'react';
import { DrawerProps } from '@material-ui/core/Drawer';
import { PaperProps } from '@material-ui/core/Paper';
import { SlideProps } from '@material-ui/core/Slide';
import { get } from '../utils';
import { Dictionary, EdgeSidebarConfig, SidebarState } from '../types';

type SidebarContextValue = {
  id: string;
  entered: boolean;
  expanded: boolean;
  setEntered: (value: boolean) => void;
  setExpanded: (value: boolean) => void;
  inlineStyle?: Dictionary<string | number>;
  wrapOnMouseEnter?: (
    props: DrawerProps['PaperProps']
  ) => (...args: Parameters<PaperProps['onMouseEnter']>) => void;
  wrapOnMouseLeave?: (
    props: DrawerProps['PaperProps']
  ) => (...args: Parameters<PaperProps['onMouseLeave']>) => void;
  wrapOnEntered?: (
    props: DrawerProps['SlideProps']
  ) => (...args: Parameters<SlideProps['onEntered']>) => void;
  wrapOnExit?: (
    props: DrawerProps['SlideProps']
  ) => (...args: Parameters<SlideProps['onExit']>) => void;
};
const Context = React.createContext<SidebarContextValue>({
  id: undefined,
  entered: false,
  expanded: false,
  setEntered: () => {},
  setExpanded: () => {},
});
Context.displayName = 'SidebarCtx';

const initialState = {
  entered: false,
  expanded: false,
};

export const useSidebarCtx = () => React.useContext(Context);

export const SidebarProvider = ({
  id,
  children,
  config,
  sidebarState,
}: React.PropsWithChildren<{
  id: string;
  config: EdgeSidebarConfig;
  sidebarState: SidebarState;
}>) => {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    if (!sidebarState.collapsed) {
      setState(prevState => ({ ...prevState, expanded: false }));
    }
  }, [sidebarState.collapsed]);

  const setEntered = React.useCallback(
    payload => setState(prevState => ({ ...prevState, entered: payload })),
    []
  );
  const setExpanded = React.useCallback(
    payload => setState(prevState => ({ ...prevState, expanded: payload })),
    []
  );
  const wrapOnMouseEnter: SidebarContextValue['wrapOnMouseEnter'] = React.useCallback(
    paper => (...args) => {
      if (paper && typeof paper.onMouseEnter === 'function') {
        paper.onMouseEnter(...args);
      }
      if (sidebarState.collapsed) {
        setExpanded(true);
      }
    },
    [setExpanded, sidebarState.collapsed]
  );
  const wrapOnMouseLeave: SidebarContextValue['wrapOnMouseLeave'] = React.useCallback(
    paper => (...args) => {
      if (paper && typeof paper.onMouseLeave === 'function') {
        paper.onMouseLeave(...args);
      }
      setExpanded(false);
    },
    [setExpanded]
  );
  const wrapOnEntered: SidebarContextValue['wrapOnEntered'] = React.useCallback(
    slide => (...args) => {
      if (slide && typeof slide.onEntered === 'function')
        slide.onEntered(...args);
      setEntered(true);
    },
    [setEntered]
  );
  const wrapOnExit: SidebarContextValue['wrapOnExit'] = React.useCallback(
    slide => (...args) => {
      if (slide && typeof slide.onExit === 'function') slide.onExit(...args);
      setEntered(false);
    },
    [setEntered]
  );
  return (
    <Context.Provider
      value={{
        id,
        ...state,
        setEntered,
        setExpanded,
        wrapOnMouseEnter,
        wrapOnMouseLeave,
        wrapOnEntered,
        wrapOnExit,
        inlineStyle: {
          ...(state.expanded && {
            width: get(config, ['width']),
          }),
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const SidebarConsumer = Context.Consumer;
