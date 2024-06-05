import { create } from 'zustand';

const usePositionStore = create((set) => ({
  position: null,
  setPosition: (pos) => set({ position: pos }),
}));

const useResultStore = create((set) => ({
  result: null,
  setResult: (data) => set({ result: data }),
}));

module.exports = {
  usePositionStore,
  useResultStore,
};
