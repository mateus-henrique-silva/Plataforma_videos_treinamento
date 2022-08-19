import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./Header.css";
// import chatImg from "../../Assets/Icons/notify.svg";

const Header = () => {
  return (
    <ChakraProvider>
      <Flex
        as="header"
        w="100%"
        h="20"
        mx="auto"
        px="5"
        py="3"
        align="center"
        background="#000000"
        color="white"
        fontWeight="bold"
      >
        <Text>Academy</Text>
        <Flex ml="auto">
          <HStack>
            <div className="flex-box-hd">
            {/* <Text>Mateus Henrique</Text> */}
          <
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M4 44V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v26q0 1.15-.925 2.075Q42.15 36 41 36H12Zm3-7.25L10.75 33H41V7H7ZM7 7v29.75Z" fill="white"/></svg>
            <Avatar size="md" name="Mateus Henrique" />
            </div>
          </HStack>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Header;
