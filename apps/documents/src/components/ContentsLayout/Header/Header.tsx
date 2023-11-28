import { useState } from 'react';
import Link from 'next/link';
import { Center, Flex } from '@cdkit/react-ui';

import useToggleTheme from '@src/hooks/useToggleTheme';

import Light from '../ThemeIcon/Light';
import Dark from '../ThemeIcon/Dark';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import GNB from '../GNB/GNB';
import GitHubIcon from '../GithubIcon/GithubIcon';

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
              <HamburgerMenu active={openNav} onClick={onToggleNav} />
            </Center>
          </div>
          <Center className={cx('right')} horizontal={false}>
            <Link
              href='https://github.com/KMJ192/cdkit'
              target='_blank'
              className={cx('github-icon')}
            >
              <GitHubIcon />
            </Link>
            <div className={cx('theme-icon')} onClick={onToggleTheme}>
              <Light />
              <Dark />
            </div>
          </Center>
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
