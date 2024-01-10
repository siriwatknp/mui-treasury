import { HeaderBuilder } from "../Header/HeaderBuilder";
import { EdgeSidebarBuilder } from "./EdgeSidebarBuilder";

describe("EdgeSidebarBuilder", () => {
  describe("Static", () => {
    it("check flexible persistent (string)", () => {
      expect(EdgeSidebarBuilder.isFlexiblePersistentConfig()).toBe(false);
      expect(
        EdgeSidebarBuilder.isFlexiblePersistentConfig({
          variant: "temporary",
          width: 256,
        })
      ).toBe(false);
      expect(
        EdgeSidebarBuilder.isFlexiblePersistentConfig({
          variant: "permanent",
          width: 256,
        })
      ).toBe(false);
      expect(
        EdgeSidebarBuilder.isFlexiblePersistentConfig({
          variant: "persistent",
          persistentBehavior: "fit",
          width: 256,
        })
      ).toBe(false);
      expect(
        EdgeSidebarBuilder.isFlexiblePersistentConfig({
          variant: "persistent",
          persistentBehavior: "none",
          width: 256,
        })
      ).toBe(false);
      expect(
        EdgeSidebarBuilder.isFlexiblePersistentConfig({
          variant: "persistent",
          persistentBehavior: "flexible",
          width: 256,
        })
      ).toBe(true);
    });
    it("check flexible persistent (object)", () => {
      const config = {
        variant: "persistent",
        persistentBehavior: {
          header: "fit",
          content: "flexible",
        },
        width: 256,
      } as const;
      expect(
        EdgeSidebarBuilder.isFlexiblePersistentConfig(config, "header")
      ).toBe(false);
      expect(
        EdgeSidebarBuilder.isFlexiblePersistentConfig(config, "content")
      ).toBe(true);
      expect(
        EdgeSidebarBuilder.isFlexiblePersistentConfig(config, "footer")
      ).toBe(false);
    });
  });
  describe("OccupiedSpace", () => {
    it("temporary variant on xs", () => {
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          xs: {
            variant: "temporary",
            width: 256,
          },
        },
      });

      expect(edgeSidebar.getOccupiedSpace()).toEqual({});
    });

    it("temporary variant not xs", () => {
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          md: {
            variant: "temporary",
            width: 256,
          },
        },
      });

      expect(edgeSidebar.getOccupiedSpace()).toEqual({});
    });

    it("persistent: uncollasible should remain the same width", () => {
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "persistent",
            persistentBehavior: "fit",
            width: 256,
            collapsedWidth: 80,
          },
        },
      });
      edgeSidebar.setState({
        open: true,
        collapsed: true,
      });
      expect(edgeSidebar.getOccupiedSpace()).toEqual({
        sm: 256,
      });
    });

    it("persistent: sidebar is open with behavior 'none'", () => {
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "persistent",
            width: 256,
            collapsible: true,
            persistentBehavior: "none",
          },
        },
      });

      edgeSidebar.setState({
        open: true,
        collapsed: false,
      });

      expect(edgeSidebar.getOccupiedSpace()).toEqual({ sm: 0 });
    });

    it("persistent: sidebar is open with behavior 'fit'", () => {
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "persistent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
            persistentBehavior: "fit",
          },
        },
      });

      edgeSidebar.setState({
        open: true,
        collapsed: false,
      });

      expect(edgeSidebar.getOccupiedSpace()).toEqual({ sm: 256 });

      edgeSidebar.setState({
        open: true,
        collapsed: true,
      });

      expect(edgeSidebar.getOccupiedSpace()).toEqual({ sm: 80 });
    });

    it("persistent: sidebar is open with behavior 'flexible'", () => {
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "persistent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
            persistentBehavior: "flexible",
          },
        },
      });

      edgeSidebar.setState({
        open: false,
        collapsed: false,
      });

      expect(edgeSidebar.getOccupiedSpace()).toEqual({ sm: 0 });

      edgeSidebar.setState({
        open: true,
        collapsed: false,
      });

      expect(edgeSidebar.getOccupiedSpace()).toEqual({ sm: 256 });
    });

    it("persistent: sidebar is open with behavior as object", () => {
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "persistent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
            persistentBehavior: {
              header: "flexible",
              content: "fit",
              footer: "none",
            },
          },
        },
      });

      edgeSidebar.setState({
        open: true,
        collapsed: false,
      });

      expect(edgeSidebar.getOccupiedSpace("header")).toEqual({ sm: 256 });
      expect(edgeSidebar.getOccupiedSpace("content")).toEqual({ sm: 256 });
      expect(edgeSidebar.getOccupiedSpace("footer")).toEqual({ sm: 0 });
    });

    it("permanent: uncollasible should remain the same width", () => {
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsedWidth: 80,
          },
        },
      });
      edgeSidebar.setState({
        open: false,
        collapsed: true,
      });
      expect(edgeSidebar.getOccupiedSpace()).toEqual({
        sm: 256,
      });
    });

    it("return 0 if hidden", () => {
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          xs: {
            variant: "permanent",
            width: 256,
          },
        },
        hidden: ["sm"],
      });
      expect(edgeSidebar.getOccupiedSpace()).toEqual({
        xs: 256,
        sm: 0,
        md: 256,
      });
    });

    it("permanent", () => {
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
          },
        },
      });

      edgeSidebar.setState({
        open: false,
        collapsed: false,
      });
      expect(edgeSidebar.getOccupiedSpace()).toEqual({ sm: 256 });

      edgeSidebar.setState({
        open: false,
        collapsed: true,
      });
      expect(edgeSidebar.getOccupiedSpace()).toEqual({ sm: 80 });
    });

    it("return occupied space in specified breakpoint", () => {
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          xs: {
            variant: "temporary" as const,
            width: 256,
          },
          sm: {
            variant: "persistent",
            width: 256,
            collapsible: true,
            collapsedWidth: 80,
            persistentBehavior: "fit",
          },
          lg: {
            variant: "permanent",
            width: 296,
            collapsible: true,
            collapsedWidth: 100,
          },
        },
      });

      edgeSidebar.setState({
        open: true,
        collapsed: false,
      });

      expect(edgeSidebar.getOccupiedSpace()).toEqual({
        sm: 256,
        lg: 296,
      });

      edgeSidebar.setState({
        open: true,
        collapsed: true,
      });

      expect(edgeSidebar.getOccupiedSpace()).toEqual({
        sm: 80,
        lg: 100,
      });
    });
  });

  it("return DrawerVariant", () => {
    const edgeSidebar = new EdgeSidebarBuilder({
      config: {
        xs: {
          variant: "temporary",
          width: 256,
        },
        sm: {
          variant: "persistent",
          width: 256,
          persistentBehavior: "none",
        },
        lg: {
          variant: "permanent",
          width: 256,
        },
      },
    });
    expect(edgeSidebar.getDrawerVariant()).toEqual({
      xs: "temporary",
      sm: "persistent",
      lg: "permanent",
    });
  });

  describe("ZIndex", () => {
    it("only one sidebar remain the same zIndex", () => {
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "sticky",
            clipped: true,
            height: 56,
          },
        },
      });
      const edgeSidebar = new EdgeSidebarBuilder({
        config: {
          xs: {
            variant: "permanent",
            width: 80,
          },
        },
      });
      edgeSidebar.id = "leftEdgeSidebar";
      edgeSidebar.effectedBy = {
        header,
      };
      header.effectedBy = {
        leftEdgeSidebar: edgeSidebar,
      };
      expect(edgeSidebar.getZIndex()).toEqual({
        xs: 1200,
      });
    });
  });

  it("unclipped left but clipped right affected zIndex", () => {
    const header = new HeaderBuilder({
      config: {
        xs: {
          position: "sticky",
          height: 56,
          clipped: {
            rightEdgeSidebar: true,
          },
        },
        md: {
          position: "sticky",
          height: 64,
          clipped: {
            leftEdgeSidebar: true,
          },
        },
      },
    });
    const leftEdgeSidebar = new EdgeSidebarBuilder({
      config: {
        xs: {
          variant: "permanent",
          width: 80,
        },
      },
    });
    const rightEdgeSidebar = new EdgeSidebarBuilder({
      config: {
        xs: {
          variant: "permanent",
          width: 80,
        },
      },
    });

    // Order of mutating data does not matter
    leftEdgeSidebar.id = "leftEdgeSidebar";
    rightEdgeSidebar.id = "rightEdgeSidebar";

    header.effectedBy = {
      leftEdgeSidebar,
      rightEdgeSidebar,
    };

    leftEdgeSidebar.effectedBy = {
      header,
    };
    rightEdgeSidebar.effectedBy = { header };

    expect(leftEdgeSidebar.getZIndex()).toEqual({
      xs: 1220,
      md: 1200,
    });
    expect(rightEdgeSidebar.getZIndex()).toEqual({
      xs: 1200,
      md: 1220,
    });
  });

  it("return sxProps for component", () => {
    const edgeSidebar = new EdgeSidebarBuilder({
      config: {
        xs: {
          variant: "temporary",
          width: 256,
        },
        sm: {
          variant: "persistent",
          width: 256,
          persistentBehavior: "none",
        },
        lg: {
          variant: "permanent",
          width: 296,
          collapsible: true,
          collapsedWidth: 80,
        },
      },
    });

    expect(edgeSidebar.getSxProps()).toEqual({
      width: {
        xs: 256,
        lg: 296,
      },
      zIndex: {},
    });

    edgeSidebar.setState({ open: false, collapsed: true });
    expect(edgeSidebar.getSxProps()).toEqual({
      width: {
        xs: 256,
        lg: 80,
      },
      zIndex: {},
    });
  });

  describe("EdgeTrigger", () => {
    it("provide display none if not collapsible config", () => {
      const sidebar = new EdgeSidebarBuilder({
        config: {
          xs: {
            variant: "temporary",
            width: 256,
          },
          sm: {
            variant: "persistent",
            width: 256,
            persistentBehavior: "flexible",
          },
        },
      });

      expect(sidebar.getEdgeTriggerSxDisplay({ field: "collapsed" })).toEqual({
        xs: "none",
      });
    });

    it("provide display if for collapsible config", () => {
      const sidebar = new EdgeSidebarBuilder({
        config: {
          sm: {
            variant: "permanent",
            width: 256,
            collapsible: true,
            collapsedWidth: 64,
          },
        },
      });

      expect(sidebar.getEdgeTriggerSxDisplay({ field: "collapsed" })).toEqual({
        xs: "none",
        sm: "inline-flex",
      });
    });
  });
});
