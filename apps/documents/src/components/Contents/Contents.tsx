import { type ReactNode } from 'react';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  children: ReactNode;
};

function Contents({ children }: Props) {
  return <main className={cx('contents')}>{children}</main>;
}

export default Contents;
