import type { ReactNode } from 'react';

type NavigationKey = string | number;

type NavigationItem = {
  key: NavigationKey;
  contents: ReactNode;
  disabled?: boolean;
  children?: Array<NavigationItem>;
};

export type { NavigationItem, NavigationKey };
