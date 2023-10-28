'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Center, Flex } from '@cdk/react-ui';
import { When } from '@cdk/react-modules';

import { useWindowSize } from '@src/store/windowSize';
import useAppState from '@src/store/AppProvider/hooks/useAppState';

import Light from '../Icons/Theme/Light';
import Dark from '../Icons/Theme/Dark';
import Nav from './Nav/Nav';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

import { RESOLUTION_WIDTH } from '@src/utils/utils';

import { FETCHER, METHOD } from '@src/network/api';

import type { THEME } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Header() {
  const router = useRouter();

  const [{ theme }, setAppState] = useAppState();
  const { width } = useWindowSize();

  const [openNav, setOpenNav] = useState(false);
  const [navDirection, setNavDirection] = useState<
    '' | 'vertical' | 'horizontal'
  >('');

  const onClickNav = (url: string) => {
    setOpenNav(false);
    if (url === '/portfolio') {
      window.open('https://portfolio-nine-flame-23.vercel.app/', '_blank');
      return;
    }
    router.push(url);
  };

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

    setAppState({
      theme: response.data?.theme as THEME,
    });
  };

  const onToggleNav = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    if (navDirection === 'horizontal') {
      setOpenNav(false);
    }
  }, [width]);

  useEffect(() => {
    setNavDirection(
      width <= RESOLUTION_WIDTH['768'] ? 'vertical' : 'horizontal',
    );
  }, [width]);

  return (
    <Center as='header' className={cx('header', navDirection, theme)}>
      <Center horizontal={false} className={cx('contents')}>
        <Flex className={cx('left')}>
          <When condition={navDirection === 'vertical'}>
            <HamburgerMenu
              active={openNav}
              onClick={onToggleNav}
              type='type-3'
              size='sm'
            />
          </When>
          <When condition={navDirection === 'horizontal'}>
            <Nav onClickNav={onClickNav} />
          </When>
        </Flex>
        <div className={cx('theme-icon')} onClick={onToggleTheme}>
          <Light />
          <Dark />
        </div>
      </Center>
      <Nav onClickNav={onClickNav} className={cx('nav', { openNav })} />
    </Center>
  );
}

export default Header;
