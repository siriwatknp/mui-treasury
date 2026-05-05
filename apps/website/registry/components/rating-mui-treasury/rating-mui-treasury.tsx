'use client';

import * as React from 'react';

import {
  Avatar,
  Box,
  FormHelperText,
  Paper,
  Rating,
  Stack,
  Typography,
} from '@mui/material';

const LABELS: Record<number, string> = {
  1: 'Needs work',
  2: 'Could be better',
  3: 'Average',
  4: 'Solid read',
  5: 'Loved it',
};

export function RatingMuiTreasury() {
  const [rating, setRating] = React.useState<number | null>(3);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 8,
        width: '100%',
      }}
    >
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Product review
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, width: 280 }}>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>JL</Avatar>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Jules Lin
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: 'center',
              mt: 1.5,
            }}
          >
            <Rating value={4.5} precision={0.5} readOnly />
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
              }}
            >
              4.5 — based on 1,284 reviews
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ mt: 1.5 }}>
            The build quality exceeded expectations. Worth every penny.
          </Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
          Rate this article
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, width: 280 }}>
          <Stack spacing={1.5}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              How was this article?
            </Typography>
            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                alignItems: 'center',
              }}
            >
              <Rating
                value={rating}
                onChange={(_, value) => setRating(value)}
                precision={1}
                size="large"
              />
              {rating !== null && (
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                  }}
                >
                  {LABELS[rating]}
                </Typography>
              )}
            </Stack>
            <FormHelperText sx={{ m: 0 }}>
              Your feedback shapes future updates.
            </FormHelperText>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
