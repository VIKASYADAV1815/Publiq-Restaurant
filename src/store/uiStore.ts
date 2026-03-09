import { create } from 'zustand';

interface UIStore {
  targetCategory: string | null;
  setTargetCategory: (category: string | null) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  targetCategory: null,
  setTargetCategory: (category) => set({ targetCategory: category }),
}));
