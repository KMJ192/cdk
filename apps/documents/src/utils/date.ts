import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';

/**
 * dayjs utc 플러그인 설정
 */
dayjs.extend(utc);

export const DATE_FORM = 'YYYY-MM-DD';

export const DATE_TIME_FORM = 'YYYY-MM-DD HH:mm:ss';

/**
 * 현재 날짜
 */
export const TODAY = dayjs();

/**
 * 현재날짜
 * 포맷: YYYY.MM.DD
 */
export const today = (format?: string) => {
  const date = dayjs()
    .local()
    .format(format ?? 'YYYY.MM.DD');
  return date;
};
