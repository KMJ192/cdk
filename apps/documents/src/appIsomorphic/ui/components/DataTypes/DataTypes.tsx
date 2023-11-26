import { Flex, Spacing, Text } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import { COMPONENT_CONTENTS } from '../contents/contents';

import type { PAGE_UI_COMPONENTS } from '@src/utils/url';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import { Fragment } from 'react';
const cx = classNames.bind(style);

type Props = {
  type: PAGE_UI_COMPONENTS;
};

function DataTypes({ type }: Props) {
  const { dataType } = COMPONENT_CONTENTS[type];

  return (
    <Flex className={cx('container')} flexDirection='column'>
      <When condition={dataType.length === 0}>
        <div>No Data</div>
      </When>
      <When condition={dataType.length > 0}>
        {dataType.map(({ name, description, code }, idx) => {
          return (
            <Fragment key={`${name}-${idx}`}>
              <Text typo='t1'>{name}</Text>
              <Text typo='b2'>{description}</Text>
              <CodeGuide header='typescript' code={code} />
              <Spacing spacing={0.5} unit='rem' />
            </Fragment>
          );
        })}
      </When>
    </Flex>
  );
}

export default DataTypes;
