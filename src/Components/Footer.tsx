import React from "react";
import { Flex } from "@chakra-ui/react";
import RightPolygon from "../Assets/RightPolygon";

const Footer = () => {
  return (
    <Flex flexDir={"row-reverse"} pt={10}>
      <RightPolygon />
    </Flex>
  );
};

export default Footer;
