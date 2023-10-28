'use client';

import { type ReactNode } from 'react';

import { type THEME } from '@src/types/types';

import AppProvider from '@src/store/AppProvider/Provider';
import GlobalState from '../GlobalState/GlobalState';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Contents from '../Contents/Contents';
import { Spacing } from '@cdk/react-ui';

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
      <Spacing spacing={68} />
      <Contents>{children}</Contents>
      <Footer />
    </AppProvider>
  );
}

export default ContentsLayout;
