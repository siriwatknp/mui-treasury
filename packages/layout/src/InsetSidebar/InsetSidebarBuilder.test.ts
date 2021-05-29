import { HeaderBuilder } from "../Header/HeaderBuilder";
import { InsetSidebarBuilder } from "./InsetSidebarBuilder";

describe("InsetSidebarBuilder", () => {
  describe("Root", () => {
    it("provide width and hidden at some breakpoint", () => {
      expect(
        new InsetSidebarBuilder({
          config: {
            sm: {
              position: "fixed",
              width: 200,
            },
            md: {
              position: "fixed",
              width: 256,
            },
          },
        }).getSxRoot()
      ).toEqual({
        display: {
          xs: "none",
          sm: "block",
        },
        width: {
          sm: "200px",
          md: "256px",
        },
      });
    });

    it("hidden some breakpoint", () => {
      expect(
        new InsetSidebarBuilder({
          config: {
            sm: {
              position: "fixed",
              width: 200,
            },
            md: {
              position: "fixed",
              width: 256,
            },
          },
          hidden: ["xs", "sm", "xl"],
        }).getSxRoot()
      ).toEqual({
        display: {
          xs: "none",
          md: "block",
          xl: "none",
        },
        width: {
          sm: "200px",
          md: "256px",
        },
      });
    });

    it("has correct occupied space", () => {
      expect(
        new InsetSidebarBuilder({
          config: {
            md: {
              position: "fixed",
              width: 256,
            },
          },
        }).getOccupiedSpace()
      ).toEqual({
        xs: "0px",
        md: "256px",
      });
    });
  });

  describe("Body", () => {
    it("absolute position involve header", () => {
      const sidebar = new InsetSidebarBuilder({
        config: {
          xs: {
            position: "absolute",
            width: 256,
          },
        },
      });
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "fixed",
            height: 56,
          },
          md: {
            position: "sticky",
            height: 64,
          },
        },
        hidden: ["xl"],
      });
      sidebar.effectedBy = { header };
      expect(sidebar.getSxBody()).toEqual({
        position: "absolute",
        top: 0,
        width: "100%",
        height: {
          xs: "calc(100vh - 56px)",
          md: "calc(100vh - 64px)",
          xl: "100vh",
        },
      });
    });

    it("fixed position", () => {
      const sidebar = new InsetSidebarBuilder({
        config: {
          xs: {
            position: "fixed",
            width: 256,
          },
        },
      });
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "fixed",
            height: 56,
          },
          md: {
            position: "sticky",
            height: 64,
          },
        },
        hidden: ["xl"],
      });
      sidebar.anchor = "left";
      sidebar.effectedBy = { header };
      expect(sidebar.getSxBody()).toEqual({
        position: "fixed",
        top: 0,
        height: "100%",
        width: "initial",
        marginLeft: "-9999px",
        paddingLeft: "9999px",
      });
    });

    it("sticky position", () => {
      const sidebar = new InsetSidebarBuilder({
        config: {
          xs: {
            position: "sticky",
            top: 56,
            width: 256,
          },
          md: {
            position: "sticky",
            top: 64,
            width: 256,
          },
        },
      });
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "fixed",
            height: 56,
          },
          md: {
            position: "sticky",
            height: 64,
          },
        },
        hidden: ["xl"],
      });
      sidebar.effectedBy = { header };
      expect(sidebar.getSxBody()).toEqual({
        position: "sticky",
        height: "initial",
        width: "100%",
        top: {
          xs: 56,
          md: 64,
        },
      });
    });

    it("multiple config", () => {
      const sidebar = new InsetSidebarBuilder({
        config: {
          xs: {
            position: "sticky",
            top: 56,
            width: 256,
          },
          md: {
            position: "fixed",
            width: "30%",
          },
          lg: {
            position: "absolute",
            width: "max(33%, 256px)",
          },
        },
      });
      const header = new HeaderBuilder({
        config: {
          xs: {
            position: "fixed",
            height: 56,
          },
          md: {
            position: "sticky",
            height: 64,
          },
        },
        hidden: ["xl"],
      });
      sidebar.anchor = "right";
      sidebar.effectedBy = { header };
      expect(sidebar.getSxBody()).toEqual({
        position: {
          xs: "sticky",
          md: "fixed",
          lg: "absolute",
        },
        height: {
          xs: "initial",
          md: "100%",
          lg: "calc(100vh - 64px)",
          xl: "100vh",
        },
        width: {
          xs: "100%",
          md: "initial",
          lg: "100%",
        },
        top: {
          xs: 56,
          md: 0,
        },
        marginRight: {
          md: "-9999px",
          lg: "initial",
        },
        paddingRight: {
          md: "9999px",
          lg: "initial",
        },
      });
    });
  });
});
