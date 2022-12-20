import React from "react";
import EcommerceGIF from "../Assets/ecomrce-gif.png";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Styles from "../CSS/Ecommerce.module.css";
import Ecommercesvg from "../Assets/Ecommercesvg";

const Ecommerce = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} pb={14}>
      <Flex gap={2} pt={40}>
        <Ecommercesvg />
        <Box color={"whiteAlpha.900"} fontFamily={"Montserrat Alternates"}>
          <Heading
            maxW={"450px"}
            mb={4}
            color={"#ffa751"}
            fontFamily={"Montserrat Alternates"}
            className={Styles.heading}
          >
            Get all your essentials in one place
          </Heading>
          <Text maxW={"500px"}>
            Ramaera Supermart is an online customer oriented marketplace to
            motivated to provide everything you need right at one place under
            the comfort of your homes.
          </Text>
          <Button
            color={"#ffffff"}
            bg={"none"}
            _hover={{ bg: "none" }}
            borderRadius={18}
            border={"2px solid #9796F0"}
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
      <Image src={EcommerceGIF} alt={"EcommerceGIF"} h={"450px"} mt={-14} />
    </Flex>
  );
};

export default Ecommerce;
