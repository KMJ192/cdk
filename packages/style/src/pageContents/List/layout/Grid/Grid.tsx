import { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import style from '@css/layout/Grid/style.module.scss';
const cx = classNames.bind(style);

function Grid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = /* html */ `
        <div class="${cx('grid')}">grid</div>
      `;
    }
  }, []);

  return <div ref={ref}></div>;
}

export default Grid;
