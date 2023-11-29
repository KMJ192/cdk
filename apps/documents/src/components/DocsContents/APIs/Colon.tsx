import { Text } from '@cdkit/react-ui';

import style from './style.module.scss';

function Colon() {
  return (
    <Text typo='b1' className={style.colon}>
      :
    </Text>
  );
}

export default Colon;
