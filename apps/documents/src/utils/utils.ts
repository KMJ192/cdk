import style from '@src/styles/utils.module.scss';

export const isWindow: boolean = typeof window !== 'undefined';

// eslint-disable-next-line consistent-return
export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts: Array<string> = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}

export const RESOLUTION_WIDTH = {
  '360': Number(style.resolution_width_360),
  '480': Number(style.resolution_width_480),
  '608': Number(style.resolution_width_608),
  '768': Number(style.resolution_width_768),
  '800': Number(style.resolution_width_800),
};

export const RESOLUTION_HEIGHT = {
  '267': Number(style.resolution_height_267),
  '340': Number(style.resolution_height_340),
  '480': Number(style.resolution_height_480),
  '600': Number(style.resolution_height_600),
  '780': Number(style.resolution_height_780),
};
