"use client";
import { useGetAllCountry, useGetLeagues } from "@/api/country";

import { useEffect, useState } from "react";

import { ILeague } from "@/models/areas";
import { useCountryStore } from "@/store/country";
import { useLeagueStore } from "@/store/league";
import { Flex, Text } from "@chakra-ui/react";
import { CustomSelect, IOption } from "../../theme/components/CustomSelect";
import { ListLeague } from "../ListLeague";

export const MenuSidebar: React.FC = () => {
  const [ArrayCountry, setArrayCountry] = useState<IOption[]>([]);
  const [ArrayLeague, setArrayLeague] = useState<ILeague[] | undefined>([]);

  const { data: countryData } = useGetAllCountry();
  const {
    state: { country },
    actions: { setCountry },
  } = useCountryStore();

  const { data: leaguesData } = useGetLeagues({
    queryProps: {
      enabled: !!country,
    },
    params: {
      countryCode: country?.code || "",
    },
  });
  const {
    state: { league },
    actions: { setLeague },
  } = useLeagueStore();

  useEffect(() => {
    setArrayCountry(getCountryToOptions());
  }, [countryData]);

  useEffect(() => {
    setArrayLeague(leaguesData);
  }, [leaguesData]);

  const handleCountryChange = (selected: IOption | null) => {
    setCountry(countryData?.find((data) => data.code == selected?.value));
  };

  const handleLeagueChange = (selected: ILeague) => {
    console.log("liga === ", selected);
    setLeague(selected);
  };

  const getCountryToOptions = () => {
    if (!countryData) return [];
    return countryData.map((country) => ({
      value: country?.code,
      label: country?.name,
      image: country?.logo,
    }));
  };

  return (
    <Flex
      maxW={80}
      maxH="90vh"
      flexDirection="column"
      bgColor="neutral.gray.4"
      borderRadius="md"
      shadow="0 2px 10px rgba(0, 0, 0, 0.5)"
      m={4}
    >
      <Text fontWeight={400} fontSize="xl" p={4}>
        Pais selecionado
      </Text>

      <CustomSelect
        label="Selecione o pais"
        options={ArrayCountry}
        onChange={handleCountryChange}
      />
      <Text
        fontWeight={400}
        fontSize="xl"
        p={4}
        shadow="0 2px 2px rgba(0, 0, 0, 0.5)"
      >
        Ligas
      </Text>
      <ListLeague
        list={ArrayLeague}
        leagueSelected={league}
        onChange={handleLeagueChange}
      />
    </Flex>
  );
};
