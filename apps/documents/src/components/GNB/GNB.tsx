import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import cloneDeep from 'lodash/cloneDeep';
import { Spacing, Text } from '@cdkit/react-ui';

import { Navigation } from './Navigation';
import Category from './Category/Category';
import Line from '@src/components/Line/Line';

import { URL } from '@src/utils/url';
import {
  category,
  urlDictionary,
  initSelectedList,
  layoutGroup,
  uiComponentGroup,
  hooksGroup,
  moduleComponentGroup,
  validNavGroup,
  isURL,
} from './utils';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  position: 'header' | 'side';
  className?: string;
};

function GNB({ position, className }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState(cloneDeep(initSelectedList));
  const [show, setShow] = useState<{ [key: string]: boolean }>({
    [URL.layout]: false,
    [URL.uiComponents]: false,
    [URL.hooks]: false,
    [URL.moduleComponents]: false,
  });

  const onClickUI = () => {
    router.push(URL.ui);
    setSelected({ ...initSelectedList });
    setShow({
      ...show,
      [URL.hooks]: false,
      [URL.moduleComponents]: false,
    });
  };

  const onClickModules = () => {
    router.push(URL.modules);
    setSelected({ ...initSelectedList });
    setShow({
      ...show,
      [URL.layout]: false,
      [URL.uiComponents]: false,
    });
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    const dataKey = element.dataset.key;

    if (dataKey && isURL(dataKey)) {
      if (
        dataKey !== URL.uiComponents &&
        dataKey !== URL.layout &&
        dataKey !== URL.hooks &&
        dataKey !== URL.moduleComponents
      ) {
        router.push(dataKey);
      }
      setSelected({
        ...initSelectedList,
        [dataKey]: true,
      });

      const groupName = validNavGroup(dataKey);
      if (groupName) {
        setShow({
          ...show,
          [groupName]: !show[groupName],
        });
      }
    }
  };

  useEffect(() => {
    const group = pathname.split('/');

    if (group.length === 4) {
      const c = group[2];
      if (c === category.layout) {
        setShow({
          ...show,
          [URL.layout]: true,
        });
      } else if (c === category.uiComponents && group[1] === 'ui') {
        setShow({
          ...show,
          [URL.uiComponents]: true,
        });
      } else if (c === category.moduleComponents && group[1] === 'modules') {
        setShow({
          ...show,
          [URL.moduleComponents]: true,
        });
      } else if (c === category.hooks) {
        setShow({
          ...show,
          [URL.hooks]: true,
        });
      }

      if (urlDictionary.has(pathname)) {
        setSelected({
          ...initSelectedList,
          [pathname]: true,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Navigation
      className={cx('gnb', position, className)}
      onClick={onClick}
      depthGap={0}
    >
      <Navigation.Menu onClick={onClickUI}>
        <Text typo='t1'>UI</Text>
      </Navigation.Menu>
      <Navigation.MenuGroup show>
        <Category
          menu='Layout'
          category='layout'
          selected={selected}
          show={show[URL.layout]}
          group={layoutGroup}
          position={position}
        />
        <Category
          menu='Components'
          category='uiComponents'
          selected={selected}
          show={show[URL.uiComponents]}
          group={uiComponentGroup}
          position={position}
        />
      </Navigation.MenuGroup>
      <Line />
      <Navigation.Menu onClick={onClickModules}>
        <Text typo='t1'>Module</Text>
      </Navigation.Menu>
      <Navigation.MenuGroup show>
        <Category
          menu='Hooks'
          category='hooks'
          selected={selected}
          show={show[URL.hooks]}
          group={hooksGroup}
          position={position}
        />
        <Category
          menu='Components'
          category='moduleComponents'
          selected={selected}
          show={show[URL.moduleComponents]}
          group={moduleComponentGroup}
          position={position}
        />
      </Navigation.MenuGroup>
      <Spacing direction='vertical' spacing={16} />
    </Navigation>
  );
}

export default GNB;
