import { create } from 'zustand';
import type { PAGE_LAYOUT } from '@src/utils/url';

type State = {
  curPage: PAGE_LAYOUT | '';
};

type Action = {
  setCurrentPage: (newState: State) => void;
};

const useLayoutContents = create<State & Action>((set) => ({
  curPage: '',
  setCurrentPage: (newState: State) => set(newState),
}));

export { useLayoutContents };
