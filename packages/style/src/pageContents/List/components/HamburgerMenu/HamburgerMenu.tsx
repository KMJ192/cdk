import { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import style from '@css/components/HamburgerMenu/style.module.scss';
const cx = classNames.bind(style);

function HamburgerMenu() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = /* html */ `
        <div class="${cx('hamburger', 'type-1', 'xs')}">
          <span></span> 
          <span></span> 
          <span></span> 
        </div>
        <div class="${cx('hamburger', 'type-1', 'sm')}">
          <span></span> 
          <span></span> 
          <span></span> 
        </div>
        <div class="${cx('hamburger', 'type-1', 'md')}">
          <span></span> 
          <span></span> 
          <span></span> 
        </div>
        <div class="${cx('hamburger', 'type-1', 'lg')}">
          <span></span> 
          <span></span> 
          <span></span> 
        </div>
        <div class="${cx('hamburger', 'active', 'type-1', 'md')}">
          <span></span> 
          <span></span> 
          <span></span> 
        </div>
      `;
    }
  }, []);

  return <div ref={ref}></div>;
}

export default HamburgerMenu;
