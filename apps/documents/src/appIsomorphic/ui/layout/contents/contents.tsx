import type { ReactNode } from 'react';
import { TabOption, Text } from '@cdkit/react-ui';
import { centerContents } from './center';
import { flexContents } from './flex';
import { gridContents } from './grid';
import { floatContents } from './float';
import { rowContents } from './row';
import { spacingContents } from './spacing';
import { stackContents } from './stack';

type DOCUMENT = {
  title: string;
  subtitle: string;
  desc: Array<string>;
  view: ReactNode;
  code: Array<string>;
};

type PROPS = {
  title: string;
  desc: string;
  element: Array<{
    name: string;
    type: string;
    essential: boolean;
    defaultValue: string;
    description: Array<string>;
  }>;
};

type CSS_VARIABLES = {
  title: string;
  desc: string;
  element: Array<{
    name: string;
    type: 'color' | 'size' | 'layout';
    defaultValue: string;
    description: Array<string>;
  }>;
};

type PAGE_CONTENTS = {
  pageTitle: string;
  pageDesc: string;
  document: Array<DOCUMENT>;
  props: Array<PROPS>;
  cssVar: Array<CSS_VARIABLES>;
  defaultCode: Array<string>;
  pgCode: string;
};

const TAB_OPTIONS: Array<TabOption> = [
  {
    key: 'docs',
    contents: <Text typo='b2'>Documents</Text>,
  },
  {
    key: 'apis',
    contents: <Text typo='b2'>APIs</Text>,
  },
  {
    key: 'playground',
    contents: <Text typo='b2'>Playground</Text>,
  },
];

const LAYOUT_CONTENTS: { [key: string]: PAGE_CONTENTS } = {
  center: centerContents,
  flex: flexContents,
  grid: gridContents,
  float: floatContents,
  row: rowContents,
  spacing: spacingContents,
  stack: stackContents,
};

export type { DOCUMENT, PROPS, CSS_VARIABLES, PAGE_CONTENTS };
export { LAYOUT_CONTENTS, TAB_OPTIONS };
