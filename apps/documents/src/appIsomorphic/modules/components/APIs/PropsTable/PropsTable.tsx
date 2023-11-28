import { Fragment } from 'react';
import { Flex, Text } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import useValueAppState from '@src/store/AppProvider/hooks/useValueAppState';

import { MODULE_COMPONENTS_CONTENTS } from '../../contents/contents';

import Colon from '../Colon';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  type: string;
};

function PropsTable({ type }: Props) {
  const { theme } = useValueAppState();
  const { props } = MODULE_COMPONENTS_CONTENTS[type];

  return (
    <Flex flexDirection='column' className={cx('container')}>
      {props.map(({ title, element }, idx) => {
        return (
          <Flex
            as='ul'
            key={`${title}-${idx}`}
            flexDirection='column'
            className={cx('contents')}
          >
            <Text typo='t1'>{title}</Text>
            {element.map(
              ({ name, type, defaultValue, description, essential }, index) => {
                return (
                  <Fragment key={`${name}-${index}`}>
                    <li className={cx('name')}>
                      <Text typo='b1'>{name}</Text>
                      {essential && (
                        <Text typo='b1' className={cx('essential', theme)}>
                          *
                        </Text>
                      )}
                    </li>
                    <Flex as='ul' flexDirection='column' className={cx('info')}>
                      <li>
                        <Flex>
                          <Text typo='b3' className={cx('type-name')}>
                            타입
                          </Text>
                          <Colon />
                          <Text typo='b3' className={cx('type', theme)}>
                            {type}
                          </Text>
                        </Flex>
                      </li>
                      <When condition={defaultValue !== ''}>
                        <li>
                          <Flex>
                            <Text typo='b3' className={cx('dv-name')}>
                              기본값
                            </Text>
                            <Colon />
                            <Text typo='b3'>{defaultValue}</Text>
                          </Flex>
                        </li>
                      </When>
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
              },
            )}
          </Flex>
        );
      })}
    </Flex>
  );
}

export default PropsTable;
