'use client';

import { useEffect, type ReactNode, useState } from 'react';
import { Flex, Spacing } from '@cdkit/react-ui';

import { type THEME } from '@src/types/types';

import AppProvider from '@src/store/AppProvider/Provider';
import GlobalState from '../GlobalState/GlobalState';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Contents from '../Contents/Contents';
import GNB from '../GNB/GNB';

import { useWindowSize } from '@src/store/windowSize';
import { RESOLUTION_WIDTH, headerHeight } from '@src/utils/layout';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  children: ReactNode;
  theme: THEME;
  device: string;
};

function ContentsLayout({ theme, device, children }: Props) {
  const { width } = useWindowSize();

  const [navPosition, setNavPosition] = useState<'header' | 'side'>(
    device === 'pc' ? 'side' : 'header',
  );

  useEffect(() => {
    setNavPosition(width <= RESOLUTION_WIDTH['768'] ? 'header' : 'side');
  }, [width]);

  return (
    <AppProvider
      value={{
        theme,
      }}
    >
      <GlobalState theme={theme} />
      <Header navPosition={navPosition} />
      <Spacing spacing={headerHeight} />
      {navPosition === 'side' && <GNB position={navPosition} />}
      <Flex flexDirection='column' className={cx('layout')}>
        <Contents>{children}</Contents>
        <Footer />
      </Flex>
    </AppProvider>
  );
}

export default ContentsLayout;
