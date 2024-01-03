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
        <Switch>
          <Switch.Bullet />
        </Switch>
        <Switch checked>
          <Switch.Bullet />
        </Switch>
        <Switch disabled>
          <Switch.Bullet />
        </Switch>
        <Switch checked disabled>
          <Switch.Bullet />
        </Switch>
      </Flex>
    ),
    code: [
      `<Switch><Switch.Bullet /></Switch>`,
      `<Switch checked><Switch.Bullet /></Switch>`,
      `<Switch disabled><Switch.Bullet /></Switch>`,
      `<Switch checked disabled><Switch.Bullet /></Switch>`,
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
  {
    title: 'SwitchBulletProps',
    defaultTag: 'div',
    element: [],
  },
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    element: [
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

const defaultCode: Array<string> = [`<Switch><Switch.Bullet /></Switch>`];

const pgCode = `import { useState } from 'react';
import { Switch } from '@cdkit/react-ui';

function App() {
  const [checked, setChecked] = useState();

  return (
    <Switch
      checked={checked}
      onClick={() => setChecked(!checked)}
    >
      <Switch.Bullet />
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
