import { useEffect, useState } from 'react';

import { Center, Flex } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import { useWindowSize } from '@src/store/windowSize';
import useAppState from '@src/store/AppProvider/hooks/useAppState';

import Light from '../Icons/Theme/Light';
import Dark from '../Icons/Theme/Dark';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import GNB from '../GNB/GNB';

import { FETCHER, METHOD } from '@src/network/api';

import type { THEME } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  navPosition: 'header' | 'side';
};

function Header({ navPosition }: Props) {
  const [{ theme }, setAppState] = useAppState();
  const { width } = useWindowSize();

  const [openNav, setOpenNav] = useState(false);

  const onToggleTheme = async () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    const response = await FETCHER<{
      theme: THEME;
    }>({
      method: METHOD.GET,
      url: `${window.location.origin}/api/theme`,
      params: {
        theme: nextTheme,
      },
    });

    document.body.dataset.theme = nextTheme;

    setAppState((appState) => ({
      ...appState,
      theme: response.data?.theme as THEME,
    }));
  };

  const onToggleNav = () => {
    setOpenNav(!openNav);
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
        <GNB position={navPosition} className={cx('nav', { openNav })} />
      )}
    </>
  );
}

export default Header;
