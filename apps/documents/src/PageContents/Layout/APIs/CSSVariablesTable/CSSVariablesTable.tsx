import useValueAppState from '@src/store/AppProvider/hooks/useValueAppState';

import { LAYOUT_CONTENTS } from '../../contents/contents';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  type: string;
};

const CSS_VAR_TYPE = {
  COLOR: 'color',
  SIZE: 'size',
  LAYOUT: 'layout',
};

function CSSVariablesTable({ type }: Props) {
  const { theme } = useValueAppState();
  const { cssVar } = LAYOUT_CONTENTS[type];

  if (cssVar === undefined) {
    return null;
  }

  return <div></div>;
}

export default CSSVariablesTable;
