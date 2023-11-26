import React from 'react';
import { Flex, Spacing } from '@cdkit/react-ui';
import { When } from '@cdkit/react-modules';

import { LAYOUT_CONTENTS } from '../contents/contents';

import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import CSSVariablesTable from './CSSVariablesTable/CSSVariablesTable';
import PropsTable from './PropsTable/PropsTable';

import { type PAGE_LAYOUT } from '@src/utils/url';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  type: PAGE_LAYOUT;
};

function APIs({ type }: Props) {
  const { props, cssVar, defaultCode } = LAYOUT_CONTENTS[type];

  return (
    <Flex flexDirection='column' className={cx('container')}>
      <CodeGuide header='jsx' code={defaultCode} />
      <When condition={props.length > 0}>
        <PropsTable type={type} />
      </When>
      <When condition={cssVar !== undefined && cssVar.length > 0}>
        <>
          <Spacing spacing={1} unit='rem' />
          <CSSVariablesTable type={type} />
        </>
      </When>
    </Flex>
  );
}

export default APIs;
