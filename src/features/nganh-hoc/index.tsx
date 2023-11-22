"use client";
import { Categoty } from "@/components/Categoty";
import { HeadSection } from "@/components/HeadSection";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container
} from "@chakra-ui/react";
import Image from "next/image";
export const nganhdaotao = () => {
  return (
    <>
      <Box margin={"0 auto"} minH={"214px"} bg={"#F8F9FA"}>
        <Container maxW={"1728px"} pb={"24px"}>
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
          </Breadcrumb>
          <HeadSection subtitle="NGÀNH HỌC  " />
        </Container>
        <Box
          bgRepeat={"no-repeat"}
          bgSize="cover"
          w={"100%"}
          position="relative"
          height={"auto"}
        >
          <Image
            priority
            alt="Ngành học"
            src={"/bannertuyensinh.png"}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto"
            }}
            width={6667}
            height={3000}

          />
        </Box>
        <Categoty />
      </Box>
    </>
  );
};
