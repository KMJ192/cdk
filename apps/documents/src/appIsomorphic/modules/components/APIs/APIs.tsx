import { Flex } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import { MODULE_COMPONENTS_CONTENTS } from '../contents/contents';

import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import PropsTable from './PropsTable/PropsTable';

import { type PAGE_MODULE_COMPONENTS } from '@src/utils/url';

type Props = {
  type: PAGE_MODULE_COMPONENTS;
};

function APIs({ type }: Props) {
  const { props, defaultCode } = MODULE_COMPONENTS_CONTENTS[type];

  return (
    <Flex flexDirection='column'>
      <CodeGuide header='jsx' code={defaultCode} />
      <When condition={props.length > 0}>
        <PropsTable type={type} />
      </When>
    </Flex>
  );
}

export default APIs;
