import React from 'react';
import merge from 'deepmerge';
import LayoutBuilder from '../builders';
import { ILayoutBuilder } from '../builders';
import { LayoutData, State } from '../types';

const Context = React.createContext<ContextValue>(null);
Context.displayName = 'MuiLayoutCtx';

export type ContextValue = {
  state: State;
  data: LayoutData;
  setOpen: (id: string, value: boolean) => void;
  setCollapsed: (id: string, value: boolean) => void;
};

type SidebarPayload = { id: string; value: boolean };
type Action =
  | { type: 'SET_OPEN'; payload: SidebarPayload }
  | { type: 'SET_COLLAPSED'; payload: SidebarPayload };

const reducer = (state: State, action: Action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'SET_OPEN':
      newState.sidebar[action.payload.id].open = action.payload.value;
      return newState;
    case 'SET_COLLAPSED':
      newState.sidebar[action.payload.id].collapsed = action.payload.value;
      return newState;
    default:
      return state;
  }
};

export const useLayoutCtx = () => {
  const ctx = React.useContext(Context);
  if (!ctx) {
    throw new Error('useLayoutCtx must be rendered under LayoutProvider');
  }
  return ctx;
};

export const LayoutConsumer = Context.Consumer;

export type LayoutProviderProps = {
  initialState?: State;
  scheme: ILayoutBuilder;
};

const defaultScheme = LayoutBuilder();

export const LayoutProvider = ({
  initialState: controlledInitialState,
  scheme = defaultScheme,
  children,
}: React.PropsWithChildren<LayoutProviderProps>) => {
  const autoGenInitialState = scheme.getInitialState();
  const [state, dispatch] = React.useReducer(
    reducer,
    merge(autoGenInitialState, controlledInitialState || {})
  );
  const setOpen = (id: string, value: boolean) => {
    if (typeof id !== 'string') {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error(
          'To call `setOpen`, You must pass 1st argument(sidebarId) as string'
        );
      }
      return;
    }
    return dispatch({ type: 'SET_OPEN', payload: { id, value } });
  };
  const setCollapsed = (id: string, value: boolean) => {
    if (typeof id !== 'string') {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error(
          'To call `setCollapsed`, You must pass 1st argument(sidebarId) as string'
        );
      }
      return;
    }
    return dispatch({
      type: 'SET_COLLAPSED',
      payload: { id, value },
    });
  };
  const data = scheme.getComponentData();
  return (
    <Context.Provider
      value={{
        state,
        data,
        setOpen,
        setCollapsed,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
