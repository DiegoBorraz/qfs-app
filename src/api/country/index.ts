import { useQuery } from "@tanstack/react-query";
import { getAxios } from "..";
import {
  TuseGetAllCountry,
  TuseGetAllLeagues,
  TuseGetLeaguesMatches,
} from "../types";

const getAllCountry = async () => {
  const data = await getAxios({
    endpoint: "countries",
    params: {},
  });

  data.sort((a: any, b: any) => a.name.localeCompare(b.name));
  return data;
};

export const useGetAllCountry: TuseGetAllCountry = () => {
  return useQuery({
    queryKey: ["country"],
    queryFn: () => getAllCountry(),
    staleTime: 10000,
  });
};

const getAllLeagues = async (countryCode: string) => {
  const data = await getAxios({
    endpoint: "leagues",
    params: {
      countryCode: countryCode,
    },
  });
  return data.data;
};

export const useGetLeagues: TuseGetAllLeagues = ({ queryProps, params }) => {
  return useQuery({
    queryKey: ["leagues", params.countryCode],
    queryFn: () => getAllLeagues(params.countryCode),
    ...queryProps,
  });
};

const getLeaguesMatches = async (leagueId: string, date: string) => {
  const data = await getAxios({
    endpoint: "matches",
    params: {
      leagueId: leagueId,
      date: date,
    },
  });
  return data;
};

export const useGetLeaguesMatches: TuseGetLeaguesMatches = ({
  queryProps,
  params,
}) => {
  return useQuery({
    queryKey: ["LeaguesMatches", params.leagueId, params.date],
    queryFn: () => getLeaguesMatches(params.leagueId, params.date),
    ...queryProps,
  });
};
