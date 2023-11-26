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
        name: 'flexDirection',
        type: '"column" | "row" | "column-reverse" | "row-reverse"',
        essential: false,
        defaultValue: 'undefined',
        description: ['flex-direction (display가 flex로 설정된 경우만)'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode = ['<Flex>{children}</Flex>'];

const pgCode = `import { Flex } from '@cdkit/react-ui';

function App() {
  return <Flex>This is Flex</Flex>;
}

export default App;
`;

export const flexContents: PAGE_CONTENTS = {
  pageTitle: 'Flex',
  pageDesc: `"display: flex;"가 지정된 컴포넌트`,
  document,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
