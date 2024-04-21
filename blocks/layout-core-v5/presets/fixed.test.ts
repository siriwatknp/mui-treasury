import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { HeaderBuilder } from "../Header/HeaderBuilder";
import { getFixedScheme } from "./fixed";

describe("Fixed Preset", () => {
  const scheme = getFixedScheme();
  const header = new HeaderBuilder(scheme.header);
  const leftEdgeSidebar = new EdgeSidebarBuilder(scheme.leftEdgeSidebar);

  leftEdgeSidebar.effectedBy = { header };
  header.effectedBy = { leftEdgeSidebar };

  beforeEach(() => {
    leftEdgeSidebar.setState({ open: false });
  });
  it("LeftEdgeSidebar", () => {
    expect(leftEdgeSidebar.getOccupiedSpace()).toEqual({
      md: 256,
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
        md: "256px",
      },
      width: {
        md: "calc(100% - 256px)",
      },
    });
  });
});
