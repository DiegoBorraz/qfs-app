import { create } from "zustand";
import { ILeagueStore } from "./types";

export const useLeagueStore = create<ILeagueStore>((set, get) => ({
  state: {
    league: null,
  },
  actions: {
    setLeague: (league) => {
      set({
        state: {
          ...get().state,
          league: league,
        },
      });
    },
  },
}));
