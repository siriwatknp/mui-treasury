import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

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
