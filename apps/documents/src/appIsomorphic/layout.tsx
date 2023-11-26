'use client';

import React from 'react';
import ContentsLayout from '@src/components/ContentsLayout/ContentsLayout';

import type { THEME } from '@src/types/types';

type Props = {
  theme: THEME;
  children: React.ReactNode;
};

function IsomorphicRootLayout({ theme, children }: Props) {
  return <ContentsLayout theme={theme}>{children}</ContentsLayout>;
}

export default IsomorphicRootLayout;
