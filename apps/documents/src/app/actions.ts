'use server';

import { type THEME } from '@src/types/types';
import { cookies } from 'next/headers';

export async function getTheme(): Promise<THEME> {
  const nextCookie = cookies();

  const theme = (nextCookie.get('theme')?.value as THEME) ?? 'light';

  return theme;
}

export async function getDevice(): Promise<string> {
  const nextCookie = cookies();

  const device = nextCookie.get('device')?.value ?? 'pc';

  return device;
}
