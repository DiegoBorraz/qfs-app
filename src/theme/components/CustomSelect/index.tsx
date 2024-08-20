import { useState } from "react";

import { Box, Flex, useDisclosure } from "@chakra-ui/react";

import { OptionList } from "./OptionList";
import { Select } from "./Select";

export interface IOption {
  label: string;
  value: string;
  image?: string;
}

interface ICustomSelect {
  options: IOption[];
  label: string;
  defaultValue?: IOption;
  onChange?: (selectedOption: IOption | null) => void;
}

export const CustomSelect: React.FC<ICustomSelect> = ({
  options,
  label,
  defaultValue = null,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<IOption | null>(
    defaultValue
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOptionChange = (option: IOption) => {
    setSelectedOption(option);
    onChange?.(option);
    onClose();
  };

  return (
    <Flex w={80} maxH={10}>
      <Box flex={1} zIndex={10}>
        <Select
          label={label}
          isOpen={isOpen}
          onOpen={onOpen}
          onOptionChange={handleOptionChange}
          selectedOption={selectedOption}
        />
        {isOpen && (
          <OptionList
            options={options}
            onClose={onClose}
            onChange={handleOptionChange}
            selectedOption={selectedOption}
          />
        )}
      </Box>
    </Flex>
  );
};
