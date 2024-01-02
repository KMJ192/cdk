import { Badge, Flex } from '@cdkit/react-ui';
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
    subtitle: 'Badge 코드 예시입니다.',
    view: (
      <Flex className={style.badge}>
        <Badge colorSchema='primary'>primary</Badge>
        <Badge colorSchema='success'>success</Badge>
        <Badge colorSchema='info'>info</Badge>
        <Badge colorSchema='warning'>warning</Badge>
        <Badge colorSchema='danger'>danger</Badge>
      </Flex>
    ),
    code: [
      `<Badge colorSchema='primary'>primary</Badge>`,
      `<Badge colorSchema='success'>success</Badge>`,
      `<Badge colorSchema='info'>info</Badge>`,
      `<Badge colorSchema='warning'>warning</Badge>`,
      `<Badge colorSchema='danger'>danger</Badge>`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [];

const params: Array<PARAMS> = [
  {
    title: 'Props',
    defaultTag: 'span',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
      {
        name: 'colorSchema',
        type: '"primary" | "success" | "info" | "warning" | "danger"',
        essential: false,
        defaultValue: 'primary',
        description: ['변형 타입 설정'],
      },
      {
        name: 'display',
        type: '"flex" | "grid"',
        essential: false,
        defaultValue: 'flex',
        description: ['display 설정'],
      },
      {
        name: 'flexDirection',
        type: '"column" | "row" | "column-reverse" | "row-reverse"',
        essential: false,
        defaultValue: 'undefined',
        description: ['flex-direction (display가 flex로 설정된 경우만)'],
      },
      {
        name: 'centerVertical',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['중앙정렬 - 수직'],
      },
      {
        name: 'centerHorizontal',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['중앙정렬 - 수평'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = [
  '<Badge colorSchema="primary">Badge</Badge>',
];

const pgCode = `import { Badge } from '@cdkit/react-ui';

function App() {
  return (
    <>
      <Badge colorSchema='primary'>primary</Badge>
      <Badge colorSchema='success'>success</Badge>
      <Badge colorSchema='info'>info</Badge>
      <Badge colorSchema='warning'>warning</Badge>
      <Badge colorSchema='danger'>danger</Badge>
    </>
  );
}

export default App;
`;

export const badgeContents: PAGE_CONTENTS = {
  pageTitle: 'Badge',
  pageDesc: 'Badge 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
