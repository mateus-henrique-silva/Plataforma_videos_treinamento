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
              <svg>
            <object  width="300" height="300"> </object>            </svg>
              <svg></svg>
              <Avatar size="md" name="Mateus Henrique" />
            </div>
          </HStack>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Header;
