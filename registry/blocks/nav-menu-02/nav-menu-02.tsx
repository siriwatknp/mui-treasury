"use client";
import * as React from "react";
import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
import Box, { BoxProps } from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from "@mui/icons-material/Event";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GroupsIcon from "@mui/icons-material/Groups";

function Content(props: BoxProps) {
  return (
    <Box
      sx={{
        transition:
          "opacity calc(var(--duration) * 0.5) ease, transform var(--duration) var(--easing)",
        padding: 1,
        width: "calc(100vw - 40px)",
        height: "100%",
        "@media (min-width: 500px)": {
          width: "max-content",
          minWidth: "400px",
        },
        "&[data-starting-style], &[data-ending-style]": {
          opacity: 0,
        },
        "&[data-starting-style]": {
          "&[data-activation-direction='left']": {
            transform: "translateX(-50%)",
          },
          "&[data-activation-direction='right']": {
            transform: "translateX(50%)",
          },
        },
        "&[data-ending-style]": {
          "&[data-activation-direction='left']": {
            transform: "translateX(50%)",
          },
          "&[data-activation-direction='right']": {
            transform: "translateX(-50%)",
          },
        },
      }}
      {...props}
    />
  );
}

function MenuLink({
  icon,
  title,
  description,
  ...props
}: NavigationMenu.Link.Props & {
  icon?: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <NavigationMenu.Link
      href="#"
      {...props}
      render={
        <Link
          underline="none"
          sx={{
            display: "flex",
            gap: 1,
            p: 1.5,
            borderRadius: 0.5,
            cursor: "pointer",
            transition: "background-color 0.2s",
            "@media (hover: hover)": {
              "&:hover": {
                bgcolor: "action.hover",
              },
            },
          }}
        />
      }
    >
      <Box sx={{ color: "primary.main", display: "flex", mt: 0.25 }}>
        {icon}
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.25 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", lineHeight: 1.4 }}
        >
          {description}
        </Typography>
      </Box>
    </NavigationMenu.Link>
  );
}

export default function NavMenu02() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List
        render={
          <Box
            component="ul"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              listStyle: "none",
              "& .MuiButton-root[data-popup-open]": {
                bgcolor: "action.selected",
              },
            }}
          />
        }
      >
        <NavigationMenu.Item>
          <NavigationMenu.Trigger render={<Button disableTouchRipple />}>
            Products
            <NavigationMenu.Icon>
              <ExpandMoreIcon sx={{ fontSize: 20 }} />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content render={<Content />}>
            <Box
              component="ul"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 1,
              }}
            >
              <li>
                <MenuLink
                  icon={<SupportAgentIcon />}
                  title="Support center"
                  description="Get help and support"
                />
              </li>
              <li>
                <MenuLink
                  icon={<ArticleIcon />}
                  title="Blog"
                  description="Latest updates and articles"
                />
              </li>
              <li>
                <MenuLink
                  icon={<LocalOfferIcon />}
                  title="Support plans"
                  description="Choose the right plan"
                />
              </li>
              <li>
                <MenuLink
                  icon={<EventIcon />}
                  title="Sessions"
                  description="Join our sessions"
                />
              </li>
            </Box>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger render={<Button disableTouchRipple />}>
            Resources
            <NavigationMenu.Icon>
              <ExpandMoreIcon sx={{ fontSize: 20 }} />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content render={<Content />}>
            <Box
              component="ul"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(1, 1fr)",
                gap: 1,
              }}
            >
              <li>
                <MenuLink
                  icon={<CodeIcon />}
                  title="Developers"
                  description="APIs and documentation"
                />
              </li>
              <li>
                <MenuLink
                  icon={<SchoolIcon />}
                  title="Guides"
                  description="Learn best practices"
                />
              </li>
              <li>
                <MenuLink
                  icon={<AutoStoriesIcon />}
                  title="Customer stories"
                  description="See how others succeed"
                />
              </li>
              <li>
                <MenuLink
                  icon={<GroupsIcon />}
                  title="Community"
                  description="Connect with others"
                />
              </li>
            </Box>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            render={
              <Link
                href="#"
                underline="none"
                variant="button"
                sx={{
                  display: "inline-flex",
                  px: 2,
                  py: 1,
                  cursor: "pointer",
                  borderRadius: 1,
                  "&:hover": { bgcolor: "action.hover" },
                  "&:focus-visible": {
                    outline: "2px solid",
                    outlineColor: "primary.main",
                    outlineOffset: "2px",
                  },
                }}
              >
                Pricing
              </Link>
            }
          />
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Portal keepMounted>
        <NavigationMenu.Positioner
          sideOffset={10}
          collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
          collisionAvoidance={{ side: "none" }}
          render={
            <Box
              sx={{
                "--easing": "cubic-bezier(0.22, 1, 0.36, 1)",
                "--duration": "0.3s",
                transitionProperty: "top, left, right, bottom",
                transitionDuration: "var(--duration)",
                transitionTimingFunction: "var(--easing)",
                width: "var(--positioner-width)",
                height: "var(--positioner-height)",
                maxWidth: "var(--available-width)",
                "&::before": {
                  content: "''",
                  position: "absolute",
                },
                "&[data-side='top']::before": {
                  left: 0,
                  right: 0,
                  bottom: "-10px",
                  height: "10px",
                },
                "&[data-side='bottom']::before": {
                  left: 0,
                  right: 0,
                  top: "-10px",
                  height: "10px",
                },
                "&[data-side='left']::before": {
                  top: 0,
                  bottom: 0,
                  right: "-10px",
                  width: "10px",
                },
                "&[data-side='right']::before": {
                  top: 0,
                  bottom: 0,
                  left: "-10px",
                  width: "10px",
                },
                "&[data-instant]": {
                  transition: "none",
                },
              }}
            />
          }
        >
          <NavigationMenu.Popup
            render={
              <Card
                sx={{
                  overflow: "unset",
                  position: "relative",
                  borderRadius: "0.5rem",
                  bgcolor: "background.paper",
                  transformOrigin: "var(--transform-origin)",
                  transitionProperty: "opacity, transform, width, height",
                  transitionDuration: "var(--duration)",
                  transitionTimingFunction: "var(--easing)",
                  width: "var(--popup-width)",
                  height: "var(--popup-height)",
                  "&[data-starting-style], &[data-ending-style]": {
                    opacity: 0,
                    transform: "scale(0.9)",
                  },
                  "&[data-ending-style]": {
                    transitionTimingFunction: "ease",
                    transitionDuration: "0.15s",
                  },
                }}
              />
            }
          >
            <NavigationMenu.Arrow
              render={
                <Box
                  sx={{
                    zIndex: 1,
                    display: "flex",
                    transition: "left calc(var(--duration)) var(--easing)",
                    '&[data-side="bottom"]': { top: "-9px" },
                  }}
                />
              }
            >
              <SvgIcon
                sx={(theme) => ({
                  width: "auto",
                  height: "auto",
                  "& path:first-of-type": {
                    fill: "canvas",
                  },
                  "& path:last-of-type": {
                    fill: (theme.vars || theme).palette.divider,
                  },
                })}
              >
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                  <path d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"></path>
                  <path d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"></path>
                </svg>
              </SvgIcon>
            </NavigationMenu.Arrow>
            <NavigationMenu.Viewport
              render={
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                  }}
                />
              }
            />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}
