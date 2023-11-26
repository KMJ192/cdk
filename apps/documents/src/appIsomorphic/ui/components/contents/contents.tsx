import type { ReactNode } from 'react';
import { TabOption, Text } from '@cdkit/react-ui';

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

const COMPONENT_CONTENTS: { [key: string]: PAGE_CONTENTS } = {};

export type { DOCUMENT, PROPS, CSS_VARIABLES, PAGE_CONTENTS };
export { COMPONENT_CONTENTS, TAB_OPTIONS };
