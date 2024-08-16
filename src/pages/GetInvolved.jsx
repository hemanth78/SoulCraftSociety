import React from "react";
import { Box, Text, Heading, Button, SimpleGrid, Card, CardBody, Image } from "@chakra-ui/react";
import { roles } from "../components/Data";

const GetInvolved = () => {
  return (
    <Box className="bg" fontFamily="Montserrat" height="100vh" overflowY="auto" py={16} px={6}>
      <Box textAlign="center" mb={6}>
        <Heading as="h2" size={{ base: "xl", md: "2xl" }} color="#F3B95F" mb={{ base: "5" }}>
          Volunteer with Soul Craft Society
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="#1C1C1A">
          Volunteer with Soul Craft Society and join us in making a meaningful impact on our community! We have carefully designed roles to match your
          interests and skills, offering you the chance to support our society in a variety of ways. Come be a part of our dedicated team and help us
          create positive change together!
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {roles.map((role, index) => (
          <Card key={index} borderRadius="md" boxShadow="md" overflow="hidden">
            <CardBody display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
              <Image src={role.image} alt={role.role} borderRadius="md" objectFit="cover" boxSize="320px" height="200px" mb={4} />
              <Heading as="h3" size="md" mb={2} textAlign="center">
                {role.role}
              </Heading>
              <Text fontSize="md" mb={4} textAlign="center">
                {role.wtd}
              </Text>
              <Button colorScheme="teal" variant="solid" size="sm" width="full">
                Become
              </Button>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GetInvolved;
