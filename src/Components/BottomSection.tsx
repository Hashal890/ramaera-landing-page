import { Box } from "@chakra-ui/react";
import React from "react";
import Expansion from "./Expansion";
import Technology from "./Technology";

const BottomSection = () => {
  return (
    <Box bg={"#000000"}>
      <Expansion />
      <Technology />
    </Box>
  );
};

export default BottomSection;
