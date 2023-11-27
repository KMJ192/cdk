'use client';

import {
  Select,
  useInputSelectController,
  useSelectController,
  type SelectOption,
  type InputSelectOption,
} from '@cdkit/react-ui';

import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

const primaryList: Array<SelectOption> = Array.from(
  { length: 5 },
  (_, idx: number) => ({
    key: idx,
    content: `Option${idx + 1}`,
  }),
);

const inputList: Array<InputSelectOption> = [
  {
    key: 0,
    content: '안녕',
    index: 0,
  },
  {
    key: 1,
    content: '안녕하세요.',
    index: 1,
  },
  {
    key: 2,
    content: 'app',
    index: 2,
  },
  {
    key: 3,
    content: 'apple',
    index: 3,
  },
  {
    key: 4,
    content: 'application',
    index: 4,
  },
];

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
    optionList: primaryList,
  });

  return (
    <Select
      open={open}
      isOption={isOption}
      onClick={onClickSelect}
      onKeyDown={onKeyDown}
    >
      <Select.Box ref={selectBoxRef} placeholder='select'>
        {boxContent}
      </Select.Box>
      <Select.Dropbox ref={dropboxRef} direction='down'>
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

const InputSelectTemplate = () => {
  const {
    open,
    reservedKey,
    selectedKey,
    onClickOption,
    onClickSelect,
    onKeyDown,
    onChange,
    optionList,
    isOption,
    inputBoxRef,
    dropboxRef,
  } = useInputSelectController({
    initSelectedIdx: -1,
    optionList: inputList,
    caseSensitive: false,
  });

  return (
    <Select
      open={open}
      isOption={isOption}
      onClick={onClickSelect}
      onKeyDown={onKeyDown}
    >
      <Select.InputBox
        ref={inputBoxRef}
        placeholder='input select'
        onChange={onChange}
      />
      <Select.Dropbox
        ref={dropboxRef}
        direction='down'
        style={{
          maxHeight: '240px',
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
    code: [
      `<Select>`,
      `  <Select.Box placeholder='select'>`,
      `    {selectedOption}`,
      `  </Select.Box>`,
      `  <Select.Dropbox ref={dropboxRef} direction='down'>`,
      `    <Select.Option>Option1</Select.Option>`,
      `    <Select.Option>Option2</Select.Option>`,
      `    <Select.Option>Option3</Select.Option>`,
      `    <Select.Option>Option4</Select.Option>`,
      `    <Select.Option>Option5</Select.Option>`,
      `  </Select.Dropbox>`,
      `</Select>`,
    ],
  },
  {
    title: 'Select.Input',
    subtitle: 'Select 코드 예시입니다. (Input 타입)',
    desc: [],
    view: <InputSelectTemplate />,
    code: [
      `<Select>`,
      `  <Select.InputBox placeholder='input select'>`,
      `    {selectedOption}`,
      `  </Select.InputBox>`,
      `  <Select.Dropbox ref={dropboxRef} direction='down'>`,
      `    <Select.Option>안녕</Select.Option>`,
      `    <Select.Option>안녕하세요.</Select.Option>`,
      `    <Select.Option>app</Select.Option>`,
      `    <Select.Option>apple</Select.Option>`,
      `    <Select.Option>application</Select.Option>`,
      `  </Select.Dropbox>`,
      `</Select>`,
    ],
  },
  {
    title: 'useSelectController',
    subtitle: 'Select의 기능을 제공하는 hook 입니다.',
    desc: [],
    view: <SelectTemplate />,
    code: [
      `const list = useRef([`,
      `  {`,
      `    key: 0,`,
      `    content: Option1`,
      `  },`,
      `  {`,
      `    key: 1,`,
      `    content: Option2`,
      `  },`,
      `  {`,
      `    key: 2,`,
      `    content: Option3`,
      `  },`,
      `  {`,
      `    key: 3,`,
      `    content: Option4`,
      `  },`,
      `  {`,
      `    key: 4,`,
      `    content: Option5`,
      `  },`,
      `])`,
      ``,
      `const {`,
      `  open,`,
      `  selectBoxRef,`,
      `  dropboxRef,`,
      `  selectedKey,`,
      `  reservedKey,`,
      `  boxContent,`,
      `  onClickSelect,`,
      `  onClickOption,`,
      `  onKeyDown,`,
      `  optionList,`,
      `  isOption,`,
      `} = useSelectController({`,
      `  initSelectedIdx: -1,`,
      `  optionList: list.current,`,
      `});`,
      ``,
      `return (`,
      `  <Select`,
      `    open={open}`,
      `    isOption={isOption}`,
      `    onClick={onClickSelect}`,
      `    onKeyDown={onKeyDown}`,
      `  >`,
      `    <Select.Box ref={selectBoxRef} placeholder='select'>`,
      `      {boxContent}`,
      `    </Select.Box>`,
      `    <Select.Dropbox ref={dropboxRef} direction='down'>`,
      `      {optionList.map(({ key, content, disabled }, idx) => {`,
      `        const selected = key === selectedKey;`,
      `        const reserved = key === reservedKey;`,
      `        return (`,
      `          <Select.Option`,
      `            key={key}`,
      `            disabled={disabled}`,
      `            selected={selected}`,
      `            reserved={reserved}`,
      `            onClick={(e: React.MouseEvent) => {`,
      `              onClickOption(e, idx);`,
      `            }}`,
      `          >`,
      `            {content}`,
      `          </Select.Option>`,
      `        );`,
      `      })}`,
      `    </Select.Dropbox>`,
      `  </Select>`,
      `);`,
    ],
  },
  {
    title: 'useInputSelectController',
    subtitle: 'Select(Input 타입)의 기능을 제공하는 hook 입니다.',
    desc: [],
    view: <InputSelectTemplate />,
    code: [
      `const list = useRef([`,
      `  {`,
      `    key: 0,`,
      `    content: '안녕',`,
      `    index: 0,`,
      `  },`,
      `  {`,
      `    key: 1,`,
      `    content: '안녕하세요.',`,
      `    index: 1,`,
      `  },`,
      `  {`,
      `    key: 2,`,
      `    content: 'app',`,
      `    index: 2,`,
      `  },`,
      `  {`,
      `    key: 3,`,
      `    content: 'apple',`,
      `    index: 3,`,
      `  },`,
      `  {`,
      `    key: 4,`,
      `    content: 'application',`,
      `    index: 4,`,
      `  },`,
      `])`,
      ``,
      `const {`,
      `  open,`,
      `  reservedKey,`,
      `  selectedKey,`,
      `  onClickOption,`,
      `  onClickSelect,`,
      `  onKeyDown,`,
      `  onChange,`,
      `  optionList,`,
      `  isOption,`,
      `  inputBoxRef,`,
      `  dropboxRef,`,
      `} = useInputSelectController({`,
      `  initSelectedIdx: -1,`,
      `  optionList: list.current,`,
      `  caseSensitive: false,`,
      `});`,
      ``,
      ``,
      `return (`,
      `  <Select`,
      `    open={open}`,
      `    isOption={isOption}`,
      `    onClick={onClickSelect}`,
      `    onKeyDown={onKeyDown}`,
      `  >`,
      `    <Select.InputBox`,
      `      ref={inputBoxRef}`,
      `      placeholder='input select'`,
      `      onChange={onChange}`,
      `    />`,
      `    <Select.Dropbox`,
      `      ref={dropboxRef}`,
      `      direction='down'`,
      `      style={{`,
      `        maxHeight: '240px',`,
      `      }}`,
      `    >`,
      `      {optionList.map(({ key, content, disabled }, idx) => {`,
      `        const selected = key === selectedKey;`,
      `        const reserved = key === reservedKey;`,
      `        return (`,
      `          <Select.Option`,
      `            key={key}`,
      `            disabled={disabled}`,
      `            selected={selected}`,
      `            reserved={reserved}`,
      `            onClick={(e: React.MouseEvent) => {`,
      `              onClickOption(e, idx);`,
      `            }}`,
      `          >`,
      `            {content}`,
      `          </Select.Option>`,
      `        );`,
      `      })}`,
      `    </Select.Dropbox>`,
      `  </Select>`,
      `);`,
    ],
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
      {
        name: 'open',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['dropbox 열림 여부'],
      },
      {
        name: 'disabled',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['비활성화 여부'],
      },
      {
        name: 'error',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['오류 여부 (box 경계선 표시)'],
      },
      {
        name: 'isOption',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['리스트 유무(dropbox 레이아웃 개선)'],
      },
    ],
  },
  {
    title: 'Box Props',
    desc: '',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
      {
        name: 'placeholder',
        type: 'string',
        essential: false,
        defaultValue: '',
        description: ['placeholder'],
      },
    ],
  },
  {
    title: 'Dropbox Props',
    desc: '',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
      {
        name: 'direction',
        type: '"down" | "up"',
        essential: false,
        defaultValue: 'down',
        description: ['Dropbox 출력 위치'],
      },
    ],
  },
  {
    title: 'Option Props',
    desc: '',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
      {
        name: 'selected',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['선택 여부'],
      },
      {
        name: 'reserved',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['선택 예비 여부'],
      },
      {
        name: 'disabled',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['비활성화 여부'],
      },
    ],
  },
  {
    title: 'useSelectController Param',
    desc: '',
    element: [
      {
        name: 'initSelectedIdx',
        type: 'number',
        essential: false,
        defaultValue: '-1',
        description: ['선택된 요소의 인덱스', '-1일 경우 요소 미설정으로 인식'],
      },
      {
        name: 'optionList',
        type: 'ReadonlyArray<SelectOption>',
        essential: false,
        defaultValue: '[]',
        description: ['Dropbox에 출력할 리스트'],
      },
    ],
  },
  {
    title: 'useInputSelectController Param',
    desc: '',
    element: [
      {
        name: 'initSelectedIdx',
        type: 'number',
        essential: false,
        defaultValue: '-1',
        description: ['선택된 요소의 인덱스', '-1일 경우 요소 미설정으로 인식'],
      },
      {
        name: 'optionList',
        type: 'ReadonlyArray<InputSelectOption>',
        essential: false,
        defaultValue: '[]',
        description: ['Dropbox에 출력할 리스트'],
      },
      {
        name: 'caseSensitive',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['	자동완성 대소문자 구분 여부'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    desc: '',
    element: [
      {
        name: '--cdkit-color-select-box-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 배경 색상'],
      },
      {
        name: '--cdkit-color-select-box-bg-focus',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 배경 색상', '포커싱'],
      },
      {
        name: '--cdkit-color-select-box-bg-error',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 배경 색상', '오류'],
      },
      {
        name: '--cdkit-color-select-box-bg-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 배경 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-select-box-bg-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 배경 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-select-box-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 글자 색상'],
      },
      {
        name: '--cdkit-color-select-box-text-focus',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 글자 색상', '포커싱'],
      },
      {
        name: '--cdkit-color-select-box-text-error',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 글자 색상', '오류'],
      },
      {
        name: '--cdkit-color-select-box-text-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 글자 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-select-box-text-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 글자 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-select-box-border',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 경계선 색상'],
      },
      {
        name: '--cdkit-color-select-box-border-focus',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 경계선 색상', '포커싱'],
      },
      {
        name: '--cdkit-color-select-box-border-error',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 경계선 색상', '오류'],
      },
      {
        name: '--cdkit-color-select-box-border-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 경계선 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-select-box-border-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box 경계선 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-select-box-placeholder',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box placeholder'],
      },
      {
        name: '--cdkit-color-select-box-placeholder-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['box placeholder', '비활성화'],
      },
      {
        name: '--cdkit-color-select-dropbox-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['dropbox 배경 색상'],
      },
      {
        name: '--cdkit-color-select-dropbox-box-shadow',
        type: CSS_VAR_TYPE.COLOR,
        description: ['dropbox 그림자 색상'],
      },
      {
        name: '--cdkit-color-select-option-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['option 배경 색상'],
      },
      {
        name: '--cdkit-color-select-option-bg-selected',
        type: CSS_VAR_TYPE.COLOR,
        description: ['option 배경 색상', '선택됨'],
      },
      {
        name: '--cdkit-color-select-option-bg-reserved',
        type: CSS_VAR_TYPE.COLOR,
        description: ['option 배경 색상', '예비 선택'],
      },
      {
        name: '--cdkit-color-select-option-bg-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['option 배경 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-select-option-bg-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['option 배경 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-select-option-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['option 글자 색상'],
      },
      {
        name: '--cdkit-color-select-option-text-selected',
        type: CSS_VAR_TYPE.COLOR,
        description: ['option 글자 색상', '선택됨'],
      },
      {
        name: '--cdkit-color-select-option-text-reserved',
        type: CSS_VAR_TYPE.COLOR,
        description: ['option 글자 색상', '예비 선택'],
      },
      {
        name: '--cdkit-color-select-option-text-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['option 글자 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-select-option-text-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['option 글자 색상', '마우스 호버'],
      },
    ],
  },
];

const defaultCode: Array<string> = [
  `<Select>`,
  `  <Select.Box placeholder='select'>`,
  `    {selectedOption}`,
  `  </Select.Box>`,
  `  <Select.Dropbox ref={dropboxRef} direction='down'>`,
  `    <Select.Option>Option1</Select.Option>`,
  `    <Select.Option>Option2</Select.Option>`,
  `    <Select.Option>Option3</Select.Option>`,
  `    <Select.Option>Option4</Select.Option>`,
  `    <Select.Option>Option5</Select.Option>`,
  `  </Select.Dropbox>`,
  `</Select>`,
];

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
