import type { PAGE_LAYOUT } from '@src/utils/url';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  type: PAGE_LAYOUT;
};

function Documents({ type }: Props) {
  return <div>Documents</div>;
}

export default Documents;
