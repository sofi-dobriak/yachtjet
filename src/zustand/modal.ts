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
    document.body.style.overflow = 'hidden';
  },
  closeModal: () => {
    set({ isOpen: false });
    document.body.style.overflow = 'auto';
  },
}));
