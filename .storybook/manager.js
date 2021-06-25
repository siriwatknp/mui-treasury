import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  fontBase:
    '-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
});

addons.setConfig({
  theme,
});
