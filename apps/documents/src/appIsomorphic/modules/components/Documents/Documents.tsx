import type { PAGE_MODULE_COMPONENTS } from '@src/utils/url';

import { MODULE_COMPONENTS_CONTENTS } from '../contents/contents';

import { Flex, Spacing, Text } from '@cdkit/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  type: PAGE_MODULE_COMPONENTS;
};

function Documents({ type }: Props) {
  const { document } = MODULE_COMPONENTS_CONTENTS[type];

  return (
    <Flex className={cx('container')} flexDirection='column'>
      {document.map(({ title, subtitle, desc, code }, idx) => {
        const key = `${title}-${idx}`;
        return (
          <Flex className={cx('doc-contents')} key={key} flexDirection='column'>
            <Text typo='t1'>{title}</Text>
            <Spacing spacing={0.5} unit='rem' />
            <Text typo='b1'>{subtitle}</Text>
            <Spacing spacing={0.75} unit='rem' />
            <Flex flexDirection='column'>
              {desc.map((d, idx) => {
                return (
                  <span key={`${key}-${idx}`} className={cx('desc')}>
                    {d}
                  </span>
                );
              })}
            </Flex>
            <Spacing spacing={1} unit='rem' />
            <Spacing spacing={1.2} unit='rem' />
            <CodeGuide header='jsx' code={code}></CodeGuide>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default Documents;
