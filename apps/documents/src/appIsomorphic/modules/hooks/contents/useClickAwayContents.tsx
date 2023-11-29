import type {
  PARAMS,
  DOCUMENT,
  PAGE_CONTENTS,
  DATA_TYPE,
} from '@src/components/DocsContents/types';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'useClickAway Hook 문서',
    view: 'none',
    code: [
      `import { useRef } from 'react'`,
      `import { useClickAway } from '@cdkit/react-modules';`,
      ``,
      `function Component() {`,
      `  const ref = useRef(null);`,
      ``,
      `  const onClickAway = () => {`,
      `    //...`,
      `  }`,
      ``,
      `  useClickAway({`,
      `    onClickAway,`,
      `    elementRefs: [ref],`,
      `  });`,
      ``,
      `  return <div ref={ref}></div>`,
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
        name: 'onClickAway',
        type: '() => void',
        essential: false,
        defaultValue: '() => {}',
        description: ['영역의 밖을 클릭하면 실행되는 함수'],
      },
      {
        name: 'elementRefs',
        type: 'Array<RefObject<HTMLElement>>',
        essential: false,
        defaultValue: '[]',
        description: ['영역을 설정할 요소의 변수 (다수 설정 가능)'],
      },
    ],
  },
];

const defaultCode: Array<string> = [
  `import { useRef } from 'react'`,
  `import { useClickAway } from '@cdkit/react-modules';`,
  ``,
  `function Component() {`,
  `  const ref = useRef(null);`,
  ``,
  `  const onClickAway = () => {`,
  `    //...`,
  `  }`,
  ``,
  `  useClickAway({`,
  `    onClickAway,`,
  `    elementRefs: [ref],`,
  `  });`,
  ``,
  `  return <div ref={ref}></div>`,
  `}`,
];

const dataType: Array<DATA_TYPE> = [];

const pgCode = `import { useRef, useState } from 'react';
import { useClickAway } from '@cdkit/react-modules';
import { Flex, Popup, Text } from '@cdkit/react-ui';

function App() {
  const ref = useRef(null);
  const [isClickAway, setIsClickAway] = useState("이벤트 감지");

  const onClickAway = () => {
    setIsClickAway("영역 이외 공간 클릭");
  };

  useClickAway({
    onClickAway,
    elementRefs: [ref],
  });

  return (
    <Flex flexDirection="column">
      <Popup
        visible
        ref={ref}
        onClick={() => {
          setIsClickAway("영역 클릭");
        }}
        style={{
          padding: "1rem"
        }}
      >
        <Flex flexDirection="column">
          <Text>영역을 클릭해보세요!</Text>
          <Text>{isClickAway}</Text>
        </Flex>
      </Popup>
    </Flex>
  );
}

export default App;
`;

export const useClickAwayContents: PAGE_CONTENTS = {
  pageTitle: 'useClickAway',
  pageDesc: '특정 영역 이외의 마우스 클릭을 감지하는 hook 입니다.',
  document,
  cssVar: [],
  params,
  dataType,
  defaultCode,
  pgCode,
};
