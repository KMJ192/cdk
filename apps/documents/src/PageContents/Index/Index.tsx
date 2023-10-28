import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Render() {
  return <div className={cx('index-container')}>Render</div>;
}

export default Render;
