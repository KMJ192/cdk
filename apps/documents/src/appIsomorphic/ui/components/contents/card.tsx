import { Card } from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PARAMS,
} from '@src/components/DocsContents/types';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'Card 예시입니다.',
    view: <Card>Card</Card>,
    code: ['<Card>Card</Card>'],
  },
];

const dataType: Array<DATA_TYPE> = [];

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
      {
        name: 'centerVertical',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['중앙정렬 - 수직'],
      },
      {
        name: 'centerHorizontal',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['중앙정렬 - 수평'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = ['<Card>Card</Card>'];

const pgCode = `import { Card } from '@cdkit/react-ui';

function App() {
  return <Card>Card</Card>;
}

export default App;
`;

export const cardContents: PAGE_CONTENTS = {
  pageTitle: 'Card',
  pageDesc: 'Card 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
