import { Flex } from '@cdkit/react-ui';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function IndexPage() {
  return (
    <div className={cx('index-container')}>
      <Flex>Index Page</Flex>
      <Flex>Index Page</Flex>
      <Flex>Index Page</Flex>
    </div>
  );
}

export default IndexPage;
