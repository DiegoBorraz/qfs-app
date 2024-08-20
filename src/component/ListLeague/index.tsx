import { ILeague } from "@/models/areas";
import { Flex, List, Text } from "@chakra-ui/react";
import { CustomImage } from "../../theme/components/CustomImage";

interface IListLeague {
  list: ILeague[] | undefined;
  leagueSelected: ILeague | null;
  onChange: (league: ILeague) => void;
}
export const ListLeague: React.FC<IListLeague> = ({
  list,
  leagueSelected,
  onChange,
}) => {
  return (
    <List
      py={2}
      overflowY="auto"
      __css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
      }}
    >
      {list?.map((league, index) => (
        <Flex
          key={index}
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
          h={10}
          px={4}
          cursor="pointer"
          bgColor={league == leagueSelected ? "neutral.gray.2" : "transparent"}
          _hover={{
            bgColor: "neutral.gray.3",
          }}
          onClick={() => onChange(league)}
        >
          <Text fontWeight={700} fontSize="sm">
            {league.name}
          </Text>
          <CustomImage src={league.logo} width={7} heigth={7} />
        </Flex>
      ))}
    </List>
  );
};
