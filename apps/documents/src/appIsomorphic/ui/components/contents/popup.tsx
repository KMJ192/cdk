import { Popup } from '@cdkit/react-ui';
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
    subtitle: 'Popup 코드 예시입니다.',
    view: (
      <Popup className={style.popup} visible>
        Popup
      </Popup>
    ),
    code: ['<Popup visible>Popup</Popup>'],
  },
];

const dataType: Array<DATA_TYPE> = [
  {
    name: 'PopupAnimation',
    description: 'Popup이 출력될 때 보여지는 애니메이션을 정의합니다.',
    code: [
      `type PopupAnimation = "fade" | "down" | "up" | "left" | "right" | "none"`,
    ],
  },
];

const params: Array<PARAMS> = [
  {
    title: 'PopupProps',
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
        name: 'animation',
        type: 'PopupAnimation',
        essential: false,
        defaultValue: 'none',
        description: ['출력 애니메이션'],
      },
      {
        name: 'visible',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['출력 여부'],
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
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [];

const defaultCode: Array<string> = [
  `<Popup visible={true} animation="fade">Popup</Popup>`,
];

const pgCode = `import { useState } from 'react';
import { Button, Popup } from '@cdkit/react-ui';

function App() {
  const [visible, setVisible] = useState(false);
  
  return (
    <>
      <Button onClick={() => setVisible(!visible)}>Control Popup</Button>
      <Popup visible={visible} animation="fade">Popup</Popup>
    </>
  );
}

export default App;
`;

export const popupContents: PAGE_CONTENTS = {
  pageTitle: 'Popup',
  pageDesc: 'Popup 컴포넌트',
  document,
  dataType,
  params,
  cssVar,
  defaultCode,
  pgCode,
};
