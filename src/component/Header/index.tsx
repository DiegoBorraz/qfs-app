import { Flex, Text } from "@chakra-ui/react";

interface IHeader {
  title: string;
}
export const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <Flex
      h={16}
      justifyContent="center"
      alignItems="center"
      bgColor="neutral.gray.5"
      shadow="0 2px 10px rgba(0, 0, 0, 0.5)"
    >
      <Text fontWeight={700} fontSize="xl" textColor="primary">
        {title}
      </Text>
    </Flex>
  );
};
