import { Flex, ProgressBar } from '@cdkit/react-ui';
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
    subtitle: 'ProgressBar 코드 예시입니다.',
    desc: [],
    view: (
      <Flex flexDirection='column' className={style.pgbar}>
        <ProgressBar percent={70} pending={false} />
        <ProgressBar percent={50} pending />
      </Flex>
    ),
    code: [
      `<ProgressBar percent={70} pending={false} />`,
      `<ProgressBar percent={50} pending />`,
    ],
  },
];

const dataType: Array<DATA_TYPE> = [];

const props: Array<PROPS> = [
  {
    title: 'Props',
    desc: '',
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
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    desc: '',
    element: [
      {
        name: '--cdkit-color-progress-body',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상'],
      },
      {
        name: '--cdkit-color-progress-bar',
        type: CSS_VAR_TYPE.COLOR,
        description: ['진행바 색상', '진행 중'],
      },
      {
        name: '--cdkit-color-progress-exit',
        type: CSS_VAR_TYPE.COLOR,
        description: ['진행바 색상', '진행 종료'],
      },
      {
        name: '--cdkit-color-progress-pending',
        type: CSS_VAR_TYPE.COLOR,
        description: ['진행 애니메이션 색상'],
      },
      {
        name: '--cdkit-size-progress-height',
        type: CSS_VAR_TYPE.SIZE,
        description: ['높이'],
      },
    ],
  },
];

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
      <ProgressBar percent={percent} pending />
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
  props,
  cssVar,
  defaultCode,
  pgCode,
};
