import { TabOption, Text } from '@cdkit/react-ui';
import { infiniteScrollContents } from './infiniteScrollContents';
import type { PAGE_CONTENTS } from '@src/components/DocsContents/types';

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

export { MODULE_COMPONENTS_CONTENTS, TAB_OPTIONS };
