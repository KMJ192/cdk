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
  onClose?: () => void;
};

function GNB({ position, className, onClose }: Props) {
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
    if (onClose) onClose();
  };

  const onClickModules = () => {
    router.push(URL.modules);
    setSelected({ ...initSelectedList });
    setShow({
      ...show,
      [URL.layout]: false,
      [URL.uiComponents]: false,
    });
    if (onClose) onClose();
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    const dataKey = element.dataset.key;

    if (!dataKey) return;
    if (!isURL(dataKey)) return;

    const groupName = validNavGroup(dataKey);

    if (!groupName) {
      router.push(dataKey);
      if (onClose) onClose();
    } else {
      setShow({
        ...show,
        [groupName]: !show[groupName],
      });
    }

    setSelected({
      ...initSelectedList,
      [dataKey]: true,
    });
  };

  useEffect(() => {
    const group = pathname.split('/');

    if (group.length !== 4) return;

    const groupName = group[1];
    const groupCategory = group[2];

    if (urlDictionary.has(pathname)) {
      setSelected({
        ...initSelectedList,
        [pathname]: true,
      });
    }

    if (groupName === 'ui' && groupCategory === category.layout) {
      setShow({
        ...show,
        [URL.layout]: true,
      });
      return;
    }

    if (groupName === 'ui' && groupCategory === category.uiComponents) {
      setShow({
        ...show,
        [URL.uiComponents]: true,
      });
      return;
    }

    if (groupName === 'modules' && groupCategory === category.hooks) {
      setShow({
        ...show,
        [URL.hooks]: true,
      });
      return;
    }

    if (
      groupName === 'modules' &&
      groupCategory === category.moduleComponents
    ) {
      setShow({
        ...show,
        [URL.moduleComponents]: true,
      });
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
