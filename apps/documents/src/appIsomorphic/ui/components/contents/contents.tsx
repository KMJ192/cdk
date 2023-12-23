import { Text } from '@cdkit/react-ui';

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
import type { PAGE_CONTENTS } from '@src/components/DocsContents/types';

const TAB_OPTIONS = [
  {
    key: 'docs',
    contents: (
      <Text typo='b2' data-index='0'>
        문서
      </Text>
    ),
  },
  {
    key: 'data-types',
    contents: (
      <Text typo='b2' data-index='1'>
        타입
      </Text>
    ),
  },
  {
    key: 'apis',
    contents: (
      <Text typo='b2' data-index='2'>
        APIs
      </Text>
    ),
  },
  {
    key: 'playground',
    contents: (
      <Text typo='b2' data-index='3'>
        테스트
      </Text>
    ),
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

export { COMPONENT_CONTENTS, TAB_OPTIONS };
