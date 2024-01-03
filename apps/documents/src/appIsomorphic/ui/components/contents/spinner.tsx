import { Flex, Spinner } from '@cdkit/react-ui';
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
    subtitle: 'Spinner 코드 예시입니다.',
    view: (
      <Flex className={style.spinner}>
        <Spinner type='type-1' />
        <Spinner type='type-2' />
      </Flex>
    ),
    code: [`<Spinner type='type-1' />`, `<Spinner type='type-2' />`],
  },
];

const dataType: Array<DATA_TYPE> = [];

const params: Array<PARAMS> = [
  {
    title: 'Props',
    defaultTag: 'div',
    element: [
      {
        name: 'type',
        type: '"type-1" | "type-2"',
        essential: false,
        defaultValue: 'type-1',
        description: ['Spinner 타입'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    element: [
      {
        name: '--cdkit-color-spinner-color1',
        type: CSS_VAR_TYPE.COLOR,
        description: ['색상1'],
      },
      {
        name: '--cdkit-color-spinner-color2',
        type: CSS_VAR_TYPE.COLOR,
        description: ['색상2'],
      },
    ],
  },
];

const defaultCode: Array<string> = ['<Spinner />'];

const pgCode = `import { Spinner } from '@cdkit/react-ui';

function App() {
  return (
    <>
      <Spinner />
      <Spinner type="type-2" />
    </>
  );
}

export default App;
`;

export const spinnerContents: PAGE_CONTENTS = {
  pageTitle: 'Spinner',
  pageDesc: 'Spinner 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
