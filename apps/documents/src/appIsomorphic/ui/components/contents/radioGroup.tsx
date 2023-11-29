import { RadioGroup } from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PARAMS,
} from '@src/components/DocsContents/types';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'RadioGroup 코드 예시입니다.',
    view: (
      <RadioGroup
        selected={0}
        options={[
          {
            key: 0,
            children: 'first',
            disabled: false,
          },
          {
            key: 1,
            children: 'second',
            disabled: false,
          },
          {
            key: 2,
            children: 'third',
            disabled: false,
          },
        ]}
      />
    ),
    code: [
      `<RadioGroup`,
      `  selected={0}`,
      `  options={[`,
      `    {`,
      `      key: 0,`,
      `      children: 'first',`,
      `      disabled: false,`,
      `    },`,
      `    {`,
      `      key: 1,`,
      `      children: 'second',`,
      `      disabled: false,`,
      `    },`,
      `    {`,
      `      key: 2,`,
      `      children: 'third',`,
      `      disabled: false,`,
      `    },`,
      `  ]}`,
      `/>`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [
  {
    name: 'RadioGroupOptionKey',
    description: '개별 옵션의 키값(Unique)',
    code: [`type Option = string | number`],
  },
  {
    name: 'RadioGroupOption',
    description: '개별 옵션 정보',
    code: [
      `type RadioGroupOption = {`,
      `  children: React.ReactNode;`,
      `  disabled: boolean;`,
      `  key: RadioGroupOptionKey;`,
      `}`,
    ],
  },
];

const params: Array<PARAMS> = [
  {
    title: 'Props',
    defaultTag: 'div',
    element: [
      {
        name: 'options',
        type: 'Array<RadioGroupOption>',
        essential: false,
        defaultValue: '[]',
        description: ['라디오 그룹 데이터'],
      },
      {
        name: 'direction',
        type: '"horizontal" | "vertical"',
        essential: false,
        defaultValue: 'horizontal',
        description: ['출력 방향'],
      },
      {
        name: 'selected',
        type: 'number',
        essential: false,
        defaultValue: '-1',
        description: ['선택된 값'],
      },
      {
        name: 'onSelect',
        type: '(key: RadioGroupOptionKey, idx: number) => void',
        essential: false,
        defaultValue: '() => {}',
        description: [
          '라디오 버튼 클릭 수신기',
          '옵션의 키와 인덱스를 넘겨줍니다.',
        ],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = [
  `<RadioGroup options=[] direction="horizontal" selected={-1} />`,
];

const pgCode = `import { useState } from 'react';
import { RadioGroup } from '@cdkit/react-ui';

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <RadioGroup
      selected={selected}
      options={[
        {
          key: 0,
          children: 'first',
          disabled: false,
        },
        {
          key: 1,
          children: 'second',
          disabled: false,
        },
        {
          key: 2,
          children: 'third',
          disabled: false,
        },
      ]}
      onSelect={(key, idx) => setSelected(idx)}
    />
  );
}

export default App;
`;

export const radioGroupContents: PAGE_CONTENTS = {
  pageTitle: 'RadioGroup',
  pageDesc: 'RadioGroup 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
