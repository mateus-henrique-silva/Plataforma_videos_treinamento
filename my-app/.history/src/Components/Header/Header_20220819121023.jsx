import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,

  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, BellIcon } from '@chakra-ui/icons'
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./Header.css";
import chatImg from "../../Assets/Icons/topic.png";
import notifyImg from "../../Assets/Icons/Notification.png";

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
        alignItems={center
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
              <BellIcon/>
              <Avatar size="md" name="Mateus Henrique" />
            </div>
          </HStack>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Header;
