import { create } from 'zustand';
import { isWindow } from '@src/utils/utils';

type State = {
  width: number;
  height: number;
};

type Action = {
  setWindowSize: (newState: State) => void;
};

const useWindowSize = create<State & Action>((set) => ({
  width: isWindow ? window.innerWidth : 0,
  height: isWindow ? window.innerHeight : 0,
  setWindowSize: (newState: State) => set(newState),
}));

export { useWindowSize };
