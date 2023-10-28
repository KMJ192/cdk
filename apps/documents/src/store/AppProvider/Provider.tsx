'use client';

import { useState, type ReactNode } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import Context from './Context';
import type { APP_CONTEXT_STATE } from './types';

type Props = {
  value: APP_CONTEXT_STATE;
  children: ReactNode;
};

function Provider({ value, children }: Props) {
  const contextState = useState(cloneDeep(value));

  return <Context.Provider value={contextState}>{children}</Context.Provider>;
}

export default Provider;
