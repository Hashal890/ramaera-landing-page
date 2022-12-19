import React from "react";
import { Flex, HStack, Text } from "@chakra-ui/react";
import Logosvg from "../Assets/Logosvg";
import Searchsvg from "../Assets/Searchsvg";
import Styles from "../CSS/Navbar.module.css";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} pt={2}>
      <Logosvg />
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        className={Styles.inner}
        py={3}
        px={50}
        w={"85%"}
      >
        <HStack alignItems={"center"} gap={[2, 2, 6, 8]}>
          <Text className={Styles.navtags}>home</Text>
          <Text className={Styles.navtags}>
            our industries <ChevronDownIcon />
          </Text>
          <Text className={Styles.navtags}>
            our companies <ChevronDownIcon />
          </Text>
        </HStack>
        <HStack alignItems={"center"} gap={[2, 2, 6, 6]}>
          <Text className={Styles.navtags}>career</Text>
          <Text className={Styles.navtags}>contact</Text>
          <Searchsvg />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
