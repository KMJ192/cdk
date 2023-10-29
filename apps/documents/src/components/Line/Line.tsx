'use client';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Line() {
  return <div className={cx('line')}></div>;
}

export default Line;
