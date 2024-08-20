interface ITeam {
  id: number;
  name: string;
  logo: string;
}
interface IScore {
  current: string | null;
  penalties: string | null;
}
interface IStateMatch {
  clock: number | null;
  description: string;
  score: IScore;
}
export interface ICountry {
  code: string;
  name: string;
  logo: string;
}

export interface ISeason {
  season: number;
}
export interface ILeague extends ICountry {
  id: string;
  logo: string;
  name: string;
  season: ISeason[];
  country: ICountry;
}

export interface IMatch {
  id: string;
  round: string;
  date: string;
  country: ICountry;
  state: IStateMatch;
  awayTeam: ITeam;
  homeTeam: ITeam;
  league: ILeague;
}
