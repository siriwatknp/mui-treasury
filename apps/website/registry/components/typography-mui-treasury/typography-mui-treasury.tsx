import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const SAMPLES = [
  { variant: 'h2', text: 'Designing systems that scale' },
  { variant: 'h3', text: 'A field guide to typography' },
  { variant: 'h4', text: 'Rhythm, hierarchy, and restraint' },
  {
    variant: 'subtitle1',
    text: 'A short standfirst that introduces the article below.',
  },
  {
    variant: 'body1',
    text: 'Good typography is invisible. It guides the eye through the page without ever calling attention to itself.',
  },
  {
    variant: 'body2',
    text: 'Secondary copy works well for captions, metadata, and supporting paragraphs.',
  },
  { variant: 'caption', text: 'Updated 3 minutes ago by the editorial team' },
] as const;

export function TypographyMuiTreasury() {
  return (
    <Box sx={{ maxWidth: 720, mx: 'auto', width: '100%' }}>
      <Stack spacing={3}>
        {SAMPLES.map((sample) => (
          <Box
            key={sample.variant}
            sx={{
              display: 'grid',
              gridTemplateColumns: '96px 1fr',
              gap: 3,
              alignItems: 'baseline',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontFamily: 'monospace',
              }}
            >
              {sample.variant}
            </Typography>
            <Typography variant={sample.variant}>{sample.text}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
