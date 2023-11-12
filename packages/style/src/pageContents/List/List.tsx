import { Spacing, Text } from '@cdkit/react-ui';
import CodeGuide from '../CodeGuide/CodeGuide';

import View from './View';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  list: Array<{
    name: string;
    category: string;
    html: string;
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
            <View html={html} />
            <CodeGuide header='html' code={code} />
          </div>
        );
      })}
    </div>
  );
}

export default List;
