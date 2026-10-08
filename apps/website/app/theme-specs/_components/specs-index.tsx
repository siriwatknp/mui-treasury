'use client';

import * as React from 'react';

import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

interface SpecsIndexProps {
  summary: {
    cases: number;
    checks: number;
    failed: number;
    codeIssues: number;
  };
  groups: Record<
    string,
    { components: string[]; cases: number; failed: number }
  >;
  code: { file: string; line: number; rule: string; detail: string }[];
}

export function SpecsIndex({ summary, groups, code }: SpecsIndexProps) {
  const [query, setQuery] = React.useState('');
  const [show, setShow] = React.useState<'all' | 'failing'>('all');
  const q = query.trim().toLowerCase();
  const rows = Object.entries(groups).filter(
    ([, g]) =>
      g.components.some((c) => c.toLowerCase().includes(q)) &&
      (show === 'all' || g.failed > 0),
  );
  const pass = (n: number) => (n === 0 ? 'success' : 'error');

  return (
    <Stack spacing={4} sx={{ maxWidth: 960, mx: 'auto', py: 6, px: 2 }}>
      <Stack spacing={1}>
        <Typography variant="h3" component="h1">
          Theme specs
        </Typography>
        <Typography color="text.secondary">
          Every case <code>mui verify --all</code> checks on the MUI Treasury
          theme, rendered live. Regenerate with{' '}
          <code>pnpm --filter registry verify:specs</code>.
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
        <Chip label={`${summary.cases} cases`} variant="outlined" />
        <Chip label={`${summary.checks} checks`} variant="outlined" />
        <Chip
          label={`${summary.failed} failed`}
          color={pass(summary.failed)}
          variant="outlined"
        />
        <Chip
          label={`theme code · ${summary.codeIssues} issues`}
          color={pass(summary.codeIssues)}
          variant="outlined"
        />
      </Stack>

      {code.length > 0 && (
        <Stack spacing={0.5}>
          <Typography variant="h6" component="h2">
            Theme code
          </Typography>
          {code.map((issue) => (
            <Typography
              key={`${issue.file}:${issue.line}:${issue.detail}`}
              variant="body2"
              color="error"
            >
              {issue.file}:{issue.line} · {issue.rule}: {issue.detail}
            </Typography>
          ))}
        </Stack>
      )}

      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        sx={{ flexWrap: 'wrap', alignItems: 'center' }}
      >
        <TextField
          id="theme-specs-filter"
          size="small"
          placeholder="Filter components"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ToggleButtonGroup
          size="small"
          exclusive
          value={show}
          onChange={(_, value) => value && setShow(value)}
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="failing">Failing</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Component</TableCell>
              <TableCell align="right">Cases</TableCell>
              <TableCell align="right">Failed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(([name, c]) => (
              <TableRow key={name}>
                <TableCell>
                  <Link
                    component={NextLink}
                    href={`/theme-specs/${name.toLowerCase()}`}
                  >
                    {name}
                  </Link>
                  {c.components.length > 1 && (
                    <Typography variant="body2" color="text.secondary">
                      {c.components.filter((m) => m !== name).join(' · ')}
                    </Typography>
                  )}
                </TableCell>
                <TableCell align="right">{c.cases}</TableCell>
                <TableCell
                  align="right"
                  sx={{ color: c.failed ? 'error.main' : 'text.secondary' }}
                >
                  {c.failed}
                </TableCell>
              </TableRow>
            ))}
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography variant="body2" color="text.secondary">
                    No component matches.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
