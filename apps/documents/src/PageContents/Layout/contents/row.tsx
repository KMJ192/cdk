import { Row } from '@cdkit/react-ui';
import type { PROPS, CSS_VARIABLES, DOCUMENT, PAGE_CONTENTS } from './contents';

const document: Array<DOCUMENT> = [
  {
    title: 'Row',
    subtitle: 'Row 컴포넌트 문서',
    desc: ['열을 생성합니다.'],
    view: <Row>This is Row</Row>,
    code: ['<Row>This is Row</Row>'],
  },
];

const props: Array<PROPS> = [];

const cssVar: Array<CSS_VARIABLES> = [];

export const rowContents: PAGE_CONTENTS = {
  pageTitle: 'Row',
  pageDesc: `열을 생성하는 컴포넌트`,
  document,
  props,
  cssVar,
};
