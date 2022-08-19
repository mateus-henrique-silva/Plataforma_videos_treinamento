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
  import { useSidebarContext } from "../contexts/SidebarContext";
  import { FiMenu } from "react-icons/fi";
  
  const Header = () => {
    const isMobile = useBreakpointValue({
      base: true,
      lg: false,
    });
  
    const { onOpen } = useSidebarContext();
  
    return (
     
        <Text>LOGO</Text>
        <Flex ml="auto">
          <HStack>
            <Text>William Lucas</Text>
            <Avatar size="md" name="william Lucas" />
          </HStack>
        </Flex>
      </Flex>
    );
  };
  
  export default Header;