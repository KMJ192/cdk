import type {
  PARAMS,
  DOCUMENT,
  PAGE_CONTENTS,
  DATA_TYPE,
} from '@src/components/DocsContents/types';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'Hook 문서',
    view: 'none',
    code: [
      `import { useComponentDidMount } from "@upcast/react-modules";`,
      `function Component() {`,
      ``,
      `  useComponentDidMount(() => {`,
      `      // ...`,
      `  })`,
      ``,
      `  return <div></div>;`,
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
        name: 'callback',
        type: '() => void | (() => void)',
        essential: true,
        defaultValue: '',
        description: ['컴포넌트 마운트시, 실행되는 callback 함수'],
      },
    ],
  },
];

const defaultCode: Array<string> = [
  `import { useComponentDidMount } from "@upcast/react-modules";`,
  `function Component() {`,
  ``,
  `  useComponentDidMount(() => {`,
  `      // ...`,
  `  })`,
  ``,
  `  return <div></div>;`,
  `}`,
];

const dataType: Array<DATA_TYPE> = [];

const pgCode = `import { useState } from 'react';
import { When, Unless, useComponentDidMount } from '@cdkit/react-modules';

function App() {
  const [mount, setMount] = useState(false);
  

  useComponentDidMount(() => {
    setMount(true);
  });

  return (
    <div>
      <When condition={mount}>
        Run useComponentDidMount
      </When>
      <Unless condition={mount}>
        Before Run useComponentDidMount
      </Unless>
    </div>
  );
}

export default App;
`;

export const useComponentDidMountContents: PAGE_CONTENTS = {
  pageTitle: 'useComponentDidMount',
  pageDesc: '컴포넌트 마운트시, 단 한번 실행됩니다.',
  cssVar: [],
  document,
  params,
  dataType,
  defaultCode,
  pgCode,
};
