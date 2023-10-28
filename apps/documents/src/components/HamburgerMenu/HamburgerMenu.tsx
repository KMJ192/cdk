import useAppState from '@src/store/AppProvider/hooks/useAppState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type SIZE = 'xs' | 'sm' | 'md' | 'lg';

type Props = {
  type?: 'type-1' | 'type-2' | 'type-3';
  active?: boolean;
  size?: SIZE;
  onClick?: () => void;
};

function HamburgerMenu({
  type = 'type-1',
  active = false,
  size = 'md',
  onClick,
}: Props) {
  const [{ theme }] = useAppState();

  return (
    <div
      className={cx('hamburger', theme, { active }, type, size)}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HamburgerMenu;
