import { Container, ContainerProps } from "@chakra-ui/react";

interface CustomContainerProps extends ContainerProps {
  children: React.ReactNode;
}

const CustomContainer: React.FC<CustomContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Container b="0" p="0" m="0" {...props}>
      {children}
    </Container>
  );
};

export default CustomContainer;
