import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Packingsvg from "../Assets/Packingsvg";
import PackingGIF from "../Assets/packing-gif.png";

const Packing = () => {
  return (
    <Flex justifyContent={"space-between"}>
      <Image src={PackingGIF} alt={"PackingGIF"} h={"450px"} />
      <Flex gap={1} mt={36} pb={20} flexDir={"row-reverse"} textAlign={"right"}>
        <Packingsvg />
        <Box color={"whiteAlpha.900"} fontFamily={"Montserrat Alternates"}>
          <Heading fontFamily={"Montserrat Alternates"} maxW={"450px"} mb={4}>
            Packaging industry for business{" "}
            <span style={{ color: "#D6AE7B" }}>growth</span>
          </Heading>
          <Text maxW={"500px"}>
            We provide packaging solutions to help your business flourish with
            boosted outreach. Ensuring the protection, containment, and
            communication of packaged projects is our foremost priority.
          </Text>
          <Button
            color={"#ffffff"}
            bg={"none"}
            _hover={{ bg: "none" }}
            borderRadius={18}
            border={"2px solid #D6AE7B"}
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
    </Flex>
  );
};

export default Packing;
