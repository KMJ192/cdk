import type { ReactNode } from 'react';
import { Flex, Spacing, Text } from '@cdkit/react-ui';
import CodeGuide from '../CodeGuide/CodeGuide';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  list: Array<{
    name: string;
    category: string;
    html: ReactNode;
    code: Array<string>;
  }>;
};

function List({ list }: Props) {
  return (
    <div className={cx('container')}>
      {list.map(({ name, category, html, code }) => {
        return (
          <div key={name} className={cx('item')}>
            <Text typo='h4'>{name}</Text>
            <Text typo='b1'>{category}</Text>
            <Spacing spacing={8} />
            <Flex flexDirection='column' className={cx('view')}>
              {html}
            </Flex>
            <Spacing spacing={16} />
            <CodeGuide header='html' code={code} />
          </div>
        );
      })}
    </div>
  );
}

export default List;
