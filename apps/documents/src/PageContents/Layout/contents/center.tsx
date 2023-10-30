import { Center, Text } from '@cdkit/react-ui';
import { APIS, CSS_VARIABLES, DOCUMENT, PAGE_CONTENTS } from './contents';

const document: Array<DOCUMENT> = [
  {
    title: 'Center',
    desc: 'Center 컴포넌트 문서',
    view: <Center>This is Center</Center>,
    code: [`<Center>This is Center</Center>`],
  },
];

const apis: Array<APIS> = [];

const cssVar: Array<CSS_VARIABLES> = [];

export const centerContents: PAGE_CONTENTS = {
  pageTitle: 'Center',
  pageDesc: '중앙을 지정하는 컴포넌트',
  tabOption: [
    {
      key: 'docs',
      contents: <Text typo='b2'>문서</Text>,
    },
    {
      key: 'apis',
      contents: <Text typo='b2'>APIs</Text>,
    },
    {
      key: 'playground',
      contents: <Text typo='b2'>플레이 그라운드</Text>,
    },
  ],
  document,
  apis,
  cssVar,
};
