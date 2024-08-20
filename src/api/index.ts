import axios from "axios";

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const APIKEY = process.env.NEXT_PUBLIC_API_KEY;

type TTypeRequest = "list" | "info";
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: {
    "x-rapidapi-host": HOST,
    "x-rapidapi-key": APIKEY,
  },
});

interface IDataParams {
  endpoint: string;
  params?: {
    [key: string]: string | number;
  };
}

export const getAxios = async ({ endpoint, params = {} }: IDataParams) => {
  const { data } = await api.get(`${endpoint}`, {
    params: {
      ...params,
    },
  });
  return data;
};
