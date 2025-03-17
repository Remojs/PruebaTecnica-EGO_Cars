import { create } from "zustand";

const filterStore = create((set) => ({
  selectedSegment: "Todos",
  sortBy: "nada",

  setSegment: (segment) => set(() => ({
    selectedSegment: segment
  })),

  setSortBy: (sortOption) => set(() => ({
    sortBy: sortOption
  })),
}));

export default filterStore;
