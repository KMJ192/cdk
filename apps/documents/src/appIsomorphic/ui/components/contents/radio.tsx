import { Flex, Radio } from '@cdkit/react-ui';
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
    title: 'Example',
    subtitle: 'Radio 코드 예시입니다.',
    desc: [],
    view: (
      <Flex className={style.radio}>
        <Radio checked={false}>Unchecked</Radio>
        <Radio checked>Checked</Radio>
        <Radio checked={false} disabled>
          Unchecked Disabled
        </Radio>
        <Radio checked disabled>
          Checked Disabled
        </Radio>
      </Flex>
    ),
    code: [
      `<Radio checked={false}>Unchecked</Radio>`,
      `<Radio checked>Checked</Radio>`,
      `<Radio checked={false} disabled>Unchecked Disabled</Radio>`,
      `<Radio checked disabled>Checked Disabled</Radio>`,
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
        defaultValue: 'false',
        description: ['마킹 여부'],
      },
      {
        name: 'disabled',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
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
        name: '--cdkit-color-radio-border,',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상'],
      },
      {
        name: '--cdkit-color-radio-border-checked',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '선택'],
      },
      {
        name: '--cdkit-color-radio-border-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-radio-border-checked-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '선택', '비활성화'],
      },
      {
        name: '--cdkit-color-radio-border-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-radio-border-checked-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상', '선택', '마우스 호버'],
      },
      {
        name: '-cdkit-color-radio-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경색'],
      },
      {
        name: '--cdkit-color-radio-bg-checked',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경색', '선택'],
      },
      {
        name: '--cdkit-color-radio-bg-checked-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경색', '선택', '마우스 호버'],
      },
      {
        name: '--cdkit-color-radio-bg-checked-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경색', '선택', '비활성화'],
      },
      {
        name: '--cdkit-color-radio-bg-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경색', '비활성화'],
      },
      {
        name: '--cdkit-color-radio-bg-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경색', '마우스 호버'],
      },
      {
        name: '--cdkit-color-radio-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상'],
      },
      {
        name: '--cdkit-color-radio-text-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-radio-text-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-radio-pupil,',
        type: CSS_VAR_TYPE.COLOR,
        description: ['마크 색상'],
      },
      {
        name: '--cdkit-color-radio-pupil-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['마크 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-radio-pupil-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['마크 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-size-radio',
        type: CSS_VAR_TYPE.SIZE,
        description: ['크기'],
      },
      {
        name: '--cdkit-size-radio-pupil',
        type: CSS_VAR_TYPE.SIZE,
        description: ['마크 크기'],
      },
    ],
  },
];

const defaultCode: Array<string> = [`<Radio>Radio</Radio>`];

const pgCode = `import { useState } from 'react';
import { Radio } from '@cdkit/react-ui';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio 
      checked={checked}
      disabled={false}
      onClick={() => setChecked(!checked)}
    >
      Radio
    </Radio>
  );
}

export default App;
`;

export const radioContents: PAGE_CONTENTS = {
  pageTitle: 'Radio',
  pageDesc: 'Radio 컴포넌트',
  document,
  dataType,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
