import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { getCozyScheme } from "./cozy";

describe("Standard Preset", () => {
  const scheme = getCozyScheme();
  const header = new HeaderBuilder(scheme.header);
  const leftEdgeSidebar = new EdgeSidebarBuilder(scheme.leftEdgeSidebar);

  leftEdgeSidebar.effectedBy = { header };
  header.effectedBy = { leftEdgeSidebar };

  describe("Uncollapsed Sidebar", () => {
    beforeEach(() => {
      leftEdgeSidebar.setState({ collapsed: false });
    });
    it("LeftEdgeSidebar", () => {
      expect(leftEdgeSidebar.getOccupiedSpace()).toEqual({
        sm: 256,
      });
    });
    it("Header", () => {
      expect(header.getSxProps()).toEqual({
        position: {
          xs: "fixed",
        },
        height: {
          xs: 56,
          sm: 64,
        },
        marginLeft: {
          sm: "256px",
          md: "0px", // because of clipped
        },
        width: {
          sm: "calc(100% - 256px)",
          md: "100%", // because of clipped
        },
        zIndex: {
          md: 1210, // because of clipped
        },
      });
    });
  });
});
