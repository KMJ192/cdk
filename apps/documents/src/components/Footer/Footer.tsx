'use client';

import { Center } from '@cdk/react-ui';

import { today } from '@src/utils/date';

import useValueAppState from '@src/store/AppProvider/hooks/useValueAppState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Footer() {
  const { theme } = useValueAppState();

  return (
    <Center
      display='flex'
      as='footer'
      className={cx('footer', theme)}
      horizontal={false}
    >
      <span className={cx('update')}>last update : {today()}</span>
    </Center>
  );
}

export default Footer;
