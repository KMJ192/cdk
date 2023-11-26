import { Row } from '@cdkit/react-ui';
import type { PROPS, CSS_VARIABLES, DOCUMENT, PAGE_CONTENTS } from './contents';

const document: Array<DOCUMENT> = [
  {
    title: 'Row',
    subtitle: 'Row 컴포넌트 문서',
    desc: ['열을 생성합니다.'],
    view: <Row>This is Row</Row>,
    code: ['<Row>This is Row</Row>'],
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

const defaultCode = ['<Row>{children}</Row>'];

export const rowContents: PAGE_CONTENTS = {
  pageTitle: 'Row',
  pageDesc: `열을 생성하는 컴포넌트`,
  document,
  props,
  cssVar,
  defaultCode,
};
