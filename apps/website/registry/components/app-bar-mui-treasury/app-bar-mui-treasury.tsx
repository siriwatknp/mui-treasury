import {
  Menu as MenuIcon,
  NotificationsNone,
  Search as SearchIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';

export function AppBarMuiTreasury() {
  return (
    <Stack spacing={4} sx={{ width: '100%', maxWidth: 960, mx: 'auto' }}>
      <Box
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          border: 1,
          borderColor: 'divider',
        }}
      >
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              Acme Console
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              color="inherit"
              aria-label="notifications"
              sx={{ mr: 1 }}
            >
              <Badge badgeContent={4} color="error">
                <NotificationsNone />
              </Badge>
            </IconButton>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
              JD
            </Avatar>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          border: 1,
          borderColor: 'divider',
        }}
      >
        <AppBar position="static" color="default" elevation={2}>
          <Toolbar>
            <IconButton edge="start" aria-label="menu" sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              Settings
            </Typography>
            <TextField
              size="small"
              placeholder="Search settings"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{ ml: 'auto', mr: 2, maxWidth: 320, width: '100%' }}
            />
            <Avatar sx={{ width: 32, height: 32 }}>SK</Avatar>
          </Toolbar>
        </AppBar>
      </Box>
    </Stack>
  );
}
