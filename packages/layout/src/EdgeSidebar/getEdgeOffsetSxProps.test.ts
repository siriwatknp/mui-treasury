import { HeaderBuilder } from "../Header/HeaderBuilder";
import { EdgeSidebarBuilder } from "./EdgeSidebarBuilder";
import { getEdgeOffsetSxProps } from "./getEdgeOffsetSxProps";

describe("getEdgeOffsetSxProps", () => {
  it("return empty if no header", () => {
    const sidebar = new EdgeSidebarBuilder({
      config: {
        md: {
          variant: "permanent",
          width: 256,
        },
      },
    });
    const result = getEdgeOffsetSxProps(sidebar, {});
    expect(result).toEqual({});
  });

  it("return correct offset height", () => {
    const edgeSidebar = new EdgeSidebarBuilder({
      config: {
        sm: {
          variant: "permanent",
          width: 256,
        },
      },
    });
    edgeSidebar.id = "leftEdgeSidebar";
    const result = getEdgeOffsetSxProps(edgeSidebar, { xs: "56px" });
    expect(result).toEqual({
      height: {
        xs: "56px",
        sm: "56px",
      },
    });
  });

  it("only has height if clipped", () => {
    const edgeSidebar = new EdgeSidebarBuilder({
      config: {
        sm: {
          variant: "permanent",
          width: 256,
        },
        lg: {
          variant: "persistent",
          width: 256,
          persistentBehavior: "fit",
        },
      },
    });
    edgeSidebar.id = "leftEdgeSidebar";

    const result = getEdgeOffsetSxProps(edgeSidebar, {
      xs: "56px",
      md: "0px",
      lg: "64px",
    });
    expect(result).toEqual({
      height: {
        xs: "56px",
        sm: "56px",
        md: "0px",
        lg: "64px",
      },
    });
  });

  it("clipped height is beyond sidebar config", () => {
    const edgeSidebar = new EdgeSidebarBuilder({
      config: {
        sm: {
          variant: "permanent",
          width: 256,
        },
      },
    });
    edgeSidebar.id = "leftEdgeSidebar";
    const result = getEdgeOffsetSxProps(edgeSidebar, {
      md: "0px",
    });
    expect(result).toEqual({
      height: { sm: 0, md: "0px" },
    });
  });
});
