import { create } from 'zustand';

interface UseMobileMenu {
  isOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const UseMobileMenu = create<UseMobileMenu>(set => ({
  isOpen: false,
  openMobileMenu: () => set({ isOpen: true }),
  closeMobileMenu: () => set({ isOpen: false }),
}));
