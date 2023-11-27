'use client';

import { Select, useSelectController } from '@cdkit/react-ui';

import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

const list = Array.from({ length: 50 }, (_, idx: number) => ({
  key: idx,
  content: `Option${idx + 1}`,
}));

const SelectTemplate = () => {
  const {
    open,
    selectBoxRef,
    dropboxRef,
    selectedKey,
    reservedKey,
    boxContent,
    onClickSelect,
    onClickOption,
    onKeyDown,
    optionList,
    isOption,
  } = useSelectController({
    initSelectedIdx: -1,
    optionList: list,
  });

  return (
    <Select
      open={open}
      isOption={isOption}
      onClick={onClickSelect}
      onKeyDown={onKeyDown}
    >
      <Select.Box ref={selectBoxRef} placeholder='placeholder'>
        {boxContent}
      </Select.Box>
      <Select.Dropbox
        ref={dropboxRef}
        direction='down'
        style={{
          maxHeight: '300px',
        }}
      >
        {optionList.map(({ key, content, disabled }, idx) => {
          const selected = key === selectedKey;
          const reserved = key === reservedKey;
          return (
            <Select.Option
              key={key}
              disabled={disabled}
              selected={selected}
              reserved={reserved}
              onClick={(e: React.MouseEvent) => {
                onClickOption(e, idx);
              }}
            >
              {content}
            </Select.Option>
          );
        })}
      </Select.Dropbox>
    </Select>
  );
};

const document: Array<DOCUMENT> = [
  {
    title: 'Select',
    subtitle: 'Select 코드 예시입니다.',
    desc: [],
    view: <SelectTemplate />,
    code: [],
  },
];

const dataType: Array<DATA_TYPE> = [
  {
    name: 'SelectOptionKey',
    description: 'controller 훅을 사용할 경우 리스트 옵션의 키값(Unique)',
    code: ['type SelectOptionKey = number | string;'],
  },
  {
    name: 'SelectOption',
    description:
      'controller 훅을 사용할 경우 리스트 옵션의 요소(useSelectController)',
    code: [
      `type SelectOption = {`,
      `  key: SelectOptionKey;`,
      `  content: React.ReactNode;`,
      `  disabled?: boolean;`,
      `}`,
    ],
  },
  {
    name: 'InputSelectOption',
    description:
      'controller 훅을 사용할 경우 리스트 옵션의 요소(useInputSelectController)',
    code: [
      `type InputSelectOption = {`,
      `  key: SelectOptionKey;`,
      `  index: number;`,
      `  content: React.ReactNode;`,
      `  disabled?: boolean;`,
      `}`,
    ],
  },
];

const props: Array<PROPS> = [
  {
    title: 'Select Props',
    desc: '',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: '',
    desc: '',
    element: [
      {
        name: '',
        type: CSS_VAR_TYPE.COLOR,
        description: [],
      },
    ],
  },
];

const defaultCode: Array<string> = [];

const pgCode = `import { Select, useSelectController } from '@cdkit/react-ui';

const list = Array.from({ length: 10 }, (_, idx: number) => ({
  key: idx,
  content: "Option" + String(idx),
}));

function App() {
  const {
    open,
    selectBoxRef,
    dropboxRef,
    selectedKey,
    reservedKey,
    boxContent,
    onClickSelect,
    onClickOption,
    onKeyDown,
    optionList,
    isOption,
  } = useSelectController({
    initSelectedIdx: -1,
    optionList: list,
  });

  return (
    <Select
      open={open}
      isOption={isOption}
      onClick={onClickSelect}
      onKeyDown={onKeyDown}
    >
      <Select.Box ref={selectBoxRef} placeholder='placeholder'>
        {boxContent}
      </Select.Box>
      <Select.Dropbox
        ref={dropboxRef}
        direction='down'
        style={{
          maxHeight: '300px',
        }}
      >
        {optionList.map(({ key, content, disabled }, idx) => {
          const selected = key === selectedKey;
          const reserved = key === reservedKey;
          return (
            <Select.Option
              key={key}
              disabled={disabled}
              selected={selected}
              reserved={reserved}
              onClick={(e: React.MouseEvent) => {
                onClickOption(e, idx);
              }}
            >
              {content}
            </Select.Option>
          );
        })}
      </Select.Dropbox>
    </Select>
  );
}

export default App;
`;

export const selectContents: PAGE_CONTENTS = {
  pageTitle: 'Select',
  pageDesc: 'Select 컴포넌트',
  document,
  dataType,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
