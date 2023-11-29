import { Row } from '@cdkit/react-ui';
import { CSS_VAR_TYPE } from '@src/utils/utils';
import type {
  PARAMS,
  CSS_VARIABLES,
  DOCUMENT,
  PAGE_CONTENTS,
} from '@src/components/DocsContents/types';

const document: Array<DOCUMENT> = [
  {
    title: 'Row',
    subtitle: 'Row 컴포넌트 문서',
    view: <Row>This is Row</Row>,
    code: ['<Row>This is Row</Row>'],
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

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    element: [
      {
        name: '--cdkit-color-row-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상'],
      },
      {
        name: '--upcast-color-row-box-shadow',
        type: CSS_VAR_TYPE.COLOR,
        description: ['그림자 색상'],
      },
    ],
  },
];

const defaultCode = ['<Row>{children}</Row>'];

const pgCode = `import { Row } from '@cdkit/react-ui';

function App() {
  return <Row>This is Row</Row>;
}

export default App;
`;

export const rowContents: PAGE_CONTENTS = {
  pageTitle: 'Row',
  pageDesc: `열을 생성하는 컴포넌트`,
  dataType: [],
  document,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
