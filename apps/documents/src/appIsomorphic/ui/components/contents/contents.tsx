import type { ReactNode } from 'react';
import { TabOption, Text } from '@cdkit/react-ui';
import { typoContents } from './typo';

type DOCUMENT = {
  title: string;
  subtitle: string;
  desc: Array<string>;
  view: ReactNode;
  code: Array<string>;
};

type DATA_TYPE = {
  name: string;
  description: string;
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
  dataType: Array<DATA_TYPE>;
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
    key: 'data-types',
    contents: <Text typo='b2'>DataTypes</Text>,
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

const COMPONENT_CONTENTS: { [key: string]: PAGE_CONTENTS } = {
  typo: typoContents,
  badge: typoContents,
  button: typoContents,
  input: typoContents,
  checkbox: typoContents,
  popup: typoContents,
  'progress-bar': typoContents,
  radio: typoContents,
  'radio-group': typoContents,
  spinner: typoContents,
  switch: typoContents,
  select: typoContents,
  tab: typoContents,
  'data-table': typoContents,
  textarea: typoContents,
};

export type { DOCUMENT, DATA_TYPE, PROPS, CSS_VARIABLES, PAGE_CONTENTS };
export { COMPONENT_CONTENTS, TAB_OPTIONS };
