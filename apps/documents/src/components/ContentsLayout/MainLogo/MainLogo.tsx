import { COLOR } from '@src/styles/color';
import { Center, Text } from '@cdkit/react-ui';

import style from './style.module.scss';

function MainLogo() {
  return (
    <Center className={style.container} horizontal={false}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        fill='none'
        className={style.logo}
      >
        <circle cx='16' cy='16' r='16' fill={COLOR.LIGHT.PRIMARY['700']} />
        <circle cx='16' cy='16' r='12' fill={COLOR.LIGHT.SECONDARY['700']} />
        <circle cx='16' cy='16' r='8' fill={COLOR.LIGHT.PRIMARY['700']} />
      </svg>
      <Text typo='t3'>CDK</Text>
    </Center>
  );
}

export default MainLogo;
