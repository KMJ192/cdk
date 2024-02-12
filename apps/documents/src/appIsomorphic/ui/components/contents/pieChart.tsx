import { PieChart } from '@cdkit/react-ui';
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
    subtitle: 'PieChart 코드 예시입니다.',
    view: (
      <PieChart
        title='Title'
        data={{
          total: 150,
          name: ['first', 'second', 'third', 'fourth', 'last'],
          value: [40, 20, 30, 40, 20],
          color: ['green', 'red', 'blue', 'magenta', 'skyblue'],
        }}
      />
    ),
    code: [
      `<PieChart`,
      `  title='Title'`,
      `  data={{`,
      `    total: 400,`,
      `    name: ['first', 'second', 'third', 'fourth', 'last'],`,
      `    value: [40, 20, 30, 40, 20],`,
      `    color: ['green', 'red', 'blue', 'magenta', 'skyblue'],`,
      `  }}`,
      `/>`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [
  {
    name: 'PieChartData',
    description: 'PieChart 입력데이터 입니다.',
    code: [
      `type PieChartData = {`,
      `  total: number;`,
      `  name: Array<string>;`,
      `  value: Array<number>;`,
      `  color: Array<string>;`,
      `};`,
    ],
  },
  {
    name: 'PieChartStyle',
    description: '입력 스타일 입니다.',
    code: [
      `type PieChartStyles = {`,
      `  fontWeight: string;`,
      `  fontFamily: string;`,
      `  fontColor: string;`,
      `  backgroundColor: string;`,
      `  title: {`,
      `    fontWeight: string;`,
      `    fontFamily: string;`,
      `    fontColor: string;`,
      `  }`,
      `  legend: {`,
      `    fontWeight: string;`,
      `    fontFamily: string;`,
      `    fontColor: string;`,
      `    direction: 'v' | 'h';`,
      `  };`,
      `  tooltip: {`,
      `    fontWeight: string;`,
      `    fontFamily: string;`,
      `    fontColor: string;`,
      `    backgroundColor: string;`,
      `    borderRadius: number;`,
      `    borderColor: string;`,
      `  };`,
      `};`,
    ],
  },
];

const params: Array<PARAMS> = [
  {
    title: 'PieChartProps',
    defaultTag: 'div',
    element: [
      {
        name: 'data',
        type: 'PieChartData',
        essential: false,
        defaultValue: '{ total: 0, name: [], value: [], color: [] }',
        description: ['출력 데이터'],
      },
      {
        name: 'title',
        type: 'string',
        essential: false,
        defaultValue: `""`,
        description: ['타이틀'],
      },
      {
        name: 'styles',
        type: 'PieChartStyles',
        essential: false,
        defaultValue: 'undefined',
        description: ['입력 스타일'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = [
  `<PieChart title='' data={{ total: 0, name: [], value: [], color: [] }} />`,
];

const pgCode = `import { PieChart } from '@cdkit/react-ui';

function App() {
  return (
    <PieChart
      title='Title'
      data={{
        total: 150,
        name: ['first', 'second', 'third', 'fourth', 'last'],
        value: [40, 20, 30, 40, 20],
        color: ['green', 'red', 'blue', 'magenta', 'skyblue'],
      }}
    />
  );
}

export default App;
`;

export const pieChartContents: PAGE_CONTENTS = {
  pageTitle: 'PieChart',
  pageDesc: 'PieChart 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
