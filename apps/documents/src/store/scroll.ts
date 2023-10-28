import { create } from 'zustand';

type State = {
  scrollX: number;
  scrollY: number;
};

type Action = {
  setScrollPosition: (newState: State) => void;
};

const useScrollPosition = create<State & Action>((set) => ({
  scrollX: 0,
  scrollY: 0,
  setScrollPosition: (newState: State) => set(newState),
}));

export { useScrollPosition };
