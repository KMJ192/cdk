import { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import style from '@css/layout/Float/style.module.scss';
const cx = classNames.bind(style);

function Float() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      // ref.current.innerHTML = /* html */ `
      //   <div class="${cx('float', 'lt')}">startDirection: lt</div>
      //   <div class="${cx('float', 'lb')}">startDirection: lb</div>
      //   <div class="${cx('float', 'rt')}">startDirection: rt</div>
      //   <div class="${cx('float', 'rb')}">startDirection: rb</div>
      // `;
    }
  }, []);

  return <div ref={ref}></div>;
}

export default Float;
