import { Text } from '@cdkit/react-ui';
import { infiniteScrollContents } from './infiniteScrollContents';
import type { PAGE_CONTENTS } from '@src/components/DocsContents/types';

const TAB_OPTIONS = [
  {
    key: 'docs',
    contents: (
      <Text typo='b2' data-index='0'>
        문서
      </Text>
    ),
  },
  {
    key: 'data-types',
    contents: (
      <Text typo='b2' data-index='1'>
        타입
      </Text>
    ),
  },
  {
    key: 'apis',
    contents: (
      <Text typo='b2' data-index='2'>
        APIs
      </Text>
    ),
  },
  {
    key: 'playground',
    contents: (
      <Text typo='b2' data-index='3'>
        테스트
      </Text>
    ),
  },
];

const MODULE_COMPONENTS_CONTENTS: { [key: string]: PAGE_CONTENTS } = {
  'infinite-scroll': infiniteScrollContents,
};

export { MODULE_COMPONENTS_CONTENTS, TAB_OPTIONS };
