import { create } from 'zustand';
import { getUserAgent } from '@src/utils/utils';

type UserAgent = 'unknown' | 'window' | 'mac' | 'linux' | 'android' | 'ios';

type State = {
  userAgent: UserAgent;
};

type Action = {
  setUserAgent: (newState: State) => void;
};

const useUserAgent = create<State & Action>((set) => ({
  userAgent: getUserAgent(),
  setUserAgent: (newState: State) => set(newState),
}));

export { useUserAgent };
