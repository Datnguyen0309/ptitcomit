"use client";
import { Box, Flex, Grid, Heading, Image, SimpleGrid, Container, BreadcrumbItem, Breadcrumb, BreadcrumbLink, Button } from "@chakra-ui/react";
import { Register } from "@/features/home/Register"
import { MethodDk } from "@/features/home/Method"
import { Procedure } from "@/features/home/Procedure"
import { HeadSection } from "@/components/HeadSection";
import { useModal } from "@/components/ModalContext";

export const tuyensinh = () => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <>
      <Container maxW={"1728px"} pb={"24px"}>
        <Breadcrumb padding={"16px 0px"} color={"#00338d "} fontWeight={"bold"}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='/tuyen-sinh'>Tuyển Sinh  </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <HeadSection
          subtitle="TUYỂN SINH" />
      </Container>
      <Box
        backgroundColor={"#0a1040"}
        w={"100%"}
        position="relative"
      >
        <Image
          src={`/banner-ptit7.png `}
          alt="ptit"
          w={"100%"}
          h={"auto"}
          objectFit="cover"
          margin={"0 auto"}
        />
      </Box>
      <Box
        pos={"absolute"}
        w={{ base: "90%", md: "90%", lg: "70%" }}
        h={{ base: "auto", md: "400px", lg: "400px" }}
        top={{ base: "201px", sm: "288px", lg: "600px" }}
        left={["1%", "5%"]}
        padding={{ base: "55PX 30PX 60PX 30PX", lg: "65PX 35PX 70PX 60PX;" }}
      >
        <Flex >
          <Grid templateColumns={["1fr", "1fr", "1fr 2fr"]}>
            <SimpleGrid w={["100%", "100%", "100%"]} pr={{ lg: "60px", md: "20px" }} borderRight={{ lg: "1px solid orange", md: "1px solid orange" }} pb={{ base: "20px" }} borderBottom={{ base: "1px solid orange", sm: "none", lg: "none" }}>
              <Heading fontSize={{ lg: "40px", md: "14px" }} color={"#0a104"}>
                PTIT ĐÀO TẠO
              </Heading>
              <Heading fontSize={{ lg: "40px", md: "14px" }} color={"#0a104"}>
                3 NGÀNH HOT
              </Heading>
              <Button style={{ background: "orange", color: "#fff", marginTop: "16px", fontWeight: "600" }} onClick={() => !isOpen && onOpen && onOpen()} height={{ base: "25px", lg: "45px" }}> TÌM HIỂU THÊM</Button>
            </SimpleGrid>
            <SimpleGrid pl={{ lg: "40px", md: "20px" }} color={"#0a104"} spacing={"10PX"} mt={{ base: "15px" }} >
              <Heading fontSize={["11px", "11px", "11px", "28PX"]}>
                - CÔNG NGHỆ THÔNG TIN
              </Heading>
              <Heading fontSize={["11px", "11px", "11px", "28PX"]}>
                - QUẢN TRỊ KINH DOANH
              </Heading>
              <Heading fontSize={["11px", "11px", "11px", "28PX"]}>
                - KỸ THUẬT ĐIỆN TỬ VIỄN THÔNG
              </Heading>
            </SimpleGrid>
          </Grid>
        </Flex>
      </Box>
      <Box><Register /></Box>
      <Box><Procedure /> </Box>
      <Box><MethodDk /></Box>
    </>
  );
};  