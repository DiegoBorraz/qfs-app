import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { CustomImage } from "../CustomImage";

export interface IOption {
  label: string;
  value: string;
  image?: string;
}

interface ISelect {
  label: string;
  selectedOption: IOption | null;
  isOpen: boolean;
  onOpen: () => void;
  onOptionChange: (option: IOption) => void;
}

export const Select: React.FC<ISelect> = ({
  label,
  selectedOption,
  isOpen,
  onOpen,
  onOptionChange,
}) => {
  return (
    <Flex
      as="button"
      justifyContent="space-between"
      alignItems="center"
      w="full"
      py={1}
      onClick={onOpen}
      gap={2}
      bgColor="neutral.gray.3"
      border="1px solid"
      borderColor="neutral.gray.4"
      borderRadius="base"
    >
      {selectedOption == null ? (
        <Text fontWeight={400} fontSize="xl" pl={4}>
          {label}
        </Text>
      ) : (
        <Flex flex={1} justifyContent="space-between">
          <Text fontWeight={400} fontSize="xl" pl={4}>
            {selectedOption == null ? label : selectedOption.label}
          </Text>
          <CustomImage src={selectedOption.image} width={10} heigth={10} />
        </Flex>
      )}
      <Flex>
        <Icon as={isOpen ? ChevronDownIcon : ChevronLeftIcon} />
      </Flex>
    </Flex>
  );
};
