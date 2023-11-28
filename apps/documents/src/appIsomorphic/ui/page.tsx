import { Button, Center, Spacing, Text, Flex } from '@cdkit/react-ui';

import Link from 'next/link';
import { URL } from '@src/utils/url';

import Line from '@src/components/Line/Line';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function UIPage() {
  return (
    <Center display='flex' flexDirection='column'>
      <Text typo='h3'>CDKit React UI</Text>
      <Spacing direction='vertical' spacing={1} unit='rem' />
      <Text className={cx('description')} typo='s1'>
        CDKit UI는 React 애플리케이션에 필요한 디자인 요소를 제공하는 간단한
        모듈식 구성요소 라이브러리 입니다.
      </Text>
      <Spacing direction='vertical' spacing={1.5} unit='rem' />
      <Line />
      <Spacing direction='vertical' spacing={1.5} unit='rem' />
      <Text typo='t1'>시작하기</Text>
      <Spacing direction='vertical' spacing={1} unit='rem' />
      <Flex className={cx('use-guide')} flexDirection='column'>
        <CodeGuide header='use npm' code={['npm install @cdkit/react-ui']} />
        <Spacing direction='vertical' spacing={1} unit='rem' />
        <CodeGuide header='use yarn' code={['yarn add @cdkit/react-ui']} />
        <Spacing direction='vertical' spacing={2} unit='rem' />
        <Link href={URL.center}>
          <Button className={cx('goto')}>
            <Text typo='s1'>문서 보러 가기</Text>
          </Button>
        </Link>
      </Flex>
    </Center>
  );
}

export default UIPage;
