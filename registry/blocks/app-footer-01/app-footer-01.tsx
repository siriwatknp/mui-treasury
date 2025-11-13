"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";

const navigationData = [
  {
    title: "Use cases",
    links: [
      { label: "UI design", href: "#" },
      { label: "UX design", href: "#" },
      { label: "Wireframing", href: "#" },
      { label: "Diagramming", href: "#" },
      { label: "Brainstorming", href: "#" },
      { label: "Online whiteboard", href: "#" },
      { label: "Team collaboration", href: "#" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Design", href: "#" },
      { label: "Prototyping", href: "#" },
      { label: "Development features", href: "#" },
      { label: "Design systems", href: "#" },
      { label: "Collaboration features", href: "#" },
      { label: "Design process", href: "#" },
      { label: "FigJam", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Best practices", href: "#" },
      { label: "Colors", href: "#" },
      { label: "Color wheel", href: "#" },
      { label: "Support", href: "#" },
      { label: "Developers", href: "#" },
      { label: "Resource library", href: "#" },
    ],
  },
];

export default function AppFooter01() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        width: "100%",
        containerType: "inline-size",
      }}
    >
      <Box
        sx={[
          {
            p: 4,
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              "@400": "repeat(2, 1fr)",
              "@600": "repeat(3, 1fr)",
              "@800": "repeat(4, 1fr)",
            },
            "& > div:first-of-type": {
              gridColumn: "1/-1",
            },
          },
          (theme) => ({
            [theme.containerQueries.up(800)]: {
              "& > div:first-of-type": {
                gridColumn: "initial",
              },
            },
          }),
        ]}
      >
        {/* Header Section - Logo and Social Icons */}
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
            [theme.breakpoints.up("md")]: {
              flexDirection: "column",
              gap: 3,
            },
          })}
        >
          <Typography sx={{ fontWeight: "bold" }}>Logo Placeholder</Typography>
          <Stack
            component="nav"
            direction="row"
            spacing={2}
            aria-label="Social media links"
          >
            <IconButton
              size="small"
              aria-label="Visit our X profile"
              sx={{
                color: "text.primary",
                "@media (hover: hover)": {
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                },
              }}
            >
              <SvgIcon sx={{ color: "text.primary", fontSize: 20 }}>
                <svg fill="none" viewBox="0 0 1200 1227">
                  <path
                    fill="currentColor"
                    d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                  />
                </svg>
              </SvgIcon>
            </IconButton>
            <IconButton
              size="small"
              aria-label="Visit our Instagram profile"
              sx={{
                color: "text.primary",
                "@media (hover: hover)": {
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                },
              }}
            >
              <SvgIcon sx={{ color: "text.primary" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </SvgIcon>
            </IconButton>
            <IconButton
              size="small"
              aria-label="Visit our YouTube channel"
              sx={{
                color: "text.primary",
                "@media (hover: hover)": {
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                },
              }}
            >
              <SvgIcon sx={{ color: "text.primary" }}>
                <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 180">
                  <path
                    fill="currentColor"
                    d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                  />
                  <path
                    fill="#FFF"
                    d="m102.421 128.06 66.328-38.418-66.328-38.418z"
                  />
                </svg>
              </SvgIcon>
            </IconButton>
            <IconButton
              size="small"
              aria-label="Visit our LinkedIn profile"
              sx={{
                color: "text.primary",
                "@media (hover: hover)": {
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                },
              }}
            >
              <SvgIcon sx={{ color: "text.primary" }}>
                <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                  <path
                    d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                    fill="currentColor"
                  />
                </svg>
              </SvgIcon>
            </IconButton>
          </Stack>
        </Box>

        {/* Navigation Columns */}
        {navigationData.map((section, index) => (
          <Box
            key={section.title}
            component="nav"
            aria-labelledby={`footer-nav-${index}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              id={`footer-nav-${index}`}
              variant="body1"
              fontWeight={600}
              sx={{ pb: 1 }}
            >
              {section.title}
            </Typography>
            <Stack spacing={1.5}>
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="hover"
                  color="text.primary"
                  sx={(theme) => ({
                    ...theme.typography.body1,
                    display: "inline-block",
                    "@media (hover: hover)": {
                      "&:hover": {
                        color: "text.secondary",
                      },
                    },
                  })}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
