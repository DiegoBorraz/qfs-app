import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export const CustomChakraProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
