import { Center } from '@cdkit/react-ui';
import type { PROPS, CSS_VARIABLES, DOCUMENT, PAGE_CONTENTS } from './contents';

const document: Array<DOCUMENT> = [
  {
    title: 'Center',
    subtitle: 'Center 컴포넌트 문서',
    desc: ['중앙을 지정합니다.', '하위 컴포넌트를 중앙에 위치시킵니다.'],
    view: <Center>This is Center</Center>,
    code: [`<Center>This is Center</Center>`],
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
        name: 'vertical',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['정렬여부 - 수직'],
      },
      {
        name: 'horizontal',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['정렬여부 - 수평'],
      },
      {
        name: 'display',
        type: '"flex" | "grid"',
        essential: false,
        defaultValue: 'flex',
        description: ['display 설정'],
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

const defaultCode = [
  '<Center',
  '  vertical={true}',
  '  horizontal={true}',
  '  display="flex"',
  '>',
  '  {children}',
  '</Center>',
];

const pgCode = `import { Center } from '@cdkit/react-ui';

function App() {
  return <Center>This is Center</Center>;
}

export default App;
`;

export const centerContents: PAGE_CONTENTS = {
  pageTitle: 'Center',
  pageDesc: '중앙을 지정하는 컴포넌트',
  document,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
