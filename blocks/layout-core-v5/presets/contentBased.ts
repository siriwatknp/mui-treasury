import { Scheme } from "../Root/Root";

export const getContentBasedScheme = (): Required<
  Pick<Scheme, "header" | "leftEdgeSidebar">
> => ({
  header: {
    config: {
      xs: {
        position: "relative",
        height: 56,
      },
      md: {
        position: "relative",
        height: 64,
      },
    },
  },
  leftEdgeSidebar: {
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
  },
});
