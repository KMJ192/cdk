import { Flex, Switch } from '@cdkit/react-ui';
import { CSS_VAR_TYPE } from '@src/utils/utils';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PARAMS,
} from '@src/components/DocsContents/types';

import style from './style.module.scss';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'Switch 코드 예시입니다.',
    view: (
      <Flex className={style.switch}>
        <Switch>Unchecked</Switch>
        <Switch checked>Checked</Switch>
        <Switch disabled>Disabled</Switch>
        <Switch checked disabled>
          Disabled
        </Switch>
      </Flex>
    ),
    code: [
      `<Switch>Unchecked</Switch>`,
      `<Switch checked>Checked</Switch>`,
      `<Switch disabled>Disabled</Switch>`,
      `<Switch checked disabled>Disabled</Switch>`,
    ],
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
        name: 'checked',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['선택 여부'],
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
    element: [
      {
        name: '--cdkit-color-switch-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상'],
      },
      {
        name: '--cdkit-color-switch-bg-checked',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '선택됨'],
      },
      {
        name: '--cdkit-color-switch-bg-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-switch-bg-checked-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '선택됨', '비활성화'],
      },
      {
        name: '--cdkit-color-switch-bg-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-switch-bg-checked-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '선택됨', '마우스 호버'],
      },
      {
        name: '--cdkit-color-switch-bullet',
        type: CSS_VAR_TYPE.COLOR,
        description: ['불랫 색상'],
      },
      {
        name: '--cdkit-color-switch-bullet-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['불랫 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-switch-bullet-checked',
        type: CSS_VAR_TYPE.COLOR,
        description: ['불랫 색상', '선택됨'],
      },
      {
        name: '--cdkit-color-switch-bullet-checked-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['불랫 색상', '선택됨', '비활성화'],
      },
      {
        name: '--cdkit-color-switch-bullet-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['불랫 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-switch-bullet-checked-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['불랫 색상', '선택됨', '마우스 호버'],
      },
      {
        name: '--cdkit-color-switch-bullet-box-shadow',
        type: CSS_VAR_TYPE.COLOR,
        description: ['불랫 색상', '그림자 색상'],
      },
      {
        name: '--cdkit-color-switch-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상'],
      },
      {
        name: '--cdkit-color-switch-text-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-switch-text-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '비활성화'],
      },
      {
        name: '--cdkit-size-switch-bullet',
        type: CSS_VAR_TYPE.SIZE,
        description: ['불랫 크기'],
      },
      {
        name: '--cdkit-size-switch-width',
        type: CSS_VAR_TYPE.SIZE,
        description: ['너비'],
      },
      {
        name: '--cdkit-size-switch-height',
        type: CSS_VAR_TYPE.SIZE,
        description: ['높이'],
      },
    ],
  },
];

const defaultCode: Array<string> = [`<Switch>Switch</Switch>`];

const pgCode = `import { useState } from 'react';
import { Switch } from '@cdkit/react-ui';

function App() {
  const [checked, setChecked] = useState();

  return (
    <Switch
      checked={checked}
      onClick={() => setChecked(!checked)}
    >
      Switch
    </Switch>
  );
}

export default App;
`;

export const switchContents: PAGE_CONTENTS = {
  pageTitle: 'Switch',
  pageDesc: 'Switch 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
