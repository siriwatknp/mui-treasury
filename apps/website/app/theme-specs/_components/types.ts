import type * as React from 'react';

export interface CaseResult {
  checks?: Record<string, number>;
  failures?: { rule: string; detail: string }[];
  skipped?: string;
  error?: string;
}

export interface SpecCase {
  id: string;
  component: string;
  components: string[];
  kind: string;
  label: string;
  props: Record<string, unknown>;
  state: string | null;
  note: string | null;
  Component: React.ComponentType<Record<string, unknown>>;
}

export interface GroupSummary {
  components: string[];
  ids: string[];
  cases: number;
  failed: number;
}

export interface NamedGroup extends GroupSummary {
  name: string;
}
