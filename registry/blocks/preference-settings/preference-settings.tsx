"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";

interface SettingRowProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function SettingRow({ title, description, children }: SettingRowProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        py: 1.5,
        px: 1.5,
        gap: 3,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>{children}</Box>
    </Box>
  );
}

export default function PreferenceSettings() {
  const [startupView, setStartupView] = React.useState("dashboard");
  const [autoFormat, setAutoFormat] = React.useState(true);
  const [weekStart, setWeekStart] = React.useState("monday");
  const [showAvatars, setShowAvatars] = React.useState(false);

  return (
    <Card>
      <Stack divider={<Divider />} sx={{ bgcolor: "background.paper" }}>
        <SettingRow
          title="Week starts on"
          description="Choose which day begins your calendar week"
        >
          <FormControl size="small">
            <Select
              value={weekStart}
              onChange={(e) => setWeekStart(e.target.value)}
              variant="outlined"
              aria-label="Week starts on"
              aria-describedby="week-start-description"
              sx={{ minWidth: 150 }}
            >
              <MenuItem value="sunday">Sunday</MenuItem>
              <MenuItem value="monday">Monday</MenuItem>
              <MenuItem value="tuesday">Tuesday</MenuItem>
              <MenuItem value="wednesday">Wednesday</MenuItem>
              <MenuItem value="thursday">Thursday</MenuItem>
              <MenuItem value="friday">Friday</MenuItem>
              <MenuItem value="saturday">Saturday</MenuItem>
            </Select>
          </FormControl>
        </SettingRow>

        <SettingRow
          title="Auto-format text"
          description="Automatically format text patterns like URLs and mentions"
        >
          <Switch
            checked={autoFormat}
            onChange={(e) => setAutoFormat(e.target.checked)}
            color="primary"
            aria-label="Auto-format text"
            aria-describedby="auto-format-description"
          />
        </SettingRow>

        <SettingRow
          title="Default startup page"
          description="Choose which page appears when you launch the application"
        >
          <FormControl size="small">
            <Select
              value={startupView}
              onChange={(e) => setStartupView(e.target.value)}
              variant="outlined"
              aria-label="Default startup page"
              aria-describedby="startup-page-description"
              sx={{ minWidth: 150 }}
            >
              <MenuItem value="dashboard">Dashboard</MenuItem>
              <MenuItem value="projects">Projects</MenuItem>
              <MenuItem value="calendar">Calendar</MenuItem>
              <MenuItem value="messages">Messages</MenuItem>
              <MenuItem value="analytics">Analytics</MenuItem>
            </Select>
          </FormControl>
        </SettingRow>

        <SettingRow
          title="Show user avatars"
          description="Display profile pictures next to usernames throughout the app"
        >
          <Switch
            checked={showAvatars}
            onChange={(e) => setShowAvatars(e.target.checked)}
            aria-label="Show user avatars"
            aria-describedby="show-avatars-description"
          />
        </SettingRow>
      </Stack>
    </Card>
  );
}
