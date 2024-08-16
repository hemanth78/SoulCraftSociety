import React from "react";
import { Box, Container, Heading, Flex, Image } from "@chakra-ui/react";
import Relm from "../assets/Relm-min.svg";
import { Link as RouterLink } from "react-router-dom";
import Card from "../components/Card";

const Home = () => (
  <Box height="100vh" overflowY="auto" className="bg">
    <Container maxW="full" pt={{ base: "4rem", md: "5rem" }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Flex width="100%" direction={{ base: "column", md: "row" }} justify="space-between" align="center" textAlign={{ base: "center", md: "left" }}>
        <Box flex={2} position="relative">
          <Image
            src={Relm}
            alt="Relm"
            display={{ base: "block", md: "none" }}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="100%"
            height="100%"
            objectFit="fill"
            opacity={0.3}
            zIndex={0}
          />
          <Heading as="h1" size={{ base: "2xl", md: "xl", lg: "3xl" }} color="#D04848" mb={12}>
            The Soul Craft Society
          </Heading>
          <Heading as="h2" size={{ base: "lg", lg: "xl" }} color="#D04848" mb={12}>
            Together, we're building a world where everyone can thrive.
          </Heading>
          <RouterLink to="/contact">
            <Box as="button" bg="#FFC94A" padding="10px 20px" borderRadius="5px" color="black" fontWeight="bold">
              Team Up
            </Box>
          </RouterLink>
        </Box>

        <Box flex={1} display={{ base: "none", md: "flex" }} justifyContent="center" alignItems="center">
          <Image src={Relm} alt="Relm" width={{ md: "100%", lg: "70%" }} />
        </Box>
      </Flex>

      <Box width="100%" m={5} textAlign={{ base: "center", md: "left" }}>
        <Heading color="#1C1C1A" mb={6}>
          Extend Your Hand to Our Initiatives
        </Heading>
        <Card/>
      </Box>
    </Container>
  </Box>
);

export default Home;
