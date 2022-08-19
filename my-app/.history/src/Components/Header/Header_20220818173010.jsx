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
  import chatImg from "../../Assets/Icons/notify.png"

  
  const Header = () => {

  
    return (
        <ChakraProvider>
      <Flex
        as="header"
        w="100%"
       
        h="20"
        mx="auto"
        px="5"
        py="5"
        align="center"
       background="#000000"
        color="white"
        fontWeight="bold"
     >
        <Text>Academy</Text>
        <Flex ml="auto">
          <HStack>
            {/* <Text>Mateus Henrique</Text> */}
            <Icon
            <Avatar size="md" name="Mateus Henrique" />
          </HStack>
        </Flex>
      </Flex>
      </ChakraProvider>
    );
  };
  
  export default Header;