import { Center } from '@cdkit/react-ui';

import { today } from '@src/utils/date';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import { version } from '@src/utils/utils';
const cx = classNames.bind(style);

function Footer() {
  return (
    <Center
      display='flex'
      as='footer'
      className={cx('footer')}
      horizontal={false}
    >
      <span className={cx('update')}>latest : {version}</span>
      <span className={cx('update')}>last update : {today()}</span>
    </Center>
  );
}

export default Footer;
