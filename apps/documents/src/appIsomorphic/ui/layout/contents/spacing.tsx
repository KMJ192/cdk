import { Spacing } from '@cdkit/react-ui';
import type { PROPS, CSS_VARIABLES, DOCUMENT, PAGE_CONTENTS } from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

const document: Array<DOCUMENT> = [
  {
    title: 'Spacing',
    subtitle: 'Spacing 컴포넌트 문서',
    desc: ['빈 공간을 추가합니다.'],
    view: (
      <>
        <div>first element</div>
        <Spacing spacing={1} unit='rem' />
        <div>second element</div>
      </>
    ),
    code: [
      '<div>first element</div>',
      '<Spacing spacing={1} unit="rem" />',
      `<div>second element</div>`,
    ],
  },
];

const props: Array<PROPS> = [
  {
    title: 'Props',
    desc: '',
    element: [
      {
        name: 'direction',
        type: '"horizontal" | "vertical"',
        essential: false,
        defaultValue: 'vertical',
        description: ['공간 방향'],
      },
      {
        name: 'spacing',
        type: 'number',
        essential: false,
        defaultValue: 'undefined',
        description: ['공간 너비'],
      },
      {
        name: 'unit',
        type: '"px" | "em" | "rem"',
        essential: false,
        defaultValue: 'px',
        description: ['공간 단위'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    desc: '',
    element: [
      {
        name: '--cdkit-layout-spacing-gap',
        type: CSS_VAR_TYPE.LAYOUT,
        defaultValue: '0px',
        description: ['사이 공간 지정'],
      },
    ],
  },
];

const defaultCode = ['<Spacing spacing={0} direction="vertical" unit="px" />'];

const pgCode = `import { Spacing } from '@cdkit/react-ui';

function App() {
  return (
    <div>
      <div>first element</div>
      <Spacing spacing={30} unit="px"  />
      <div>second element</div>
    </div>
  );
}

export default App;
`;

export const spacingContents: PAGE_CONTENTS = {
  pageTitle: 'Spacing',
  pageDesc: `공간을 차지하는 컴포넌트`,
  document,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
