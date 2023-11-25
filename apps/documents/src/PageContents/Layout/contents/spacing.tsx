import { Spacing } from '@cdkit/react-ui';
import type { PROPS, CSS_VARIABLES, DOCUMENT, PAGE_CONTENTS } from './contents';

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

const props: Array<PROPS> = [];

const cssVar: Array<CSS_VARIABLES> = [];

export const spacingContents: PAGE_CONTENTS = {
  pageTitle: 'Spacing',
  pageDesc: `공간을 차지하는 컴포넌트`,
  document,
  props,
  cssVar,
};
