import { Box } from "@chakra-ui/react";
import React from "react";
import Agri from "./Agri";
import Ecommerce from "./Ecommerce";
import Expansion from "./Expansion";
import Fmcg from "./Fmcg";
import Hotel from "./Hotel";
import Packing from "./Packing";
import Technology from "./Technology";

const BottomSection = () => {
  return (
    <Box bg={"#000000"}>
      <Expansion />
      <Technology />
      <Hotel />
      <Packing />
      <Fmcg />
      <Agri />
      <Ecommerce />
    </Box>
  );
};

export default BottomSection;
