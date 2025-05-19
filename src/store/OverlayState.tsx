import { create } from 'zustand'

export interface OverlayState {
  minimized: boolean,
  setMinimized: (minimized: boolean) => void,
}

export const useOverlayStore = create<OverlayState>(set => ({
  minimized: false,
  setMinimized: minimized => set({ minimized }),
}))
