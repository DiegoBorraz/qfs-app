"use client";

import { Matches } from "@/component/Matches";
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  // const { data } = useGetLeaguesMatches({
  //   params: { fromData: "2024-08-14", toData: "2024-08-21", leagueId: "99" },
  // });
  //console.log("PARTIDAS: ", data);
  return (
    <Flex flex={1}>
      <Tabs
        flex={1}
        isFitted
        variant="enclosed"
        bgColor="neutral.gray.3"
        borderRadius="md"
        m={4}
      >
        <TabList mb="1em">
          <Tab>
            <Text fontWeight={500} fontSize="xl">
              Partidas
            </Text>
          </Tab>
          <Tab>Clubes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Matches />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
