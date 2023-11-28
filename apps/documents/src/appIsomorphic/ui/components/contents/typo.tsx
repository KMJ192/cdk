import { Flex, Spacing, Text } from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';

const document: Array<DOCUMENT> = [
  {
    title: 'Text Example',
    subtitle: 'text의 크기, 굵기를 지정한 컴포넌트 입니다.',
    view: (
      <Flex flexDirection='column'>
        <Text typo='h1'>This is Typo [h1]</Text>
        <Text typo='h2'>This is Typo [h2]</Text>
        <Text typo='h3'>This is Typo [h3]</Text>
        <Text typo='h4'>This is Typo [h4]</Text>
        <Text typo='t1'>This is Typo [t1]</Text>
        <Text typo='t2'>This is Typo [t2]</Text>
        <Spacing spacing={0.2} unit='rem' />
        <Text typo='t3'>This is Typo [t3]</Text>
        <Spacing spacing={0.2} unit='rem' />
        <Text typo='s1'>This is Typo [s1]</Text>
        <Spacing spacing={0.2} unit='rem' />
        <Text typo='s2'>This is Typo [s2]</Text>
        <Spacing spacing={0.2} unit='rem' />
        <Text typo='s3'>This is Typo [s3]</Text>
        <Spacing spacing={0.2} unit='rem' />
        <Text typo='b1'>This is Typo [b1]</Text>
        <Spacing spacing={0.2} unit='rem' />
        <Text typo='b2'>This is Typo [b2]</Text>
        <Spacing spacing={0.2} unit='rem' />
        <Text typo='b3'>This is Typo [b3]</Text>
        <Spacing spacing={0.2} unit='rem' />
        <Text typo='c1'>This is Typo [c1]</Text>
        <Spacing spacing={0.2} unit='rem' />
        <Text typo='c2'>This is Typo [c2]</Text>
      </Flex>
    ),
    code: [
      `<Flex flexDirection='column'>`,
      `  <Text typo='h1'>This is Typo [h1]</Text>`,
      `  <Text typo='h2'>This is Typo [h2]</Text>`,
      `  <Text typo='h3'>This is Typo [h3]</Text>`,
      `  <Text typo='h4'>This is Typo [h4]</Text>`,
      `  <Text typo='t1'>This is Typo [t1]</Text>`,
      `  <Text typo='t2'>This is Typo [t2]</Text>`,
      `  <Text typo='t3'>This is Typo [t3]</Text>`,
      `  <Text typo='s1'>This is Typo [s1]</Text>`,
      `  <Text typo='s2'>This is Typo [s2]</Text>`,
      `  <Text typo='s3'>This is Typo [s3]</Text>`,
      `  <Text typo='b1'>This is Typo [b1]</Text>`,
      `  <Text typo='b2'>This is Typo [b2]</Text>`,
      `  <Text typo='b3'>This is Typo [b3]</Text>`,
      `  <Text typo='c1'>This is Typo [c1]</Text>`,
      `  <Text typo='c2'>This is Typo [c2]</Text>`,
      `</Flex>`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [
  {
    name: 'Typo',
    description: 'typo 설정',
    code: [
      'type Typo = ',
      `  | "h1" | "header1"`,
      `  | "h2" | "header2"`,
      `  | "h3" | "header3"`,
      `  | "h4" | "header4"`,
      `  | "t1" | "title1"`,
      `  | "t2" | "title2"`,
      `  | "t3" | "title3"`,
      `  | "s1" | "subtitle1"`,
      `  | "s2" | "subtitle2"`,
      `  | "s3" | "subtitle3"`,
      `  | "b1" | "body1"`,
      `  | "b2" | "body2"`,
      `  | "b3" | "body3"`,
      `  | "c1" | "caption1"`,
      `  | "c2" | "caption2";`,
    ],
  },
  {
    name: 'FontWeight',
    description: '글자 굵기 설정',
    code: [
      'type FontWeight = ',
      `  | "100"`,
      `  | "200"`,
      `  | "300"`,
      `  | "400"`,
      `  | "500"`,
      `  | "600"`,
      `  | "700"`,
      `  | "800"`,
      `  | "900"`,
      `  | "bold"`,
      `  | "bolder"`,
      `  | "lighter"`,
      `  | "normal";`,
    ],
  },
];

const props: Array<PROPS> = [
  {
    title: 'Props',
    defaultTag: 'span',
    element: [
      {
        name: 'children',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['Children 컴포넌트'],
      },
      {
        name: 'typo',
        type: 'Typo',
        essential: false,
        defaultValue: 'b1',
        description: ['Typo 설정'],
      },
      {
        name: 'fontWeight',
        type: 'FontWeight',
        essential: false,
        defaultValue: 'undefined',
        description: ['글자 굵기 설정'],
      },
      {
        name: 'ellipsis',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['ellipsis 적용 여부'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode = ['<Text>This is Typo</Text>'];

const pgCode = `import { Text } from '@cdkit/react-ui';

function App() {
  return <Text typo='b1'>Typography</Text>;
}

export default App;
`;

export const typoContents: PAGE_CONTENTS = {
  pageTitle: 'Text',
  pageDesc: 'Typography를 사용 Text 컴포넌트',
  document,
  dataType,
  props,
  cssVar,
  defaultCode,
  pgCode,
};
