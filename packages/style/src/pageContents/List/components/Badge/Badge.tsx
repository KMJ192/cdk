import { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import style from '@css/components/Badge/style.module.scss';
const cx = classNames.bind(style);

function Badge() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = /* html */ `
        <div class="${cx('badge', 'primary')}">primary</div>
        <div class="${cx('badge', 'success')}">success</div>
        <div class="${cx('badge', 'info')}">info</div>
        <div class="${cx('badge', 'warning')}">warning</div>
        <div class="${cx('badge', 'danger')}">danger</div>
        <div class="${cx('badge', 'custom')}">custom</div>
      `;
    }
  }, []);

  return <div ref={ref}></div>;
}

export default Badge;
