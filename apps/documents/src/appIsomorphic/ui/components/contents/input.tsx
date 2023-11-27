import { Input } from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'Input 코드 예시입니다.',
    desc: [],
    view: <Input placeholder='placeholder' />,
    code: ['<Input placeholder="placeholder" />'],
  },
];

const dataType: Array<DATA_TYPE> = [];

const props: Array<PROPS> = [
  {
    title: 'Props',
    desc: '',
    element: [
      {
        name: 'error',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['error 타입 경계선 여부'],
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
        name: '--cdkit-color-input-border',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상'],
      },
      {
        name: '--cdkit-color-input-border-focus',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '활성화'],
      },
      {
        name: '--cdkit-color-input-border-error',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '오류'],
      },
      {
        name: '--cdkit-color-input-border-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-input-border-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-input-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상'],
      },
      {
        name: '--cdkit-color-input-bg-focus',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '활성화'],
      },
      {
        name: '--cdkit-color-input-bg-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-input-bg-error',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '오류'],
      },
      {
        name: '--cdkit-color-input-bg-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-input-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상'],
      },
      {
        name: '--cdkit-color-input-text-focus',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '활성화'],
      },
      {
        name: '--cdkit-color-input-text-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-input-text-error',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '오류'],
      },
      {
        name: '--cdkit-color-input-text-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-input-placeholder',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Placeholder 색상'],
      },
      {
        name: '--cdkit-color-input-placeholder-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Placeholder 색상', '비활성화'],
      },
    ],
  },
];

const defaultCode: Array<string> = [];

const pgCode = `import { Input } from '@cdkit/react-ui';

function App() {
  return <Input placeholder="placeholder" />;
}

export default App;
`;

export const inputContents: PAGE_CONTENTS = {
  pageTitle: 'Input',
  pageDesc: 'Input 컴포넌트',
  document,
  dataType,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
