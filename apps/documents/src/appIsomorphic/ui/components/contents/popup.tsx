import { Popup } from '@cdkit/react-ui';
import type {
  CSS_VARIABLES,
  DATA_TYPE,
  DOCUMENT,
  PAGE_CONTENTS,
  PROPS,
} from './contents';
import { CSS_VAR_TYPE } from '@src/utils/utils';

const document: Array<DOCUMENT> = [
  {
    title: 'Example',
    subtitle: 'Popup 코드 예시입니다.',
    view: <Popup visible>Popup</Popup>,
    code: ['<Popup visible>Popup</Popup>'],
  },
];

const dataType: Array<DATA_TYPE> = [];

const props: Array<PROPS> = [
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
        name: 'animation',
        type: '"fade" | "none"',
        essential: false,
        defaultValue: 'fade',
        description: ['출력 애니메이션'],
      },
      {
        name: 'visible',
        type: 'boolean',
        essential: false,
        defaultValue: 'false',
        description: ['출력 여부'],
      },
    ],
  },
];

const cssVar: Array<CSS_VARIABLES> = [
  {
    title: 'CSS Variables',
    element: [
      {
        name: '--cdkit-color-popup-bg',
        type: CSS_VAR_TYPE.COLOR,
        description: ['배경 색상'],
      },
      {
        name: '--cdkit-color-popup-text',
        type: CSS_VAR_TYPE.COLOR,
        description: ['글자 색상'],
      },
      {
        name: '--cdkit-color-popup-box-shadow,',
        type: CSS_VAR_TYPE.COLOR,
        description: ['그림자 색상'],
      },
    ],
  },
];

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
  props,
  cssVar,
  defaultCode,
  pgCode,
};
