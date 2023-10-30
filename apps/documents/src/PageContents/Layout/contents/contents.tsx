import type { ReactNode } from 'react';
import { TabOption } from '@cdkit/react-ui';
import { centerContents } from './center';

type DOCUMENT = {
  title: string;
  desc: string;
  view: ReactNode;
  code: Array<string>;
};

type APIS = {
  title: string;
  desc: string;
  element: Array<{
    name: string;
    type: string;
    defaultValue: string;
    description: string;
  }>;
};

type CSS_VARIABLES = {
  cssTitle: string;
  cssDesc: string;
  element: Array<{
    name: string;
    type: 'color' | 'size';
    defaultValue: string;
    description: string;
  }>;
};

type PAGE_CONTENTS = {
  pageTitle: string;
  pageDesc: string;
  tabOption: Array<TabOption>;
  document: Array<DOCUMENT>;
  apis: Array<APIS>;
  cssVar?: Array<CSS_VARIABLES>;
};

const LAYOUT_CONTENTS: { [key: string]: PAGE_CONTENTS } = {
  center: centerContents,
  flex: {
    pageTitle: 'Flex',
    pageDesc: `"display: flex;"가 지정된 컴포넌트`,
    tabOption: [],
    document: [],
    apis: [],
    cssVar: [],
  },
  grid: {
    pageTitle: 'Grid',
    pageDesc: `"display: grid;"가 지정된 컴포넌트`,
    tabOption: [],
    document: [],
    apis: [],
    cssVar: [],
  },
  float: {
    pageTitle: 'Float',
    pageDesc: `부유 속성 컴포넌트`,
    tabOption: [],
    document: [],
    apis: [],
    cssVar: [],
  },
  row: {
    pageTitle: 'Row',
    pageDesc: `열을 생성하는 컴포넌트`,
    tabOption: [],
    document: [],
    apis: [],
    cssVar: [],
  },
  spacing: {
    pageTitle: 'Spacing',
    pageDesc: `공간을 차지하는 컴포넌트`,
    tabOption: [],
    document: [],
    apis: [],
    cssVar: [],
  },
  stack: {
    pageTitle: 'Stack',
    pageDesc: `스택을 쌓는 컴포넌트`,
    tabOption: [],
    document: [],
    apis: [],
    cssVar: [],
  },
};

export type { DOCUMENT, APIS, CSS_VARIABLES, PAGE_CONTENTS };
export { LAYOUT_CONTENTS };
