import type { PROPS, CSS_VARIABLES, DOCUMENT, PAGE_CONTENTS } from './contents';

const document: Array<DOCUMENT> = [
  {
    title: 'Float',
    subtitle: 'Float 컴포넌트 문서',
    desc: ['부유 속성을 생성합니다.'],
    view: '부유 속성',
    code: ['<Float>부유 속성</Float>'],
  },
];

const props: Array<PROPS> = [];

const cssVar: Array<CSS_VARIABLES> = [];

export const floatContents: PAGE_CONTENTS = {
  pageTitle: 'Float',
  pageDesc: `부유 속성 컴포넌트`,
  document,
  props,
  cssVar,
};
