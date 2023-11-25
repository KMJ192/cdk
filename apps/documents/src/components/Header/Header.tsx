import { useState } from 'react';
import { Center, Flex } from '@cdkit/react-ui';

import useToggleTheme from '@src/hooks/useToggleTheme';

import Light from '../Icons/Theme/Light';
import Dark from '../Icons/Theme/Dark';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import GNB from '../GNB/GNB';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Header() {
  const { toggleTheme } = useToggleTheme();

  const [openNav, setOpenNav] = useState(false);

  const onToggleTheme = () => {
    toggleTheme();
  };

  const onToggleNav = () => {
    setOpenNav(!openNav);
  };

  const onClose = () => {
    setOpenNav(false);
  };

  return (
    <>
      <Flex as='header' className={cx('header', { openNav })}>
        <Center horizontal={false} className={cx('contents')}>
          <div className={cx('left')}>
            <Center horizontal={false} className={cx('hamburger')}>
              <HamburgerMenu
                active={openNav}
                onClick={onToggleNav}
                type='type-3'
                size='sm'
              />
            </Center>
          </div>
          <div className={cx('right', 'theme-icon')} onClick={onToggleTheme}>
            <Light />
            <Dark />
          </div>
        </Center>
      </Flex>
      <GNB
        position='header'
        onClose={onClose}
        className={cx('nav', { openNav })}
      />
    </>
  );
}

export default Header;
