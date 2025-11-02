"use client";

import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Avatar,
  Select,
  MenuItem,
  Stack,
  Divider,
  InputAdornment,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClearIcon from "@mui/icons-material/Clear";
import CodeIcon from "@mui/icons-material/Code";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ProjectMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
  permission: "Owner" | "Can View" | "Can Edit";
}

export default function ProjectInviteModal() {
  const [open, setOpen] = React.useState(true);
  const [email, setEmail] = React.useState("Johndoe@gmail.com");
  const [linkAccess, setLinkAccess] = React.useState("Anyone with link");
  const [invitePermission, setInvitePermission] = React.useState("Can View");
  const [copied, setCopied] = React.useState(false);

  const members: ProjectMember[] = [
    {
      id: "1",
      name: "Insan Kamil",
      email: "insank@gmail.com",
      avatar: "https://placehold.co/40",
      permission: "Owner",
    },
    {
      id: "2",
      name: "John Smith",
      email: "johnsmith@gmail.com",
      avatar: "https://placehold.co/40",
      permission: "Can View",
    },
    {
      id: "3",
      name: "Mario Rodriguez",
      email: "mariorodriguez@gmail.com",
      avatar: "https://placehold.co/40",
      permission: "Can Edit",
    },
    {
      id: "4",
      name: "Emily Chen",
      email: "emilychen@gmail.com",
      avatar: "https://placehold.co/40",
      permission: "Can Edit",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("https://www.figma.com/designProject-Screen");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 2,
            p: 1,
          },
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "text.secondary",
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogTitle sx={{ pb: 0.5 }}>
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <Box
              sx={(theme) => ({
                position: "relative",
                color: (theme.vars || theme).palette.text.icon,
              })}
            >
              <GroupAddIcon sx={{ fontSize: 28 }} />
            </Box>
            <Box>
              <Typography variant="h6" component="div">
                Invite to Project
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Collaborate with members on this project.
              </Typography>
            </Box>
          </Stack>
        </DialogTitle>

        <Divider sx={{ my: 2, mx: 3 }} />

        <DialogContent sx={{ pt: 0 }}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="subtitle1" fontWeight="500" gutterBottom>
                Link to Share
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Anyone with the link can access
              </Typography>

              <Stack spacing={2}>
                <FormControl fullWidth size="small">
                  <Select
                    value={linkAccess}
                    onChange={(e) => setLinkAccess(e.target.value)}
                    IconComponent={ExpandMoreIcon}
                    sx={{
                      bgcolor: "background.paper",
                    }}
                  >
                    <MenuItem value="Anyone with link">
                      Anyone with link
                    </MenuItem>
                    <MenuItem value="Restricted">Restricted</MenuItem>
                    <MenuItem value="Only members">Only members</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  size="small"
                  value="https://www.figma.com/designProject-Screen"
                  slotProps={{
                    input: {
                      readOnly: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            size="small"
                            startIcon={<ContentCopyIcon fontSize="small" />}
                            onClick={handleCopy}
                            sx={{ minWidth: "auto" }}
                          >
                            {copied ? "Copied" : "Copy"}
                          </Button>
                        </InputAdornment>
                      ),
                      sx: { pr: 0.5 },
                    },
                  }}
                />
              </Stack>
            </Box>

            <Box>
              <Typography variant="subtitle1" fontWeight="500" gutterBottom>
                Email
              </Typography>

              <Stack direction="row" spacing={1.5}>
                <TextField
                  fullWidth
                  size="small"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  slotProps={{
                    input: {
                      endAdornment: email && (
                        <InputAdornment position="end">
                          <IconButton
                            size="small"
                            onClick={() => setEmail("")}
                            edge="end"
                            aria-label="clear email"
                          >
                            <ClearIcon fontSize="small" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <Select
                    value={invitePermission}
                    onChange={(e) => setInvitePermission(e.target.value)}
                    IconComponent={ExpandMoreIcon}
                  >
                    <MenuItem value="Can View">Can View</MenuItem>
                    <MenuItem value="Can Edit">Can Edit</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="contained"
                  size="small"
                  sx={{ px: 2.5, whiteSpace: "nowrap" }}
                >
                  Send Invite
                </Button>
              </Stack>
            </Box>

            <Box>
              <Typography variant="subtitle1" fontWeight="500" gutterBottom>
                Project Members
              </Typography>

              <Stack spacing={2} sx={{ mt: 2 }}>
                {members.map((member) => (
                  <Stack
                    key={member.id}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar
                      src={member.avatar}
                      alt={member.name}
                      sx={{ width: 40, height: 40 }}
                    />

                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1">{member.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.email}
                      </Typography>
                    </Box>

                    <FormControl variant="standard" size="small">
                      <Select
                        value={member.permission}
                        IconComponent={ExpandMoreIcon}
                        disabled={member.permission === "Owner"}
                        sx={{
                          "& .MuiSelect-select": {
                            pr: 3,
                            color: "text.secondary",
                          },
                          "&:before": {
                            display: "none",
                          },
                          "&:after": {
                            display: "none",
                          },
                        }}
                      >
                        <MenuItem value="Owner">Owner</MenuItem>
                        <MenuItem value="Can View">Can View</MenuItem>
                        <MenuItem value="Can Edit">Can Edit</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                ))}
              </Stack>
            </Box>

            <Stack direction="row" spacing={3} sx={{ pt: 1 }}>
              <Button
                startIcon={<CodeIcon />}
                sx={{
                  textTransform: "none",
                  color: "text.primary",
                  p: 0,
                  minWidth: "auto",
                  "&:hover": {
                    bgcolor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Get embed code
              </Button>

              <Button
                startIcon={<FileUploadIcon />}
                sx={{
                  textTransform: "none",
                  color: "text.primary",
                  p: 0,
                  minWidth: "auto",
                  "&:hover": {
                    bgcolor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Export
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
