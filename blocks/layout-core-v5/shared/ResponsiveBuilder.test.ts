import { getStandardScheme } from "../presets/standard";
import { ResponsiveBuilder } from "./ResponsiveBuilder";

describe("ResponsiveBuilder", () => {
  describe("generateSxWithHidden [not strict]", () => {
    it("without hidden", () => {
      const builder = new ResponsiveBuilder({
        config: {
          xs: { height: 100 },
          lg: { height: 40 },
        },
      });
      const result = builder.generateSxWithHidden({
        assignValue: (breakpointConfig) => breakpointConfig?.height,
      });
      expect(result).toEqual({ xs: 100, lg: 40 });
    });

    it("undefined value will not be added to the result", () => {
      const builder = new ResponsiveBuilder({
        config: {
          xs: { height: 100 },
          lg: { height: 40 },
        },
      });
      const result = builder.generateSxWithHidden({
        assignValue: (breakpointConfig) =>
          breakpointConfig.height > 80 ? breakpointConfig.height : undefined,
      });
      expect(result).toEqual({ xs: 100 });
    });
    it("use nearest config for the next unhidden breakpoint", () => {
      const builder = new ResponsiveBuilder({
        config: {
          xs: { height: 100 },
          lg: { height: 40 },
        },
        hidden: ["sm"],
      });
      const result = builder.generateSxWithHidden({
        assignValue: (breakpointConfig) => breakpointConfig?.height,
        hiddenValue: 0,
      });

      expect(result).toEqual({
        xs: 100,
        sm: 0,
        md: 100,
        lg: 40,
      });
    });

    it("hidden is true", () => {
      const builder = new ResponsiveBuilder({
        config: {
          xs: { height: 100 },
          lg: { height: 40 },
        },
        hidden: true,
      });
      const result = builder.generateSxWithHidden({
        assignValue: (breakpointConfig) => breakpointConfig?.height,
        hiddenValue: 0,
      });
      expect(result).toEqual({ xs: 0 });
    });

    it("hidden on multiple breakpoints", () => {
      const builder = new ResponsiveBuilder({
        config: {
          xs: { height: 100 },
          sm: { height: 64 },
          lg: { height: 40 },
        },
        hidden: ["sm", "xl"],
      });
      const result = builder.generateSxWithHidden({
        assignValue: (breakpointConfig) => breakpointConfig?.height,
        hiddenValue: 0,
      });

      expect(result).toEqual({ xs: 100, sm: 0, md: 64, lg: 40, xl: 0 });
    });
  });

  describe("generateSxWithHidden [strict]", () => {
    it("config start at md", () => {
      const builder = new ResponsiveBuilder({
        config: {
          md: { height: 64 },
          lg: { height: 40 },
        },
        hidden: ["sm", "xl"],
      });
      const result = builder.generateSxWithHidden({
        assignValue: (breakpointConfig) => breakpointConfig?.height,
        hiddenValue: 0,
        strict: true,
      });
      expect(result).toEqual({ xs: 0, md: 64, lg: 40, xl: 0 });
    });

    it("use assign value", () => {
      const builder = new ResponsiveBuilder({
        config: {
          xs: { variant: "temporary" },
          sm: { variant: "persistent" },
          lg: { variant: "permanent" },
        },
      });
      const result = builder.generateSxWithHidden({
        assignValue: (breakpointConfig) => {
          if (breakpointConfig.variant === "permanent") {
            return "none";
          } else {
            return "inline-flex";
          }
        },
        hiddenValue: "none",
        strict: true,
      });
      expect(result).toEqual({ xs: "inline-flex", lg: "none" });
    });
  });
  describe("getSxDisplay", () => {
    it("config start at xs", () => {
      const builder = new ResponsiveBuilder({
        config: {
          xs: "anything",
          lg: "anything",
        },
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "block",
      });
    });
    it("config start at md", () => {
      const builder = new ResponsiveBuilder({
        config: {
          md: "anything",
          xl: "anything",
        },
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "none",
        md: "block",
      });
    });

    it("hidden all", () => {
      const builder = new ResponsiveBuilder({
        config: {
          md: "anything",
          xl: "anything",
        },
        hidden: true,
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "none",
      });
    });

    it("hidden some", () => {
      const builder = new ResponsiveBuilder({
        config: {
          md: "anything",
          xl: "anything",
        },
        hidden: ["lg"],
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "none",
        md: "block",
        lg: "none",
        xl: "block",
      });
    });

    it("hidden on valid breakpoint", () => {
      const builder = new ResponsiveBuilder({
        config: {
          md: "anything",
          xl: "anything",
        },
        hidden: ["md"],
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "none",
        lg: "block",
      });
    });

    it("hidden between valid breakpoint", () => {
      const builder = new ResponsiveBuilder({
        config: {
          md: "anything",
          xl: "anything",
        },
        hidden: ["sm", "lg"],
      });
      expect(builder.getSxDisplay("block")).toEqual({
        xs: "none",
        md: "block",
        lg: "none",
        xl: "block",
      });
    });
  });

  describe("Presets", () => {
    it("standard", () => {
      const scheme = getStandardScheme();
      const builder = new ResponsiveBuilder(scheme.header);
      expect(builder.mergeBreakpoints({ sm: 256 })).toEqual(["sm", "md"]);
    });
  });
});
