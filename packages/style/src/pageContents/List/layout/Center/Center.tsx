import { useEffect, useRef } from 'react';

import { Flex } from '@cdkit/react-ui';

import classNames from 'classnames/bind';
import style from '@css/layout/Center/style.module.scss';
const cx = classNames.bind(style);

function Center() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = `
        <div class="${cx(
          'center',
          'flex',
          'vertical',
          'horizontal',
        )}">display: flex</div>
        <div class="${cx(
          'center',
          'grid',
          'vertical',
          'horizontal',
        )}">display: grid</div>
      `;
    }
  }, []);

  return <Flex ref={ref} flexDirection='column'></Flex>;
}

export default Center;
