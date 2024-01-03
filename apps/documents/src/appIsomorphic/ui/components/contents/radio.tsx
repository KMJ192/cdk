import { Flex, Radio } from '@cdkit/react-ui';
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
    subtitle: 'Radio 코드 예시입니다.',
    view: (
      <Flex className={style.radio}>
        <Radio>
          <Radio.Mark />
        </Radio>
        <Radio checked>
          <Radio.Mark />
        </Radio>
        <Radio checked={false} disabled>
          <Radio.Mark />
        </Radio>
        <Radio checked disabled>
          <Radio.Mark />
        </Radio>
      </Flex>
    ),
    code: [
      `<Radio><Radio.Mark /></Radio>`,
      `<Radio checked><Radio.Mark /></Radio>`,
      `<Radio checked={false} disabled><Radio.Mark /></Radio>`,
      `<Radio checked disabled><Radio.Mark /></Radio>`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [];

const params: Array<PARAMS> = [
  {
    title: 'RadioProps',
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
  {
    title: 'RadioMarkProps',
    defaultTag: 'div',
    element: [],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = [`<Radio>Radio</Radio>`];

const pgCode = `import { useState } from 'react';
import { Radio } from '@cdkit/react-ui';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio 
      checked={checked}
      onClick={() => setChecked(!checked)}
    >
      <Radio.Mark />
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
  params,
  cssVar,
  defaultCode,
  pgCode,
};
