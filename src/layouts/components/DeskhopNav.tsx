import { menus } from "@/router";
import { Box, Popover, PopoverContent, PopoverTrigger, Stack, Text } from "@chakra-ui/react";

import { BtnTheme } from "@/components/BtnTheme";
import { FormPoup } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import { useModal } from "@/components/ModalContext";
import Link from "next/link";
import { useEffect, useState } from "react";
interface INavItem {
  title: string;
  children?: Array<INavItem>;
  path?: string;
}

export const DesktopNav = () => {

  const linkColor = "facebook.800";
  const linkHoverColor = "red.500";
  const [id, setId] = useState("");
  const [href, setHref] = useState("");
  const { onOpen, onClose, isOpen, onToggle } = useModal();

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
  return (
    <>
      <Stack direction={"column"}>
        <Stack
          direction={"row"}
          justifyContent={"end"}
          alignItems={"flex-end"}
          pb={2}
          gap={6}
        >
          <BtnTheme
            color={"black"}
            colorScheme="white"
            size={{ base: "sm", md: "lg" }}
            onClick={() => onToggle && onToggle()}
          >
            Đặt câu hỏi
          </BtnTheme>
          <BtnTheme
            color={"black"}
            colorScheme="white"
            size={{ base: "sm", md: "lg" }}
            onClick={() => onToggle && onToggle()}
          >
            Đăng ký tư vấn
          </BtnTheme>
        </Stack>

        <Stack direction={"row"} spacing={8} alignItems={"center"}>
          {menus.map((navItem) => (
            <Box key={navItem.title}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Box
                    as={Link}
                    p={3}
                    href={navItem.path ?? "#"}
                    fontSize={{ base: "0.4rem", lg: "1rem" }}
                    fontWeight={{ base: "400", lg: "700" }}
                    color={linkColor}
                    _hover={{
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.title}
                  </Box>
                </PopoverTrigger>

                {navItem.childs && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={"linear-gradient(180deg, #fff 0%, #f8f9fa 100%)"}
                    borderRadius={0}
                    minW={"2xs"}
                    maxW={200}
                    zIndex={99}
                  >
                    <Stack rowGap={0}>
                      {navItem.childs.map((child) => (
                        <DesktopSubNav key={child.title} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
        </Stack>
      </Stack>
      <ModalBase
        isOpen={isOpen || false}
        onClose={() => onClose && onClose()}
        onOpen={() => onOpen && onOpen()}
      >
        <FormPoup id={id} href={href} title="Để lại thông tin" />
      </ModalBase>
    </>
  );
};

export const DesktopSubNav = ({ title, path }: INavItem) => {
  return (
    <Box
      bg={"linear-gradient(180deg, #fff 0%, #f8f9fa 100%)"}
      className="boxtoo"
      as={Link}
      href={path}
      role={"group"}
      display={"block"}
      _hover={{ bg: "facebook.800", color: "white" }}
    >
      <Stack gap={0} direction={"row"} align={"center"} className="stacktit">
        <Box>
          <Text
            p={4}
            transition={"all .3s ease"}
            color={"#054659"}
            _groupHover={{ color: "white" }}
            fontWeight={600}
          >
            {title}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};