'use client';

import { type ReactNode } from 'react';
import { Flex, Spacing } from '@cdkit/react-ui';

import { type THEME } from '@src/types/types';

import AppProvider from '@src/store/AppProvider/Provider';
import GlobalState from './GlobalState/GlobalState';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Contents from './Contents/Contents';
import GNB from './GNB/GNB';

import { headerHeight } from '@src/utils/layout';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  children: ReactNode;
  theme: THEME;
};

function ContentsLayout({ theme, children }: Props) {
  return (
    <AppProvider
      value={{
        theme,
      }}
    >
      <GlobalState theme={theme} />
      <Header />
      <Spacing spacing={headerHeight} />
      <GNB position='side' />
      <Flex flexDirection='column' className={cx('layout')}>
        <Contents>{children}</Contents>
        <Footer />
      </Flex>
    </AppProvider>
  );
}

export default ContentsLayout;
