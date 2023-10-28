'use server';

import { type THEME } from '@src/types/types';
import { cookies } from 'next/headers';

export async function getTheme(): Promise<THEME> {
  const nextCookie = cookies();

  const theme = (nextCookie.get('theme')?.value as THEME) ?? 'light';

  return theme;
}
