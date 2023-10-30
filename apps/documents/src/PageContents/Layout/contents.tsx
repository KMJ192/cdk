import { TabOption, Text } from '@cdkit/react-ui';

type DOCUMENT = {
  docTitle: string;
  docDesc: string;
  docCode: Array<string>;
};

type PROPS = {
  apiTitle: string;
  apiDesc: string;
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
  props: Array<PROPS>;
  cssVar?: Array<CSS_VARIABLES>;
};

const LAYOUT_CONTENTS: { [key: string]: PAGE_CONTENTS } = {
  center: {
    pageTitle: 'Center',
    pageDesc: '중앙을 지정하는 컴포넌트',
    tabOption: [
      {
        key: 'docs',
        contents: <Text typo='b2'>문서</Text>,
      },
      {
        key: 'apis',
        contents: <Text typo='b2'>APIs</Text>,
      },
      {
        key: 'playground',
        contents: <Text typo='b2'>플레이 그라운드</Text>,
      },
    ],
    document: [],
    props: [],
    cssVar: [],
  },
  flex: {
    pageTitle: 'Flex',
    pageDesc: `"display: flex;"가 지정된 컴포넌트`,
    tabOption: [],
    document: [],
    props: [],
    cssVar: [],
  },
  grid: {
    pageTitle: 'Grid',
    pageDesc: `"display: grid;"가 지정된 컴포넌트`,
    tabOption: [],
    document: [],
    props: [],
    cssVar: [],
  },
  float: {
    pageTitle: 'Float',
    pageDesc: `부유 속성 컴포넌트`,
    tabOption: [],
    document: [],
    props: [],
    cssVar: [],
  },
  row: {
    pageTitle: 'Row',
    pageDesc: `열을 생성하는 컴포넌트`,
    tabOption: [],
    document: [],
    props: [],
    cssVar: [],
  },
  spacing: {
    pageTitle: 'Spacing',
    pageDesc: `공간을 차지하는 컴포넌트`,
    tabOption: [],
    document: [],
    props: [],
    cssVar: [],
  },
  stack: {
    pageTitle: 'Stack',
    pageDesc: `스택을 쌓는 컴포넌트`,
    tabOption: [],
    document: [],
    props: [],
    cssVar: [],
  },
};

export type { DOCUMENT, PROPS, CSS_VARIABLES };
export { LAYOUT_CONTENTS };
