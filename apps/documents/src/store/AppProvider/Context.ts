import { createContext } from 'react';
import _ from 'lodash';
import Cookies from 'js-cookie';

import type { APP_CONTEXT_STATE, APP_CONTEXT_DISPATCHER } from './types';

const INIT_STATE: APP_CONTEXT_STATE = {
  theme: Cookies.get('theme') === 'dark' ? 'dark' : 'light',
};

const INIT_CONTEXT: APP_CONTEXT_DISPATCHER = [
  _.cloneDeep(INIT_STATE),
  () => {
    return _.cloneDeep(INIT_STATE);
  },
];

const Context = createContext(INIT_CONTEXT);

export { INIT_STATE };
export default Context;
