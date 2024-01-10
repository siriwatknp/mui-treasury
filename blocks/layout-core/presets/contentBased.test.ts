import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { getContentBasedScheme } from "./contentBased";

describe("Content-Based Preset", () => {
  const scheme = getContentBasedScheme();
  const header = new HeaderBuilder(scheme.header);
  const leftEdgeSidebar = new EdgeSidebarBuilder(scheme.leftEdgeSidebar);

  leftEdgeSidebar.effectedBy = { header };
  header.effectedBy = { leftEdgeSidebar };

  beforeEach(() => {
    leftEdgeSidebar.setState({ open: false });
  });
  describe("Sidebar is cloased", () => {
    it("LeftEdgeSidebar", () => {
      expect(leftEdgeSidebar.getOccupiedSpace()).toEqual({
        sm: 0,
      });
    });
    it("Header", () => {
      expect(header.getSxProps()).toEqual({
        position: {
          xs: "relative",
        },
        height: {
          xs: 56,
          md: 64,
        },
        marginLeft: {
          sm: "0px",
          md: "0px",
        },
        width: {
          sm: "100%",
          md: "100%",
        },
      });
    });
  });

  describe("Sidebar is open", () => {
    beforeEach(() => {
      leftEdgeSidebar.setState({ open: true });
    });

    it("LeftEdgeSidebar", () => {
      expect(leftEdgeSidebar.getOccupiedSpace()).toEqual({
        sm: 256,
      });
    });

    it("Header", () => {
      expect(header.getSxProps()).toMatchObject({
        marginLeft: {
          sm: "256px",
        },
        width: {
          sm: "100%",
          md: "100%",
        },
      });
    });
  });
});
