import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Styles from "../CSS/TopSection.module.css";

const TopSection = () => {
  return (
    <Box className={Styles.main} px={[0, 2, 8, 16]}>
      <Navbar />
      <Flex>
        <Box></Box>
        <Box>
          <Heading>Ramaera Industries</Heading>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default TopSection;
