import { Checkbox, Flex } from '@cdkit/react-ui';
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
    subtitle: 'Checkbox 예시입니다.',
    view: (
      <Flex className={style.checkbox}>
        <Checkbox>
          <Checkbox.MarkField>
            <Checkbox.Mark></Checkbox.Mark>
          </Checkbox.MarkField>
        </Checkbox>
        <Checkbox checked>
          <Checkbox.MarkField>
            <Checkbox.Mark></Checkbox.Mark>
          </Checkbox.MarkField>
        </Checkbox>
        <Checkbox checked multiple>
          <Checkbox.MarkField>
            <Checkbox.Mark></Checkbox.Mark>
          </Checkbox.MarkField>
        </Checkbox>
        <Checkbox checked disabled>
          <Checkbox.MarkField>
            <Checkbox.Mark></Checkbox.Mark>
          </Checkbox.MarkField>
        </Checkbox>
        <Checkbox checked multiple disabled>
          <Checkbox.MarkField>
            <Checkbox.Mark></Checkbox.Mark>
          </Checkbox.MarkField>
        </Checkbox>
      </Flex>
    ),
    code: [
      `<Checkbox><Checkbox.MarkField><Checkbox.Mark></Checkbox.Mark></Checkbox.MarkField></Checkbox>`,
      `<Checkbox checked><Checkbox.MarkField><Checkbox.Mark></Checkbox.Mark></Checkbox.MarkField></Checkbox>`,
      `<Checkbox checked multiple><Checkbox.MarkField><Checkbox.Mark></Checkbox.Mark></Checkbox.MarkField></Checkbox>`,
      `<Checkbox checked disabled><Checkbox.MarkField><Checkbox.Mark></Checkbox.Mark></Checkbox.MarkField></Checkbox>`,
      `<Checkbox checked multiple disabled><Checkbox.MarkField><Checkbox.Mark></Checkbox.Mark></Checkbox.MarkField></Checkbox>`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [];

const params: Array<PARAMS> = [
  {
    title: 'Checkbox Props',
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
  {
    title: 'MarkField Props',
    defaultTag: 'div',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = [
  `<Checkbox>`,
  `  <Checkbox.MarkField>`,
  `    <Checkbox.Mark></Checkbox.Mark>`,
  `  </Checkbox.MarkField>`,
  `</Checkbox>`,
];

const pgCode = `import { Checkbox } from '@cdkit/react-ui';

function App() {
  return <Checkbox></Checkbox>;
}

export default App;
`;

export const checkboxContents: PAGE_CONTENTS = {
  pageTitle: 'Checkbox',
  pageDesc: 'Checkbox 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
