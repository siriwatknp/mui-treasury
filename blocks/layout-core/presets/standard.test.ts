import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { getStandardScheme } from "./standard";

describe("Standard Preset", () => {
  const scheme = getStandardScheme();
  const header = new HeaderBuilder(scheme.header);
  const leftEdgeSidebar = new EdgeSidebarBuilder(scheme.leftEdgeSidebar);

  leftEdgeSidebar.effectedBy = { header };
  header.effectedBy = { leftEdgeSidebar };

  beforeEach(() => {
    leftEdgeSidebar.setState({ open: false });
  });
  it("LeftEdgeSidebar", () => {
    expect(leftEdgeSidebar.getOccupiedSpace()).toEqual({
      sm: 256,
    });
  });
  it("Header", () => {
    expect(header.getSxProps()).toEqual({
      position: {
        xs: "sticky",
        md: "relative",
      },
      height: {
        xs: 56,
        md: 64,
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
