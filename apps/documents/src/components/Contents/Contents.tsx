import { type ReactNode } from 'react';

import useValueAppState from '@src/store/AppProvider/hooks/useValueAppState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  children: ReactNode;
};

function Contents({ children }: Props) {
  const { theme } = useValueAppState();

  return <main className={cx('layout', theme)}>{children}</main>;
}

export default Contents;
