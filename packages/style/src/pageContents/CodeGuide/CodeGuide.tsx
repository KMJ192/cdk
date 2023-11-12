import { Flex, Text } from '@cdkit/react-ui';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  code?: Array<string>;
  header?: string;
};

function CodeGuide({ header = '', code = [] }: Props) {
  const onClickCopy = () => {
    if (code.length > 0) {
      navigator.clipboard
        .writeText(code.join(''))
        .then(() => {
          // !todo 성공 toast
        })
        .catch(() => {
          // !todo 실패 toast
        });
    }
  };

  return (
    <Flex className={cx('code-guide')} flexDirection='column'>
      <Flex className={cx('header')}>
        <Text typo='c1'>{header}</Text>
        <Text typo='c1' className={cx('copy')} onClick={onClickCopy}>
          copy
        </Text>
      </Flex>
      <Flex className={cx('code-view')}>
        {code.map((c, idx) => {
          return <pre key={idx}>{c}</pre>;
        })}
      </Flex>
    </Flex>
  );
}

export default CodeGuide;
