import { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import style from '@css/layout/Stack/style.module.scss';
const cx = classNames.bind(style);

function Stack() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = /* html */ `
        <div class="${cx('stack', 'row')}">
          <div>row</div>
          <div>row</div>
          <div>row</div>
        </div>
        <div class="${cx('stack', 'column')}">
          <div>column</div>
          <div>column</div>
          <div>column</div>
        </div>
      `;
    }
  }, []);

  return <div ref={ref}></div>;
}

export default Stack;
