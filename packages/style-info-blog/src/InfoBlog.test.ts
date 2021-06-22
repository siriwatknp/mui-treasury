import { runStyleTests } from "test/runTestSuite";
import {
  getInfoBlogStyles,
  getInfoBlogTheme,
  getInfoBlogVariant,
} from "./InfoBlog.styles";

describe("style-info-blog", () => {
  runStyleTests({
    getStyles: getInfoBlogStyles,
    getTheme: getInfoBlogTheme,
    getVariant: getInfoBlogVariant,
    componentName: "JunInfo",
    slots: ["eyebrow", "head", "body"],
    variantProps: { variant: "blog" },
  });
});
