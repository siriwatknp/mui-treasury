import { HeaderBuilder } from "../Header/HeaderBuilder";
import { HeadersCompiler } from "./HeadersCompiler";

describe("HeadersCompiler", () => {
  describe("getClippedHeight", () => {
    const h1 = new HeaderBuilder({
      config: {
        xs: {
          position: "sticky",
          height: 56,
          clipped: true,
        },
      },
    });
    const h2 = new HeaderBuilder({
      config: {
        xs: {
          position: "relative",
          height: 20,
          clipped: true,
        },
      },
    });
    const h3 = new HeaderBuilder({
      config: {
        sm: {
          position: "fixed",
          height: 64,
          clipped: true,
        },
      },
      hidden: ["xs"],
    });
    it("no hidden", () => {
      const compiler = HeadersCompiler([h1, h2]);
      expect(compiler.getClippedHeight("leftEdgeSidebar")).toEqual({
        totalHeight: {
          xs: "calc(56px + 20px)",
        },
        diffHeight: {
          xs: "calc(calc(56px + 20px) - 56px)",
        },
      });
    });

    it("with some hidden", () => {
      const compiler = HeadersCompiler([h1, h2, h3]);
      expect(compiler.getClippedHeight("leftEdgeSidebar")).toEqual({
        totalHeight: {
          xs: "calc(56px + 20px)",
          sm: "calc(56px + 20px + 64px)",
        },
        diffHeight: {
          xs: "calc(calc(56px + 20px) - 56px)",
          sm: "calc(calc(56px + 20px + 64px) - max(56px, 64px))",
        },
      });
    });
  });

  describe("[InsetOffset] getAllHeight", () => {
    const h1 = new HeaderBuilder({
      config: {
        xs: {
          position: "sticky",
          height: 56,
        },
        md: {
          position: "sticky",
          height: 64,
        },
      },
    });
    const h2 = new HeaderBuilder({
      config: {
        xs: {
          position: "relative",
          height: 20,
        },
      },
    });
    const h3 = new HeaderBuilder({
      config: {
        md: {
          position: "sticky",
          height: 48,
          top: 64,
        },
      },
      hidden: ["xs", "sm"],
    });
    it("mixed headers", () => {
      const compiler = HeadersCompiler([h1, h2, h3]);
      expect(compiler.getAllHeight()).toEqual({
        totalHeight: {
          xs: "calc(56px + 20px)",
          md: "calc(64px + 20px + 48px)",
        },
        diffHeight: {
          xs: "calc(calc(56px + 20px) - 56px)",
          md: "calc(calc(64px + 20px + 48px) - max(64px, calc(48px + 64px)))",
        },
      });
    });
  });
});
