import { Center } from '@cdkit/react-ui';
import type {
  PARAMS,
  CSS_VARIABLES,
  DOCUMENT,
  PAGE_CONTENTS,
} from '@src/components/DocsContents/types';

const document: Array<DOCUMENT> = [
  {
    title: 'Center',
    subtitle: 'Center 컴포넌트 문서',
    view: <Center>This is Center</Center>,
    code: [`<Center>This is Center</Center>`],
  },
];

const params: Array<PARAMS> = [
  {
    title: 'Props',
    defaultTag: 'div',
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
  dataType: [],
  document,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
