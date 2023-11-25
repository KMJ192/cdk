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
import { LAYOUT_CONTENTS } from './contents/contents';

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

  const [selectedTab, setSelectedTab] = useState(-1);

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
    if (
      typeof curParam === 'string' &&
      curParam !== 'docs' &&
      curParam !== 'apis' &&
      curParam !== 'playground'
    ) {
      setSelectedTab(-1);
      return;
    }

    initState();
  }, [type, curParam]);

  useEffect(() => {
    if (curParam === 'docs') {
      setSelectedTab(0);
      return;
    }
    if (curParam === 'apis') {
      setSelectedTab(1);
      return;
    }
    if (curParam === 'playground') {
      setSelectedTab(2);
    }
  }, [curParam]);

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
      <When condition={curParam === null || selectedTab === 0}>
        <Documents type={type} />
      </When>
      <When condition={selectedTab === 1}>
        <PropsCompo type={type} />
      </When>
      <When condition={selectedTab === 2}>
        <Playground type={type} />
      </When>
    </Flex>
  );
}

export default Layout;
