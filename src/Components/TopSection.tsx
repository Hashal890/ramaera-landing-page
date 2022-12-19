import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Styles from "../CSS/TopSection.module.css";
import Scrollsvg from "../Assets/Scrollsvg";
import Twittersvg from "../Assets/Twittersvg";
import Instagramsvg from "../Assets/Instagramsvg";
import Facebooksvg from "../Assets/Facebooksvg";
import RightSlider from "../Assets/RightSlider";

const TopSection = () => {
  return (
    <Box className={Styles.main} px={[0, 2, 8, 16]}>
      <Navbar />
      <Flex alignItems={"center"} justifyContent={"space-evenly"}>
        <VStack gap={5}>
          <Twittersvg />
          <Instagramsvg />
          <Facebooksvg />
        </VStack>
        <Box textAlign={"center"} w={"80%"}>
          <Heading className={Styles.heading}>Ramaera Industries</Heading>
          <Text color={"whiteAlpha.900"} className={Styles.para}>
            An incredible multi-industrial approach oriented towards financial
            independence, customer focus and serving the best quality to the
            people.
          </Text>
          <Button
            color={"#ffffff"}
            bg={"linear-gradient(90deg, #e65c00 0%, #f9d423 100%)"}
            _hover={{ bg: "linear-gradient(90deg, #e65c00 0%, #f9d423 100%)" }}
            borderRadius={18}
            border={"2px solid #ffffff"}
            fontFamily={"Montserrat Alternates"}
            letterSpacing={"0.1em"}
            fontSize={"14px"}
          >
            Explore more
          </Button>
          <Box w={"100px"} m={"auto"} mt={4}>
            <Scrollsvg />
          </Box>
        </Box>
        <RightSlider />
      </Flex>
    </Box>
  );
};

export default TopSection;
