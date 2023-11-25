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

const props: Array<PROPS> = [];

const cssVar: Array<CSS_VARIABLES> = [];

export const gridContents: PAGE_CONTENTS = {
  pageTitle: 'Grid',
  pageDesc: `"display: grid;"가 지정된 컴포넌트`,
  document,
  props,
  cssVar,
};
