'use client';

import useValueAppState from '@src/store/AppProvider/hooks/useValueAppState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Line() {
  const { theme } = useValueAppState();

  return <div className={cx('line', theme)}></div>;
}

export default Line;
