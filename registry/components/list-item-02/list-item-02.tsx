"use client";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function ListItem02() {
  return (
    <List sx={{ bgcolor: "background.paper", maxWidth: 680 }}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="More actions" size="small">
            <MoreVertIcon />
          </IconButton>
        }
        sx={{
          alignItems: "flex-start",
          gap: 2,
          pb: 2,
          "& .MuiListItemSecondaryAction-root": { top: "1.25rem" },
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Amy Diehl's profile picture" src="" />
        </ListItemAvatar>
        <Stack spacing={1.5} sx={{ flex: 1, minWidth: 0, pr: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              gap: 1.5,
              flexWrap: "wrap",
            }}
          >
            <Typography variant="body1" sx={{ flex: 1, minWidth: 0 }}>
              <Link component="button">
                <strong>Amy Diehl</strong>
              </Link>{" "}
              and{" "}
              <Link component="button">
                <strong>96 others</strong>
              </Link>{" "}
              reacted to your post.
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", flexShrink: 0 }}
            >
              7h
            </Typography>
          </Box>

          <Card
            sx={(theme) => ({
              p: 2,
              bgcolor: "grey.900",
              ...theme.applyStyles("dark", {
                bgcolor: "grey.800",
              }),
            })}
          >
            <Typography
              variant="body1"
              sx={(theme) => ({
                color: "common.white",
                ...theme.applyStyles("dark", {
                  color: "grey.50",
                }),
              })}
            >
              Analysis of Variants and the Anova Plugin Generating component
              data that design systems teams need The Anova...
            </Typography>
          </Card>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            aria-label="97 reactions, 5 comments"
          >
            <Link component="button" color="inherit" underline="hover">
              97 reactions
            </Link>{" "}
            <span aria-hidden="true">•</span>{" "}
            <Link component="button" color="inherit" underline="hover">
              5 comments
            </Link>
          </Typography>
        </Stack>
      </ListItem>

      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="More actions" size="small">
            <MoreVertIcon />
          </IconButton>
        }
        sx={{
          alignItems: "flex-start",
          gap: 2,
          pb: 2,
          "& .MuiListItemSecondaryAction-root": { top: "1.25rem" },
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Jules Forrest's profile picture" src="" />
        </ListItemAvatar>
        <Stack spacing={1.5} sx={{ flex: 1, minWidth: 0, pr: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              gap: 1.5,
              flexWrap: "wrap",
            }}
          >
            <Typography variant="body1" sx={{ flex: 1, minWidth: 0 }}>
              <Link component="button">
                <strong>Jules Forrest</strong>
              </Link>{" "}
              and{" "}
              <Link component="button">
                <strong>28 others</strong>
              </Link>{" "}
              reacted to your post.
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", flexShrink: 0 }}
            >
              7h
            </Typography>
          </Box>

          <Card
            sx={{
              display: "flex",
              overflow: "hidden",
              position: "relative",
              "&:has(a:hover)": {
                bgcolor: "action.hover",
              },
            }}
          >
            <Box
              component="img"
              src="https://placehold.co/320x240"
              alt=""
              sx={{
                width: 120,
                aspectRatio: "4/3",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <Box sx={{ p: 2, flex: 1, minWidth: 0 }}>
              <Link
                variant="body1"
                href="#"
                underline="none"
                sx={{
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    inset: 0,
                  },
                }}
              >
                &ldquo;How many variants does this component even have... and
                why?&rdquo;
              </Link>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Nathan Curtis has the low...
              </Typography>
            </Box>
          </Card>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            aria-label="97 reactions, 5 comments"
          >
            <Link component="button" color="inherit" underline="hover">
              97 reactions
            </Link>{" "}
            <span aria-hidden="true">•</span>{" "}
            <Link component="button" color="inherit" underline="hover">
              5 comments
            </Link>
          </Typography>
        </Stack>
      </ListItem>
    </List>
  );
}
