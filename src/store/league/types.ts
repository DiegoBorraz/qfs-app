import { ILeague } from "@/models/areas";

export interface ILeagueStore {
  state: {
    league: ILeague | null;
  };
  actions: {
    setLeague: (league: ILeague) => void;
  };
}
