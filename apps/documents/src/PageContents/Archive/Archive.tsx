import { Flex } from '@cdkit/react-ui';

import Text from '@src/components/Text/Text';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Archive() {
  return (
    <Flex className={cx('container')}>
      <Text typo='h1'>Typo</Text>
      <Text typo='h2'>Typo</Text>
      <Text typo='h3'>Typo</Text>
      <Text typo='h4'>Typo</Text>
      <Text typo='t1'>Typo</Text>
      <Text typo='t2'>Typo</Text>
      <Text typo='t3'>Typo</Text>
      <Text typo='s1'>Typo</Text>
      <Text typo='s2'>Typo</Text>
      <Text typo='s3'>Typo</Text>
      <Text typo='b1'>Typo</Text>
      <Text typo='b2'>Typo</Text>
      <Text typo='b3'>Typo</Text>
      <Text typo='c1'>Typo</Text>
      <Text typo='c2'>Typo</Text>
    </Flex>
  );
}

export default Archive;
