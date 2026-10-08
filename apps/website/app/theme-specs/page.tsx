import type { Metadata } from 'next';

import { SpecsIndex } from './_components/specs-index';
import results from './_generated/results.json';

export const metadata: Metadata = {
  title: 'Theme specs',
  robots: { index: false },
};

export default function ThemeSpecsPage() {
  return (
    <SpecsIndex
      summary={results.summary}
      groups={results.groups}
      code={results.code}
    />
  );
}
