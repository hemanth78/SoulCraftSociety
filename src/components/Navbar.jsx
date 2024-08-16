import React from "react";
import {
  Flex,
  Box,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  HStack,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation(); // Access current route

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/aboutUs" },
    { label: "Get Involved", to: "/getInvolved" },
    { label: "Donate", to: "/donate" },
    { label: "Contact Us", to: "/contact" },
  ];

  const isContactRoute = location.pathname === "/contact";

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p="0.5rem 1rem"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={999}
      width="100%"
      className="bg"
    >
      <Link to="/">
        <Image src={logo} alt="Logo" w="50px" h="50px" />
      </Link>

      <HStack spacing={4} display={{ base: "none", md: "flex" }}>
        {navItems.map(({ label, to }) => (
          <Link
            to={to}
            key={to}
            style={{
              color: isContactRoute ? "white" : "black",
              textDecoration: "none",
              fontFamily: "Montserrat",
            }}>
            <Text>{label}</Text>
          </Link>
        ))}
      </HStack>

      <Box display={{ base: "block", md: "none" }}>
        <IconButton aria-label="Open navigation menu" icon={<HamburgerIcon />} onClick={onOpen} variant="ghost" />
      </Box>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              {navItems.map(({ label, to }) => (
                <Link
                  to={to}
                  key={to}
                  onClick={onClose}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontFamily: "Montserrat",
                  }}>
                  <Text>{label}</Text>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
