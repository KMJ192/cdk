export function sleep(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

export function debounce(
  callback: (...params: Array<any>) => void,
  delay: number,
) {
  let timerId: null | ReturnType<typeof setTimeout> = null;

  return (...params: Array<any>) => {
    if (timerId !== null) clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...params);
    }, delay);
  };
}

export function throttle(
  callback: (...params: Array<any>) => void,
  delay: number,
) {
  let inThrottle: boolean | null = null;

  return (...params: Array<any>) => {
    if (!inThrottle) {
      callback(...params);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, delay);
    }
  };
}

export function deepClone(value: any) {
  return structuredClone(value);
}
