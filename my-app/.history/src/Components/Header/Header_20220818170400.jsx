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

  
  const Header = () => {

  
    return (
        <ChakraProvider>
      <Flex
        as="header"
        w="100%"
       
        h="20"
        mx="auto"
        px="2"
        py="2"
        align="center"
       background="#000000"
        color="gray.500"
        fontWeight="bold"
     >
        <Text>LOGO</Text>
        <Flex ml="auto">
          <HStack>
       
            <Avatar size="md" name="Mateus Henrique" />
          </HStack>
        </Flex>
      </Flex>
      </ChakraProvider>
    );
  };
  
  export default Header;