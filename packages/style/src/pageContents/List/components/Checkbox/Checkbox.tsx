import { useEffect, useRef } from 'react';
import { Flex } from '@cdkit/react-ui';

import classNames from 'classnames/bind';
import style from '@css/components/Checkbox/style.module.scss';
const cx = classNames.bind(style);

function Checkbox() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = /* html */ `
        <div class="${cx('checkbox', 'is-children')}">
          <div class="${cx('box')}">
            <div class="${cx('mark')}">
              <svg width='1em' height='1em'viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.1562 4.71875L6.59375 11.2812L3.3125 8' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' /></svg>
            </div>
          </div>
          <span class="${cx('children')}">Unchecked</span>
        </div>
        <div class="${cx('checkbox', 'is-children')}">
          <div class="${cx('box', 'checked')}">
            <div class="${cx('mark')}">
              <svg width='1em' height='1em'viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.1562 4.71875L6.59375 11.2812L3.3125 8' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' /></svg>
            </div>
          </div>
          <span class="${cx('children')}">Single</span>
        </div>
        <div class="${cx('checkbox', 'is-children')}" >
          <div class="${cx('box', 'checked')}">
            <div class="${cx('mark')}">
              <svg width='1em' height='1em' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 6H9' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' /></svg>
            </div>
          </div>
          <span class="${cx('children')}">Multiple</span>
        </div>
        <div class="${cx('checkbox', 'disabled', 'is-children')}">
          <div class="${cx('box', 'disabled')}">
            <div class="${cx('mark')}">
              <svg width='1em' height='1em'viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.1562 4.71875L6.59375 11.2812L3.3125 8' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' /></svg>
            </div>
          </div>
          <span class="${cx('children')}">Unchecked</span>
        </div>
        <div class="${cx('checkbox', 'disabled', 'is-children')}">
          <div class="${cx('box', 'checked', 'disabled')}">
            <div class="${cx('mark')}">
              <svg width='1em' height='1em'viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.1562 4.71875L6.59375 11.2812L3.3125 8' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' /></svg>
            </div>
          </div>
          <span class="${cx('children')}">Disabled</span>
        </div>
        <div class="${cx('checkbox', 'disabled', 'is-children')}">
          <div class="${cx('box', 'checked', 'disabled')}">
            <div class="${cx('mark')}">
              <svg width='1em' height='1em' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 6H9' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' /></svg>
            </div>
          </div>
          <span class="${cx('children')}">Disabled</span>
        </div>
      `;
    }
  }, []);

  return (
    <Flex
      ref={ref}
      style={{
        gap: '16px',
      }}
    ></Flex>
  );
}

export default Checkbox;
