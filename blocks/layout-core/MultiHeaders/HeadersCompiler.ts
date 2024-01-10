import { Breakpoint } from "@mui/system";
import {
  ClippableElement,
  HeaderBuilder,
  HeaderConfig,
} from "../Header/HeaderBuilder";
import { BREAKPOINT_KEYS } from "../utils/muiBreakpoints";
import { pickNearestBreakpoint } from "../utils/pickNearestBreakpoint";
import { Responsive } from "../utils/types";
import { StackedHeaders } from "./StackedHeaders";

export const HeadersCompiler = (headers: (HeaderBuilder | undefined)[]) => {
  const validHeaders = headers.filter(
    (h) => !!h
  ) as NonNullable<HeaderBuilder>[];

  function getResult(
    modifyConfigAtBreakpoint?: (
      bp: Breakpoint,
      builder: HeaderBuilder,
      config: HeaderConfig
    ) => HeaderConfig
  ) {
    const result: {
      totalHeight: Responsive<string | number>;
      diffHeight: Responsive<string | number>;
    } = {
      totalHeight: {},
      diffHeight: {},
    };
    let prevHidden: boolean[] = Array(validHeaders.length).fill(false); // keep track of hidden in previous breakpoint
    for (const bp of BREAKPOINT_KEYS) {
      const configs: HeaderConfig[] = [];
      let shouldCalculate = false;

      shouldCalculate = prevHidden.some((bool) => !!bool);

      validHeaders.forEach((builder) => {
        if (builder.config[bp]) {
          shouldCalculate = true;
        }
      });

      if (shouldCalculate) {
        validHeaders.forEach((builder, index) => {
          let breakpointConfig = pickNearestBreakpoint(builder.config, bp);

          if (builder.isHidden(bp)) {
            prevHidden[index] = true;
            if (breakpointConfig) {
              configs.push({ ...breakpointConfig, height: 0 });
            }
          } else {
            if (prevHidden[index]) {
              prevHidden[index] = false;
            }
            if (breakpointConfig) {
              configs.push(
                modifyConfigAtBreakpoint
                  ? modifyConfigAtBreakpoint(bp, builder, breakpointConfig)
                  : breakpointConfig
              );
            }
          }
        });
      }

      if (configs.length) {
        const { totalHeight, diffHeight } = StackedHeaders(configs);
        if (pickNearestBreakpoint(result.totalHeight, bp) !== totalHeight) {
          result.totalHeight[bp] = totalHeight;
        }
        if (pickNearestBreakpoint(result.diffHeight, bp) !== diffHeight) {
          result.diffHeight[bp] = diffHeight;
        }
      }
    }
    return result;
  }
  return {
    getClippedHeight(sidebarId: ClippableElement) {
      // for EdgeSidebarOffset
      return getResult((bp, builder, config) => {
        return {
          ...config,
          ...(!builder.isClipped(sidebarId, bp) && { height: 0 }),
        };
      });
    },
    getAllHeight() {
      // for InsetSidebarOffset
      return getResult();
    },
  };
};
