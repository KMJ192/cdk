import { Flex, Tab } from '@cdkit/react-ui';
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
    subtitle: 'Tab 코드 예시입니다.',
    view: (
      <Flex flexDirection='column' className={style.tab}>
        <Tab direction='horizontal' selected={0}>
          <Tab.Mark></Tab.Mark>
          <Tab.Options>
            <Tab.Option>Option1</Tab.Option>
            <Tab.Option>Option2</Tab.Option>
            <Tab.Option>Option3</Tab.Option>
          </Tab.Options>
        </Tab>
        <Tab direction='vertical' selected={0}>
          <Tab.Mark></Tab.Mark>
          <Tab.Options>
            <Tab.Option>Option1</Tab.Option>
            <Tab.Option>Option2</Tab.Option>
            <Tab.Option>Option3</Tab.Option>
          </Tab.Options>
        </Tab>
      </Flex>
    ),
    code: [
      `<Tab direction='horizontal' selected={0}>`,
      `  <Tab.Mark></Tab.Mark>`,
      `  <Tab.Options>`,
      `    <Tab.Option>Option1</Tab.Option>`,
      `    <Tab.Option>Option2</Tab.Option>`,
      `    <Tab.Option>Option3</Tab.Option>`,
      `  </Tab.Options>`,
      `</Tab>`,
      `<Tab direction='vertical' selected={0}>`,
      `  <Tab.Mark></Tab.Mark>`,
      `  <Tab.Options>`,
      `    <Tab.Option>Option1</Tab.Option>`,
      `    <Tab.Option>Option2</Tab.Option>`,
      `    <Tab.Option>Option3</Tab.Option>`,
      `  </Tab.Options>`,
      `</Tab>`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [
  {
    name: 'TabDirection',
    description: 'Tab 출력 방향',
    code: [`type Direction = "vertical" | "horizontal";`],
  },
];

const params: Array<PARAMS> = [
  {
    title: 'Props',
    defaultTag: 'div',
    element: [
      {
        name: 'direction',
        type: 'TabDirection',
        essential: false,
        defaultValue: 'horizontal',
        description: ['출력 방향'],
      },
      {
        name: 'selected',
        type: 'number',
        essential: false,
        defaultValue: '-1',
        description: ['선택된 값(-1은 선택되지 않았을때의 값 입니다.)'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = [
  `<Tab direction='horizontal' selected={0}>`,
  `  <Tab.Mark></Tab.Mark>`,
  `  <Tab.Options>`,
  `    <Tab.Option>Option1</Tab.Option>`,
  `    <Tab.Option>Option2</Tab.Option>`,
  `    <Tab.Option>Option3</Tab.Option>`,
  `  </Tab.Options>`,
  `</Tab>`,
];

const pgCode = `import { useState } from 'react';
import { Tab } from '@cdkit/react-ui';

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <Tab selected={selected}>
      <Tab.Mark />
      <Tab.Options>
        <Tab.Option onClick={() => setSelected(0)}>Option1</Tab.Option>
        <Tab.Option onClick={() => setSelected(1)}>Option2</Tab.Option>
        <Tab.Option onClick={() => setSelected(2)}>Option3</Tab.Option>
      </Tab.Options>
    </Tab>
  );
}

export default App;
`;

export const tabContents: PAGE_CONTENTS = {
  pageTitle: 'Tab',
  pageDesc: 'Tab 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
