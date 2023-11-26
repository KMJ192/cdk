import { Flex, Spacing } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import { LAYOUT_CONTENTS } from '../contents/contents';

import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import CSSVariablesTable from './CSSVariablesTable/CSSVariablesTable';
import PropsTable from './PropsTable/PropsTable';

import { type PAGE_LAYOUT } from '@src/utils/url';

type Props = {
  type: PAGE_LAYOUT;
};

function APIs({ type }: Props) {
  const { props, cssVar, defaultCode } = LAYOUT_CONTENTS[type];

  return (
    <Flex flexDirection='column'>
      <CodeGuide header='jsx' code={defaultCode} />
      <When condition={props.length > 0}>
        <PropsTable type={type} />
      </When>
      <When condition={cssVar.length > 0}>
        <>
          <Spacing spacing={1} unit='rem' />
          <CSSVariablesTable type={type} />
        </>
      </When>
    </Flex>
  );
}

export default APIs;
