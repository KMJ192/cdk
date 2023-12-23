'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Flex, Spacing, Text } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import Line from '@src/components/Line/Line';
import Documents from '@src/components/DocsContents/Documents/Documents';
import APIs from '@src/components/DocsContents/APIs/APIs';
import Playground from '@src/components/DocsContents/Playground/Playground';
import DocSelectTab from '@src/components/DocSelectTab/DocSelectTab';

import type { PAGE_LAYOUT } from '@src/utils/url';
import { createQueryString } from '@src/utils/utils';
import { LAYOUT_CONTENTS, TAB_OPTIONS } from './contents/contents';

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

  const { pageTitle, pageDesc, document, params, cssVar, defaultCode, pgCode } =
    LAYOUT_CONTENTS[type];

  const [selectedTab, setSelectedTab] = useState(
    (() => {
      if (curParam === null || curParam === 'docs') return 0;
      if (curParam === 'apis') return 1;
      if (curParam === 'playground') return 2;
      return -1;
    })(),
  );

  const onSelect = (idx: number) => {
    setSelectedTab(idx);
    router.push(
      `${pathname}?${createQueryString(
        searchParams,
        'compo',
        String(TAB_OPTIONS[idx].key),
      )}`,
    );
  };

  useEffect(() => {
    if (typeof curParam !== 'string') return;

    if (curParam !== 'docs' && curParam !== 'apis' && curParam !== 'playground')
      setSelectedTab(-1);

    if (curParam === 'docs') setSelectedTab(0);
    if (curParam === 'apis') setSelectedTab(1);
    if (curParam === 'playground') setSelectedTab(2);
  }, [curParam]);

  return (
    <Flex flexDirection='column' className={cx('container')}>
      <Text typo='h4'>{pageTitle}</Text>
      <Spacing className={cx('spacing', 'first')} />
      <Text typo='s3'>{pageDesc}</Text>
      <Spacing className={cx('spacing', 'first')} />
      <Line />
      <Spacing className={cx('spacing', 'second')} />
      <DocSelectTab
        selected={selectedTab}
        options={TAB_OPTIONS}
        onSelect={onSelect}
      />
      <Spacing className={cx('spacing', 'third')} />
      <When condition={selectedTab === 0}>
        <Documents document={document} />
      </When>
      <When condition={selectedTab === 1}>
        <APIs params={params} cssVar={cssVar} defaultCode={defaultCode} />
      </When>
      <When condition={selectedTab === 2}>
        <Playground pgCode={pgCode} />
      </When>
    </Flex>
  );
}

export default Layout;
