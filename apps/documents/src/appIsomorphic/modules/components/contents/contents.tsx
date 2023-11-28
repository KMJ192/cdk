import { TabOption, Text } from '@cdkit/react-ui';
import { infiniteScrollContents } from './infiniteScrollContents';

type DOCUMENT = {
  title: string;
  subtitle: string;
  desc: Array<string>;
  code: Array<string>;
};

type PROPS = {
  title: string;
  element: Array<{
    name: string;
    type: string;
    essential: boolean;
    defaultValue: string;
    description: Array<string>;
  }>;
};

type DATA_TYPE = {
  name: string;
  description: string;
  code: Array<string>;
};

type PAGE_CONTENTS = {
  pageTitle: string;
  pageDesc: string;
  document: Array<DOCUMENT>;
  props: Array<PROPS>;
  dataType: Array<DATA_TYPE>;
  defaultCode: Array<string>;
  pgCode: string;
};

const TAB_OPTIONS: Array<TabOption> = [
  {
    key: 'docs',
    contents: <Text typo='b2'>문서</Text>,
  },
  {
    key: 'data-types',
    contents: <Text typo='b2'>타입</Text>,
  },
  {
    key: 'apis',
    contents: <Text typo='b2'>APIs</Text>,
  },
  {
    key: 'playground',
    contents: <Text typo='b2'>테스트</Text>,
  },
];

const MODULE_COMPONENTS_CONTENTS: { [key: string]: PAGE_CONTENTS } = {
  'infinite-scroll': infiniteScrollContents,
};

export type { DOCUMENT, DATA_TYPE, PROPS, PAGE_CONTENTS };
export { MODULE_COMPONENTS_CONTENTS, TAB_OPTIONS };
