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
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" >
              <path d="M8 38v-3h4.2V19.7q0-4.2 2.475-7.475Q17.15 8.95 21.2 8.1V6.65q0-1.15.825-1.9T24 4q1.15 0 1.975.75.825.75.825 1.9V8.1q4.05.85 6.55 4.125t2.5 7.475V35H40v3Zm16-14.75ZM24 44q-1.6 0-2.8-1.175Q20 41.65 20 40h8q0 1.65-1.175 2.825Q25.65 44 24 44Zm-8.8-9h17.65V19.7q0-3.7-2.55-6.3-2.55-2.6-6.25-2.6t-6.275 2.6Q15.2 16 15.2 19.7Z"  fill="white" />
            </svg>
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
