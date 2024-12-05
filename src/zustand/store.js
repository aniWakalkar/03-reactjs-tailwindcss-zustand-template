// store.js
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  userName: "",
  setUserName: (name) => set({ userName: name }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
