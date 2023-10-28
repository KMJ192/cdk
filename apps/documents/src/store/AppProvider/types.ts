import type { THEME } from '@src/types/types';

type APP_CONTEXT_STATE = {
  theme: THEME;
};

type APP_CONTEXT_DISPATCHER = [
  APP_CONTEXT_STATE,
  (
    value:
      | APP_CONTEXT_STATE
      | ((value: APP_CONTEXT_STATE) => APP_CONTEXT_STATE),
  ) => void,
];

export type { APP_CONTEXT_STATE, APP_CONTEXT_DISPATCHER };
