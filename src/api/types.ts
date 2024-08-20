import { ICountry, ILeague, IMatch } from "@/models/areas";
import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";

export type TuseGetAllCountry = () => UseQueryResult<ICountry[]>;

export type TuseGetAllLeagues = (params: {
  queryProps: Omit<UseQueryOptions<ILeague[]>, "queryKey">;
  params: { countryCode: string };
}) => UseQueryResult<ILeague[]>;

export type TuseGetLeaguesMatches = (params: {
  queryProps: Omit<UseQueryOptions<IMatch[]>, "queryKey">;
  params: { leagueId: string; date: string };
}) => UseQueryResult<IMatch[]>;

type TData<T> = {
  date: string;
  group: T;
}[];
