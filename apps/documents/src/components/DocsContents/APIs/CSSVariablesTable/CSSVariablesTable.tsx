import { Fragment } from 'react';
import { Flex, Text } from '@cdkit/react-ui';
import useValueAppState from '@src/store/AppProvider/hooks/useValueAppState';

import Colon from '../Colon';
import type { CSS_VARIABLES } from '../../types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  cssVar: Array<CSS_VARIABLES>;
};

function CSSVariablesTable({ cssVar }: Props) {
  const { theme } = useValueAppState();

  return (
    <Flex flexDirection='column' className={cx('container')}>
      {cssVar.map(({ title, element }, idx) => {
        return (
          <Flex
            as='ul'
            key={`${title}-${idx}`}
            flexDirection='column'
            className={cx('contents')}
          >
            <Text typo='t1'>{title}</Text>
            {element.map(({ name, type, description }, index) => {
              return (
                <Fragment key={`${name}-${index}`}>
                  <li className={cx('name')}>
                    <Text typo='b1'>{name}</Text>
                  </li>
                  <Flex as='ul' flexDirection='column' className={cx('info')}>
                    <li>
                      <Flex>
                        <Text typo='b3' className={cx('cvt-name')}>
                          CSS 변수 타입
                        </Text>
                        <Colon />
                        <Text typo='b3' className={cx('css-type', type, theme)}>
                          {type}
                        </Text>
                      </Flex>
                    </li>
                    <li>
                      <Flex flexDirection='column' className={cx('desc')}>
                        <Text typo='b3'>설명</Text>
                        <ul>
                          {description.map((desc, i) => {
                            return (
                              <li key={i}>
                                <Text typo='b3'>{desc}</Text>
                              </li>
                            );
                          })}
                        </ul>
                      </Flex>
                    </li>
                  </Flex>
                </Fragment>
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
}

export default CSSVariablesTable;
