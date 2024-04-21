import React, { ReactNode } from "react";
import {
  EdgeSidebarBuilder,
  EdgeSidebarSetupParams,
} from "../EdgeSidebar/EdgeSidebarBuilder";
import { HeaderBuilder, HeaderSetupParams } from "../Header/HeaderBuilder";
import {
  InsetSetupParams,
  InsetSidebarBuilder,
} from "../InsetSidebar/InsetSidebarBuilder";
import {
  EDGE_SIDEBAR_ID,
  LEFT_EDGE_SIDEBAR_ID,
  RIGHT_EDGE_SIDEBAR_ID,
} from "../utils/constant";

type SidebarState = {
  collapsed?: boolean;
  open?: boolean;
};

type State = {
  leftEdgeSidebar?: SidebarState;
  rightEdgeSidebar?: SidebarState;
};

type Builder = {
  header?: HeaderBuilder;
  topHeader?: HeaderBuilder;
  subheader?: HeaderBuilder;
  leftEdgeSidebar?: EdgeSidebarBuilder;
  rightEdgeSidebar?: EdgeSidebarBuilder;
  leftInsetSidebar?: InsetSidebarBuilder;
  rightInsetSidebar?: InsetSidebarBuilder;
};

export type ContextValue = {
  state: State;
  builder: Builder;
  setOpen: (id: EDGE_SIDEBAR_ID, value: boolean) => void;
  toggleLeftSidebarOpen: () => void;
  toggleLeftSidebarCollapsed: () => void;
  setCollapsed: (id: EDGE_SIDEBAR_ID, value: boolean) => void;
  toggleRightSidebarOpen: () => void;
  toggleRightSidebarCollapsed: () => void;
};

export type PropsWithFunctionChildren<
  Props = any,
  Params = ContextValue
> = Omit<Props, "children"> & {
  children?: React.ReactNode | ((ctx: Params) => React.ReactNode);
};

const LayoutContext = React.createContext<ContextValue | undefined>(undefined);
LayoutContext.displayName = "LayoutContext";

export const useLayoutCtx = () => {
  const ctx = React.useContext(LayoutContext);
  if (!ctx) {
    throw new Error("useLayoutCtx must be rendered under LayoutProvider");
  }
  return ctx;
};

export const LayoutConsumer = LayoutContext.Consumer;

export type Scheme = {
  header?: HeaderSetupParams;
  topHeader?: HeaderSetupParams;
  subheader?: HeaderSetupParams;
  leftEdgeSidebar?: EdgeSidebarSetupParams;
  rightEdgeSidebar?: EdgeSidebarSetupParams;
  leftInsetSidebar?: InsetSetupParams;
  rightInsetSidebar?: InsetSetupParams;
};

export type RootProps = {
  initialState?: State;
  scheme: Scheme;
};

const INITIAL_EDGE_SIDEBAR_STATE = { open: false, collapsed: false };

const setUpEdgeSidebar = (builder: Builder) => {
  const autoGenInitialState: State = {
    leftEdgeSidebar: {},
    rightEdgeSidebar: {},
  };
  if (builder.leftEdgeSidebar) {
    builder.leftEdgeSidebar.id = LEFT_EDGE_SIDEBAR_ID;
    autoGenInitialState.leftEdgeSidebar = INITIAL_EDGE_SIDEBAR_STATE;
  }
  if (builder.rightEdgeSidebar) {
    builder.rightEdgeSidebar.id = RIGHT_EDGE_SIDEBAR_ID;
    autoGenInitialState.rightEdgeSidebar = INITIAL_EDGE_SIDEBAR_STATE;
  }
  return autoGenInitialState;
};

const injectStateToEdgeSidebar = (builder: Builder, state: State) => {
  if (builder.leftEdgeSidebar) {
    builder.leftEdgeSidebar.setState(state.leftEdgeSidebar ?? {});
  }
  if (builder.rightEdgeSidebar) {
    builder.rightEdgeSidebar.setState(state.rightEdgeSidebar ?? {});
  }
};

export const Root = ({
  initialState: controlledInitialState,
  scheme,
  children,
}: PropsWithFunctionChildren<RootProps>) => {
  if (!scheme) {
    throw new Error(
      "Missing scheme! fixed by passing `scheme` to <Root scheme={scheme} />"
    );
  }
  const builder: Builder = {};
  if (scheme.header) builder.header = new HeaderBuilder(scheme.header);
  if (scheme.topHeader) builder.topHeader = new HeaderBuilder(scheme.topHeader);
  if (scheme.subheader) builder.subheader = new HeaderBuilder(scheme.subheader);
  if (scheme.leftEdgeSidebar)
    builder.leftEdgeSidebar = new EdgeSidebarBuilder(scheme.leftEdgeSidebar);
  if (scheme.rightEdgeSidebar)
    builder.rightEdgeSidebar = new EdgeSidebarBuilder(scheme.rightEdgeSidebar);
  if (scheme.rightInsetSidebar)
    builder.rightInsetSidebar = new InsetSidebarBuilder(
      scheme.rightInsetSidebar
    );
  if (scheme.leftInsetSidebar)
    builder.leftInsetSidebar = new InsetSidebarBuilder(scheme.leftInsetSidebar);

  const autoGenInitialState = setUpEdgeSidebar(builder);
  const [leftState, setLeftState] = React.useState({
    ...autoGenInitialState.leftEdgeSidebar,
    ...controlledInitialState?.leftEdgeSidebar,
  });
  const [rightState, setRightState] = React.useState({
    ...autoGenInitialState.rightEdgeSidebar,
    ...controlledInitialState?.rightEdgeSidebar,
  });
  const setOpen = (id: EDGE_SIDEBAR_ID, value: boolean) => {
    function setter(state: SidebarState) {
      return state.open === value ? state : { ...state, open: value };
    }
    if (id === LEFT_EDGE_SIDEBAR_ID) {
      setLeftState(setter);
    }
    if (id === RIGHT_EDGE_SIDEBAR_ID) {
      setRightState(setter);
    }
  };
  const setCollapsed = (id: EDGE_SIDEBAR_ID, value: boolean) => {
    function setter(state: SidebarState) {
      return state.collapsed === value ? state : { ...state, collapsed: value };
    }
    if (id === LEFT_EDGE_SIDEBAR_ID) {
      setLeftState(setter);
    }
    if (id === RIGHT_EDGE_SIDEBAR_ID) {
      setRightState(setter);
    }
  };
  const toggleLeftSidebarOpen = () =>
    setLeftState((state) => ({ ...state, open: !state.open }));
  const toggleLeftSidebarCollapsed = () =>
    setLeftState((state) => ({ ...state, collapsed: !state.collapsed }));
  const toggleRightSidebarOpen = () =>
    setRightState((state) => ({ ...state, open: !state.open }));
  const toggleRightSidebarCollapsed = () =>
    setRightState((state) => ({ ...state, collapsed: !state.collapsed }));

  injectStateToEdgeSidebar(builder, {
    leftEdgeSidebar: leftState,
    rightEdgeSidebar: rightState,
  });

  // assign Effect
  if (builder.header) {
    builder.header.effectedBy = {
      leftEdgeSidebar: builder.leftEdgeSidebar,
      rightEdgeSidebar: builder.rightEdgeSidebar,
    };
  }
  if (builder.topHeader) {
    builder.topHeader.effectedBy = {
      leftEdgeSidebar: builder.leftEdgeSidebar,
      rightEdgeSidebar: builder.rightEdgeSidebar,
    };
  }
  if (builder.subheader) {
    builder.subheader.effectedBy = {
      leftEdgeSidebar: builder.leftEdgeSidebar,
      rightEdgeSidebar: builder.rightEdgeSidebar,
    };
  }
  if (builder.leftInsetSidebar) {
    builder.leftInsetSidebar.anchor = "left";
    builder.leftInsetSidebar.effectedBy = {
      header: builder.header,
    };
  }
  if (builder.rightInsetSidebar) {
    builder.rightInsetSidebar.anchor = "right";
    builder.rightInsetSidebar.effectedBy = {
      header: builder.header,
    };
  }

  const ctx = {
    state: { leftEdgeSidebar: leftState, rightEdgeSidebar: rightState },
    builder,
    setOpen,
    setCollapsed,
    toggleLeftSidebarOpen,
    toggleLeftSidebarCollapsed,
    toggleRightSidebarOpen,
    toggleRightSidebarCollapsed,
  };
  return (
    <LayoutContext.Provider value={ctx}>
      {typeof children === "function" ? children(ctx) : children}
    </LayoutContext.Provider>
  );
};
