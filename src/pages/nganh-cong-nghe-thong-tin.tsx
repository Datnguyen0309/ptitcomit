"use client";
import { Box } from "@chakra-ui/react";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { SamePosts } from "@/features/post/Sames";
import ErrorBoundary from "@/components/ErrorBoundary";

const Cntt = dynamic(
  () => import("@/features/nganh-cntt").then((mod) => mod.Cntt),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành công nghệ thông tin - Đại học Thái Nguyên"
        description="Ngành công nghệ thông tin - Đại học Thái Nguyên, thông tin ngành công nghệ thông tin Đại học Thái nguyên"
      />
      <Cntt />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Box maxW={"1728px"} margin={"0 auto"}> <SamePosts catId={"84"} id={"7096"} /> </Box>
      </ErrorBoundary>
    </>
  );
};

export default Page;
