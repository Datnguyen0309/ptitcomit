"use client";

import {
  As,
  Box,
  Container,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineWorkHistory } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";

export const Item = ({
  path,
  title,
  desc,
  icon,
}: {
  path: string;
  title: string;
  desc: string;
  icon?: As;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      color={"#004956"}
      p={{ base: "16px", md: "20px", lg: "24px" }}
      border={"1px solid"}
      borderColor={"gray.300"}
      rounded={"sm"}
    >
      <Heading as={"h2"} size={{ base: "md" }}>
        {title}
      </Heading>
      <HStack spacing={"12px"} pt={"16px"}>
        <Icon
          as={icon}
          width={{ base: "50px", md: "100px" }}
          height={{ base: "50px", md: "100px" }}
          alt="Ngành kế toán HVTC"
          color={"#004956"}
        />

        <VStack align={"start"}>
          <Text color={"gray.500"} fontSize={{ base: ".8rem", md: "sm" }}>
            {desc}
          </Text>

          <Button variant={"link"} color={"#004956"}>
            Xem chi tiết
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export const benefits = [
  {
    path: "#",
    title: "Thời gian học tập linh hoạt, phù hợp với mọi đối tượng",
    desc: "Với hình thức học tập online, học viên có thể chủ động về kế hoạch cũng như thời gian học tập, đây là ưu điểm vượt trội của chương trình",
    icon: BiHome,
  },
  {
    path: "#",
    title: "Sở hữu bằng đại học uy tín hàng đầu Việt Nam",
    desc: "Chương trình học do Đại học Thái Nguyên cấp bằng và được Bộ GD&ĐT công nhận",
    icon: PiCertificate,
  },
  {
    path: "#",
    title: "Đội ngũ giảng viên đầu ngành, giàu kinh nghiệm",
    desc: "100% giảng viên tham gia chương trình đều có bằng Thạc sĩ, Tiến sĩ và đều đang giảng dạy và làm việc tại trường",
    icon: LiaIndustrySolid,
  },
  {
    path: "#",
    title: "96% Sinh viên ra trường có việc làm",
    desc: "Dễ dàng hơn khi xin việc, xét bậc tăng lương. Tốt nghiệp bạn đủ điều kiện để học lên Thạc sĩ, Tiến sĩ theo quy định",
    icon: MdOutlineWorkHistory,
  },
  {
    path: "#",
    title: "Thời gian học tập linh hoạt, phù hợp với mọi đối tượng",
    desc: "Với hình thức học tập online, học viên có thể chủ động về kế hoạch cũng như thời gian học tập, đây là ưu điểm vượt trội của chương trình",
    icon: BiHome,
  },
  {
    path: "#",
    title: "Sở hữu bằng đại học uy tín hàng đầu Việt Nam",
    desc: "Chương trình học do Đại học Thái Nguyên cấp bằng và được Bộ GD&ĐT công nhận",
    icon: PiCertificate,
  },
  {
    path: "#",
    title: "Đội ngũ giảng viên đầu ngành, giàu kinh nghiệm",
    desc: "100% giảng viên tham gia chương trình đều có bằng Thạc sĩ, Tiến sĩ và đều đang giảng dạy và làm việc tại trường",
    icon: LiaIndustrySolid,
  },
  {
    path: "#",
    title: "96% Sinh viên ra trường có việc làm",
    desc: "Dễ dàng hơn khi xin việc, xét bậc tăng lương. Tốt nghiệp bạn đủ điều kiện để học lên Thạc sĩ, Tiến sĩ theo quy định",
    icon: MdOutlineWorkHistory,
  },
];

export const Benefit = () => {
  return (
    <Box
      bg={"linear-gradient(180deg, rgba(255, 255, 255, 1), #D6F5FE 100%)"}
      py={"48px"}
    >
      <Container maxW="1728px">
        <Heading
          fontSize={{ base: "20px", md: "32px", lg: "32px" }}
          textTransform={"uppercase"}
        >
          Các phương thức xét tuyển
        </Heading>
        <Divider
          borderBottomWidth={"3px"}
          borderBlockEndColor={"orange"}
          w={"200px"}
          padding={{ lg: "15px", base: "6px" }}
        />
        <SimpleGrid pt={"24px"} columns={{ base: 1, md: 4 }} spacing={4}>
          {benefits.map((categoty, index) => (
            <Item
              key={index}
              path={categoty.path}
              title={categoty.title}
              desc={categoty.desc}
              icon={categoty.icon}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
