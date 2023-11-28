import React from 'react';
import { Text } from '@cdkit/react-ui';

import { Navigation } from '../Navigation';

import { URL } from '@src/utils/url';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  menu: string;
  category: string;
  selected: { [key: string]: boolean };
  show: boolean;
  group: Array<{
    url: string;
    contents: string;
  }>;
  position: 'header' | 'side';
};

function Category({ menu, category, selected, show, group, position }: Props) {
  return (
    <>
      <Navigation.Menu
        data-key={URL[category]}
        selected={selected[URL[category]]}
        className={cx('side-menu', position)}
      >
        <Text typo='b3' data-key={URL[category]}>
          {menu}
        </Text>
      </Navigation.Menu>
      <Navigation.MenuGroup show={show} className={cx('linker')}>
        {group.map(({ url, contents }) => {
          return (
            <Navigation.Menu
              key={url}
              data-key={url}
              selected={selected[url]}
              className={cx('side-menu', position)}
            >
              <Text typo='c1' data-key={url}>
                {contents}
              </Text>
            </Navigation.Menu>
          );
        })}
      </Navigation.MenuGroup>
    </>
  );
}

export default Category;
