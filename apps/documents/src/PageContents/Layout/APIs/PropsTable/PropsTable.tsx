import { Fragment } from 'react';
import { Flex, Text } from '@cdkit/react-ui';

import useValueAppState from '@src/store/AppProvider/hooks/useValueAppState';

import { LAYOUT_CONTENTS } from '../../contents/contents';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  type: string;
};

function Colon() {
  return (
    <Text typo='b1' className={cx('colon')}>
      :
    </Text>
  );
}

function PropsTable({ type }: Props) {
  const { theme } = useValueAppState();
  const { props } = LAYOUT_CONTENTS[type];

  return (
    <Flex flexDirection='column' className={cx('container')}>
      {props.map(({ title, desc, element }, idx) => {
        return (
          <Flex
            as='ul'
            key={`${title}-${idx}`}
            flexDirection='column'
            className={cx('props-contents')}
          >
            <Text typo='t1'>{title}</Text>
            <Text typo='s1'>{desc}</Text>
            {element.map(
              ({ name, type, defaultValue, description, essential }, index) => {
                return (
                  <Fragment key={`${name}-${index}`}>
                    <li className={cx('props-name')}>
                      <Text typo='b1'>{name}</Text>
                      {essential && (
                        <Text typo='c1' className={cx('essential', theme)}>
                          *
                        </Text>
                      )}
                    </li>
                    <Flex
                      as='ul'
                      flexDirection='column'
                      className={cx('props-info')}
                    >
                      <li>
                        <Flex>
                          <Text typo='b3'>타입</Text>
                          <Colon />
                          <Text typo='b3'>{type}</Text>
                        </Flex>
                      </li>
                      <li>
                        <Flex>
                          <Text typo='b3'>기본값</Text>
                          <Colon />
                          <Text typo='b3'>{defaultValue}</Text>
                        </Flex>
                      </li>
                      <li>
                        <Flex
                          flexDirection='column'
                          className={cx('props-desc')}
                        >
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
              },
            )}
          </Flex>
        );
      })}
    </Flex>
  );
}

export default PropsTable;
