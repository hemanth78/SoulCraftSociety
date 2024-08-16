import React from "react";
import { Box, Text, Heading, Button, SimpleGrid, Card, CardBody, Image } from "@chakra-ui/react";
import { donations } from "../components/Data";

const Donate = () => {
  return (
    <Box className="bg"  textAlign="center" fontFamily="Montserrat" height="100vh" overflowY="auto" py={16} px={6}>
      <Box mb={6}>
        <Heading as="h2" size={{ base: "xl", md: "2xl" }} color="#D04848" mb={3}>
          Donate to Soul Craft Society
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="#1C1C1A">
          Your donation is a catalyst for transformation and empowerment. With your support, we provide scholarships, skill development programs, and
          community outreach initiatives to break the cycle of poverty and create a brighter future for marginalized communities.
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
        justifyContent="center" // Center cards horizontally
        alignItems="center" // Center cards vertically
        mb={10}
      >
        {donations.map((plan, index) => (
          <Card key={index} borderRadius="md" boxShadow="md" width={{ base: "100%", lg: "320px" }} mx="auto">
            <CardBody display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <Image
                src={plan.thumbnail}
                alt={plan.title}
                borderRadius="md"
                width="100%" // Set the image width to fill the card
                height="150px" // Set the image height for a rectangular shape
                objectFit="cover" // Use 'cover' to fill the rectangular space
                mb={4}
              />
              <Heading as="h3" size="md" mb={2}>
                {plan.title}
              </Heading>
              <Text color="#1C1C1A" mb={4}>
                {plan.description}
              </Text>
              <Button bgColor="#D04848" size="md">
                Donate
              </Button>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
      <Text color="#1C1C1A" fontSize="2xl">
        "Your Contribution Makes a Difference"
      </Text>
    </Box>
  );
};

export default Donate;
