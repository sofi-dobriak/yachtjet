import { create } from 'zustand';

interface ScrollStore {
  isScroll: boolean;
  setIsScroll: (isScroll: boolean) => void;
}

const useScrollStore = create<ScrollStore>(set => ({
  isScroll: false,
  setIsScroll: isScroll => set({ isScroll }),
}));

export default useScrollStore;
