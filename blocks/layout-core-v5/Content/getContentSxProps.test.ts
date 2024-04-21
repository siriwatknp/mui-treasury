import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { getContentSxProps } from "./getContentSxProps";

describe("getContentSxProps", () => {
  it("return empty if no edgeSidebar provided", () => {
    expect(getContentSxProps({})).toEqual({
      marginLeft: {},
      marginRight: {},
      width: {},
    });
  });
  describe("Width", () => {
    it("only leftEdgeSidebar", () => {
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });
      expect(getContentSxProps({ leftEdgeSidebar })).toMatchObject({
        width: { sm: "calc(100% - 256px)" },
      });
    });

    it("edgeSidebar persistent: flexible has no effect on width", () => {
      const config = {
        sm: {
          variant: "persistent",
          persistentBehavior: "flexible",
          width: 256,
          collapsible: true,
          collapsedWidth: 80,
        },
      } as const;
      const leftEdgeSidebar = new EdgeSidebarBuilder({ config });
      leftEdgeSidebar.setState({ open: true });
      expect(getContentSxProps({ leftEdgeSidebar })).toMatchObject({
        width: { sm: "100%" },
      });

      const rightEdgeSidebar = new EdgeSidebarBuilder({ config });
      rightEdgeSidebar.setState({ open: true });
      expect(getContentSxProps({ rightEdgeSidebar })).toMatchObject({
        width: { sm: "100%" },
      });
    });

    it("multiple edgeSidebars", () => {
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });

      const rightEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 80,
            collapsible: false,
          },
        },
      });

      expect(
        getContentSxProps({ leftEdgeSidebar, rightEdgeSidebar })
      ).toMatchObject({
        width: { sm: "calc(100% - (256px + 80px))" },
      });
    });

    it("EdgeSidebar hidden in some breakpoint", () => {
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          xs: {
            variant: "temporary",
            width: 256,
          },
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: false,
          },
          lg: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
        hidden: ["md"],
      });
      expect(getContentSxProps({ leftEdgeSidebar })).toMatchObject({
        width: {
          sm: "calc(100% - 256px)",
          md: "100%",
          lg: "calc(100% - 256px)",
        },
      });
    });

    it("left & right edgeSidebars", () => {
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
          lg: {
            variant: "permanent",
            width: 296,
            collapsible: true,
            collapsedWidth: 100,
          },
        },
      });

      const rightEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 80,
            collapsible: false,
          },
        },
      });
      expect(
        getContentSxProps({ leftEdgeSidebar, rightEdgeSidebar })
      ).toMatchObject({
        width: {
          sm: "calc(100% - (256px + 80px))",
          lg: "calc(100% - (296px + 80px))",
        },
      });

      leftEdgeSidebar.setState({ open: true, collapsed: true });
      expect(
        getContentSxProps({ leftEdgeSidebar, rightEdgeSidebar })
      ).toMatchObject({
        width: {
          sm: "calc(100% - (80px + 80px))",
          lg: "calc(100% - (100px + 80px))",
        },
      });
    });
  });

  describe("Margin", () => {
    it("should have margin on the left", () => {
      const leftEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });
      leftEdgeSidebar.setState({ open: true, collapsed: false });
      expect(getContentSxProps({ leftEdgeSidebar })).toMatchObject({
        marginLeft: { sm: "256px" },
      });
    });

    it("should have margin on the right", () => {
      const rightEdgeSidebar = new EdgeSidebarBuilder({
        config: {
          lg: {
            variant: "permanent",
            width: 296,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });
      rightEdgeSidebar.setState({ open: true, collapsed: false });
      expect(getContentSxProps({ rightEdgeSidebar })).toMatchObject({
        marginRight: { lg: "296px" },
      });
    });
  });
});
