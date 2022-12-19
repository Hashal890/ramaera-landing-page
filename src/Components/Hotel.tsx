import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Hotelsvg from "../Assets/Hotelsvg";

const Hotel = () => {
  return (
    <Flex gap={3} mt={36} pb={20}>
      <Hotelsvg />
      <Box color={"whiteAlpha.900"} fontFamily={"Montserrat Alternates"}>
        <Heading
          fontFamily={"Montserrat Alternates"}
          maxW={"450px"}
          mb={4}
          color={"#ffa751"}
        >
          Making accommodations easier
        </Heading>
        <Text maxW={"500px"}>
          Introducing capsule hotels in places of extreme need such as
          examination centres and hospitals to provide comfortable and
          convenient accommodation at pocket friendly prices .
        </Text>
        <Button
          color={"#ffffff"}
          bg={"none"}
          _hover={{ bg: "none" }}
          borderRadius={18}
          border={"2px solid #ffa751"}
          fontFamily={"Montserrat Alternates"}
          letterSpacing={"0.1em"}
          fontSize={"13px"}
          fontWeight={400}
          px={8}
          mt={6}
        >
          Read more
        </Button>
      </Box>
    </Flex>
  );
};

export default Hotel;
