import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: '',
    desc: [],
    view: '',
    code: [],
  },
];

const dataType: Array<DATA_TYPE> = [
  {
    name: '',
    description: '',
    code: [''],
  },
];

const props: Array<PROPS> = [
  {
    title: 'Props',
    desc: '',
    element: [],
  },
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: '',
    desc: '',
    element: [
      {
        name: '',
        type: CSS_VAR_TYPE.COLOR,
        description: [],
      },
    ],
  },
];

const defaultCode: Array<string> = [];

const pgCode = `import { Button } from '@cdkit/react-ui';

function App() {
  return (
    <Button 
      variant='primary'
      shape='rect'
      loading={false}
    >
      Button
    </Button>
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
