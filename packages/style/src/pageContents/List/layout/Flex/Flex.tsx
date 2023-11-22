import { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import style from '@css/layout/Flex/style.module.scss';
const cx = classNames.bind(style);

function Flex() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = `
        <div class="${cx('flex', 'column')}">flexDirection: column</div>
        <div class="${cx('flex', 'row')}">flexDirection: row</div>
        <div class="${cx(
          'flex',
          'column-reverse',
        )}">flexDirection: column-reverse</div>
        <div class="${cx(
          'flex',
          'row-reverse',
        )}">flexDirection: row-reverse</div>
      `;
    }
  }, []);

  return <div ref={ref}></div>;
}

export default Flex;
