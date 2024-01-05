import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const PersonItem = ({ src = "", name = "", count = 0 }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 2, p: 2 }}>
      <Box sx={{ flexShrink: 0 }}>
        <Avatar src={src} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          alignItems: "center",
          flexGrow: 1,
          "& > *": {
            minWidth: `clamp(0px, (240px + 1px - 100%) * 999, 100%)`,
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            noWrap
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              color: (theme) =>
                theme.palette.mode === "dark" ? "#fff" : "#122740",
            }}
          >
            <b>{name}</b>
          </Typography>
          <Typography
            noWrap
            variant="body2"
            sx={{
              fontSize: "0.875rem",
              color: "#758392",
              mt: -0.25,
            }}
          >
            {count} mutual friends
          </Typography>
        </Box>
        <Box>
          <Button
            size="small"
            variant={"outlined"}
            sx={{
              borderRadius: 5,
              padding: "0.125rem 0.75rem",
              borderColor: "#becddc",
              fontSize: "0.75rem",
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export function CardSocial() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#1f2733" : "rgb(244, 247, 250)",
        boxShadow: (theme) =>
          theme.palette.mode === "dark" ? "unset" : "0 8px 16px 0 #BDC9D7",
      }}
    >
      <Box
        alignItems="baseline"
        p={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#2f3c50" : "#fff",
        }}
      >
        <Box sx={{ flexGrow: 1, mr: 1 }}>
          <Typography variant="h6">
            <b>Who to follow</b>
          </Typography>
        </Box>
        <Box>
          <Link href="#">Refresh</Link> • <Link href="#">See all</Link>
        </Box>
      </Box>
      <PersonItem
        src="https://i.pravatar.cc/300?img=10"
        name="Amber Matthews"
        count={6}
      />
      <Divider />
      <PersonItem
        src="https://i.pravatar.cc/300?img=20"
        name="Russel Robertson"
        count={2}
      />
      <Divider />
      <PersonItem
        src="https://i.pravatar.cc/300?img=30"
        name="Kathleen Ellis"
        count={2}
      />
    </Box>
  );
}
