import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { useEdgeSidebar } from "./useEdgeSidebar";
import { Root } from "../Root/Root";
import { EdgeSidebar } from "./EdgeSidebar";

describe("useEdgeSidebar", () => {
  describe("inside EdgeSidebar", () => {
    it("don't need to provide anchor if used inside EdgeSidebar", () => {
      const { result } = renderHook(() => useEdgeSidebar(), {
        wrapper: (props) => (
          <Root
            scheme={{
              leftEdgeSidebar: {
                config: {
                  md: {
                    variant: "persistent",
                    persistentBehavior: "fit",
                    width: 256,
                  },
                },
              },
            }}
          >
            <EdgeSidebar anchor="left">{props.children}</EdgeSidebar>
          </Root>
        ),
      });
      expect(result.current).toMatchObject({
        open: false,
        collapsed: false,
        setOpen: expect.any(Function),
        setCollapsed: expect.any(Function),
        toggleLeftSidebarOpen: expect.any(Function),
        toggleLeftSidebarCollapsed: expect.any(Function),
      });

      act(() => {
        result.current.toggleLeftSidebarOpen();
      });

      expect(result.current.open).toBe(true);

      act(() => {
        result.current.toggleLeftSidebarCollapsed();
      });

      expect(result.current.collapsed).toBe(true);
    });
  });

  describe("outside EdgeSidebar", () => {
    it('throw error if used outside of EdgeSidebar and does not specified "anchor"', () => {
      const { result } = renderHook(() => useEdgeSidebar(), {
        wrapper: (props) => (
          <Root
            scheme={{
              leftEdgeSidebar: {
                config: {
                  xs: {
                    variant: "persistent",
                    persistentBehavior: "fit",
                    width: 256,
                  },
                },
              },
            }}
          >
            {props.children}
          </Root>
        ),
      });
      expect(result.error?.message).toMatch('Missing "anchor"');
    });

    it("able to call trigger fns", () => {
      const { result } = renderHook(() => useEdgeSidebar({ anchor: "left" }), {
        wrapper: (props) => (
          <Root
            scheme={{
              leftEdgeSidebar: {
                config: {
                  xs: {
                    variant: "persistent",
                    persistentBehavior: "fit",
                    width: 256,
                  },
                },
              },
            }}
          >
            {props.children}
          </Root>
        ),
      });
      act(() => {
        result.current.toggleLeftSidebarOpen();
      });

      expect(result.current.open).toBe(true);

      act(() => {
        result.current.toggleLeftSidebarCollapsed();
      });

      expect(result.current.collapsed).toBe(true);
    });
  });
});
