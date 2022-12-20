import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import AgriGIF from "../Assets/agri-gif.png";
import Agrisvg from "../Assets/Agrisvg";
import Styles from "../CSS/Agri.module.css";

const Agri = () => {
  return (
    <Flex justifyContent={"space-between"}>
      <Image src={AgriGIF} alt={"AgriGIF"} h={"450px"} />
      <Flex>
        <Box
          color={"whiteAlpha.900"}
          textAlign={"right"}
          fontFamily={"Montserrat Alternates"}
        >
          <Heading mb={2} fontFamily={"Montserrat Alternates"}>
            Agri-business to bestow{" "}
          </Heading>
          <Heading
            mb={6}
            fontFamily={"Montserrat Alternates"}
            className={Styles.heading}
          >
            Nature's Love
          </Heading>
          <Text maxW={"400px"}>
            Our Agri-business industry is established to get you fresh and
            organic fruits and vegetables with the blessed with the touch of
            nature
          </Text>
          <Button
            color={"#ffffff"}
            bg={"none"}
            _hover={{ bg: "none" }}
            borderRadius={18}
            border={"2px solid #579181"}
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
        <Agrisvg />
      </Flex>
    </Flex>
  );
};

export default Agri;
