'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Flex, Spacing, Tab, type TabOptionKey, Text } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import Line from '@src/components/Line/Line';
import Documents from './Documents/Documents';
import PropsCompo from './PropsCompo/PropsCompo';
import Playground from './Playground/Playground';

import type { PAGE_LAYOUT } from '@src/utils/url';
import { LAYOUT_CONTENTS } from './contents';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  type: PAGE_LAYOUT;
};

function Layout({ type }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const curParam = searchParams.get('compo');

  const { pageTitle, pageDesc, tabOption } = LAYOUT_CONTENTS[type];

  const [selectedTab, setSelectedTab] = useState(0);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const onSelect = (_: TabOptionKey, idx: number) => {
    setSelectedTab(idx);
    router.push(
      `${pathname}?${createQueryString('compo', String(tabOption[idx].key))}`,
    );
  };

  useEffect(() => {
    const initState = () => {
      setSelectedTab(0);
    };
    initState();
  }, [type]);

  return (
    <Flex flexDirection='column' className={cx('container')}>
      <Text typo='h2'>{pageTitle}</Text>
      <Spacing className={cx('spacing', 'first')} />
      <Text typo='s3'>{pageDesc}</Text>
      <Spacing className={cx('spacing', 'first')} />
      <Line />
      <Spacing className={cx('spacing', 'second')} />
      <Tab options={tabOption} selected={selectedTab} onSelect={onSelect} />
      <Spacing className={cx('spacing', 'third')} />
      <When condition={!curParam || curParam === 'docs'}>
        <Documents type={type} />
      </When>
      <When condition={curParam === 'props'}>
        <PropsCompo type={type} />
      </When>
      <When condition={curParam === 'playground'}>
        <Playground type={type} />
      </When>
    </Flex>
  );
}

export default Layout;
