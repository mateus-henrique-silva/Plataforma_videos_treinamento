import {
    Avatar,
    Flex,
    HStack,
    Icon,
    IconButton,
    Text,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import React from "react";

  
  const Header = () => {

  
    return (
        
      <Flex
        as="header"
        w="100%"
        maxW={1120}
        h="20"
        mx="auto"
        px="2"
        py="2"
        align="center"
        boxShadow="0 1px 0 #ccc"
        color="gray.500"
        fontWeight="bold"
     >
        <Text>LOGO</Text>
        <Flex ml="auto">
          <HStack>
            <Text>Mateus Henrique</Text>
            <Avatar size="md" name="Mateus Henrique" />
          </HStack>
        </Flex>
      </Flex>
    );
  };
  
  export default Header;