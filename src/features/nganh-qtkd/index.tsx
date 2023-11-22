import { CardProgramQtkd } from "@/components/CardProgramQtkd";
import { HeadSection } from "@/components/HeadSection";
import { InputMajorqtkd } from "@/components/InputMajor";
import { RouterNganh } from "@/components/RouterNganh";

import { IntroduceQtkd } from "@/components/CardIntroduceNganh";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";

export const Qtkd = () => {
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
                href="/nganh-quan-tri-kinh-doanh"
                color={"#000 !important"}
              >
                Quản trị kinh doanh
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <HeadSection subtitle="Quản trị kinh doanh " />
        </Container>
      </Box>
      <InputMajorqtkd />
      <RouterNganh />
      <IntroduceQtkd />
      <Box id="sectionBenefit" pt={{ lg: 10, base: 0 }}>
        <Container maxW={"1782px"} margin={"0 auto"}>
          <Image
            src="/quantrikinhdoanh.png"
            alt="ptit"
            width={8000}
            height={4500}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Container>
      </Box>
      <CardProgramQtkd />
      <Container maxW={"1728px"} margin={"0 auto"} px={0} id="sectionVieclam">
        <Image
          src="/chqtkd.png"
          alt="ptit"
          width={5196}
          height={1592}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Container>
    </>
  );
};
