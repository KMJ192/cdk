import { Grid } from '@cdkit/react-ui';
import type { PROPS, CSS_VARIABLES, DOCUMENT, PAGE_CONTENTS } from './contents';

const document: Array<DOCUMENT> = [
  {
    title: 'Grid',
    subtitle: 'Grid 컴포넌트 문서',
    desc: ['grid를 설정합니다.'],
    view: <Grid>This is Grid Display</Grid>,
    code: [`<Grid>This is Grid Display</Grid>`],
  },
];

const props: Array<PROPS> = [
  {
    title: 'Props',
    desc: '',
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

const defaultCode = ['<Grid>{children}</Grid>'];

const pgCode = `import { Grid } from '@cdkit/react-ui';

function App() {
  return <Grid>This is Grid</Grid>;
}

export default App;
`;

export const gridContents: PAGE_CONTENTS = {
  pageTitle: 'Grid',
  pageDesc: `"display: grid;"가 지정된 컴포넌트`,
  document,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
