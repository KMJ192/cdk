import { Textarea } from '@cdkit/react-ui';
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
    subtitle: '코드 예시입니다.',
    view: <Textarea placeholder='placeholder' />,
    code: ['<Textarea placeholder="placeholder" />'],
  },
];

const dataType: Array<DATA_TYPE> = [];

const params: Array<PARAMS> = [
  {
    title: 'Props',
    defaultTag: 'textarea',
    element: [
      {
        name: 'error',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['error 타입 경계선 여부'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = ['<Textarea placeholder="placeholder" />'];

const pgCode = `import { Textarea } from '@cdkit/react-ui';

function App() {
  return <Textarea placeholder="placeholder" />;
}

export default App;
`;

export const textareaContents: PAGE_CONTENTS = {
  pageTitle: 'Textarea',
  pageDesc: 'Textarea 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
