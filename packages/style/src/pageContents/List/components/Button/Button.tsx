import { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import style from '@css/components/Button/style.module.scss';
const cx = classNames.bind(style);

function Button() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = /* html */ `
        <button class="${cx('button', 'primary', 'rect')}">Primary Rect</button>
        <button class="${cx('button', 'outlined', 'rect')}">Outlined</button>
        <button class="${cx('button', 'clear', 'rect')}">Clear</button>
        <button class="${cx('button', 'primary', 'circle')}">Circle</button>
        <button class="${cx('button', 'primary', 'square')}">Square</button>
        <button disabled="true" class="${cx(
          'button',
          'primary',
          'rect',
        )}">Disabled</button>
      `;
    }
  }, []);

  return <div ref={ref}></div>;
}

export default Button;
