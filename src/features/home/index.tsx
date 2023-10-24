"use client";

import { BtnMes, BtnPhone, BtnZalo } from "@/components/BtnCTA";
import { FormPoup } from "@/components/FormContact";
import { Loading } from "@/components/Loading";
import { useSize } from "@/hooks/useSizeWindow";
import { Box, VStack, useDisclosure, } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import test from "node:test";
import { useEffect, useState } from "react";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <Loading />,
});
const TextScroll = dynamic(
  () => import("./TextScroll").then((mod) => mod.TextScrollHomePage),
  {
    loading: () => <Loading />,
  }
);
const Introduce = dynamic(
  () => import("./Introduce").then((mod) => mod.Introduce),
  {
    loading: () => <Loading />,
  }
);
const Different = dynamic(
  () => import("./Different").then((mod) => mod.Different),
  {
    loading: () => <Loading />,
  }
);
const Register = dynamic(
  () => import("./Register").then((mod) => mod.Register),
  {
    loading: () => <Loading />,
  }
);
const Procedure = dynamic(
  () => import("./Procedure").then((mod) => mod.Procedure),
  {
    loading: () => <Loading />,
  }
);
const Method = dynamic(() => import("./Method").then((mod) => mod.MethodDk), {
  loading: () => <Loading />,
});
const Notify = dynamic(() => import("./Notify").then((mod) => mod.Notify), {
  loading: () => <Loading />,
});
const Contact = dynamic(() => import("./Contact").then((mod) => mod.Contact), {
  loading: () => <Loading />,
});
const Counters = dynamic(
  () => import("./Counters").then((mod) => mod.Counters),
  {
    loading: () => <Loading />,
  }
);
const Event = dynamic(() => import("./Event").then((mod) => mod.Event), {
  loading: () => <Loading />,
});

const ModalBase = dynamic(
  () => import("./Modal").then((mod) => mod.ModalBase),
  {
    loading: () => <Loading />,
  }
);
const Review = dynamic(() => import("./Review").then((mod) => mod.Review), {
  loading: () => <Loading />,
});

const Support = dynamic(() => import("./Support").then((mod) => mod.Support), {
  loading: () => <Loading />,
});

export const Home = ({ news, notifis }: { news: any[]; notifis: any[] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState("");
  const [href, setHref] = useState("");
  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-poup`);
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);
      } catch (error) {
        console.log(error);
      }
    };
    getForm();
  }, [id, href, isOpen]);
  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (

    <>
      <Banner />
      {/* <Box>
        <TextScroll />
      </Box> */}
      <Introduce />
      <Different />
      <Register />
      <Procedure />
      <Method />

      {/* <Box py={"62px"}>
        <Notify />
      </Box>
      <Support />
      <Counters />
      <Review />
      <Contact /> */}
      <Event news={news} notifis={notifis} />
      <ModalBase
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        form={<FormPoup title="Để lại thông tin" id={id} href={href} />}
      />
      <Box
        pos={"fixed"}
        top={"50%"}
        right={"0"}
        transform={"translateY(-50%)"}
        className="CTA"
        zIndex={5}
      >
        <VStack>
          {/* <BtnEmail aria-label="Email" /> */}
          <BtnMes aria-label="messenter" />
          <BtnZalo aria-label="zalo" />
          <BtnPhone aria-label="phone" />
        </VStack>
      </Box>
    </>
  );
};
