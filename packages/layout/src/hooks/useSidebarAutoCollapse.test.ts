import { renderHook } from "@testing-library/react-hooks";
import { mocked } from "ts-jest/utils";
import { Root, useLayoutCtx } from "../Root/Root";
import { EDGE_SIDEBAR_ID } from "../utils/constant";
import { useScreen } from "./useScreen";
import { useSidebarAutoCollapse } from "./useSidebarAutoCollapse";

jest.mock("./useScreen");

const hook = (id: EDGE_SIDEBAR_ID) => {
  useSidebarAutoCollapse(id);
  return useLayoutCtx();
};

describe("useSidebarAutoCollapse", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("do nothing if autoCollapse is not specified", () => {
    mocked(useScreen).mockReturnValue(undefined);
    const { result } = renderHook(() => hook("leftEdgeSidebar"), {
      wrapper: Root,
      initialProps: {
        scheme: {
          leftEdgeSidebar: {
            config: {
              md: {
                variant: "permanent" as const,
                width: 256,
                collapsible: true,
                collapsedWidth: 80,
              },
            },
            autoCollapse: undefined,
          },
        },
      },
    });

    expect(result.current.state?.leftEdgeSidebar?.collapsed).toEqual(false);
  });

  it("Sidebar is collapsed if fall down to target breakpoint", () => {
    mocked(useScreen).mockReturnValue("lg");
    const { result, rerender } = renderHook(() => hook("leftEdgeSidebar"), {
      wrapper: Root,
      initialProps: {
        scheme: {
          leftEdgeSidebar: {
            config: {
              md: {
                variant: "permanent" as const,
                width: 256,
                collapsible: true,
                collapsedWidth: 80,
              },
            },
            autoCollapse: "md" as const,
          },
        },
      },
    });

    expect(result.current.state?.leftEdgeSidebar?.collapsed).toEqual(false);

    mocked(useScreen).mockReturnValue("md");
    rerender();
    expect(result.current.state?.leftEdgeSidebar?.collapsed).toEqual(true);
  });

  it("Sidebar is uncollapsed if go up beyond target breakpoint", () => {
    mocked(useScreen).mockReturnValue("sm");
    const { result, rerender } = renderHook(() => hook("leftEdgeSidebar"), {
      wrapper: Root,
      initialProps: {
        scheme: {
          leftEdgeSidebar: {
            config: {
              md: {
                variant: "permanent" as const,
                width: 256,
                collapsible: true,
                collapsedWidth: 80,
              },
            },
            autoCollapse: "md" as const,
          },
        },
        initialState: { leftEdgeSidebar: { collapsed: true } },
      },
    });

    expect(result.current.state?.leftEdgeSidebar?.collapsed).toEqual(true);

    mocked(useScreen).mockReturnValue("xl");
    rerender();
    expect(result.current.state?.leftEdgeSidebar?.collapsed).toEqual(false);
  });
});
