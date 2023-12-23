import React from 'react';
import { Tab } from '@cdkit/react-ui';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  selected: number;
  options: Array<{
    key: string;
    contents: React.ReactNode;
  }>;
  onSelect: (idx: number) => void;
};

function DocSelectTab({ selected, options, onSelect }: Props) {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { index } = (e.target as HTMLDivElement).dataset;
    const idx = Number(index);

    if (Number.isNaN(idx) || selected === idx) return;

    onSelect(idx);
  };

  return (
    <Tab className={cx('tab')} onClick={onClick} selected={selected}>
      <Tab.Mark className={cx('mark')} />
      <Tab.Options className={cx('options')}>
        {options.map(({ key, contents }, idx) => {
          return (
            <Tab.Option key={key} data-index={idx} className={cx('option')}>
              {contents}
            </Tab.Option>
          );
        })}
      </Tab.Options>
    </Tab>
  );
}

export default DocSelectTab;
