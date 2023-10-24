import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";

export const HeadSection = ({
  subtitle,
}: {
  subtitle: string;
}) => {
  return (
    // <VStack justify={"center"}>
    //   {/* <Text color={"#FA692E"}>{subtitle}</Text> */}
    //   <Heading
    //     as={"h2"}
    //     size={{ base: "sm", md: "lg" }}
    //     textAlign={"center"}
    //     textTransform={"uppercase"}
    //     color={"blue.800"}
    //   >
    //     {title}
    //   </Heading>
    //   <Text color={"gray.500"} fontWeight={"thin"}>
    //     {desc}
    //   </Text>
    // </VStack>
    <Box>
      <Heading
        fontSize={{ base: "25px", md: "32px", lg: "2.25rem !important" }}
        textTransform={"uppercase"}
        color={"#B1040E"}
        paddingTop={"30px"}
        fontWeight={"bold"}
      >
        {subtitle}
      </Heading>
      <Divider
        borderBottomWidth={"3px"}
        borderBlockEndColor={"orange"}
        w={"200px"}
        padding={{ lg: "15px", base: "6px" }}
      />
    </Box>
  );
};

export const HeadSectionLight = ({
  subtitle,
  title,
  desc,
}: {
  subtitle: string;
  title: string;
  desc: string;
}) => {
  return (
    <VStack justify={"center"}>
      {/* <Text color={"#FA692E"}>{subtitle}</Text> */}
      <Heading
        as={"h2"}
        size={{ base: "sm", md: "lg" }}
        textAlign={"center"}
        textTransform={"uppercase"}
        color={"whiteAlpha.900"}
      >
        {title}
      </Heading>
      <Text color={"whiteAlpha.900"} fontWeight={"sm"}>
        {desc}
      </Text>
    </VStack>
  );
};
