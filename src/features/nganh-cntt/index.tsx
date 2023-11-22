import { IntroduceCntt } from "@/components/CardIntroduceNganh";
import { CardProgram } from "@/components/CardProgramCntt";
import { HeadSection } from "@/components/HeadSection";
import { InputMajorcntt } from "@/components/InputMajor";
import { RouterNganh } from "@/components/RouterNganh";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";

export const Cntt = () => {
  return (
    <>
      <Box margin={"0 auto"} minH={"214px"} bg={"#F8F9FA"}>
        <Container maxW={"1728px"}>
          <Breadcrumb
            padding={"16px 0px"}
            color={"#00338d "}
            fontWeight={"bold"}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/nganh-hoc">Ngành học </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/nganh-cong-nghe-thong-tin"
                color={"#000 !important"}
              >
                Công nghệ thông tin
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <HeadSection subtitle="Công nghệ thông tin" />
        </Container>
      </Box>
      <InputMajorcntt />
      <RouterNganh />
      <IntroduceCntt />
      <Box id="sectionBenefit" pt={{ lg: 10, base: 0 }}>
        <Container maxW={"1782px"} margin={"0 auto"} >
          <Image
            src="/congnghethongtin.png"
            alt="ptit"
            width={8000}
            height={4500}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Container>
      </Box>
      <CardProgram />
      <Container maxW={"1728px"} margin={"0 auto"} px={0} id="sectionVieclam">
        <Image
          src="/chcntt.png"
          alt="ptit"
          width={5196}
          height={1592}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Container>
    </>
  );
};
