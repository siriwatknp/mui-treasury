import each from "jest-each";
import { act, renderHook } from "@testing-library/react-hooks";
import { Root, useLayoutCtx } from "./Root";

describe("Root", () => {
  const setupParams = {
    wrapper: Root,
    initialProps: {
      scheme: {
        leftEdgeSidebar: {
          config: {
            xs: { variant: "temporary" as const, width: 256 },
          },
        },
      },
    },
  };

  it("has initial state", () => {
    const { result } = renderHook(useLayoutCtx, setupParams);
    expect(result.current.state).toEqual({
      leftEdgeSidebar: {
        collapsed: false,
        open: false,
      },
      rightEdgeSidebar: {},
    });
  });

  it("able to merge initial state", () => {
    const { result } = renderHook(useLayoutCtx, setupParams);
    expect(result.current.state).toEqual({
      leftEdgeSidebar: {
        collapsed: false,
        open: false,
      },
      rightEdgeSidebar: {},
    });
  });

  each([
    ["setOpen", "open"],
    ["setCollapsed", "collapsed"],
  ]).it(
    "setter: %s works",
    (setterName: "setOpen" | "setCollapsed", fieldName) => {
      const { result } = renderHook(useLayoutCtx, setupParams);

      act(() => {
        result.current[setterName]("leftEdgeSidebar", true);
      });

      expect(result.current.state.leftEdgeSidebar).toMatchObject({
        [fieldName]: true,
      });

      act(() => {
        result.current[setterName]("leftEdgeSidebar", false);
      });

      expect(result.current.state.leftEdgeSidebar).toMatchObject({
        [fieldName]: false,
      });
    }
  );

  each([
    ["toggleLeftSidebarOpen", "leftEdgeSidebar", "open"],
    ["toggleLeftSidebarCollapsed", "leftEdgeSidebar", "collapsed"],
    ["toggleRightSidebarOpen", "rightEdgeSidebar", "open"],
    ["toggleRightSidebarCollapsed", "rightEdgeSidebar", "collapsed"],
  ]).it(
    "toggle: %s works",
    (
      setterName: "toggleLeftSidebarOpen",
      sidebarName: "leftEdgeSidebar" | "rightEdgeSidebar",
      fieldName
    ) => {
      const { result } = renderHook(useLayoutCtx, {
        wrapper: Root,
        initialProps: {
          scheme: {
            leftEdgeSidebar: {
              config: {
                xs: { variant: "temporary" as const, width: 256 },
              },
            },
            rightEdgeSidebar: {
              config: {
                xs: { variant: "temporary" as const, width: 256 },
              },
            },
          },
        },
      });

      act(() => {
        result.current[setterName]();
      });

      expect(result.current.state[sidebarName]).toMatchObject({
        [fieldName]: true,
      });

      act(() => {
        result.current[setterName]();
      });

      expect(result.current.state[sidebarName]).toMatchObject({
        [fieldName]: false,
      });
    }
  );
});
