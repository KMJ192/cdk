import { Flex, Tab } from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

import style from './style.module.scss';

const options = [
  {
    key: 0,
    contents: 'option1',
  },
  {
    key: 1,
    contents: 'option2',
  },
  {
    key: 2,
    contents: 'option3',
  },
];

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'Tab 코드 예시입니다.',
    view: (
      <Flex flexDirection='column' className={style.tab}>
        <Tab options={options} direction='horizontal' />
        <Tab options={options} direction='vertical' />
      </Flex>
    ),
    code: [
      `<Tab options={options} direction='horizontal' />`,
      `<Tab options={options} direction='vertical' />`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [
  {
    name: 'TabOptionKey',
    description: '개별 옵션의 키값(Unique)',
    code: [`type TabOptionKey = number | string`],
  },
  {
    name: 'TabOption',
    description: '개별 옵션 정보',
    code: [
      `type TabOption = {`,
      `  key: TabOptionKey`,
      `  contents: React.ReactNode`,
      `  disabled: boolean`,
      `}`,
    ],
  },
];

const props: Array<PROPS> = [
  {
    title: 'Props',
    defaultTag: 'div',
    element: [
      {
        name: 'options',
        type: 'Array<TabOption>',
        essential: false,
        defaultValue: '[]',
        description: ['옵션 리스트'],
      },
      {
        name: 'direction',
        type: '"vertical" | "horizontal"',
        essential: false,
        defaultValue: 'horizontal',
        description: ['출력 방향'],
      },
      {
        name: 'selected',
        type: '',
        essential: false,
        defaultValue: '0',
        description: ['선택된 값'],
      },
      {
        name: 'onSelect',
        type: '(key: TabOptionKey, idx: number) => void',
        essential: false,
        defaultValue: '() => {}',
        description: ['선택 이벤트 수신기'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    element: [
      {
        name: '--cdkit-color-tab-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상'],
      },
      {
        name: '--cdkit-color-tab-bg-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-tab-bg-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-tab-select-line',
        type: CSS_VAR_TYPE.COLOR,
        description: ['선택된 요소 표시선'],
      },
      {
        name: '--cdkit-color-tab-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상'],
      },
      {
        name: '--cdkit-color-tab-text-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-tab-text-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '비활성화'],
      },
    ],
  },
];

const defaultCode: Array<string> = [
  `<Tab options={[`,
  `  {`,
  `    key: 0,`,
  `    contents: 'option1',`,
  `  },`,
  `  {`,
  `    key: 1,`,
  `    contents: 'option2',`,
  `  },`,
  `  {`,
  `    key: 2,`,
  `    contents: 'option3',`,
  `  },`,
  `]} />`,
];

const pgCode = `import { useState } from 'react';
import { Tab } from '@cdkit/react-ui';

const options = [
  {
    key: 0,
    contents: 'option1',
  },
  {
    key: 1,
    contents: 'option2',
  },
  {
    key: 2,
    contents: 'option3',
  },
];

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <Tab
      selected={selected}
      options={options}
      onSelect={(key, idx) => setSelected(idx)}
    />
  );
}

export default App;
`;

export const tabContents: PAGE_CONTENTS = {
  pageTitle: 'Tab',
  pageDesc: 'Tab 컴포넌트',
  document,
  dataType,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
