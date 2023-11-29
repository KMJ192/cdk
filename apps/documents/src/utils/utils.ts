import { type ReadonlyURLSearchParams } from 'next/navigation';

export const isWindow: boolean = typeof window !== 'undefined';

// eslint-disable-next-line consistent-return
export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts: Array<string> = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}

export const CSS_VAR_TYPE = {
  COLOR: 'color' as const,
  SIZE: 'size' as const,
  LAYOUT: 'layout' as const,
};

export const version = 'v0.1.0';

export const themeCookieMaxAge = 60 * 60 * 24 * 365;

export const createQueryString = (
  searchParams: ReadonlyURLSearchParams,
  name: string,
  value: string,
) => {
  const params = new URLSearchParams(searchParams);
  params.set(name, value);

  return params.toString();
};
