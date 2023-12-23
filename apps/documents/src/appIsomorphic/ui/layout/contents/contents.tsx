import { Text } from '@cdkit/react-ui';
import { centerContents } from './center';
import { flexContents } from './flex';
import { gridContents } from './grid';
import { floatContents } from './float';
import { rowContents } from './row';
import { spacingContents } from './spacing';
import { stackContents } from './stack';
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
    key: 'apis',
    contents: (
      <Text typo='b2' data-index='1'>
        APIs
      </Text>
    ),
  },
  {
    key: 'playground',
    contents: (
      <Text typo='b2' data-index='2'>
        테스트
      </Text>
    ),
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

export { LAYOUT_CONTENTS, TAB_OPTIONS };
