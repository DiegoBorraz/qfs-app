import { useGetLeaguesMatches } from "@/api/country";
import { useLeagueStore } from "@/store/league";
import { formatarData } from "@/util/CustomDate";
import { Flex, Input, Text } from "@chakra-ui/react";

export const Matches: React.FC = () => {
  const {
    state: { league },
    actions: { setLeague },
  } = useLeagueStore();

  const { data: matchesData } = useGetLeaguesMatches({
    queryProps: {
      enabled: !!league,
    },
    params: {
      leagueId: league ? league.id : "P",
      date: formatarData(new Date()),
    },
  });
  console.log("MATCHES ", matchesData);
  return (
    <Flex flex={1} justifyContent="center">
      <Flex justifyContent="space-around" maxW="24rem" gap={4}>
        <Flex flexDir="column" alignItems="center">
          <Text fontWeight={400} fontSize="xl">
            Data Inicio
          </Text>
          <Input type="date" size="sm" />
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Text fontWeight={400} fontSize="xl">
            Data Final
          </Text>
          <Input type="date" size="sm" />
        </Flex>
      </Flex>
    </Flex>
  );
};
