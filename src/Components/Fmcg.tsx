import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import FmcgGIF from "../Assets/fmcg-gif.png";
import Fmcgsvg from "../Assets/Fmcgsvg";
import Styles from "../CSS/Fmcg.module.css"

const Fmcg = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Flex gap={2}>
        <Fmcgsvg />
        <Box color={"whiteAlpha.900"} fontFamily={"Montserrat Alternates"}>
          <Heading
            maxW={"450px"}
            mb={4}
            color={"#ffa751"}
            fontFamily={"Montserrat Alternates"}
            className={Styles.heading}
          >
            Offering the best with FMCG industry
          </Heading>
          <Text maxW={"500px"}>
            Ramaera FMCG industry has commenced an extensive range of FMCG to
            make your days more than ordinary. We plan to offer you nothing less
            than the best.
          </Text>
          <Button
            color={"#ffffff"}
            bg={"none"}
            _hover={{ bg: "none" }}
            borderRadius={18}
            border={"2px solid #358d82"}
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
      <Image src={FmcgGIF} alt={"FmcgGIF"} h={"450px"} />
    </Flex>
  );
};

export default Fmcg;
