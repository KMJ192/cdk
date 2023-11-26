import { Stack } from '@cdkit/react-ui';
import type { PROPS, CSS_VARIABLES, DOCUMENT, PAGE_CONTENTS } from './contents';

const document: Array<DOCUMENT> = [
  {
    title: 'Stack',
    subtitle: 'Stack 컴포넌트 문서',
    desc: ['스택을 쌓습니다.'],
    view: (
      <Stack>
        <div>stack1</div>
        <div>stack2</div>
        <div>stack3</div>
      </Stack>
    ),
    code: [
      '<Stack>',
      '  <div>stack1</div>',
      '  <div>stack2</div>',
      '  <div>stack3</div>',
      '</Stack>',
    ],
  },
];

const props: Array<PROPS> = [
  {
    title: 'Flex Props',
    desc: '',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
      {
        name: 'direction',
        type: '"column" | "row"',
        essential: false,
        defaultValue: 'undefined',
        description: ['스택 방향'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode = ['<Stack direction="row">{children}</Stack>'];

export const stackContents: PAGE_CONTENTS = {
  pageTitle: 'Stack',
  pageDesc: `스택을 쌓는 컴포넌트`,
  document,
  props,
  cssVar,
  defaultCode,
};
