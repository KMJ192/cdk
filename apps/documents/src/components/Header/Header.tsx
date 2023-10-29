import { useEffect, useState } from 'react';
import { Center, Flex } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import { useWindowSize } from '@src/store/windowSize';

import useToggleTheme from '@src/hooks/useToggleTheme';

import Light from '../Icons/Theme/Light';
import Dark from '../Icons/Theme/Dark';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import GNB from '../GNB/GNB';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  navPosition: 'header' | 'side';
};

function Header({ navPosition }: Props) {
  const { width } = useWindowSize();
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

  useEffect(() => {
    if (navPosition === 'header') {
      setOpenNav(false);
    }
  }, [navPosition, width]);

  return (
    <>
      <Flex as='header' className={cx('header', { openNav })}>
        <Center horizontal={false} className={cx('contents')}>
          <Center horizontal={false} className={cx('left')}>
            <When condition={navPosition === 'header'}>
              <HamburgerMenu
                active={openNav}
                onClick={onToggleNav}
                type='type-3'
                size='sm'
              />
            </When>
          </Center>
          <div className={cx('right', 'theme-icon')} onClick={onToggleTheme}>
            <Light />
            <Dark />
          </div>
        </Center>
      </Flex>
      {navPosition === 'header' && (
        <GNB
          position={navPosition}
          onClose={onClose}
          className={cx('nav', { openNav })}
        />
      )}
    </>
  );
}

export default Header;
