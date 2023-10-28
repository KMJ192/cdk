'use client';

import { Flex } from '@cdk/react-ui';

import useAppState from '@src/store/AppProvider/hooks/useAppState';
import Text from '@src/components/Text/Text';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  className?: string;
  onClickNav: (url: string) => void;
};

function Nav({ className, onClickNav }: Props) {
  const [{ theme }] = useAppState();

  return (
    <Flex as='nav' className={cx('nav', theme, className)}>
      <Text typo='s2' onClick={() => onClickNav('/')}>
        Home
      </Text>
      <Text typo='s2' onClick={() => onClickNav('/posts')}>
        Posts
      </Text>
      <Text typo='s2' onClick={() => onClickNav('/archive')}>
        Archive
      </Text>
      <Text typo='s2' onClick={() => onClickNav('/portfolio')}>
        About Me
      </Text>
    </Flex>
  );
}

export default Nav;
