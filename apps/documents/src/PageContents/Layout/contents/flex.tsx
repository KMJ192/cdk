import { Flex } from '@cdkit/react-ui';
import type { PROPS, CSS_VARIABLES, DOCUMENT, PAGE_CONTENTS } from './contents';

const document: Array<DOCUMENT> = [
  {
    title: 'Flex',
    subtitle: 'Flex 컴포넌트 문서',
    desc: ['flex를 설정합니다.'],
    view: <Flex>This is Flex Display</Flex>,
    code: [`<Flex>This is Flex Display</Flex>`],
  },
];

const props: Array<PROPS> = [];

const cssVar: Array<CSS_VARIABLES> = [];

export const flexContents: PAGE_CONTENTS = {
  pageTitle: 'Flex',
  pageDesc: `"display: flex;"가 지정된 컴포넌트`,
  document,
  props,
  cssVar,
};
