import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  Stack,
  Typography,
} from '@mui/material';

export function AccordionMuiTreasury() {
  return (
    <Box sx={{ width: '100%', maxWidth: 640, mx: 'auto' }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Account & billing</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 3, pb: 2 }}>
          <Typography variant="body2" sx={{
            color: "text.secondary"
          }}>
            Manage seats, invoices, and payment methods for your workspace.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>API access</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 3, pb: 2 }}>
          <Stack spacing={1.5}>
            <Typography variant="body2" sx={{
              color: "text.secondary"
            }}>
              Authenticate requests with a personal token sent in the
              Authorization header. Tokens inherit the permissions of the
              workspace member who created them.
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                color: 'text.secondary',
                bgcolor: 'action.hover',
                px: 1,
                py: 0.5,
                borderRadius: 1,
                alignSelf: 'flex-start',
              }}
            >
              Authorization: Bearer sk_live_4f3c…a91b
            </Typography>
            <Link href="#" variant="body2" underline="hover">
              Read the API reference
            </Link>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Notifications</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 3, pb: 2 }}>
          <Typography variant="body2" sx={{
            color: "text.secondary"
          }}>
            Choose which workspace events trigger email and in-app alerts.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
