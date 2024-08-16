import React from "react";
import { Box, Flex, Heading, Input, Textarea, Button, Stack, FormControl, useBreakpointValue, Image } from "@chakra-ui/react";
import Relm from "../assets/Relm-min.svg";

const ContactPage = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Flex direction={isLargeScreen ? "row" : "column"} justify="center" align="center" minH="100vh" className="bg">
      {isLargeScreen && <ContactInfo />}

      <ContactForm handleSubmit={handleSubmit} isLargeScreen={isLargeScreen} />
    </Flex>
  );
};

const ContactInfo = () => (
  <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative">
    <Image
      src={Relm}
      alt="Relm"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      w="100%"
      h="130%"
      objectFit="fill"
      opacity={0.2}
      zIndex={0}
    />
    <Heading color="yellow.400" fontSize="9xl" mb={4}>
      CONTACT
    </Heading>
    <Heading color="red.400" fontSize="9xl">
      SQUAD
    </Heading>
  </Box>
);

const ContactForm = ({ handleSubmit, isLargeScreen }) => (
  <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <Heading color="yellow.400" mb={4} textAlign={isLargeScreen ? "left" : "center"}>
      Want to join our mission?
    </Heading>
    <Stack spacing={6} width="80%" padding={5} align="center">
      <FormControl as="form" width="100%" onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <Input placeholder="Name" _placeholder={{ color: "yellow.400" }} />
          <Input placeholder="Email" _placeholder={{ color: "yellow.400" }} />
          <Input placeholder="City" _placeholder={{ color: "yellow.400" }} />
          <Textarea placeholder="Drop us a line" _placeholder={{ color: "yellow.400" }} />
          <Button colorScheme="blue" type="submit" width="100px" height="40px" alignSelf="center">
            Submit
          </Button>
        </Stack>
      </FormControl>
    </Stack>
  </Box>
);

export default ContactPage;
