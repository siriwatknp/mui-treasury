import { Scheme } from "../Root/Root";

export const getFixedScheme = (): Required<
  Pick<Scheme, "header" | "leftEdgeSidebar">
> => ({
  header: {
    config: {
      xs: {
        position: "sticky",
        height: 56,
      },
      md: {
        position: "relative",
        height: 64,
      },
    },
  },
  leftEdgeSidebar: {
    autoCollapse: "md",
    config: {
      xs: {
        variant: "temporary",
        width: 256,
      },
      md: {
        variant: "permanent",
        width: 256,
        collapsible: true,
        collapsedWidth: 64,
      },
    },
  },
});
