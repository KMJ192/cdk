import { Button, Center, Flex } from '@cdkit/react-ui';

import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PARAMS,
} from '@src/components/DocsContents/types';

import style from './style.module.scss';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'Button 코드 예시입니다.',
    view: (
      <Flex flexDirection='column' className={style['button-document']}>
        <Flex className={style['button-variant']}>
          <Button variant='primary'>Primary</Button>
          <Button variant='outlined'>Outlined</Button>
          <Button variant='clear'>Clear</Button>
        </Flex>
        <Flex className={style['button-variant']}>
          <Button disabled>disabled</Button>
          <Button disabled>
            <Button.LoadingSpinner />
            loading
          </Button>
        </Flex>
        <Center horizontal={false} className={style['button-shape']}>
          <Button shape='rect'>Rect</Button>
          <Button shape='circle'>Circle</Button>
          <Button shape='square'>Square</Button>
        </Center>
      </Flex>
    ),
    code: [
      `<Button variant='primary'>Primary</Button>`,
      `<Button variant='outlined'>Outlined</Button>`,
      `<Button variant='clear'>Clear</Button>`,
      `<Button disabled>disabled</Button>`,
      `<Button disabled><Button.LoadingSpinner />loading</Button>`,
      `<Button shape='rect'>Rect</Button>`,
      `<Button shape='circle'>Circle</Button>`,
      `<Button shape='square'>Square</Button>`,
    ],
  },
];
const dataType: Array<DATA_TYPE> = [
  {
    name: 'ButtonVariant',
    description: '변형 타입 설정',
    code: [`type ButtonVariant = "primary" | "outlined" | "clear";`],
  },
  {
    name: 'ButtonShape',
    description: '형태 타입 설정',
    code: [`type ButtonShape = "rect" | "circle" | "square";`],
  },
];

const params: Array<PARAMS> = [
  {
    title: 'Props',
    defaultTag: 'button',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
      {
        name: 'variant',
        type: 'Variant',
        essential: false,
        defaultValue: 'primary',
        description: ['변형 타입 설정'],
      },
      {
        name: 'shape',
        type: 'Shape',
        essential: false,
        defaultValue: 'rect',
        description: ['형태 타입 설정'],
      },
      {
        name: 'display',
        type: '"flex" | "grid"',
        essential: false,
        defaultValue: 'flex',
        description: ['display 설정'],
      },
      {
        name: 'flexDirection',
        type: '"column" | "row" | "column-reverse" | "row-reverse"',
        essential: false,
        defaultValue: 'undefined',
        description: ['flex-direction (display가 flex로 설정된 경우만)'],
      },
      {
        name: 'centerVertical',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['중앙정렬 - 수직'],
      },
      {
        name: 'centerHorizontal',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['중앙정렬 - 수평'],
      },
      {
        name: 'clickEffect',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['클릭효과 여부'],
      },
    ],
  },
];
const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = [
  `<Button variant='primary' shape='rect'>Button</Button>`,
];

const pgCode = `import { Button } from '@cdkit/react-ui';

function App() {
  return <Button variant='primary'>Primary</Button>;
}

export default App;
`;

export const buttonContents: PAGE_CONTENTS = {
  pageTitle: 'Button',
  pageDesc: 'Button 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
