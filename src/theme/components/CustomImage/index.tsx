import placeholderImage from "@/theme/img/placeholder.png";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";

interface ICustomImage {
  src: string | undefined;
  width: string | number;
  heigth: string | number;
}
export const CustomImage: React.FC<ICustomImage> = ({ src, width, heigth }) => {
  return (
    <Flex w={width} maxH={heigth} alignItems="center" p="1px">
      <Image
        src={src ? src : placeholderImage}
        width={800}
        height={800}
        alt=""
        placeholder="empty"
      />
    </Flex>
  );
};
