import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import {
  SocialLink,
  SocialLinkProps,
} from "@mui-treasury/component-social-link";
import * as Icons from "@mui-treasury/component-social-link/icons";

const { FacebookCircle, FacebookSquare } = Icons;

export default {
  title: "Component/SocialLink",
  component: SocialLink,
  argTypes: {},
  args: {
    href: "https://www.facebook.com/siriwat.kunaporn",
    "aria-label": "Link to siriwat's facebook",
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const RoutingLink = ({
  className,
  to,
  children,
}: {
  to: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <a className={className} href={to} data-name="some-library">
    {children}
  </a>
);

export const Link: Story<SocialLinkProps> = (args) => {
  return (
    <Box>
      <SocialLink {...args}>
        <FacebookCircle />
      </SocialLink>
      <SocialLink component={RoutingLink} to={args.href!} {...args}>
        <FacebookSquare />
      </SocialLink>
    </Box>
  );
};

export const AllSvgs: Story<SvgIconProps> = (args) => {
  return (
    <Container>
      <Box
        sx={{
          py: 3,
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        }}
      >
        {Object.entries(Icons as { [k: string]: React.ElementType }).map(
          ([name, IconComponent]) => (
            <Box
              sx={{
                borderRadius: 1,
                transition: "0.2s",
                // TODO implement copy name
                // "&:hover": {
                //   boxShadow: "0 0 0 1px rgba(0,0,0,0.12)",
                // },
              }}
            >
              <Box
                sx={{
                  minHeight: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconComponent {...args} />
              </Box>
              <Typography variant="body2" align="center" gutterBottom>
                {name}
              </Typography>
            </Box>
          )
        )}
      </Box>
    </Container>
  );
};
AllSvgs.parameters = {
  layout: "fullscreen",
};
