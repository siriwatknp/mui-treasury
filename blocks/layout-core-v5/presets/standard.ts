import { Scheme } from "../Root/Root";

export const getStandardScheme = (): Required<
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
        clipped: true,
      },
    },
  },
  leftEdgeSidebar: {
    autoCollapse: "sm",
    config: {
      xs: {
        variant: "temporary",
        width: 256,
      },
      sm: {
        variant: "permanent",
        width: 256,
        collapsible: true,
        collapsedWidth: 64,
        headerMagnetEnabled: true,
      },
    },
  },
});
