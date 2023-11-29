import type {
  PARAMS,
  DOCUMENT,
  PAGE_CONTENTS,
  DATA_TYPE,
} from '@src/components/DocsContents/types';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'useTrie Hook 문서',
    view: 'none',
    code: [
      `import { useTrie } from '@upcast/react-modules';`,
      ``,
      `function Component() {`,
      `  const [value, setValue] = useState<string>("");`,
      `  const { trie } = useTrie({`,
      `      dictionary: [`,
      `        { key: 0, content: 'a', index: 0 },`,
      `        { key: 1, content: 'apple', index: 0 },`,
      `        { key: 2, content: 'append', index: 0 },`,
      `        { key: 3, content: 'app', index: 0 },`,
      `      ],`,
      `      isBuild: true,`,
      `      caseSensitive: false,`,
      `  });`,
      ``,
      `  return (`,
      `    <>`,
      `      trie.containList(value).map(({ key, content }) => {`,
      `        return <div key={key}>{content}</div>`,
      `      });`,
      `    <>`,
      `  );`,
      `}`,
    ],
  },
];

const params: Array<PARAMS> = [
  {
    title: 'Params',
    defaultTag: 'none',
    element: [
      {
        name: 'dictionary',
        type: 'Array<TrieData<T>>',
        essential: false,
        defaultValue: '[]',
        description: ['Trie 생성 데이터'],
      },
      {
        name: 'isBuild',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['Trie 생성 여부'],
      },
      {
        name: 'caseSensitive',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['영문 대소문자 구분 여부'],
      },
    ],
  },
];

const defaultCode: Array<string> = [
  `import { useTrie } from '@upcast/react-modules';`,
  ``,
  `function Component() {`,
  `  const [value, setValue] = useState<string>("");`,
  `  const { trie } = useTrie({`,
  `      dictionary: [`,
  `        { key: 0, content: 'a', index: 0 },`,
  `        { key: 1, content: 'apple', index: 0 },`,
  `        { key: 2, content: 'append', index: 0 },`,
  `        { key: 3, content: 'app', index: 0 },`,
  `      ],`,
  `      isBuild: true,`,
  `      caseSensitive: false,`,
  `  });`,
  ``,
  `  return (`,
  `    <>`,
  `      trie.containList(value).map(({ key, content }) => {`,
  `        return <div key={key}>{content}</div>`,
  `      });`,
  `    <>`,
  `  );`,
  `}`,
];

const dataType: Array<DATA_TYPE> = [
  {
    name: 'TrieDataKey',
    description: 'Trie 요소 키 (Unique)',
    code: ['type TrieDataKey = string | number;'],
  },
  {
    name: 'TrieData',
    description: 'Trie의 요소 (노드)',
    code: [
      `type TrieData<T = unknown> = {`,
      `  key: TrieDataKey;`,
      `  content: string;`,
      `  index: number;`,
      `} & T;`,
    ],
  },
];

const pgCode = `import { useState } from 'react';
import { Text, Spacing, Input, Flex, Row } from '@cdkit/react-ui';
import { useTrie } from '@cdkit/react-modules';

const dictionary = [
  {
    key: 0,
    content: 'a',
    index: 0,
  },
  {
    key: 1,
    content: 'apple',
    index: 1,
  },
  {
    key: 2,
    content: 'append',
    index: 2,
  },
  {
    key: 3,
    content: 'app',
    index: 3,
  },
  {
    key: 4,
    content: '한글',
    index: 4,
  },
  {
    key: 5,
    content: '한자',
    index: 5,
  },
];

function App() {
  const [list, setList] = useState(dictionary);

  const { trie } = useTrie({
      dictionary: list,
      isBuild: true,
      caseSensitive: false,
  });

  const onChange = (e) => {
    const { value } = e.target;
    const containList = trie.containList(value);
    if (value.length === 0) {
      setList(dictionary);
      return;
    }
    setList(containList);
  };

  return (
    <Flex flexDirection="column">
      <Text typo="b3">
        Input박스에 입력되는 문자열에 따라 자동필터링이 됩니다.
      </Text>
      <Spacing spacing={8} />
      <Input
        placeholder='문자열을 입력해주세요.'
        onChange={onChange}
      />
      <Spacing spacing={8} />
      <Flex flexDirection="column">
        {list.map(({ key, content }) => {
          return <Row key={key}>{content}</Row>;
        })}
      </Flex>
    </Flex>
  );
}

export default App;
`;

export const useTrieContents: PAGE_CONTENTS = {
  pageTitle: 'useTrie',
  pageDesc: 'trie DS를 사용할 수 있는 hook 입니다.',
  cssVar: [],
  document,
  params,
  dataType,
  defaultCode,
  pgCode,
};
