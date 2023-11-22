import { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import style from '@css/layout/Spacing/style.module.scss';
const cx = classNames.bind(style);

function Spacing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = /* html */ `
        <div class="${cx('spacing')}">미출력</div>
      `;
    }
  }, []);

  return <div ref={ref}></div>;
}

export default Spacing;
