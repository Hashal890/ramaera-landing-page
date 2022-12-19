import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import LeftPolygon from "../Assets/LeftPolygon";
import Styles from "../CSS/TopSection.module.css";

const Expansion = () => {
  return (
    <Flex gap={3} alignItems={"center"}>
      <LeftPolygon />
      <Box>
        <Text className={Styles.heading} maxW={"1000px"} fontSize={"55px"}>
          The Ramaera Expansion
        </Text>
        <Text className={Styles.para} color={"whiteAlpha.900"} fontWeight={500}>
          We are aiming to be a part of the major industrialisation drive in
          India and embarking our presence in every significant industrial
          domain including IT.
        </Text>
      </Box>
    </Flex>
  );
};

export default Expansion;
