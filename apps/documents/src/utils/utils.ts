export const isWindow: boolean = typeof window !== 'undefined';

// eslint-disable-next-line consistent-return
export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts: Array<string> = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}
