import Link from 'next/link';

import { Button, Center, Spacing, Text, Flex } from '@cdkit/react-ui';
import Line from '@src/components/Line/Line';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { URL } from '@src/utils/url';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function IndexPage() {
  return (
    <Center className={cx('container')} display='flex' flexDirection='column'>
      <Text typo='h3'>CDKit</Text>
      <Spacing direction='vertical' spacing={1} unit='rem' />
      <Text className={cx('description')} typo='s1'>
        CDKit(Component Develop Kit)은 React 애플리케이션에 필요한 디자인 요소
        및 기능을 제공하는 간단한 모듈식 구성요소 라이브러리 입니다.
      </Text>
      <Spacing direction='vertical' spacing={1.5} unit='rem' />
      <Line />
      <Spacing direction='vertical' spacing={2} unit='rem' />
      <Text typo='h3'>시작하기</Text>
      <Spacing direction='vertical' spacing={1.5} unit='rem' />
      <Center className={cx('start-group')}>
        <Flex className={cx('ui')} flexDirection='column'>
          <CodeGuide header='use npm' code={['npm install @cdkit/react-ui']} />
          <Spacing direction='vertical' spacing={24} />
          <CodeGuide header='use yarn' code={['yarn add @cdkit/react-ui']} />
          <Spacing direction='vertical' spacing={36} />
          <Link href={URL.ui}>
            <Button className={cx('custom', 'goto-button')}>
              <Text typo='s1'>UI 보러 가기</Text>
            </Button>
          </Link>
        </Flex>
        <Flex className={cx('modules')} flexDirection='column'>
          <CodeGuide
            header='use npm'
            code={['npm install @cdkit/react-modules']}
          />
          <Spacing direction='vertical' spacing={24} />
          <CodeGuide
            header='use yarn'
            code={['yarn add @cdkit/react-modules']}
          />
          <Spacing direction='vertical' spacing={36} />
          <Link href={URL.modules}>
            <Button className={cx('custom', 'goto-button')}>
              <Text typo='s1'>Module 보러 가기</Text>
            </Button>
          </Link>
        </Flex>
      </Center>
    </Center>
  );
}

export default IndexPage;
