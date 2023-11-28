import { Textarea } from '@cdkit/react-ui';
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
    subtitle: '코드 예시입니다.',
    view: <Textarea placeholder='placeholder' />,
    code: ['<Textarea placeholder="placeholder" />'],
  },
];

const dataType: Array<DATA_TYPE> = [];

const props: Array<PROPS> = [
  {
    title: 'Props',
    defaultTag: 'textarea',
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
    element: [
      {
        name: '--cdkit-color-textarea-border',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상'],
      },
      {
        name: '--cdkit-color-textarea-border-focus',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '포커싱'],
      },
      {
        name: '--cdkit-color-textarea-border-error',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '오류'],
      },
      {
        name: '--cdkit-color-textarea-border-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-textarea-border-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-textarea-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상'],
      },
      {
        name: '--cdkit-color-textarea-bg-focus',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '포커싱'],
      },
      {
        name: '--cdkit-color-textarea-bg-error',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '오류'],
      },
      {
        name: '--cdkit-color-textarea-bg-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-textarea-bg-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-textarea-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상'],
      },
      {
        name: '--cdkit-color-textarea-text-focus',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '포커싱'],
      },
      {
        name: '--cdkit-color-input-text-error',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '오류'],
      },
      {
        name: '--cdkit-color-textarea-text-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-textarea-text-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-textarea-placeholder',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Placeholder 색상'],
      },
      {
        name: '--cdkit-color-textarea-placeholder-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['Placeholder 색상', '비활성화'],
      },
    ],
  },
];

const defaultCode: Array<string> = ['<Textarea placeholder="placeholder" />'];

const pgCode = `import { Textarea } from '@cdkit/react-ui';

function App() {
  return <Textarea placeholder="placeholder" />;
}

export default App;
`;

export const textareaContents: PAGE_CONTENTS = {
  pageTitle: 'Textarea',
  pageDesc: 'Textarea 컴포넌트',
  document,
  dataType,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
