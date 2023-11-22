import { useEffect, useRef } from 'react';
import { Flex } from '@cdkit/react-ui';

import classNames from 'classnames/bind';
import style from '@css/layout/Row/style.module.scss';
const cx = classNames.bind(style);

function Row() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = /* html */ `
        <div class="${cx('row')}">row1</div>
        <div class="${cx('row')}">row2</div>
        <div class="${cx('row')}">row3</div>
      `;
      ref.current.style.rowGap = '16px';
    }
  }, []);

  return <Flex ref={ref} flexDirection='column'></Flex>;
}

export default Row;
