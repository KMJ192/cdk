import type {
  DOCUMENT,
  PARAMS,
  DATA_TYPE,
  PAGE_CONTENTS,
} from '@src/components/DocsContents/types';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'InfiniteScroll 문서',
    view: 'none',
    code: [
      `import { InfiniteScroll } from "@cdkit/react-modules";`,
      ``,
      `function Component() {`,
      `  const [isLoading, setIsLoading] = useState(false);`,
      ``,
      `  const onLoad = () => {`,
      `    setIsLoading(true);`,
      `    // fetch...`,
      `    setIsLoading(false);`,
      `  }`,
      ``,
      `  <InfiniteScroll`,
      `    isLoading={isLoading}`,
      `    loadingElement={<div>Loading...</div>}`,
      `    onLoad={onLoad}`,
      `  >`,
      `    // List...`,
      `  </InfiniteScroll>`,
      `}`,
    ],
  },
];

const params: Array<PARAMS> = [
  {
    title: 'Props',
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
        name: 'isExecute',
        type: 'boolean',
        essential: false,
        defaultValue: 'true',
        description: ['다음 리스트 실행 여부'],
      },
      {
        name: 'isLoading',
        type: 'boolean',
        essential: true,
        defaultValue: '-',
        description: [
          '로딩 여부',
          '주기에 맞추어 적절한 값을 설정해야 합니다.',
        ],
      },
      {
        name: 'loadingElement',
        type: 'React.ReactNode',
        essential: false,
        defaultValue: 'undefined',
        description: ['로딩 출력 컴포넌트'],
      },
      {
        name: 'onLoad',
        type: '() => void',
        essential: true,
        defaultValue: '-',
        description: ['다음 주기에 실행되는 함수'],
      },
    ],
  },
];

const defaultCode: Array<string> = [
  `import { InfiniteScroll } from "@cdkit/react-modules";`,
  ``,
  `function Component() {`,
  `  const [isLoading, setIsLoading] = useState(false);`,
  ``,
  `  const onLoad = () => {`,
  `    setIsLoading(true);`,
  `    // fetch...`,
  `    setIsLoading(false);`,
  `  }`,
  ``,
  `  <InfiniteScroll`,
  `    isLoading={isLoading}`,
  `    loadingElement={<div>Loading...</div>}`,
  `    onLoad={onLoad}`,
  `  >`,
  `    // List...`,
  `  </InfiniteScroll>`,
  `}`,
];

const dataType: Array<DATA_TYPE> = [];

const pgCode = `import { useState } from 'react';
import { Flex, Row, Spinner, Spacing, Text } from '@cdkit/react-ui';
import { InfiniteScroll } from '@cdkit/react-modules';
import { sleep } from '@cdkit/common';

function App() {
  const [list, setList] = useState(Array.from({ length: 20 }, () => 0));
  const [isLoading, setIsLoading] = useState(false);

  const onLoad = async () => {
    setIsLoading(true);
    await sleep(1000);
    setList((list) => {
      return [...list, ...Array.from({ length: 20 }, () => 0)];
    });
    setIsLoading(false);
  };
  
  return (
    <Flex flexDirection="column">
      <Text>InfiniteScroll의 작동 예시 입니다.</Text>
      <Spacing spacing={8} />
      <InfiniteScroll
        isLoading={isLoading}
        loadingElement={<Spinner />}
        onLoad={onLoad}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}
      >
        {list.map((_, idx) => {
          return (
            <Row key={idx}>
              Row : {idx + 1}
            </Row>
          );
        })}
      </InfiniteScroll>
    </Flex>
  );
}

export default App;
`;

export const infiniteScrollContents: PAGE_CONTENTS = {
  pageTitle: 'InfiniteScroll',
  pageDesc: 'InfiniteScroll 컴포넌트 문서 페이지',
  cssVar: [],
  document,
  params,
  dataType,
  defaultCode,
  pgCode,
};
