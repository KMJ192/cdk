'use client';

import { useRef, useState } from 'react';
import { useClickAway } from '@cdkit/react-modules';
import { Select } from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PARAMS,
} from '@src/components/DocsContents/types';

const SelectTemplate = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const onClickAway = () => {
    setOpen(false);
  };
  useClickAway({ onClickAway, elementRefs: [ref] });

  return (
    <Select ref={ref} open={open}>
      <Select.Field
        onClick={() => {
          setOpen(!open);
        }}
      >
        Option1
      </Select.Field>
      <Select.Options>
        <Select.Option>Option1</Select.Option>
        <Select.Option>Option2</Select.Option>
        <Select.Option>Option3</Select.Option>
        <Select.Option>Option4</Select.Option>
        <Select.Option>Option5</Select.Option>
      </Select.Options>
    </Select>
  );
};

const InputSelectTemplate = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const onClickAway = () => {
    setOpen(false);
  };
  useClickAway({ onClickAway, elementRefs: [ref] });

  return (
    <Select ref={ref} open={open}>
      <Select.InputField
        onClick={() => {
          setOpen(!open);
        }}
        defaultValue='Option1'
      />
      <Select.Options>
        <Select.Option>Option1</Select.Option>
        <Select.Option>Option2</Select.Option>
        <Select.Option>Option3</Select.Option>
        <Select.Option>Option4</Select.Option>
        <Select.Option>Option5</Select.Option>
      </Select.Options>
    </Select>
  );
};

const document: Array<DOCUMENT> = [
  {
    title: 'Select',
    subtitle: 'Select 코드 예시입니다.',
    view: <SelectTemplate />,
    code: [
      `<Select open={open}>`,
      `  <Select.Field>`,
      `    Option1`,
      `  </Select.Field>`,
      `  <Select.Options>`,
      `    <Select.Option>Option1</Select.Option>`,
      `    <Select.Option>Option2</Select.Option>`,
      `    <Select.Option>Option3</Select.Option>`,
      `    <Select.Option>Option4</Select.Option>`,
      `    <Select.Option>Option5</Select.Option>`,
      `  </Select.Options>`,
      `</Select>`,
    ],
  },
  {
    title: 'Select.Input',
    subtitle: 'Select 코드 예시입니다. (Input 타입)',
    view: <InputSelectTemplate />,
    code: [
      `<Select open={open}>`,
      `  <Select.InputField defaultValue='Option1'/>`,
      `  <Select.Options>`,
      `    <Select.Option>Option1</Select.Option>`,
      `    <Select.Option>Option2</Select.Option>`,
      `    <Select.Option>Option3</Select.Option>`,
      `    <Select.Option>Option4</Select.Option>`,
      `    <Select.Option>Option5</Select.Option>`,
      `  </Select.Options>`,
      `</Select>`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [];

const params: Array<PARAMS> = [
  {
    title: 'SelectProps',
    defaultTag: 'div',
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
        name: 'placeholder',
        type: 'string',
        essential: false,
        defaultValue: '',
        description: ['placeholder'],
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
    title: 'SelectFieldProps',
    defaultTag: 'div',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
      {
        name: 'expandIcon',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Expand 아이콘'],
      },
    ],
  },
  {
    title: 'SelectInputFieldProps',
    defaultTag: 'input',
    element: [
      {
        name: 'expandIcon',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Expand 아이콘'],
      },
    ],
  },
  {
    title: 'SelectOptionsProps',
    defaultTag: 'ul',
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
  {
    title: 'SelectOptionProps',
    defaultTag: 'li',
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
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = [
  `<Select open={open}>`,
  `  <Select.Field>`,
  `    Option1`,
  `  </Select.Field>`,
  `  <Select.Options>`,
  `    <Select.Option>Option1</Select.Option>`,
  `    <Select.Option>Option2</Select.Option>`,
  `    <Select.Option>Option3</Select.Option>`,
  `    <Select.Option>Option4</Select.Option>`,
  `    <Select.Option>Option5</Select.Option>`,
  `  </Select.Options>`,
  `</Select>`,
];

const pgCode = `import { useRef, useState } from 'react'; 
import { Select } from '@cdkit/react-ui';
import { useClickAway } from '@cdkit/react-modules';

function App() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const onClickAway = () => {
    setOpen(false);
  };
  useClickAway({ onClickAway, elementRefs: [ref] });

  return (
    <Select ref={ref} open={open}>
      <Select.Field
        onClick={() => {
          setOpen(!open);
        }}
      >
        Option1
      </Select.Field>
      <Select.Options>
        <Select.Option>Option1</Select.Option>
        <Select.Option>Option2</Select.Option>
        <Select.Option>Option3</Select.Option>
        <Select.Option>Option4</Select.Option>
        <Select.Option>Option5</Select.Option>
      </Select.Options>
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
  params,
  cssVar,
  defaultCode,
  pgCode,
};
