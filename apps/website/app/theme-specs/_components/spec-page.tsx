'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

import { layoutVariables } from '@/registry/layout/layout-core/layoutVariables';

import { loaders } from '../_generated/cases';
import { CaseStage } from './case-stage';
import type { CaseResult, NamedGroup, SpecCase } from './types';

const KINDS = ['variant', 'composition', 'content', 'demo', 'own demo'];
const KIND_LABELS: Record<string, string> = {
  variant: 'Variants',
  composition: 'Compositions',
  content: 'Content',
  demo: 'Demos',
  'own demo': 'Docs demos',
};
const headerOffset = `var(${layoutVariables.headerHeight}, 0px)`;

const anchorOf = (spec: SpecCase) =>
  `${spec.component}-${spec.label}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const loaded = new Map<string, Promise<SpecCase[]>>();
function casesOf(name: string) {
  if (!loaded.has(name)) {
    const load = loaders[name as keyof typeof loaders];
    loaded.set(
      name,
      load().then((m) => m.cases as unknown as SpecCase[]),
    );
  }
  return loaded.get(name)!;
}

function CaseSection({
  spec,
  result,
  withComponent,
}: {
  spec: SpecCase;
  result?: CaseResult;
  withComponent: boolean;
}) {
  const anchor = anchorOf(spec);
  const failures = result?.failures ?? [];
  const checks = Object.entries(result?.checks ?? {}).filter(([, n]) => n > 0);
  const failedRule = (rule: string) =>
    failures.some((f) => f.rule.startsWith(rule === 'target' ? 'touch' : rule));
  const { Component } = spec;
  return (
    <Stack
      component="section"
      spacing={1.5}
      sx={{ scrollMarginTop: headerOffset }}
      id={anchor}
    >
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ alignItems: 'center', flexWrap: 'wrap' }}
      >
        <Typography variant="h6" component="h2">
          <Link href={`#${anchor}`} color="inherit" underline="hover">
            {withComponent && spec.components.length === 1
              ? `${spec.component} · ${spec.label}`
              : spec.label}
          </Link>
        </Typography>
        {spec.state && <Chip size="small" label={spec.state} />}
        <Chip
          size="small"
          variant="outlined"
          label={KIND_LABELS[spec.kind] ?? spec.kind}
        />
      </Stack>
      {spec.components.length > 1 && (
        <Typography variant="body2" color="text.secondary">
          Checks {spec.components.join(' · ')}
        </Typography>
      )}
      <CaseStage>
        <Component {...spec.props} />
      </CaseStage>
      {spec.note && (
        <Typography variant="body2" color="text.secondary">
          At rest here; {spec.note} during the check.
        </Typography>
      )}
      <Stack direction="row" spacing={0.5} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {checks.map(([rule, n]) => (
          <Chip
            key={rule}
            size="small"
            variant="outlined"
            color={failedRule(rule) ? 'error' : 'success'}
            label={n > 1 ? `${rule} ×${n}` : rule}
          />
        ))}
        {result?.skipped && (
          <Chip size="small" variant="outlined" label={result.skipped} />
        )}
      </Stack>
      {(failures.length > 0 || result?.error) && (
        <Box
          component="ul"
          sx={{ m: 0, pl: 2.5, color: 'error.main', typography: 'body2' }}
        >
          {result?.error && (
            <li>Did not render in the check: {result.error}</li>
          )}
          {failures.map((f, i) => (
            <li key={`${i}:${f.rule}`}>
              {f.rule}: {f.detail}
            </li>
          ))}
        </Box>
      )}
    </Stack>
  );
}

function Cases({
  name,
  results,
  kind,
  multi,
}: {
  name: string;
  results: Record<string, CaseResult>;
  kind: string;
  multi: boolean;
}) {
  const cases = React.use(casesOf(name));
  const shown = kind === 'all' ? cases : cases.filter((c) => c.kind === kind);
  React.useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash) {
      document.getElementById(hash)?.scrollIntoView();
    }
  }, []);
  return (
    <Stack spacing={4} divider={<Divider />}>
      {shown.map((spec) => (
        <CaseSection
          key={spec.id}
          spec={spec}
          result={results[spec.id]}
          withComponent={multi}
        />
      ))}
    </Stack>
  );
}

interface SpecPageProps {
  name: string;
  results: Record<string, CaseResult>;
  groups: NamedGroup[];
}

export function SpecPage({ name, results, groups }: SpecPageProps) {
  const [kind, setKind] = React.useState('all');
  const me = groups.find((g) => g.name === name);
  const kinds = KINDS.filter((k) =>
    Object.keys(results).some((id) => id.split('|')[1] === k),
  );

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '220px minmax(0, 1fr)' },
        gap: 4,
        maxWidth: 1280,
        mx: 'auto',
        px: 2,
        alignItems: 'start',
      }}
    >
      <Box
        component="nav"
        aria-label="Components"
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'sticky',
          top: headerOffset,
          maxHeight: `calc(100vh - ${headerOffset})`,
          overflowY: 'auto',
          py: 4,
        }}
      >
        <Link component={NextLink} href="/theme-specs" variant="body2">
          All components
        </Link>
        <List dense sx={{ mt: 1 }}>
          {groups.map((g) => (
            <ListItemButton
              key={g.name}
              component={NextLink}
              href={`/theme-specs/${g.name.toLowerCase()}`}
              selected={g.name === name}
            >
              <ListItemText primary={g.name} />
              <Typography
                variant="caption"
                color={g.failed ? 'error' : 'text.secondary'}
              >
                {g.failed ? `${g.failed}/${g.cases}` : g.cases}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Stack spacing={4} sx={{ minWidth: 0, py: 4 }}>
        <Stack spacing={1}>
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{ alignItems: 'center', flexWrap: 'wrap' }}
          >
            <Typography variant="h4" component="h1">
              {name}
            </Typography>
            {me && (
              <Chip
                variant="outlined"
                color={me.failed ? 'error' : 'success'}
                label={`${me.cases} case${me.cases === 1 ? '' : 's'} · ${me.failed} failed`}
              />
            )}
          </Stack>
          {me && me.components.length > 1 && (
            <Typography variant="body2" color="text.secondary">
              {me.components.join(' · ')}
            </Typography>
          )}
        </Stack>
        <ToggleButtonGroup
          size="small"
          exclusive
          value={kind}
          onChange={(_, value) => value && setKind(value)}
        >
          <ToggleButton value="all">All</ToggleButton>
          {kinds.map((k) => (
            <ToggleButton key={k} value={k}>
              {KIND_LABELS[k]}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <React.Suspense fallback={<CircularProgress size={24} />}>
          <Cases
            name={name}
            results={results}
            kind={kind}
            multi={(me?.components.length ?? 1) > 1}
          />
        </React.Suspense>
      </Stack>
    </Box>
  );
}
