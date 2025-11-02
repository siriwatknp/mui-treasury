"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PublicIcon from "@mui/icons-material/Public";
import ChatIcon from "@mui/icons-material/Chat";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function DashboardSidebar() {
  const [customersExpanded, setCustomersExpanded] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("dashboard");

  const handleCustomersClick = () => {
    setCustomersExpanded(!customersExpanded);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        width: 280,
        height: "100vh",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        borderRight: 1,
        borderColor: "divider",
      }}
    >
      {/* Logo/Brand */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 3,
          py: 2.5,
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 20,
          }}
        >
          I
        </Box>
        <Typography variant="h6" fontWeight={600}>
          Ipsum
        </Typography>
      </Box>

      {/* Search Field */}
      <Box sx={{ px: 2, pb: 2 }}>
        <TextField
          fullWidth
          placeholder="Search"
          size="small"
          aria-label="Search"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" sx={{ color: "text.icon" }} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 99,
                bgcolor: "grey.50",
                "& fieldset": { border: "none" },
              },
            },
          }}
        />
      </Box>

      {/* Navigation List */}
      <List dense sx={{ px: 1, flex: 1, overflow: "auto" }}>
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedItem === "dashboard"}
            onClick={() => handleItemClick("dashboard")}
            aria-current={selectedItem === "dashboard" ? "page" : undefined}
            sx={{
              borderRadius: 2,
              mb: 0.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <DashboardIcon sx={{ color: "text.icon" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={handleCustomersClick}
            sx={{
              borderRadius: 2,
              mb: 0.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <PeopleIcon sx={{ color: "text.icon" }} />
            </ListItemIcon>
            <ListItemText primary="Customers" />
            {customersExpanded ? (
              <ExpandLessIcon sx={{ color: "text.icon" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "text.icon" }} />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={customersExpanded} timeout="auto" unmountOnExit>
          <List dense component="div" disablePadding>
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedItem === "all-customers"}
                onClick={() => handleItemClick("all-customers")}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  pl: 7,
                }}
              >
                <ListItemText primary="All customers" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedItem === "segments"}
                onClick={() => handleItemClick("segments")}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  pl: 7,
                }}
              >
                <ListItemText primary="Segments" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedItem === "analytics"}
                onClick={() => handleItemClick("analytics")}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  pl: 7,
                }}
              >
                <ListItemText primary="Analytics" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton
            selected={selectedItem === "reports"}
            onClick={() => handleItemClick("reports")}
            sx={{
              borderRadius: 2,
              mb: 0.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <AssessmentIcon sx={{ color: "text.icon" }} />
            </ListItemIcon>
            <ListItemText primary="All reports" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            selected={selectedItem === "geography"}
            onClick={() => handleItemClick("geography")}
            sx={{
              borderRadius: 2,
              mb: 0.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <PublicIcon sx={{ color: "text.icon" }} />
            </ListItemIcon>
            <ListItemText primary="Geography" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            selected={selectedItem === "conversations"}
            onClick={() => handleItemClick("conversations")}
            sx={{
              borderRadius: 2,
              mb: 0.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <ChatIcon sx={{ color: "text.icon" }} />
            </ListItemIcon>
            <ListItemText primary="Conversations" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            selected={selectedItem === "deals"}
            onClick={() => handleItemClick("deals")}
            sx={{
              borderRadius: 2,
              mb: 0.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <HandshakeIcon sx={{ color: "text.icon" }} />
            </ListItemIcon>
            <ListItemText primary="Deals" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            selected={selectedItem === "export"}
            onClick={() => handleItemClick("export")}
            sx={{
              borderRadius: 2,
              mb: 0.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <FileUploadIcon sx={{ color: "text.icon" }} />
            </ListItemIcon>
            <ListItemText primary="Export" />
          </ListItemButton>
        </ListItem>
      </List>

      {/* User Profile Section */}
      <Box
        sx={{
          borderTop: 1,
          borderColor: "divider",
          p: 2,
        }}
        aria-label="User profile section"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            px: 1,
            py: 1.5,
          }}
        >
          <Avatar
            src="https://placehold.co/100"
            alt="John Doe"
            sx={{ width: 40, height: 40 }}
          />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body2" fontWeight={500} noWrap>
              John Doe
            </Typography>
            <Chip
              label="Admin"
              size="small"
              color="secondary"
              sx={{
                height: 20,
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            />
          </Box>
        </Box>

        {/* Settings and Logout */}
        <List dense sx={{ mt: 1 }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 2,
                mb: 0.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <SettingsIcon sx={{ color: "text.icon" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 2,
                color: "error.main",
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <LogoutIcon sx={{ color: "error.main" }} />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
