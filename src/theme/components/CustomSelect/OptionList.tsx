import { Box, Flex, Text } from "@chakra-ui/react";
import { CustomImage } from "../CustomImage";

export interface IOption {
  label: string;
  value: string;
  image?: string;
}

interface IOptionList {
  options: IOption[];
  selectedOption: IOption | null;
  onClose: () => void;
  onChange: (option: IOption) => void;
}

export const OptionList: React.FC<IOptionList> = ({
  options,
  selectedOption,
  onClose,
  onChange,
}) => {
  return (
    <Box
      maxH="2xl"
      bgColor="neutral.gray.3"
      borderBottomRadius="base"
      py={2}
      overflowY="auto"
      zIndex={10}
      __css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
      }}
      onBlur={onClose}
    >
      {options.map((option: IOption) => (
        <Flex
          key={option.value}
          alignItems="center"
          h={8}
          px={2}
          cursor="pointer"
          bgColor={
            option.value == selectedOption?.value
              ? "neutral.gray.5"
              : "transparent"
          }
          _hover={{ bg: "neutral.gray.2" }}
          onClick={() => onChange(option)}
        >
          <Flex flex={1} flexDir="row" justifyContent="space-between" h={6}>
            <Text fontWeight={400} fontSize="md">
              {option.label}
            </Text>
            <CustomImage src={option.image} width={10} heigth={10} />
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};
