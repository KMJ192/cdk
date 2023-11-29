import type { ReactNode } from 'react';
import { CSS_VAR_TYPE } from '@src/utils/utils';

type DOCUMENT = {
  title: string;
  subtitle: string;
  view: ReactNode | 'none';
  code: Array<string>;
};

type DATA_TYPE = {
  name: string;
  description: string;
  code: Array<string>;
};

type PARAMS = {
  title: string;
  defaultTag: string | 'none';
  element: Array<{
    name: string;
    type: string;
    essential: boolean;
    defaultValue: string;
    description: Array<string>;
  }>;
};

type CSS_VARIABLES = {
  title: string;
  element: Array<{
    name: string;
    type:
      | typeof CSS_VAR_TYPE.COLOR
      | typeof CSS_VAR_TYPE.SIZE
      | typeof CSS_VAR_TYPE.LAYOUT;
    description: Array<string>;
  }>;
};

type PAGE_CONTENTS = {
  pageTitle: string;
  pageDesc: string;
  document: Array<DOCUMENT>;
  dataType: Array<DATA_TYPE>;
  params: Array<PARAMS>;
  cssVar: Array<CSS_VARIABLES>;
  defaultCode: Array<string>;
  pgCode: string;
};

export type { DOCUMENT, DATA_TYPE, PARAMS, CSS_VARIABLES, PAGE_CONTENTS };
