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
          <Checkbox.Mark />
        </Checkbox>
        <Checkbox checked>
          <Checkbox.Mark />
        </Checkbox>
        <Checkbox checked multiple>
          <Checkbox.Mark />
        </Checkbox>
        <Checkbox checked disabled>
          <Checkbox.Mark />
        </Checkbox>
        <Checkbox checked multiple disabled>
          <Checkbox.Mark />
        </Checkbox>
      </Flex>
    ),
    code: [
      `<Checkbox><Checkbox.Mark /></Checkbox>`,
      `<Checkbox checked><Checkbox.Mark /></Checkbox>`,
      `<Checkbox checked multiple><Checkbox.Mark /></Checkbox>`,
      `<Checkbox checked disabled><Checkbox.Mark /></Checkbox>`,
      `<Checkbox checked multiple disabled><Checkbox.Mark /></Checkbox>`,
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
        description: ['다중 마킹 모양 여부'],
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
    title: 'CheckboxMarkProps',
    defaultTag: 'div',
    element: [],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = [`<Checkbox><Checkbox.Mark /></Checkbox>`];

const pgCode = `import { Checkbox } from '@cdkit/react-ui';

function App() {
  return <Checkbox><Checkbox.Mark /></Checkbox>;
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
