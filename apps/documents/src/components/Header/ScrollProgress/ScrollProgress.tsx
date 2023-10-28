import { useEffect, useRef } from 'react';

import { useScrollPosition } from '@src/store/scroll';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function ScrollProgress() {
  const { scrollY } = useScrollPosition();
  const scrollProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollProgressRef.current) {
      const scrollProgress = scrollProgressRef.current;
      const per = Math.floor(
        (scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100,
      );
      if (per === 100) {
        scrollProgress.style.borderTopRightRadius = '0';
        scrollProgress.style.borderBottomRightRadius = '0';
      } else {
        scrollProgress.style.borderTopRightRadius = '8px';
        scrollProgress.style.borderBottomRightRadius = '8px';
      }
      scrollProgress.style.width = `${per}%`;
    }
  }, [scrollY]);

  return (
    <div
      className={cx('scroll-progress', 'light')}
      ref={scrollProgressRef}
    ></div>
  );
}

export default ScrollProgress;
