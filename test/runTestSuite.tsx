import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, createTheme, Theme } from "@material-ui/core/styles";

const theme = createTheme();

export const runComponentStylingTests = (
  element: React.ReactElement,
  options: {
    slots: Array<string>;
    getHTMLSlots: () => Array<HTMLElement>;
    componentName: string;
    classes: any;
    variantProps: Record<string, string | number>;
  }
) => {
  const { slots, getHTMLSlots, componentName, classes, variantProps } = options;
  const getStyles = (color: string = "tomato") =>
    slots.reduce((result, key) => ({ ...result, [key]: { color } }), {});
  describe("Component Styling", () => {
    it("has public className", () => {
      const { container } = render(React.cloneElement(element));
      slots.forEach((slot) => {
        expect(
          container.querySelector(`.${componentName}-${slot}`)
        ).toBeInTheDocument();
      });
    });

    it("able to receive sx as function and spread to nested components", () => {
      render(React.cloneElement(element, { useStyles: () => getStyles() }));

      getHTMLSlots().forEach((html) => {
        expect(html).toHaveStyle({ color: "tomato" });
      });
    });

    it("works with theme overrides", () => {
      render(
        <ThemeProvider
          theme={createTheme({
            components: {
              [componentName]: {
                styleOverrides: getStyles("cornsilk"),
              },
            },
          })}
        >
          {element}
        </ThemeProvider>
      );

      getHTMLSlots().forEach((html) => {
        expect(html).toHaveStyle({ color: "cornsilk" });
      });
    });

    it("allow custom variant", () => {
      const style = Object.entries(classes).reduce(
        (result, [key, className]) => ({
          ...result,
          ...(key === "root"
            ? { color: "chocolate" }
            : { [`& .${className}`]: { color: "chocolate" } }),
        }),
        {}
      );
      render(
        <ThemeProvider
          theme={createTheme({
            components: {
              [componentName]: {
                variants: [
                  {
                    props: variantProps,
                    style,
                  },
                ],
              },
            },
          })}
        >
          {React.cloneElement(element, variantProps)}
        </ThemeProvider>
      );

      getHTMLSlots().forEach((html) => {
        expect(html).toHaveStyle({ color: "chocolate" });
      });
    });
  });
};

export const runStyleTests = ({
  getStyles,
  getTheme,
  getVariant,
  slots,
  componentName,
  variantProps,
}: {
  getStyles?: (theme: Theme) => any;
  getTheme?: (theme: Theme) => any;
  getVariant?: (theme: Theme) => any;
  slots: Array<string>;
  componentName: string;
  variantProps: Record<string, unknown>;
}) => {
  if (getStyles) {
    it("should return correct styles", () => {
      const styles = getStyles(theme);
      slots.forEach((slot) => {
        expect(Object.keys(styles).includes(slot)).toBeTruthy();
      });
    });
  }

  if (getTheme) {
    it("should return correct theme", () => {
      if (!componentName) {
        throw new Error("missing `componentName` in runStyleTests options");
      }
      const styles = getTheme(theme);
      if (!styles[componentName]) {
        throw new Error("please change `componentName` again");
      }
      slots.forEach((slot) => {
        expect(
          Object.keys(styles[componentName].styleOverrides).includes(slot)
        ).toBeTruthy();
      });
    });
  }

  if (getVariant) {
    it("should return correct variant", () => {
      const result = getVariant(theme);
      expect(result).toMatchObject({
        props: variantProps,
      });

      slots.forEach((slot) => {
        if (slot !== "root") {
          expect(result).toMatchObject({
            style: expect.objectContaining({
              [`& .${componentName}-${slot}`]: expect.anything(),
            }),
          });
        }
      });
    });
  }
};
