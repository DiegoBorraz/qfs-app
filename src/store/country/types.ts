import { ICountry } from "@/models/areas";

export interface ICountryStore {
  state: {
    country: ICountry | undefined;
  };
  actions: {
    setCountry: (country: ICountry | undefined) => void;
  };
}
