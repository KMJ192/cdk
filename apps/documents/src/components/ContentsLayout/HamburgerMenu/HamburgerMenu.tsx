import { Center } from '@cdkit/react-ui';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  active?: boolean;
  onClick?: () => void;
};

function HamburgerMenu({ active = false, onClick }: Props) {
  return (
    <Center className={cx('hamburger', { active })} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </Center>
  );
}

export default HamburgerMenu;
