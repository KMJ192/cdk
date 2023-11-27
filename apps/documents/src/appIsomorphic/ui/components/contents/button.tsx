import { Button, Center, Flex } from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';
import style from './style.module.scss';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'Button 코드 예시입니다.',
    desc: [],
    view: (
      <Flex flexDirection='column' className={style['button-document']}>
        <Flex className={style['button-variant']}>
          <Button variant='primary'>Primary</Button>
          <Button variant='outlined'>Outlined</Button>
          <Button variant='clear'>Clear</Button>
        </Flex>
        <Flex className={style['button-variant']}>
          <Button disabled>disabled</Button>
          <Button loading>loading</Button>
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
      `<Button loading>loading</Button>`,
      `<Button shape='rect'>Rect</Button>`,
      `<Button shape='circle'>Circle</Button>`,
      `<Button shape='square'>Square</Button>`,
    ],
  },
];
const dataType: Array<DATA_TYPE> = [
  {
    name: 'Variant',
    description: '변형 타입 설정',
    code: [`type Variant = "primary" | "outlined" | "clear";`],
  },
  {
    name: 'Shape',
    description: '형태 타입 설정',
    code: [`type Shape = "rect" | "circle" | "square";`],
  },
];

const props: Array<PROPS> = [
  {
    title: 'Props',
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
        name: 'disabled',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['비활성화 여부'],
      },
      {
        name: 'loading',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['로딩 여부'],
      },
      {
        name: 'loadingElement',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['로딩 컴포넌트 주입'],
      },
      {
        name: 'leftIcon',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['좌측 아이콘'],
      },
      {
        name: 'rightIcon',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['우측 아이콘'],
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
        name: '--cdkit-color-button-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상'],
      },
      {
        name: '--cdkit-color-button-bg-hover',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '마우스 호버'],
      },
      {
        name: '---cdkit-color-button-bg-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-button-bg-active',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '활성화'],
      },
      {
        name: '--cdkit-color-button-bg-ripple',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상', '클릭 애니메이션'],
      },
      {
        name: '--cdkit-color-button-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '기본'],
      },
      {
        name: '--cdkit-color-button-text-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '마우스 호버'],
      },
      {
        name: '--cdkit-color-button-text-active',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '비활성화'],
      },
      {
        name: '--cdkit-color-button-box-shadow',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상', '활성화'],
      },
      {
        name: '--cdkit-color-button-outline',
        type: CSS_VAR_TYPE.COLOR,
        description: ['그림자 색상'],
      },
      {
        name: '--cdkit-color-button-outline-disabled',
        type: CSS_VAR_TYPE.COLOR,
        description: ['경계선 색상'],
      },
    ],
  },
];

const defaultCode: Array<string> = [
  `<Button variant='primary' shape='rect' loading={false}>Button</Button>`,
];

const pgCode = `import { Button } from '@cdkit/react-ui';

function App() {
  return (
    <>
      <Button variant='primary'>Primary</Button>
      <Button variant='outlined'>Outlined</Button>
      <Button variant='clear'>Clear</Button>
      <Button disabled>disabled</Button>
      <Button loading>loading</Button>
      <Button shape='rect'>Rect</Button>
      <Button shape='circle'>Circle</Button>
      <Button shape='square'>Square</Button>
    </>
  );
}

export default App;
`;

export const buttonContents: PAGE_CONTENTS = {
  pageTitle: 'Button',
  pageDesc: 'Button 컴포넌트',
  document,
  dataType,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
