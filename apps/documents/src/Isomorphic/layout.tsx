'use client';

import React from 'react';
import ContentsLayout from '@src/components/ContentsLayout/ContentsLayout';

import type { THEME } from '@src/types/types';

type Props = {
  theme: THEME;
  device: string;
  children: React.ReactNode;
};

function IsomorphicRootLayout({ theme, device, children }: Props) {
  return (
    <ContentsLayout theme={theme} device={device}>
      {children}
    </ContentsLayout>
  );
}

export default IsomorphicRootLayout;
