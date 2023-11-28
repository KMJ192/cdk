import { CSS_VAR_TYPE } from '@src/utils/utils';
import {
  type PROPS,
  type CSS_VARIABLES,
  type DOCUMENT,
  type PAGE_CONTENTS,
} from './contents';

const document: Array<DOCUMENT> = [
  {
    title: 'Float',
    subtitle: 'Float 컴포넌트 문서',
    desc: ['부유 속성을 생성합니다.'],
    view: '부유 속성',
    code: ['<Float>부유 속성</Float>'],
  },
];

const props: Array<PROPS> = [
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
        name: 'startDirection',
        type: '"lt" | "lb" | "rt" | "rb"',
        essential: false,
        defaultValue: 'lt',
        description: ['위치 지정'],
      },
      {
        name: 'left',
        type: 'number',
        essential: false,
        defaultValue: 'undefined',
        description: [
          '화면 왼쪽 기준 위치 지정',
          'startDirection에 "l"이 포함된 경우 적용',
        ],
      },
      {
        name: 'right',
        type: 'number',
        essential: false,
        defaultValue: 'undefined',
        description: [
          '화면 오른쪽 기준 위치 지정',
          'startDirection에 "r"이 포함된 경우 적용',
        ],
      },
      {
        name: 'top',
        type: 'number',
        essential: false,
        defaultValue: 'undefined',
        description: [
          '화면 상단 기준 위치 지정',
          'startDirection에 "t"가 포함된 경우 적용',
        ],
      },
      {
        name: 'bottom',
        type: 'number',
        essential: false,
        defaultValue: 'undefined',
        description: [
          '화면 하단 기준 위치 지정',
          'startDirection에 "b"가 포함된 경우 적용',
        ],
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
    desc: '',
    element: [
      {
        name: '--cdkit-layout-float-left',
        type: CSS_VAR_TYPE.LAYOUT,
        description: [
          '화면 왼쪽 기준 위치 지정',
          'startDirection에 "l"이 포함된 경우 적용',
        ],
      },
      {
        name: '--cdkit-layout-float-right',
        type: CSS_VAR_TYPE.LAYOUT,
        description: [
          '화면 오른쪽 기준 위치 지정',
          'startDirection에 "r"이 포함된 경우 적용',
        ],
      },
      {
        name: '--cdkit-layout-float-top',
        type: CSS_VAR_TYPE.LAYOUT,
        description: [
          '화면 상단 기준 위치 지정',
          'startDirection에 "t"가 포함된 경우 적용',
        ],
      },
      {
        name: '--cdkit-layout-float-bottom',
        type: CSS_VAR_TYPE.LAYOUT,
        description: [
          '화면 하단 기준 위치 지정',
          'startDirection에 "b"가 포함된 경우 적용',
        ],
      },
    ],
  },
];

const defaultCode = [`<Float startDirection="lt">{children}</Float>`];

const pgCode = `import { Float } from '@cdkit/react-ui';

function App() {
  return <Float>This is Float</Float>;
}

export default App;
`;

export const floatContents: PAGE_CONTENTS = {
  pageTitle: 'Float',
  pageDesc: `부유 속성 컴포넌트`,
  document,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
