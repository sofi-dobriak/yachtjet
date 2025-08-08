import { create } from 'zustand';

interface UseModal {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const UseModal = create<UseModal>(set => ({
  isOpen: false,
  openModal: () => {
    set({ isOpen: true });
  },
  closeModal: () => {
    set({ isOpen: false });
  },
}));
