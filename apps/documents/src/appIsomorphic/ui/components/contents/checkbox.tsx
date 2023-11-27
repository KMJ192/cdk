import { Checkbox, Flex } from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

import style from './style.module.scss';

const document: Array<DOCUMENT> = [
  {
    title: 'Checkbox Example',
    subtitle: 'Checkbox 코드 예시 입니다.',
    desc: [],
    view: (
      <Flex className={style.checkbox}>
        <Checkbox>unchecked</Checkbox>
        <Checkbox checked>checked</Checkbox>
        <Checkbox checked multiple>
          multiple
        </Checkbox>
        <Checkbox disabled>disabled</Checkbox>
        <Checkbox disabled checked>
          disabled
        </Checkbox>
        <Checkbox disabled checked multiple>
          disabled
        </Checkbox>
      </Flex>
    ),
    code: [
      `<Checkbox>unchecked</Checkbox>`,
      `<Checkbox checked>checked</Checkbox>`,
      `<Checkbox checked multiple>multiple</Checkbox>`,
      `<Checkbox disabled>disabled</Checkbox>`,
      `<Checkbox disabled checked>disabled</Checkbox>`,
      `<Checkbox disabled checked multiple>disabled</Checkbox>`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [];

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
        name: 'checked',
        type: 'boolean',
        essential: false,
        defaultValue: 'undefined',
        description: ['마킹 여부'],
      },
      {
        name: 'multiple',
        type: 'boolean',
        essential: false,
        defaultValue: 'undefined',
        description: ['다중 마킹 여부'],
      },
      {
        name: 'disabled',
        type: 'boolean',
        essential: false,
        defaultValue: 'undefined',
        description: ['비활성화 여부'],
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
        name: '--cdkit-color-checkbox-border',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상'],
      },
      {
        name: '--cdkit-color-checkbox-border-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-checkbox-border-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-checkbox-border-checked',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '선택'],
      },
      {
        name: '--cdkit-color-checkbox-border-checked-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '마우스 호버', '선택'],
      },
      {
        name: '--cdkit-color-checkbox-border-checked-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '비활성화', '선택'],
      },
      {
        name: '--cdkit-color-checkbox-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['박스 배경 색상', '마킹된 경우만 적용'],
      },
      {
        name: '--cdkit-color-checkbox-bg-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['박스 배경 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-checkbox-bg-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['박스 배경 색상', '비활성화', '마킹되지 않더라도 적용'],
      },
      {
        name: '--cdkit-color-checkbox-bg-checked-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['박스 배경 색상', '마킹', '비활성화'],
      },
      {
        name: '--cdkit-color-checkbox-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상'],
      },
      {
        name: '--cdkit-color-checkbox-text-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-checkbox-text-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-checkbox-mark',
        type: CSS_VAR_TYPE.COLOR,
        description: ['마킹 색상'],
      },
      {
        name: '--cdkit-color-checkbox-mark-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['마킹 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-checkbox-mark-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['마킹 색상', '비활성화'],
      },
      {
        name: '--cdkit-size-checkbox',
        type: CSS_VAR_TYPE.SIZE,
        description: ['박스 크기'],
      },
    ],
  },
];

const defaultCode: Array<string> = [
  `<Checkbox checked={false} multiple={false} disabled={false}>Checkbox</Checkbox>`,
];

const pgCode = `import { Checkbox } from '@cdkit/react-ui';

function App() {
  return (
    <>
      <Checkbox>unchecked</Checkbox>
      <Checkbox checked>checked</Checkbox>
      <Checkbox checked multiple>
        multiple
      </Checkbox>
      <Checkbox disabled>disabled</Checkbox>
      <Checkbox disabled checked>
        disabled
      </Checkbox>
      <Checkbox disabled checked multiple>
        disabled
      </Checkbox>
    </>
  );
}

export default App;
`;

export const checkboxContents: PAGE_CONTENTS = {
  pageTitle: 'Checkbox',
  pageDesc: 'Checkbox 컴포넌트',
  document,
  dataType,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
