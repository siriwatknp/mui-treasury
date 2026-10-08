import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SpecPage } from '../_components/spec-page';
import type { CaseResult, GroupSummary } from '../_components/types';
import results from '../_generated/results.json';

const groups = results.groups as Record<string, GroupSummary>;
const names = Object.keys(groups);
const nameOf = (slug: string) => names.find((n) => n.toLowerCase() === slug);

export function generateStaticParams() {
  return names.map((name) => ({ group: name.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string }>;
}): Promise<Metadata> {
  const { group } = await params;
  return {
    title: `${nameOf(group) ?? 'Component'} · Theme specs`,
    robots: { index: false },
  };
}

export default async function GroupSpecsPage({
  params,
}: {
  params: Promise<{ group: string }>;
}) {
  const { group } = await params;
  const name = nameOf(group);
  if (!name) {
    notFound();
  }
  const cases = results.cases as Record<string, CaseResult>;
  const own = Object.fromEntries(groups[name].ids.map((id) => [id, cases[id]]));
  return (
    <SpecPage
      name={name}
      results={own}
      groups={Object.entries(groups).map(([n, g]) => ({ name: n, ...g }))}
    />
  );
}
