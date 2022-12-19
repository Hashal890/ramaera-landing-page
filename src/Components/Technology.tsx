import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import TechnologyGIF from "../Assets/technology-gif.png";
import TechRightSvg from "../Assets/TechRightSvg";

const Technology = () => {
  return (
    <Flex px={8} mt={-16} fontFamily={"Montserrat Alternates"}>
      <Image src={TechnologyGIF} alt={"TechnologyGIF"} h={"450px"} />
      <Flex gap={3} alignItems={"start"}>
        <Box textAlign={"right"} color={"whiteAlpha.900"}>
          <Heading fontFamily={"Montserrat Alternates"}>
            Unleashing the strength of
          </Heading>
          <Heading
            color={"#BF5AE0"}
            fontFamily={"Montserrat Alternates"}
            mt={2}
            mb={6}
          >
            Technology
          </Heading>
          <Text pl={[2, 4, 0, 38]}>
            We believe in innovation and excellence hence , our approach in the
            field of technology is focused to relish incredible customer
            experience and stabilising business models for tomorrow.
          </Text>
          <Button
            color={"#ffffff"}
            bg={"none"}
            _hover={{ bg: "none" }}
            borderRadius={18}
            border={"2px solid #BF5AE0"}
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
        <TechRightSvg />
      </Flex>
    </Flex>
  );
};

export default Technology;
