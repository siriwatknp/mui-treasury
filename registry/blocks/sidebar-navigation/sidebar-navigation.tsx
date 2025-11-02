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
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FolderIcon from "@mui/icons-material/Folder";
import PeopleIcon from "@mui/icons-material/People";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LogoutIcon from "@mui/icons-material/Logout";

export default function SidebarNavigation() {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([
    "dashboard",
  ]);
  const [selectedItem, setSelectedItem] = React.useState("overview");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleToggleExpand = (item: string) => {
    setExpandedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      icon: <HomeIcon />,
      expandable: false,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <BarChartIcon />,
      expandable: true,
      children: [
        { id: "overview", label: "Overview" },
        { id: "notifications", label: "Notifications", badge: "10" },
        { id: "trade-history", label: "Trade history" },
      ],
    },
    {
      id: "projects",
      label: "Projects",
      icon: <LayersIcon />,
      expandable: false,
    },
    {
      id: "tasks",
      label: "Tasks",
      icon: <CheckBoxIcon />,
      expandable: false,
    },
    {
      id: "reporting",
      label: "Reporting",
      icon: <FolderIcon />,
      expandable: false,
    },
    {
      id: "users",
      label: "Users",
      icon: <PeopleIcon />,
      expandable: false,
    },
    {
      id: "support",
      label: "Support",
      icon: <HelpOutlineIcon />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        width: 300,
        height: "100vh",
        bgcolor: "grey.50",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        m: 1,
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
          ●
        </Box>
        <Typography variant="h6" fontWeight={600}>
          Acme Corp
        </Typography>
      </Box>

      {/* Search Field */}
      <Box sx={{ px: 2, pb: 2 }}>
        <TextField
          fullWidth
          placeholder="Search"
          size="small"
          variant="outlined"
          aria-label="Search"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" sx={{ color: "text.icon" }} />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      {/* Navigation List */}
      <List dense sx={{ px: 1, flex: 1, overflow: "auto" }}>
        {navigationItems.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  if (item.expandable && item.children) {
                    handleToggleExpand(item.id);
                  } else {
                    handleItemClick(item.id);
                  }
                }}
                selected={selectedItem === item.id}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: "text.icon" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
                {item.expandable &&
                  item.children &&
                  (expandedItems.includes(item.id) ? (
                    <ExpandLessIcon sx={{ color: "text.icon" }} />
                  ) : (
                    <ExpandMoreIcon sx={{ color: "text.icon" }} />
                  ))}
              </ListItemButton>
            </ListItem>
            {item.children && (
              <Collapse
                in={expandedItems.includes(item.id)}
                timeout="auto"
                unmountOnExit
              >
                <List dense component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItem key={child.id} disablePadding>
                      <ListItemButton
                        selected={selectedItem === child.id}
                        onClick={() => handleItemClick(child.id)}
                        sx={{
                          borderRadius: 2,
                          mb: 0.5,
                          pl: 7,
                        }}
                      >
                        <ListItemText primary={child.label} />
                        {child.badge && (
                          <Chip
                            label={child.badge}
                            size="small"
                            sx={{
                              height: 20,
                              fontSize: "0.75rem",
                              bgcolor: "grey.200",
                            }}
                          />
                        )}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>

      {/* Storage Usage Section */}
      <Box
        sx={{
          px: 2,
          py: 2,
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="body2" fontWeight={500} gutterBottom>
          Used space
        </Typography>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          Your team has used 80% of your available space. Need more?
        </Typography>
        <LinearProgress
          variant="determinate"
          value={80}
          sx={{
            mt: 1,
            mb: 1.5,
            height: 6,
            borderRadius: 1,
            bgcolor: "grey.200",
            "& .MuiLinearProgress-bar": {
              bgcolor: "primary.main",
            },
          }}
          aria-label="Storage usage at 80 percent"
          aria-valuenow={80}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button size="small" color="inherit">
            Dismiss
          </Button>
          <Button size="small" color="primary">
            Upgrade plan
          </Button>
        </Box>
      </Box>

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
          }}
        >
          <Avatar
            src="https://placehold.co/100"
            alt="Jane Smith"
            sx={{ width: 40, height: 40 }}
          />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body2" fontWeight={500} noWrap>
              Jane Smith
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              noWrap
              sx={{ display: "block" }}
            >
              jane.smith@acmecorp.com
            </Typography>
          </Box>
          <IconButton
            size="small"
            aria-label="User menu"
            onClick={handleMenuClick}
            aria-controls={open ? "user-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>

      {/* User Menu */}
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "user-menu-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Menu>
    </Box>
  );
}
