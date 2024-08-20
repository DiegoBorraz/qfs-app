import { create } from "zustand";
import { ICountryStore } from "./types";

export const useCountryStore = create<ICountryStore>((set, get) => ({
  state: {
    country: undefined,
  },
  actions: {
    setCountry: (data) => {
      set({
        state: {
          ...get().state,
          country: data,
        },
      });
    },
  },
}));
