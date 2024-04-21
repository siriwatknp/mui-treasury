import { HeaderConfig } from "../Header/HeaderBuilder";
import { plusCalc, subtractCalc } from "../utils/calc";

function getMaxFloatHeight(configs: HeaderConfig[]) {
  if (!configs.length) return 0;
  if (configs.length === 1) return plusCalc(configs[0].height, configs[0].top);
  return `max(${configs.map((c) => plusCalc(c.height, c.top)).join(", ")})`;
}

function sumHeight(configs: HeaderConfig[]) {
  if (!configs.length) return 0;
  return plusCalc(...configs.map((c) => c.height));
}

export const StackedHeaders = (configs: (HeaderConfig | undefined)[]) => {
  const nonRelativeConfigs: HeaderConfig[] = [];

  configs.forEach((c) => {
    if (!!c && c.position !== "relative") {
      nonRelativeConfigs.push(c);
    }
  });

  const maxNonRelativeHeight = getMaxFloatHeight(nonRelativeConfigs);

  const totalHeight = sumHeight(
    configs.filter((c) => !!c) as NonNullable<HeaderConfig>[]
  ); // for offset height
  const diffHeight = subtractCalc(totalHeight, maxNonRelativeHeight); // for -marginTop
  return {
    totalHeight,
    diffHeight,
  };
};
