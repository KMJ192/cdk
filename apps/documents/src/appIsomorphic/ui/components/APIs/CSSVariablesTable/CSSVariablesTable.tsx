import { Fragment } from 'react';
import { Center, Flex, Text } from '@cdkit/react-ui';
import useValueAppState from '@src/store/AppProvider/hooks/useValueAppState';

import Colon from '../Colon';

import { COMPONENT_CONTENTS } from '../../contents/contents';

import { CSS_VAR_TYPE } from '@src/utils/utils';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  type: string;
};

function CSSVariablesTable({ type }: Props) {
  const { theme } = useValueAppState();
  const { cssVar } = COMPONENT_CONTENTS[type];

  return (
    <Flex flexDirection='column' className={cx('container')}>
      {cssVar.map(({ title, desc, element }, idx) => {
        return (
          <Flex
            as='ul'
            key={`${title}-${idx}`}
            flexDirection='column'
            className={cx('contents')}
          >
            <Text typo='t1'>{title}</Text>
            <Text typo='s1'>{desc}</Text>
            {element.map(({ name, type, defaultValue, description }, index) => {
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
                      <Flex>
                        <Text typo='b3' className={cx('dv-name')}>
                          기본값
                        </Text>
                        <Colon />
                        <Center className={cx('css-value')} horizontal={false}>
                          {type === CSS_VAR_TYPE.COLOR && (
                            <div
                              style={{
                                width: '0.675rem',
                                height: '0.675rem',
                                borderRadius: '2px',
                                boxShadow:
                                  theme === 'light'
                                    ? '0px 3px 6px rgba(0, 0, 0, 0.4)'
                                    : '0px 3px 6px rgba(0, 0, 0, 0.9)',
                                background: defaultValue,
                              }}
                            ></div>
                          )}
                          <Text typo='b3'>{defaultValue}</Text>
                        </Center>
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
