import { CardProgramQtkd } from "@/components/CardProgramQtkd";
import { HeadSection } from "@/components/HeadSection";
import { InputMajorqtkd } from "@/components/InputMajor";
import { RouterNganh } from "@/components/RouterNganh";


import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container
} from '@chakra-ui/react';
import Image from 'next/image';
import { IntroduceQtkd } from "@/components/CardIntroduceNganh";
import { CardOpportunityQtkd } from "@/components/CardOpportunityQtkd";



export const Qtkd = () => {
  return (
    <>
      <Box margin={"0 auto"} minH={"214px"} bg={"#F8F9FA"}>
        <Container maxW={"1728px"}>
          <Breadcrumb padding={"16px 0px"} color={"#00338d "} fontWeight={"bold"}>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='/nganh-dao-tao'>Ngành đào tạo </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='/nganh-quan-tri-kinh-doanh' color={"#000 !important"}>Quản trị kinh doanh</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <HeadSection
            subtitle="Quản trị kinh doanh " />
        </Container>
      </Box>
      <InputMajorqtkd />
      <RouterNganh />
      <IntroduceQtkd />
      <Box id="sectionBenefit" pt={{ lg: 10, base: 20 }}  >
        <Container maxW={"1682px"} margin={"0 auto"}  >
          <Image
            src="/nganhcntt.jpg"
            alt="ptit"
            width={1920}
            height={1080}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Container>
      </Box>
      <CardProgramQtkd />
      <CardOpportunityQtkd />
    </>

  );
};
