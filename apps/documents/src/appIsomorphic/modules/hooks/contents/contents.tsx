import { TabOption, Text } from '@cdkit/react-ui';
import { useTrieContents } from './useTrieContents';
import { useClickAwayContents } from './useClickAwayContents';
import { useComponentDidMountContents } from './useComponentDidMountContents';
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

const HOOKS_CONTENTS: { [key: string]: PAGE_CONTENTS } = {
  'use-trie': useTrieContents,
  'use-click-away': useClickAwayContents,
  'use-component-did-mount': useComponentDidMountContents,
};

export { HOOKS_CONTENTS, TAB_OPTIONS };
