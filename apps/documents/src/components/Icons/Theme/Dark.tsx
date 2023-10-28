import useAppState from '@src/store/AppProvider/hooks/useAppState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Dark() {
  const [{ theme }] = useAppState();
  return (
    <svg
      className={cx('theme-icon', 'dark-icon', theme)}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title />
      <path d='M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z' />
    </svg>
  );
}

export default Dark;
