import { Flex } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import { HOOKS_CONTENTS } from '../contents/contents';

import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import PropsTable from './PropsTable/PropsTable';

import { type PAGE_HOOKS } from '@src/utils/url';

type Props = {
  type: PAGE_HOOKS;
};

function APIs({ type }: Props) {
  const { props, defaultCode } = HOOKS_CONTENTS[type];

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
