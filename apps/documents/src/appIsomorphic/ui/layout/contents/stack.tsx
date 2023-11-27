import { Stack } from '@cdkit/react-ui';
import type { PROPS, CSS_VARIABLES, DOCUMENT, PAGE_CONTENTS } from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

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
    title: 'Props',
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

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    desc: '',
    element: [
      {
        name: '--cdkit-layout-stack-gap',
        type: CSS_VAR_TYPE.LAYOUT,
        description: ['	스택 자식 요소 사이 공간 지정'],
      },
    ],
  },
];

const defaultCode = ['<Stack direction="row">{children}</Stack>'];

const pgCode = `import { Stack } from '@cdkit/react-ui';

function App() {
  return (
    <>
      <Stack direction="row">
        <div>stack-row1</div>
        <div>stack-row2</div>
        <div>stack-row3</div>
      </Stack>
      <Stack direction="column">
        <div>stack-column1</div>
        <div>stack-column2</div>
        <div>stack-column3</div>
      </Stack>
    </>
  );
}

export default App;
`;

export const stackContents: PAGE_CONTENTS = {
  pageTitle: 'Stack',
  pageDesc: `스택을 쌓는 컴포넌트`,
  document,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
