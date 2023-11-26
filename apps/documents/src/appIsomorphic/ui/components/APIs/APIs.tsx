import { Flex, Spacing } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import { COMPONENT_CONTENTS } from '../contents/contents';

import { type PAGE_UI_COMPONENTS } from '@src/utils/url';

import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import CSSVariablesTable from './CSSVariablesTable/CSSVariablesTable';
import PropsTable from './PropsTable/PropsTable';

type Props = {
  type: PAGE_UI_COMPONENTS;
};

function APIs({ type }: Props) {
  const { props, cssVar, defaultCode } = COMPONENT_CONTENTS[type];

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
