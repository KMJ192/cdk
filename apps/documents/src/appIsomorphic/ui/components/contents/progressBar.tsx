import { Flex, ProgressBar } from '@cdkit/react-ui';
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
    subtitle: 'ProgressBar 코드 예시입니다.',
    view: (
      <Flex flexDirection='column' className={style.pgbar}>
        <ProgressBar percent={70} pending={false}>
          <ProgressBar.Pending />
        </ProgressBar>
        <ProgressBar percent={50} pending>
          <ProgressBar.Pending />
        </ProgressBar>
      </Flex>
    ),
    code: [
      `<ProgressBar percent={70} pending={false}>`,
      `  <ProgressBar.Pending />`,
      `</ProgressBar>`,
      `<ProgressBar percent={50} pending>`,
      `  <ProgressBar.Pending />`,
      `</ProgressBar>`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [];

const params: Array<PARAMS> = [
  {
    title: 'ProgressBarProps',
    defaultTag: 'div',
    element: [
      {
        name: 'percent',
        type: 'number',
        essential: false,
        defaultValue: '0',
        description: ['진행 비율'],
      },
      {
        name: 'pending',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['진행 여부'],
      },
    ],
  },
  {
    title: 'ProgressBarPendingProps',
    defaultTag: 'div',
    element: [],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = [
  `<ProgressBar percent={100} pending={false} />`,
];

const pgCode = `import { useState } from 'react';
import { Spacing, Input, ProgressBar } from '@cdkit/react-ui';

function App() {
  const [percent, setPercent] = useState(50);
  const onChange = (e) => {
    setPercent(e.target.value);
  }

  return (
    <>
      <Input 
        type="number"
        placeholder="percent를 입력해보세요!"
        onChange={onChange}
      />
      <Spacing spacing={8} />
      <ProgressBar percent={percent} pending>
        <ProgressBar.Pending />
      </ProgressBar>
    </>
  );
}

export default App;
`;

export const progressBarContents: PAGE_CONTENTS = {
  pageTitle: 'ProgressBar',
  pageDesc: 'ProgressBar 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
