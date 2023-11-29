import { Card, Flex, Spacing, Text } from '@cdkit/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import type { DOCUMENT } from '../types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import { When } from '@cdkit/react-modules';
const cx = classNames.bind(style);

type Props = {
  document: Array<DOCUMENT>;
};

function Documents({ document }: Props) {
  return (
    <Flex className={cx('container')} flexDirection='column'>
      {document.map(({ title, subtitle, view, code }, idx) => {
        const key = `${title}-${idx}`;
        return (
          <Flex className={cx('doc-contents')} key={key} flexDirection='column'>
            <Text typo='t1'>{title}</Text>
            <Spacing spacing={0.5} unit='rem' />
            <Text typo='b1'>{subtitle}</Text>
            <Spacing spacing={0.75} unit='rem' />
            <Spacing spacing={1} unit='rem' />
            <When condition={view !== 'none'}>
              <>
                <Card className={cx('view')}>{view}</Card>
                <Spacing spacing={1.2} unit='rem' />
              </>
            </When>
            <CodeGuide header='jsx' code={code}></CodeGuide>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default Documents;
