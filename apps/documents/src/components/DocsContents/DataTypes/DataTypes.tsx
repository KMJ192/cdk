import { Fragment } from 'react';
import { Flex, Spacing, Text } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import CodeGuide from '@src/components/CodeGuide/CodeGuide';
import type { DATA_TYPE } from '../types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  dataType: Array<DATA_TYPE>;
};

function DataTypes({ dataType }: Props) {
  return (
    <Flex className={cx('container')} flexDirection='column'>
      <When condition={dataType.length === 0}>
        <Text typo='b1'>사용되는 커스텀 타입이 없습니다.</Text>
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
