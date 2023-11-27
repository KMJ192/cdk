import type { ReactNode } from 'react';
import { TabOption, Text } from '@cdkit/react-ui';

import { typoContents } from './typo';
import { buttonContents } from './button';
import { badgeContents } from './badge';
import { inputContents } from './input';
import { checkboxContents } from './checkbox';
import { popupContents } from './popup';
import { progressBarContents } from './progressBar';
import { radioContents } from './radio';
import { radioGroupContents } from './radioGroup';
import { spinnerContents } from './spinner';
import { switchContents } from './switch';
import { selectContents } from './select';
import { tabContents } from './tab';
import { dataTableContents } from './dataTable';
import { textareaContents } from './textarea';
import { cardContents } from './card';

type DOCUMENT = {
  title: string;
  subtitle: string;
  desc: Array<string>;
  view: ReactNode;
  code: Array<string>;
};

type DATA_TYPE = {
  name: string;
  description: string;
  code: Array<string>;
};

type PROPS = {
  title: string;
  desc: string;
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
  desc: string;
  element: Array<{
    name: string;
    type: 'color' | 'size' | 'layout';
    description: Array<string>;
  }>;
};

type PAGE_CONTENTS = {
  pageTitle: string;
  pageDesc: string;
  document: Array<DOCUMENT>;
  dataType: Array<DATA_TYPE>;
  props: Array<PROPS>;
  cssVar: Array<CSS_VARIABLES>;
  defaultCode: Array<string>;
  pgCode: string;
};

const TAB_OPTIONS: Array<TabOption> = [
  {
    key: 'docs',
    contents: <Text typo='b2'>문서</Text>,
  },
  {
    key: 'data-types',
    contents: <Text typo='b2'>타입</Text>,
  },
  {
    key: 'apis',
    contents: <Text typo='b2'>APIs</Text>,
  },
  {
    key: 'playground',
    contents: <Text typo='b2'>테스트</Text>,
  },
];

const COMPONENT_CONTENTS: { [key: string]: PAGE_CONTENTS } = {
  typo: typoContents,
  badge: badgeContents,
  button: buttonContents,
  input: inputContents,
  card: cardContents,
  checkbox: checkboxContents,
  popup: popupContents,
  'progress-bar': progressBarContents,
  radio: radioContents,
  'radio-group': radioGroupContents,
  spinner: spinnerContents,
  switch: switchContents,
  select: selectContents,
  tab: tabContents,
  'data-table': dataTableContents,
  textarea: textareaContents,
};

export type { DOCUMENT, DATA_TYPE, PROPS, CSS_VARIABLES, PAGE_CONTENTS };
export { COMPONENT_CONTENTS, TAB_OPTIONS };
