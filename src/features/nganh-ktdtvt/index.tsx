import { IntroduceKtdtvt } from "@/components/CardIntroduceNganh";
import { CardProgramKtdtvt } from "@/components/CardProgramKtdtvt";
import { HeadSection } from "@/components/HeadSection";
import { InputMajordtvt } from "@/components/InputMajor";
import { RouterNganh } from "@/components/RouterNganh";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
export const Ktdtvt = () => {
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
              <BreadcrumbLink as={Link} href={"/"}>
                Trang chủ
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href={"/nganh-hoc"}>
                Ngành học{" "}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/nganh-ky-thuat-dien-tu-vien-thong"
                color={"#000 !important"}
              >
                Kỹ thuật điện tử viễn thông
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <HeadSection subtitle="Kỹ thuật điện tử viễn thông " />
        </Container>
      </Box>
      <InputMajordtvt />
      <RouterNganh />
      <IntroduceKtdtvt />
      <Box id="sectionBenefit" pt={{ lg: 10, base: 0 }}>
        <Container maxW={"1728px"} margin={"0 auto"}>
          <Image
            src="/diertuvienthong.png"
            alt="ptit"
            width={8000}
            height={4500}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Container>
      </Box>
      <CardProgramKtdtvt />
      <Container maxW={"1728px"} px={0} id="sectionVieclam">
        <Image
          src="/chktdt.png"
          alt="ptit"
          width={1920}
          height={1080}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Container>
    </>
  );
};
