import { Badge, Flex } from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

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

const props: Array<PROPS> = [
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
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    element: [
      {
        name: '--cdkit-color-badge-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상'],
      },
      {
        name: '--cdkit-color-badge-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상'],
      },
    ],
  },
];

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
  props,
  cssVar,
  defaultCode,
  pgCode,
};
