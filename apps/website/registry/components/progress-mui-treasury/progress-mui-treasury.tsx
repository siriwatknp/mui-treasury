import {
  Box,
  CircularProgress,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

export function ProgressMuiTreasury() {
  return (
    <Stack spacing={4} sx={{ width: '100%', maxWidth: 560, mx: 'auto' }}>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Determinate
        </Typography>
        <Stack direction="row" spacing={6} sx={{
          alignItems: "center"
        }}>
          <Stack direction="row" spacing={1.5} sx={{
            alignItems: "center"
          }}>
            <Box sx={{ width: 240 }}>
              <LinearProgress variant="determinate" value={62} />
            </Box>
            <Typography variant="body2" sx={{
              color: "text.secondary"
            }}>
              62%
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1.5} sx={{
            alignItems: "center"
          }}>
            <CircularProgress variant="determinate" value={62} />
            <Typography variant="body2" sx={{
              color: "text.secondary"
            }}>
              62%
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Indeterminate
        </Typography>
        <Stack direction="row" spacing={6} sx={{
          alignItems: "center"
        }}>
          <Box sx={{ width: 240 }}>
            <LinearProgress />
          </Box>
          <CircularProgress />
        </Stack>
      </Box>
    </Stack>
  );
}
