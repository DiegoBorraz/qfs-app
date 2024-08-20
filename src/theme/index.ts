import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import components from "./components";
import styles from "./styles";

const theme = extendTheme({ colors, styles, components });
export default theme;
