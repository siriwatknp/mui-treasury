"use client";

import * as React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Button,
  IconButton,
  Link,
  Box,
} from "@mui/material";
import {
  MoreHoriz as MoreHorizIcon,
  Close as CloseIcon,
  Add as AddIcon,
} from "@mui/icons-material";

export default function ListItem01() {
  return (
    <List disablePadding sx={{ bgcolor: "background.paper" }}>
      {/* Variation 1: Promoted/Company */}
      <ListItem
        divider
        secondaryAction={
          <IconButton aria-label="More options" size="small">
            <MoreHorizIcon />
          </IconButton>
        }
        sx={{ alignItems: "flex-start", gap: 1.5 }}
      >
        <ListItemAvatar sx={{ mt: 1.25 }}>
          <Avatar
            src="https://placehold.co/112"
            alt="Directed Edges"
            sx={{ width: 56, height: 56 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography component="div" sx={{ fontWeight: 600 }}>
              Directed Edges
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="div"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                2,222 followers
              </Typography>
              <Typography
                component="div"
                variant="body2"
                sx={{ color: "text.disabled" }}
              >
                Promoted
              </Typography>
            </React.Fragment>
          }
          slotProps={{
            secondary: {
              component: "div",
            },
          }}
        />
      </ListItem>

      {/* Variation 2: Person with Link */}
      <ListItem
        divider
        secondaryAction={
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton aria-label="More options" size="small">
              <MoreHorizIcon />
            </IconButton>
            <IconButton aria-label="Dismiss" size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        }
        sx={{ alignItems: "flex-start", gap: 1.5, pr: 11 }}
      >
        <ListItemAvatar sx={{ mt: 1.25 }}>
          <Avatar
            src="https://placehold.co/112"
            alt="Sil Bormüller"
            sx={{ width: 56, height: 56 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography component="div" sx={{ fontWeight: 600 }}>
              Sil Bormüller
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="div"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                Founder @ Into Design Systems
              </Typography>
              <Link href="#" sx={{ fontSize: "0.875rem" }}>
                Visit my website
              </Link>
              <Typography
                component="time"
                variant="caption"
                sx={{ color: "text.disabled", display: "block" }}
              >
                3h
              </Typography>
            </React.Fragment>
          }
          slotProps={{
            secondary: {
              component: "div",
            },
          }}
        />
      </ListItem>

      {/* Variation 3: Connection Request */}
      <ListItem
        divider
        secondaryAction={
          <Button
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
            aria-label="Connect with Ben Callahan"
            sx={{ textTransform: "none" }}
          >
            Connect
          </Button>
        }
        sx={{ alignItems: "flex-start", gap: 1.5, pr: 16 }}
      >
        <ListItemAvatar sx={{ mt: 1.25 }}>
          <Avatar
            src="https://placehold.co/112"
            alt="Ben Callahan"
            sx={{ width: 56, height: 56 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography component="div" sx={{ fontWeight: 600 }}>
              Ben Callahan
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="div"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                Founder of Redwoods DS Community
              </Typography>
              <Typography
                component="time"
                variant="caption"
                sx={{ color: "text.disabled" }}
              >
                1h
              </Typography>
            </React.Fragment>
          }
          slotProps={{
            secondary: {
              component: "div",
            },
          }}
        />
      </ListItem>

      {/* Variation 4: Follow Suggestion */}
      <ListItem
        divider
        secondaryAction={
          <Button
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
            aria-label="Follow Curious Squid"
            sx={{ textTransform: "none" }}
          >
            Follow
          </Button>
        }
        sx={{ alignItems: "flex-start", gap: 1.5, pr: 13 }}
      >
        <ListItemAvatar sx={{ mt: 1.25 }}>
          <Avatar
            src="https://placehold.co/112"
            alt="Curious Squid"
            sx={{ width: 56, height: 56 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography component="div" sx={{ fontWeight: 600 }}>
              Curious Squid
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="div"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                88,888 followers
              </Typography>
              <Typography
                component="time"
                variant="caption"
                sx={{ color: "text.disabled" }}
              >
                2hr
              </Typography>
            </React.Fragment>
          }
          slotProps={{
            secondary: {
              component: "div",
            },
          }}
        />
      </ListItem>

      {/* Variation 5: With Badge & Connection Level */}
      <ListItem
        divider
        secondaryAction={
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton aria-label="More options" size="small">
              <MoreHorizIcon />
            </IconButton>
            <IconButton aria-label="Dismiss" size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        }
        sx={{ alignItems: "flex-start", gap: 1.5, pr: 11 }}
      >
        <ListItemAvatar sx={{ mt: 1.25 }}>
          <Avatar
            src="https://placehold.co/112"
            alt="Brad Frost"
            sx={{ width: 56, height: 56 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography component="div" sx={{ fontWeight: 600 }}>
                Brad Frost
              </Typography>
              🔒
              <Typography
                component="div"
                sx={{ color: "text.secondary", fontSize: "0.875rem" }}
              >
                • 1st
              </Typography>
            </Box>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="div"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                Enthusiasm Enthusiast at Brad Frost Web
              </Typography>
              <Typography
                component="time"
                variant="caption"
                sx={{ color: "text.disabled" }}
              >
                7h
              </Typography>
            </React.Fragment>
          }
          slotProps={{
            secondary: {
              component: "div",
            },
          }}
        />
      </ListItem>

      {/* Variation 6: With Prefix, Badge & Connection Level */}
      <ListItem
        divider
        secondaryAction={
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton aria-label="More options" size="small">
              <MoreHorizIcon />
            </IconButton>
            <IconButton aria-label="Dismiss" size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        }
        sx={{ alignItems: "flex-start", gap: 1.5, pr: 11 }}
      >
        <ListItemAvatar sx={{ mt: 1.25 }}>
          <Avatar
            src="https://placehold.co/112"
            alt="James Melzer"
            sx={{ width: 56, height: 56 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              ✨
              <Typography component="div" sx={{ fontWeight: 600 }}>
                James Melzer
              </Typography>
              ✓
              <Typography
                component="div"
                sx={{ color: "text.secondary", fontSize: "0.875rem" }}
              >
                • 1st
              </Typography>
            </Box>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="div"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                Information Architect at UX Bearings
              </Typography>
              <Link href="#" sx={{ fontSize: "0.875rem" }}>
                Book an appointment
              </Link>
              <Typography
                component="time"
                variant="caption"
                sx={{ color: "text.disabled", display: "block" }}
              >
                7h
              </Typography>
            </React.Fragment>
          }
          slotProps={{
            secondary: {
              component: "div",
            },
          }}
        />
      </ListItem>
    </List>
  );
}
