import { useScreen } from "./useScreen";
import { useLayoutCtx } from "../Root/Root";
import { useScrollY } from "./useScrollY";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { HeadersCompiler } from "../MultiHeaders/HeadersCompiler";

// todo write test
export const useInsetHeaderMagnet = (disabled?: boolean) => {
  // this hook will run only for <InsetSidebar position="fixed" />
  const { builder } = useLayoutCtx();
  const screen = useScreen();

  // dont't calculate scrollY if not magnet for performance
  const scrollY = useScrollY(disabled);

  if (disabled) return { marginTop: "" };

  const offset = HeadersCompiler([
    builder.header,
    builder.topHeader,
    builder.subheader,
  ]).getAllHeight().diffHeight;

  const maxOffset =
    offset && screen ? pickNearestBreakpoint(offset, screen) : 0;

  return {
    marginTop: `max(-${scrollY ?? 0}px, calc(-1 * ${maxOffset}))`,
  }; // inline style
};
