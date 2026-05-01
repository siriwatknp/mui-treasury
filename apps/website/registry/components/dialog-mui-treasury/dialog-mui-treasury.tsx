import Close from '@mui/icons-material/Close';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
} from '@mui/material';

const dialogPaperSx = {
  width: 400,
  maxWidth: '100%',
  borderRadius: 2,
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const titleRowSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
};

const titleSx = { p: 0 };
const contentSx = { p: 0 };
const actionsSx = { p: 0, justifyContent: 'flex-end' };

export function DialogMuiTreasury() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 4,
        width: '100%',
      }}
    >
      <Paper elevation={8} sx={dialogPaperSx}>
        <Box sx={titleRowSx}>
          <DialogTitle sx={titleSx}>Delete project?</DialogTitle>
          <IconButton
            aria-label="Close"
            size="small"
            sx={{ color: 'text.secondary' }}
          >
            <Close fontSize="small" />
          </IconButton>
        </Box>
        <DialogContent sx={contentSx}>
          <DialogContentText>
            This will permanently delete the &quot;acme-web&quot; project and
            all its deployments. This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={actionsSx}>
          <Button>Cancel</Button>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Paper>

      <Paper elevation={8} sx={dialogPaperSx}>
        <Box sx={titleRowSx}>
          <DialogTitle sx={titleSx}>Invite team member</DialogTitle>
          <IconButton
            aria-label="Close"
            size="small"
            sx={{ color: 'text.secondary' }}
          >
            <Close fontSize="small" />
          </IconButton>
        </Box>
        <DialogContent sx={contentSx}>
          <Stack gap={2}>
            <TextField
              fullWidth
              label="Email"
              placeholder="teammate@acme.com"
            />
            <TextField select fullWidth label="Role" defaultValue="member">
              <MenuItem value="member">Member</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions sx={actionsSx}>
          <Button>Cancel</Button>
          <Button variant="contained">Send invite</Button>
        </DialogActions>
      </Paper>
    </Box>
  );
}
