import { Flex, Spacing } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import CSSVariablesTable from './CSSVariablesTable/CSSVariablesTable';
import PropsTable from './PropsTable/PropsTable';
import type { CSS_VARIABLES, PARAMS } from '../types';

type Props = {
  params: Array<PARAMS>;
  cssVar: Array<CSS_VARIABLES>;
  defaultCode: Array<string>;
};

function APIs({ params, cssVar, defaultCode }: Props) {
  return (
    <Flex flexDirection='column'>
      <CodeGuide header='jsx' code={defaultCode} />
      <When condition={params.length > 0}>
        <PropsTable params={params} />
      </When>
      <When condition={cssVar.length > 0}>
        <>
          <Spacing spacing={1} unit='rem' />
          <CSSVariablesTable cssVar={cssVar} />
        </>
      </When>
    </Flex>
  );
}

export default APIs;
