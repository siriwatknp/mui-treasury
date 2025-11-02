"use client";

import * as React from "react";
import {
  Box,
  TextField,
  Chip,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  IconButton,
  Dialog,
  DialogContent,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const filterOptions = [
  "All",
  "Training",
  "Interview",
  "Design task",
  "Review",
  "Onboarding",
];

const meetings = [
  {
    id: 1,
    name: "James B.",
    time: "9 AM",
    duration: "30 min",
    avatar: "https://placehold.co/80",
    status: "online",
  },
  {
    id: 2,
    name: "Sophia W.",
    time: "10 AM",
    duration: "30 min",
    avatar: "https://placehold.co/80",
    status: "online",
  },
  {
    id: 3,
    name: "Arthur T.",
    time: "11 AM",
    duration: "30 min",
    avatar: "https://placehold.co/80",
    status: "online",
  },
  {
    id: 4,
    name: "Ravi P.",
    time: "12 PM",
    duration: "30 min",
    avatar: "https://placehold.co/80",
    status: "online",
  },
];

const quickActions = [
  { icon: <HomeIcon />, label: "Dashboard page" },
  { icon: <GroupIcon />, label: "Team page" },
  { icon: <ReceiptIcon />, label: "Payroll page" },
  { icon: <AddCircleOutlineIcon />, label: "Create new position" },
  { icon: <AccessTimeIcon />, label: "View attendance report" },
  { icon: <CalendarMonthIcon />, label: "Schedule meeting" },
];

export default function CommandSearchUI() {
  const [open, setOpen] = React.useState(true);
  const [selectedFilter, setSelectedFilter] = React.useState("All");
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 2,
            maxHeight: "90vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          },
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            placeholder="Search meetings, people, or type a command..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            variant="outlined"
            autoFocus
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Chip
                      label="⌘K"
                      size="small"
                      sx={(theme) => ({
                        height: 20,
                        fontSize: "0.75rem",
                        bgcolor: "grey.100",
                        ...theme.applyStyles("dark", {
                          bgcolor: "grey.800",
                        }),
                      })}
                    />
                  </InputAdornment>
                ),
                sx: {
                  "& fieldset": { border: "none" },
                },
              },
            }}
            sx={(theme) => ({
              bgcolor: "grey.50",
              borderRadius: 1,
              ...theme.applyStyles("dark", {
                bgcolor: "grey.900",
              }),
            })}
          />
        </Box>

        <Box sx={{ px: 2, pb: 2 }}>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            {filterOptions.map((option) => (
              <Chip
                key={option}
                label={option}
                onClick={() => setSelectedFilter(option)}
                variant={selectedFilter === option ? "filled" : "outlined"}
                color={selectedFilter === option ? "primary" : "default"}
                sx={{
                  borderRadius: 2,
                  fontWeight: selectedFilter === option ? 600 : 400,
                }}
              />
            ))}
          </Stack>
        </Box>

        <Box sx={{ px: 2, pb: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Recent meetings (8)
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <IconButton size="small">
                <ChevronLeftIcon fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <ChevronRightIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
          >
            {meetings.map((meeting) => (
              <Card
                key={meeting.id}
                sx={{
                  minWidth: 160,
                  borderRadius: 2,
                  border: 1,
                  borderColor: "divider",
                  boxShadow: 0,
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    "&:last-child": { pb: 2 },
                  }}
                >
                  <Box sx={{ position: "relative", mb: 1.5 }}>
                    <Avatar
                      src={meeting.avatar}
                      sx={{ width: 56, height: 56, mb: 1 }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 8,
                        right: 0,
                        width: 12,
                        height: 12,
                        bgcolor: "success.main",
                        borderRadius: "50%",
                        border: 2,
                        borderColor: "background.paper",
                      }}
                    />
                  </Box>
                  <Typography variant="body2" fontWeight={600}>
                    {meeting.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {meeting.time} - {meeting.duration}
                  </Typography>
                  <Button
                    variant="text"
                    size="small"
                    sx={{ mt: 1.5, textTransform: "none" }}
                  >
                    Detail
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Box sx={{ px: 2, pb: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
            Quick actions (6)
          </Typography>
          <List dense sx={{ p: 0 }}>
            {quickActions.map((action, index) => (
              <ListItemButton
                key={index}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: "text.secondary" }}>
                  {action.icon}
                </ListItemIcon>
                <ListItemText
                  primary={action.label}
                  slotProps={{
                    primary: {
                      variant: "body2",
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>

        <Box
          sx={(theme) => ({
            px: 2,
            py: 1.5,
            borderTop: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "grey.50",
            ...theme.applyStyles("dark", {
              bgcolor: "grey.900",
            }),
          })}
        >
          <Typography variant="caption" color="text.secondary">
            Use ↑ ↓ to navigate
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Type / for commands
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
