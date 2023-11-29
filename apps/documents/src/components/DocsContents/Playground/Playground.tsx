import { Sandpack } from '@codesandbox/sandpack-react';
import { Flex, Text } from '@cdkit/react-ui';

import useValueAppState from '@src/store/AppProvider/hooks/useValueAppState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  pgCode: string;
};

function Playground({ pgCode }: Props) {
  const { theme } = useValueAppState();

  return (
    <Flex flexDirection='column' className={cx('container')}>
      <Text typo='s1'>테스트 하기</Text>
      <Sandpack
        theme={theme}
        customSetup={{
          dependencies: {
            '@cdkit/react-ui': 'latest',
            '@cdkit/react-modules': 'latest',
          },
        }}
        template='react'
        files={{
          '/App.js': pgCode,
        }}
        options={{
          classes: {
            'sp-layout': cx('pg-layout'),
            'sp-preview': cx('pg-preview'),
            'sp-editor': cx('pg-editor'),
          },
        }}
      />
    </Flex>
  );
}

export default Playground;
